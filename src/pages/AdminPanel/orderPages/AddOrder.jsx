import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const AddOrder = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    order_type: "", // <-- added this
    business_id: "",
    customer_id: "",
    billing_id: "",
    shipping_id: "",

    order: {
      order_date: "",
      status: "pending",
      total_amount: "",
      payment_method: "",
      payment_status: "pending",
      source: "crm",
      source_reference: null,
    },
    items: [
      {
        sku: "",
        product_id: "",
        variant_id: "",
        quantity: "",
        size_id: "",
        price_per_unit: "",
        discount_applied: "",
      },
    ],
    billing_addresses: [
      {
        address_line_1: "",
        address_line_2: "",
        city: "",
        postal_code: "",
        country: "",
      },
    ],
    shipping_addresses: [
      {
        address_line_1: "",
        address_line_2: "",
        city: "",
        postal_code: "",
        country: "",
      },
    ],
  });
  // ─── 2) COMPANION STATES FOR EACH ITEM INDEX ───────────────────────────────
  //    We store objects keyed by the “item index” whenever the user adds more.
  const [productOptions, setProductOptions] = useState([]); // List of all products
  const [productVariants, setProductVariants] = useState({}); // { [index]: [variantsArray] }
  const [selectedVariant, setSelectedVariant] = useState({}); // { [index]: variantObject }
  const [selectedColor, setSelectedColor] = useState({}); // { [index]: colorId }
  const [selectedSizes, setSelectedSizes] = useState({}); // { [index]: [sizeId, ...] }
  const [quantities, setQuantities] = useState({}); // { [index]: { [sizeId]: qty } }

  // ─── 3) OTHER FORM‐RELATED STATES ─────────────────────────────────────────
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [business, setBusiness] = useState([]);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState("");

  // ─── 4) FETCH INITIAL PRODUCT OPTIONS ──────────────────────────────────────
  useEffect(() => {
    axios
      .get("https://britishquilting.fastranking.tech/api/products")
      .then((res) => {
        if (res.data.success) {
          setProductOptions(res.data.products);
        }
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  // ─── 5) HANDLER: WHEN USER CHOOSES A PRODUCT FOR A GIVEN ITEM INDEX ───────
  const handleProductChange = async (index, field, value) => {
    // 1) Update formData.items[index][field] = value
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;

    // 2) Find the full product object by name
    const selectedProduct = productOptions.find(
      (p) => p.product_name === value
    );

    // 3) Fetch variants for that product and initialize companion states
    if (selectedProduct) {
      try {
        const res = await axios.get(
          `https://britishquilting.fastranking.tech/api/product/${selectedProduct.id}/variants`
        );
        if (res.data.success) {
          const variants = res.data.product.variants || [];

          // Store all variants under this item index
          setProductVariants((prev) => ({
            ...prev,
            [index]: variants,
          }));

          // Automatically pick a default “color_id” & defaultVariant
          const variantsWithColor = variants.filter((v) => v.color_id);
          let defaultColorId = null;
          let defaultVariant = null;

          if (variantsWithColor.length > 0) {
            defaultColorId = variantsWithColor[0].color_id;
            defaultVariant = variantsWithColor.find(
              (v) => v.color_id === defaultColorId
            );
          } else if (variants.length > 0) {
            // Fallback if no color_id present
            defaultColorId = null;
            defaultVariant = variants[0];
          }

          setSelectedColor((prev) => ({
            ...prev,
            [index]: defaultColorId,
          }));

          setSelectedVariant((prev) => ({
            ...prev,
            [index]: defaultVariant,
          }));
        }
      } catch (err) {
        console.error("Failed to fetch variants:", err);
      }
    }

    // 4) Finally write back the updated items array
    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  // ─── 6) HANDLER: WHEN USER MANUALLY CHANGES A VARIANT FIELD (e.g., price or discount) ─
  const handleVariantFieldChange = (index, field, value) => {
    setSelectedVariant((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }));
  };

  // ─── 7) HANDLER: WHEN USER CLICKS A VARIANT BUTTON ─────────────────────────
  const handleVariantSelect = (index, variant) => {
    setSelectedVariant((prev) => ({
      ...prev,
      [index]: variant,
    }));

    // Also store this variant’s ID in formData.items[index]
    setFormData((prev) => {
      const newItems = [...prev.items];
      newItems[index].variant_id = variant.id;
      return { ...prev, items: newItems };
    });

    // Reset sizes + quantities whenever a new variant is selected
    setSelectedSizes((prev) => ({ ...prev, [index]: [] }));
    setQuantities((prev) => ({ ...prev, [index]: {} }));
  };

  // ─── 8) HANDLER: WHEN USER CHOOSES A COLOR (FILTER VARIANTS BY COLOR) ──────
  const handleColorSelect = (index, colorId) => {
    setSelectedColor((prev) => ({
      ...prev,
      [index]: colorId,
    }));

    const variants = productVariants[index] || [];
    const matchedVariant = variants.find((v) => v.color_id === colorId);

    setSelectedVariant((prev) => ({
      ...prev,
      [index]: matchedVariant || null,
    }));
  };

  // ─── 9) HANDLER: TOGGLE A SIZE CHECKBOX UNDER A GIVEN ITEM INDEX ────────────
  const handleSizeCheckboxToggle = (index, sizeId) => {
    setSelectedSizes((prev) => {
      const existing = prev[index] || [];
      const updated = existing.includes(sizeId)
        ? existing.filter((id) => id !== sizeId)
        : [...existing, sizeId];
      return { ...prev, [index]: updated };
    });

    // If user un-checks, clear stored quantity for that sizeId
    setQuantities((prev) => {
      const copy = { ...prev };
      const sizeMap = { ...(copy[index] || {}) };
      if (sizeMap[sizeId] !== undefined) delete sizeMap[sizeId];
      return { ...copy, [index]: sizeMap };
    });
  };

  // ─── 10) HANDLER: WHEN USER TYPES A QUANTITY FOR A SIZE ─────────────────────
  const handleQuantityChange = (index, sizeId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: {
        ...(prev[index] || {}),
        [sizeId]: value,
      },
    }));
  };

  // ─── 11) “ADD MORE” – PUSH A NEW BLANK ITEM + INITIALIZE STATES ─────────────
  const handleAddItem = () => {
    // 1) Append a brand‐new “item” object to formData.items
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          sku: "",
          product_id: "",
          variant_id: "",
          quantity: "",
          size_id: "",
          price_per_unit: "",
          discount_applied: "",
        },
      ],
    }));

    // 2) Determine newIndex = old length of items (zero‐based)
    const newIndex = formData.items.length;

    // 3) Initialize companion states at newIndex
    setProductVariants((prev) => ({ ...prev, [newIndex]: [] }));
    setSelectedVariant((prev) => ({ ...prev, [newIndex]: null }));
    setSelectedColor((prev) => ({ ...prev, [newIndex]: null }));
    setSelectedSizes((prev) => ({ ...prev, [newIndex]: [] }));
    setQuantities((prev) => ({ ...prev, [newIndex]: {} }));
  };

  // ─── 12) “REMOVE ITEM” – DELETE A GIVEN ITEM INDEX & ITS STATES ─────────────
  const handleRemoveItem = (indexToRemove) => {
    // 1) Remove from formData.items
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, idx) => idx !== indexToRemove),
    }));

    // 2) Clean up all companion states at indexToRemove
    setProductVariants((prev) => {
      const copy = { ...prev };
      delete copy[indexToRemove];
      return copy;
    });
    setSelectedVariant((prev) => {
      const copy = { ...prev };
      delete copy[indexToRemove];
      return copy;
    });
    setSelectedColor((prev) => {
      const copy = { ...prev };
      delete copy[indexToRemove];
      return copy;
    });
    setSelectedSizes((prev) => {
      const copy = { ...prev };
      delete copy[indexToRemove];
      return copy;
    });
    setQuantities((prev) => {
      const copy = { ...prev };
      delete copy[indexToRemove];
      return copy;
    });
  };

  // ─── 13) FETCH / UPDATE CUSTOMER OR BUSINESS WHEN TYPE CHANGES ─────────────────
  const isBusiness = formData.order_type === "b2b";

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setFormData((prev) => ({
      ...prev,
      order_type: selectedType,
      business_id: "",
      customer_id: "",
    }));

    if (selectedType === "b2b") {
      axios
        .get("https://britishquilting.fastranking.tech/api/businesses")
        .then((res) => {
          if (res.data.status) {
            setBusiness(res.data.data);
          }
        })
        .catch((err) => console.error(err));
    } else if (selectedType === "b2c") {
      axios
        .get("https://britishquilting.fastranking.tech/api/customers")
        .then((res) => {
          if (res.data.status) {
            setCustomers(res.data.data);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    if (selectedBusiness?.customers?.length === 1) {
      setSelectedCustomerId(selectedBusiness.customers[0].id);
    }
  }, [selectedBusiness]);

  // When formData.customer_id changes, fetch details
  useEffect(() => {
    const fetchCustomerDetails = async () => {
      if (!formData.customer_id) return;
      try {
        const res = await axios.get(
          `https://britishquilting.fastranking.tech/api/customer/${formData.customer_id}`
        );
        setSelectedCustomer(res.data?.data || null);
      } catch (err) {
        console.error("Failed to fetch customer details:", err);
        setSelectedCustomer(null);
      }
    };
    fetchCustomerDetails();
  }, [formData.customer_id]);

  // When formData.business_id changes, fetch details
  useEffect(() => {
    const fetchBusinessDetails = async () => {
      if (!formData.business_id) return;
      try {
        const res = await axios.get(
          `https://britishquilting.fastranking.tech/api/business/${formData.business_id}`
        );
        setSelectedBusiness(res.data?.data || null);
      } catch (err) {
        console.error("Failed to fetch business details:", err);
        setSelectedBusiness(null);
      }
    };
    fetchBusinessDetails();
  }, [formData.business_id]);

  // Build `options` array for your Select component (B2B vs B2C)
  const options = (isBusiness ? business : customers).map((item) => ({
    label: isBusiness
      ? item.business_name
      : `${item.first_name} ${item.last_name}`,
    value: item.id,
  }));
  const selectedId = isBusiness ? formData.business_id : formData.customer_id;
  const selectedOption =
    options.find((opt) => opt.value === selectedId) || null;

  // ─── 14) HANDLE SHIPPING / BILLING ADDRESS FORM ──────────────────────────────
  const handleAddressToggle = () => {
    setShowAddressForm((prev) => {
      const newState = !prev;
      if (newState) {
        setBillingAddress(null);
        setShippingAddress(null);
      }
      return newState;
    });
  };

  const handleAddressChange = (type, index, e) => {
    const { name, value } = e.target;
    const updated = [...formData[type]];
    updated[index][name] = value;
    setFormData({ ...formData, [type]: updated });
  };

  // ─── 15) CALCULATE GRAND TOTAL WHEN VARIANTS / SIZES / QUANTITIES UPDATE ─────
  useEffect(() => {
    let totalAmount = 0;
    Object.keys(selectedVariant).forEach((idx) => {
      const variant = selectedVariant[idx];
      const price = Number(variant?.price_per_unit || 0);
      const totalQty = selectedSizes[idx]?.reduce(
        (sum, sizeId) => sum + Number(quantities[idx]?.[sizeId] || 0),
        0
      );
      totalAmount += price * totalQty;
    });

    setFormData((prev) => ({
      ...prev,
      order: {
        ...prev.order,
        total_amount: totalAmount,
      },
    }));
  }, [selectedVariant, selectedSizes, quantities]);

  // ─── 16) FORM SUBMISSION ─────────────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };

    // ─── VALIDATION ────────────────────────────────────────────────────────────
    if (!updatedFormData.order?.order_date) {
      alert("Order Date is required.");
      return;
    }
    if (updatedFormData.business_id && !selectedCustomerId) {
      alert("Customer is required when business is selected.");
      return;
    }
    const hasAtLeastOneProduct = updatedFormData.items.some(
      (item) => item.product_id && item.product_id.toString().trim() !== ""
    );
    if (!hasAtLeastOneProduct) {
      alert("Please select at least one product before submitting.");
      return;
    }
    if (!updatedFormData.order?.payment_method) {
      alert("Payment Method is required.");
      return;
    }

    // ─── CUSTOMER / BUSINESS ID LOGIC ────────────────────────────────────────
    if (updatedFormData.business_id) {
      if (selectedCustomerId) {
        updatedFormData.customer_id = selectedCustomerId;
      }
    } else {
      if (selectedCustomerId) {
        updatedFormData.customer_id = selectedCustomerId;
      }
      delete updatedFormData.business_id;
    }

    // ─── TRANSFORM “items” INTO FINAL PAYLOAD ─────────────────────────────────
    const transformedOrderItems = [];
    updatedFormData.items.forEach((item, index) => {
      const sizes = selectedSizes[index] || [];
      const variant = selectedVariant[index] || {};
      const quantityMap = quantities[index] || {};

      sizes.forEach((sizeId) => {
        const quantity = Number(quantityMap[sizeId] || 0);
        const price_per_unit = Number(variant.price_per_unit || 0);
        const discount_applied = Number(variant.discount || 0);
        const total_price = (price_per_unit - discount_applied) * quantity;

        transformedOrderItems.push({
          sku: variant.sku || "",
          product_id: item.product_id,
          variant_id: variant.id || "",
          quantity,
          size_id: sizeId,
          price_per_unit,
          discount_applied,
          total_price,
        });
      });
    });

    // Re‐compute grand total
    const total_amount = transformedOrderItems.reduce(
      (sum, itm) => sum + itm.total_price,
      0
    );

    // Build final payload
    const finalPayload = {
      ...updatedFormData,
      order: {
        ...updatedFormData.order,
        total_amount,
      },
      items: transformedOrderItems,
    };

    // BILLING / SHIPPING ADDRESS CHECKS
    if (billingAddress) {
      finalPayload.billing_id = billingAddress;
      delete finalPayload.billing_addresses;
    } else {
      delete finalPayload.billing_id;
    }
    if (shippingAddress) {
      finalPayload.shipping_id = shippingAddress;
      delete finalPayload.shipping_addresses;
    } else {
      delete finalPayload.shipping_id;
    }

    // ─── SEND TO API ───────────────────────────────────────────────────────────
    axios
      .post(
        "https://britishquilting.fastranking.tech/api/new-order",
        finalPayload
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          alert("Order submitted successfully!");
          // RESET EVERYTHING
          setFormData({
            order_type: "",
            business_id: "",
            customer_id: "",
            order: {
              order_date: formData.order_date,
              status: "pending",
              total_amount: 0,
              payment_method: formData.payment_method,
              payment_status: "pending",
              source: "crm",
              source_reference: null,
            },
            items: [
              {
                sku: "",
                product_id: "",
                variant_id: "",
                quantity: "",
                size_id: "",
                price_per_unit: "",
                discount_applied: "",
                total_price: "",
              },
            ],
            billing_addresses: [
              {
                address_line_1: "",
                address_line_2: "",
                city: "",
                postal_code: "",
                country: "",
              },
            ],
            shipping_addresses: [
              {
                address_line_1: "",
                address_line_2: "",
                city: "",
                postal_code: "",
                country: "",
              },
            ],
          });
          setProductVariants({});
          setSelectedVariant({});
          setSelectedSizes({});
          setQuantities({});
          setSelectedColor({});
          setBillingAddress(null);
          setShippingAddress(null);
          navigate("/order-display");
        } else {
          alert("Something went wrong. Please check your input.");
        }
      })
      .catch((error) => {
        console.error("Submission Error:", error);
        alert("An error occurred while submitting the order.");
      });
  };

  const addAddress = (type) => {
    setFormData((prev) => ({
      ...prev,
      [type]: [
        ...prev[type],
        {
          address_line_1: "",
          address_line_2: "",
          city: "",
          postal_code: "",
          country: "",
        },
      ],
    }));
  };

  const removeAddress = (type, index) => {
    const updated = [...formData[type]];
    updated.splice(index, 1);
    setFormData({ ...formData, [type]: updated });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const transformedOrderItems = [];

  //   formData.item.forEach((item, index) => {
  //     const sizes = selectedSizes[index] || [];
  //     const variant = selectedVariant[index] || {};
  //     const quantityMap = quantities[index] || {};

  //     sizes.forEach((sizeId) => {
  //       const quantity = quantityMap[sizeId] || "0";
  //       const price = variant.price || "0";

  //       transformedOrderItems.push({
  //         sku: variant.sku || "",
  //         product_id: item.product_id,
  //         variant_id: variant.id || "",
  //         quantity,
  //         size_id: sizeId,
  //         price,
  //       });
  //     });
  //   });

  //   // Build base payload
  //   const finalPayload = {
  //     ...formData,
  //     item: transformedOrderItems,
  //   };

  //   // Handle order_type logic
  //   if (formData.order_type === "Customer") {
  //     delete finalPayload.business_id;
  //   }

  //   // Handle billing address
  //   if (billingAddress) {
  //     finalPayload.billing_id = billingAddress;
  //     delete finalPayload.billing_addresses;
  //   } else {
  //     delete finalPayload.billing_id;
  //   }

  //   // Handle shipping address
  //   if (shippingAddress) {
  //     finalPayload.shipping_id = shippingAddress;
  //     delete finalPayload.shipping_addresses;
  //   } else {
  //     delete finalPayload.shipping_id;
  //   }

  //   // Submit to API
  //   axios
  //     .post(
  //       "https://britishquilting.fastranking.tech/api/save-new-order",
  //       finalPayload
  //     )
  //     .then((res) => {
  //       console.log("API Response:", res);
  //       if (res.status === 200 || res.status === 201) {
  //         alert("Order submitted successfully!");
  //         // Reset form and state
  //         setFormData({
  //           order_type: "",
  //           business_id: "",
  //           customer_id: "",
  //           payment_method: "",
  //           item: [
  //             {
  //               sku: "",
  //               product_id: "",
  //               variant_id: "",
  //               quantity: "",
  //               size_id: "",
  //               price: "",
  //             },
  //           ],
  //           billing_addresses: [
  //             {
  //               address_line_1: "",
  //               address_line_2: "",
  //               city: "",
  //               postal_code: "",
  //               country: "",
  //             },
  //           ],
  //           shipping_addresses: [
  //             {
  //               address_line_1: "",
  //               address_line_2: "",
  //               city: "",
  //               postal_code: "",
  //               country: "",
  //             },
  //           ],
  //         });
  //         setSelectedVariant({});
  //         setSelectedSizes({});
  //         setQuantities({});
  //         setSelectedColor({});
  //         setBillingAddress(null);
  //         setShippingAddress(null);
  //         navigate("/order-display");
  //       } else {
  //         alert("Something went wrong. Please check your input.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Submission Error:", error);
  //       alert("An error occurred while submitting the order.");
  //     });
  // };

  return (
    <div className=" w-full z-0 pl-[200px] lg:pl-[250px] xl:pl-[300px]">
      <div className="w-full min-h-[91vh] h-auto px-5  pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
        <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-4">
          Add Order
        </h1>
        <div className="bg-white rounded-[8px] border-1 border-[#D6D6D6] w-full pb-6 p-8 h-auto mt-5">
          <form onSubmit={handleSubmit} action="">
            <div className="flex gap-5 w-full items-center">
              <div className="flex flex-col gap-1 w-[220px]">
                <label htmlFor="order_type" className="text-sm font-[600]">
                  Select Type
                </label>
                <div className="relative">
                  <select
                    name="order_type"
                    id="order_type"
                    value={formData.order_type || ""}
                    onChange={(e) => handleTypeChange(e)}
                    className="py-[6px] px-4 border-1 cursor-pointer appearance-none border-[#C5C5C5] rounded-[4px] placeholder:text-[#969696] w-full"
                  >
                    <option value="" disabled>
                      Select Order Type
                    </option>
                    <option value="b2b">Business</option>
                    <option value="b2c">Contact</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 -top-1 right-0 flex items-center px-3 text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 w-[300px]">
                <label htmlFor="name_selector" className="text-sm font-[600]">
                  Business or Contact Name
                </label>

                <Select
                  className="w-[300px] cursor-pointer outline-none appearance-none"
                  options={options}
                  value={selectedOption}
                  onChange={(selected) => {
                    const key = isBusiness ? "business_id" : "customer_id";
                    setFormData((prev) => ({ ...prev, [key]: selected.value }));
                  }}
                  styles={{
                    control: (base) => ({ ...base, cursor: "pointer" }),
                    option: (base) => ({ ...base, cursor: "pointer" }),
                  }}
                  placeholder="Select Business or Contact"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="order_date" className="text-sm font-[500]">
                  Order Date
                </label>
                <input
                  type="date"
                  name="order_date"
                  value={formData.order.order_date}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      order: {
                        ...prev.order,
                        order_date: e.target.value,
                      },
                    }))
                  }
                  className="py-[6px] px-4  cursor-pointer rounded-[6px] border-1 border-gray-300"
                />
              </div>
              {/* <div className="flex flex-col gap-1 w-[300px]">
                <label htmlFor="name_selector" className="text-sm font-[600]">
                  Business or Contact Name
                </label>
                <div className="relative">
                  <select
                    id="name_selector"
                    name={
                      formData.order_type === "Business"
                        ? "business_id"
                        : "customer_id"
                    }
                    value={
                      formData.order_type === "Business"
                        ? formData.business_id
                        : formData.customer_id
                    }
                    onChange={handleChange}
                    className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-full"
                  >
                    <option value="" disabled>
                      Select Name
                    </option>
                    {(formData.order_type === "Business"
                      ? business
                      : customers
                    ).map((item) => (
                      <option key={item.id} value={item.id}>
                        {formData.order_type === "Business"
                          ? item.business_name
                          : `${item.first_name} ${item.last_name}`}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 -top-1 right-0 flex items-center px-3 text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="border border-gray-300 rounded-[6px] p-5 bg-[#f8fff3] w-full mt-6 min-h-50">
              {selectedCustomer ? (
                <div className="space-y-4 text-sm">
                  {/* Customer Details */}
                  <ul className="space-y-2">
                    <li>
                      <strong>First Name:</strong>{" "}
                      {selectedCustomer.first_name || "N/A"}
                    </li>
                    <li>
                      <strong>Middle Name:</strong>{" "}
                      {selectedCustomer.middle_name || "N/A"}
                    </li>
                    <li>
                      <strong>Last Name:</strong>{" "}
                      {selectedCustomer.last_name || "N/A"}
                    </li>
                    <li>
                      <strong>Email:</strong> {selectedCustomer.email || "N/A"}
                    </li>
                    <li>
                      <strong>Phone:</strong> {selectedCustomer.phone || "N/A"}
                    </li>
                    <li>
                      <strong>Mobile:</strong>{" "}
                      {selectedCustomer.mobile || "N/A"}
                    </li>
                    <li>
                      <strong>Date of Birth:</strong>{" "}
                      {selectedCustomer.dob || "N/A"}
                    </li>
                    <li>
                      <strong>Status:</strong>{" "}
                      {selectedCustomer.is_active ? "Active" : "Inactive"}
                    </li>
                  </ul>

                  {/* Address Info */}
                  {(() => {
                    const billing = selectedCustomer.addresses?.find(
                      (addr) => addr.pivot?.type === "billing"
                    );
                    const shipping = selectedCustomer.addresses?.find(
                      (addr) => addr.pivot?.type === "shipping"
                    );

                    return (
                      <>
                        <div className="flex items-start gap-10 pt-5 border-t-1 border-gray-300">
                          <label className="flex items-center gap-2 font-[500]">
                            <input
                              type="checkbox"
                              checked={showAddressForm}
                              onChange={handleAddressToggle}
                            />
                            Add Address
                          </label>

                          {!showAddressForm && billing && (
                            <div>
                              <h4 className="font-semibold underline">
                                Billing Address
                              </h4>
                              <div className="flex gap-2 items-start mt-2">
                                <input
                                  type="radio"
                                  name="billing_address"
                                  checked={billingAddress === billing.id}
                                  onChange={() => setBillingAddress(billing.id)}
                                />
                                <ul className="">
                                  <li>
                                    <strong>Address Line 1:</strong>{" "}
                                    {billing.address_line1 || "N/A"}
                                  </li>
                                  <li>
                                    <strong>Address Line 2:</strong>{" "}
                                    {billing.address_line2 || "N/A"}
                                  </li>
                                  <li>
                                    <strong>City:</strong>{" "}
                                    {billing.city || "N/A"}
                                  </li>
                                  <li>
                                    <strong>Postal Code:</strong>{" "}
                                    {billing.postal_code || "N/A"}
                                  </li>
                                  <li>
                                    <strong>Country:</strong>{" "}
                                    {billing.country || "N/A"}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                          {!showAddressForm && shipping && (
                            <div>
                              <h4 className="font-semibold underline">
                                Shipping Address
                              </h4>
                              <div className="flex gap-2 items-start mt-2">
                                <input
                                  type="radio"
                                  name="shipping_address"
                                  checked={shippingAddress === shipping.id}
                                  onChange={() =>
                                    setShippingAddress(shipping.id)
                                  }
                                />
                                <ul>
                                  <li>
                                    <strong>Address Line 1:</strong>{" "}
                                    {shipping.address_line1 || "N/A"}
                                  </li>
                                  <li>
                                    <strong>Address Line 2:</strong>{" "}
                                    {shipping.address_line2 || "N/A"}
                                  </li>
                                  <li>
                                    <strong>City:</strong>{" "}
                                    {shipping.city || "N/A"}
                                  </li>
                                  <li>
                                    <strong>Postal Code:</strong>{" "}
                                    {shipping.postal_code || "N/A"}
                                  </li>
                                  <li>
                                    <strong>Country:</strong>{" "}
                                    {shipping.country || "N/A"}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : selectedBusiness ? (
                <div>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>
                      <strong>Business Name:</strong>{" "}
                      {selectedBusiness.business_name || "N/A"}
                    </li>
                    <li>
                      <strong>Business Type:</strong>{" "}
                      {selectedBusiness.order_type || "N/A"}
                    </li>
                    <li>
                      <strong>Category:</strong>{" "}
                      {selectedBusiness.category || "N/A"}
                    </li>
                    <li>
                      <strong>Email:</strong> {selectedBusiness.email || "N/A"}
                    </li>
                    <li>
                      <strong>Phone:</strong> {selectedBusiness.phone || "N/A"}
                    </li>
                    <li>
                      <strong>Mobile:</strong>{" "}
                      {selectedBusiness.mobile || "N/A"}
                    </li>
                    <li>
                      <strong>Website:</strong>{" "}
                      {selectedBusiness.website || "N/A"}
                    </li>
                  </ul>

                  {selectedBusiness?.customers?.length === 1 ? (
                    <div className="mb-4 text-sm">
                      <h4 className="font-[700] text-md">Customer Details</h4>
                      <p>
                        <strong>ID:</strong> {selectedBusiness.customers[0].id}
                      </p>
                      <p>
                        <strong>Name:</strong>{" "}
                        {selectedBusiness.customers[0].name || "N/A"}
                      </p>
                      <p>
                        <strong>Email:</strong>{" "}
                        {selectedBusiness.customers[0].email || "N/A"}
                      </p>
                      <p>
                        <strong>Phone:</strong>{" "}
                        {selectedBusiness.customers[0].phone || "N/A"}
                      </p>
                    </div>
                  ) : selectedBusiness?.customers?.length > 1 ? (
                    <div className="text-sm mb-4">
                      <h4 className="font-[700] text-md mb-2">
                        Customers List
                      </h4>
                      {selectedBusiness.customers.map((customer) => (
                        <div key={customer.id} className="mb-3">
                          <label className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="selectedCustomer"
                              value={customer.id}
                              checked={selectedCustomerId === customer.id}
                              onChange={() =>
                                setSelectedCustomerId(customer.id)
                              }
                            />
                            <span className="flex gap-5">
                              <span>
                                <strong>ID:</strong> {customer.id} |{" "}
                              </span>
                              <span>
                                <strong>Name:</strong> {customer.name || "N/A"}{" "}
                                |{" "}
                              </span>
                              <span>
                                <strong>Email:</strong>{" "}
                                {customer.email || "N/A"} |{" "}
                              </span>
                              <span>
                                <strong>Phone:</strong>{" "}
                                {customer.phone || "N/A"}
                              </span>
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex items-start gap-10 text-sm pt-5 border-t-1 border-gray-300">
                    {/* Billing Addresses */}
                    <label className="flex items-center gap-2 font-[500]">
                      <input
                        type="checkbox"
                        checked={showAddressForm}
                        onChange={handleAddressToggle}
                      />
                      Add Address
                    </label>
                    <div>
                      <h4 className="font-semibold underline mb-2">
                        Billing Addresses
                      </h4>
                      {selectedBusiness.addresses &&
                      selectedBusiness.addresses.filter(
                        (addr) => addr.address_type === "billing"
                      ).length > 0 ? (
                        selectedBusiness.addresses
                          .filter((addr) => addr.address_type === "billing")
                          .map((address, idx) => (
                            <div className="flex gap-2 items-start">
                              <input
                                type="radio"
                                name="billing_address"
                                checked={billingAddress === address.id}
                                onChange={() => setBillingAddress(address.id)}
                              />

                              <div key={idx} className="mb-3 ">
                                <strong>Address Line 1:</strong>{" "}
                                {address.address_line1 || "N/A"} <br />
                                <strong>Address Line 2:</strong>{" "}
                                {address.address_line2 || "N/A"} <br />
                                <strong>City:</strong> {address.city || "N/A"}{" "}
                                <br />
                                <strong>Postal Code:</strong>{" "}
                                {address.postal_code || "N/A"} <br />
                                <strong>Country:</strong>{" "}
                                {address.country || "N/A"} <br />
                              </div>
                            </div>
                          ))
                      ) : (
                        <p>No billing addresses available.</p>
                      )}
                    </div>

                    {/* Shipping Addresses */}
                    <div>
                      <h4 className="font-semibold underline mb-2 ">
                        Shipping Addresses
                      </h4>
                      {selectedBusiness.addresses &&
                      selectedBusiness.addresses.filter(
                        (addr) => addr.address_type === "shipping"
                      ).length > 0 ? (
                        selectedBusiness.addresses
                          .filter((addr) => addr.address_type === "shipping")
                          .map((address, idx) => (
                            <div className="flex gap-2 items-start">
                              <input
                                type="radio"
                                name="shipping_address"
                                checked={shippingAddress === address.id}
                                onChange={() => setShippingAddress(address.id)}
                              />
                              <ul key={idx} className="">
                                <li>
                                  <strong>Address Line 1:</strong>{" "}
                                  {address.address_line1 || "N/A"}
                                </li>
                                <li>
                                  <strong>Address Line 2:</strong>{" "}
                                  {address.address_line2 || "N/A"}
                                </li>
                                <li>
                                  <strong>City:</strong> {address.city || "N/A"}{" "}
                                </li>
                                <li>
                                  <strong>Postal Code:</strong>{" "}
                                  {address.postal_code || "N/A"} <br />
                                </li>
                                <li>
                                  <strong>Country:</strong>{" "}
                                  {address.country || "N/A"} <br />
                                </li>
                              </ul>
                            </div>
                          ))
                      ) : (
                        <p>No shipping addresses available.</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Manual Address Details start*/}
            {showAddressForm && (
              <div className="border-t-1 border-gray-300 py-10">
                {formData.billing_addresses.map((addr, index) => (
                  <div className=" mt-3">
                    <h2 className="mt-5 text-[18px] font-[500]">
                      Billing Address
                    </h2>
                    <div
                      key={index}
                      className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6 "
                    >
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="address_line_1"
                          className="font-[500] text-gray-700"
                        >
                          Address Line 1
                        </label>
                        <input
                          type="text"
                          name="address_line_1"
                          value={addr.address_line_1}
                          onChange={(e) =>
                            handleAddressChange("billing_addresses", index, e)
                          }
                          placeholder="Enter address 1"
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="address_line_2"
                          className="font-[500] text-gray-700"
                        >
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          name="address_line_2"
                          value={addr.address_line_2}
                          onChange={(e) =>
                            handleAddressChange("billing_addresses", index, e)
                          }
                          placeholder="Enter address 2"
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>
                    </div>
                    <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="city"
                          className="font-[500] text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={addr.city}
                          onChange={(e) =>
                            handleAddressChange("billing_addresses", index, e)
                          }
                          placeholder="Enter your city"
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="postal_code"
                          className="font-[500] text-gray-700"
                        >
                          Postal Code
                        </label>
                        <input
                          type="text"
                          name="postal_code"
                          value={addr.postal_code}
                          onChange={(e) =>
                            handleAddressChange("billing_addresses", index, e)
                          }
                          placeholder="Enter postal code"
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="country"
                          className="font-[500] text-gray-700"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={addr.country}
                          onChange={(e) =>
                            handleAddressChange("billing_addresses", index, e)
                          }
                          placeholder="Enter postal code"
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>
                      {/* <button
              type="button"
              onClick={() => removeAddress("billing_addresses", index)}
              className="text-red-600 border-1 border-red-600 py-1 px-4 rounded-[6px] mt-4 cursor-pointer w-30"
            >
              Remove
            </button> */}
                    </div>
                  </div>
                ))}
                {/* <button
                type="button"
                onClick={() => addAddress("billing_addresses")}
                className="text-gray-900 border-1 border-gray-900 py-1 px-4 rounded-[6px] mt-4 cursor-pointer"
              >
                Add Address
              </button> */}
                <div className="mt-3 pb-8 ">
                  <h2 className="mt-5 text-[18px] font-[500]">
                    Shipping Address
                  </h2>
                  {formData.shipping_addresses.map((addr, index) => (
                    <>
                      <div
                        key={index}
                        className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6 "
                      >
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="address_line_1"
                            className="font-[500] text-gray-700"
                          >
                            Address Line 1
                          </label>
                          <input
                            type="text"
                            name="address_line_1"
                            value={addr.address_line_1}
                            onChange={(e) =>
                              handleAddressChange(
                                "shipping_addresses",
                                index,
                                e
                              )
                            }
                            placeholder="Enter address 1"
                            className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="address_line_2"
                            className="font-[500] text-gray-700"
                          >
                            Address Line 2
                          </label>
                          <input
                            type="text"
                            name="address_line_2"
                            value={addr.address_line_2}
                            onChange={(e) =>
                              handleAddressChange(
                                "shipping_addresses",
                                index,
                                e
                              )
                            }
                            placeholder="Enter address 2"
                            className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="city"
                            className="font-[500] text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={addr.city}
                            onChange={(e) =>
                              handleAddressChange(
                                "shipping_addresses",
                                index,
                                e
                              )
                            }
                            placeholder="Enter your city"
                            className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="postal_code"
                            className="font-[500] text-gray-700"
                          >
                            Postal Code
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            value={addr.postal_code}
                            onChange={(e) =>
                              handleAddressChange(
                                "shipping_addresses",
                                index,
                                e
                              )
                            }
                            placeholder="Enter postal code"
                            className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label
                            htmlFor="country"
                            className="font-[500] text-gray-700"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={addr.country}
                            onChange={(e) =>
                              handleAddressChange(
                                "shipping_addresses",
                                index,
                                e
                              )
                            }
                            placeholder="Enter postal code"
                            className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          />
                        </div>
                      </div>
                    </>
                  ))}
                  {/* <button
                  type="button"
                  onClick={() => addAddress("shipping_addresses")}
                  className="text-gray-900 border-1 border-gray-900 py-1 px-4 rounded-[6px] mt-4 cursor-pointer"
                >
                  Add Address
                </button> */}
                </div>
              </div>
            )}
            {/* Manual Address Details ends */}

            <div className="border-t-1 border-gray-300 py-10 ">
              <h1 className="text-[20px] font-[500]">Product Details</h1>
              <div className="flex flex-col gap-5">
                {/* <div className="mt-5 flex flex-col gap-1 w-1/3">
                  <label htmlFor="Product Code" className="text-sm font-[600]">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="product_code"
                    placeholder="Enter Product Name"
                    value={formData.product_code}
                    onChange={handleChange}
                    className="border-1 border-gray-300 rounded-[6px] py-2 px-4"
                  />
                </div> */}

                {formData.items.map((product, index) => (
                  <div key={index} className="flex flex-col gap-6 w-full mt-6">
                    {formData.items.length > 1 && index !== 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(index)}
                        className="bg-gray-100 py-2 px-4 w-30 text-red-500 hover:underline text-sm cursor-pointer"
                      >
                        Remove
                      </button>
                    )}

                    <div className="flex gap-5">
                      {/* Left: Product Dropdown */}
                      <div className="w-1/3 flex flex-col gap-2">
                        <label
                          className="text-sm font-[500]"
                          htmlFor={`product_name_${index}`}
                        >
                          Product Name List
                        </label>
                        <div className="relative">
                          <select
                            className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-full cursor-pointer"
                            name="product_name"
                            id={`product_name_${index}`}
                            value={product.product_name}
                            onChange={(e) => {
                              const selected = productOptions.find(
                                (p) => p.product_name === e.target.value
                              );
                              handleProductChange(
                                index,
                                "product_name",
                                selected.product_name
                              );
                              handleProductChange(
                                index,
                                "product_id",
                                selected.id
                              ); // capture ID too
                            }}
                          >
                            <option value="" selected disabled>
                              Select Product Name
                            </option>
                            {productOptions.map((p) => (
                              <option key={p.id} value={p.product_name}>
                                {p.product_name}
                              </option>
                            ))}
                          </select>
                          {/* Custom dropdown arrow */}
                          <div className="pointer-events-none absolute inset-y-0 -top-1 right-0 flex items-center px-3 text-gray-500">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Right: Variant List */}
                      {productVariants[index]?.length > 0 && (
                        <div className="w-2/3">
                          <p className="text-sm font-semibold mb-2">
                            Variants:
                          </p>
                          <div className="flex gap-3 flex-wrap">
                            {productVariants[index].map((variant) => (
                              <button
                                type="button"
                                key={variant.id}
                                onClick={() =>
                                  handleVariantSelect(index, variant)
                                }
                                className={`border px-3 py-1 rounded text-sm ${
                                  selectedVariant[index]?.id === variant.id
                                    ? "bg-purple-900 text-white"
                                    : "bg-gray-100 hover:bg-blue-100"
                                }`}
                              >
                                Variant: {variant.color_id}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* Color Selection if multiple colors available */}
                      {/* {productVariants[index] &&
                        productVariants[index].some((v) => v.color_id) && (
                          <div className="mt-4">
                            <p className="text-sm font-semibold">
                              Choose Color:
                            </p>
                            <div className="flex gap-2 flex-wrap mt-2">
                              {[
                                ...new Set(
                                  productVariants[index]
                                    .filter((v) => v.color_id)
                                    .map((v) => v.color_id)
                                ),
                              ].map((colorId) => {
                                const colorName =
                                  productVariants[index].find(
                                    (v) => v.color_id === colorId
                                  )?.color_name || `Color ${colorId}`;
                                return (
                                  <button
                                    key={colorId}
                                    type="button"
                                    onClick={() =>
                                      handleColorSelect(index, colorId)
                                    }
                                    className={`border px-3 py-1 rounded text-sm ${
                                      selectedColor[index] === colorId
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 hover:bg-green-100"
                                    }`}
                                  >
                                    {colorName}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )} */}
                    </div>
                    {selectedVariant[index] && (
                      <div className="w-full flex flex-col gap-2 bg-gray-50 p-4 rounded border">
                        <p className="font-semibold mb-1">Variant Details:</p>

                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4">
                            <p className="flex flex-col gap-1">
                              <strong className="text-sm">Color:</strong>{" "}
                              <input
                                type="text"
                                value={selectedVariant[index].color_name || ""}
                                className=" py-1 px-4 border border-gray-400 rounded bg-white"
                                readOnly
                              />
                            </p>
                            <p className="flex flex-col gap-1">
                              <strong className="text-sm">Price:</strong>{" "}
                              <input
                                type="number"
                                placeholder="Enter price"
                                value={
                                  selectedVariant[index]?.price_per_unit || ""
                                }
                                onChange={(e) =>
                                  handleVariantFieldChange(
                                    index,
                                    "price_per_unit",
                                    e.target.value
                                  )
                                }
                                className="py-1 px-4 border border-gray-400 rounded bg-white"
                              />
                            </p>
                            <p className="flex flex-col gap-1">
                              <strong className="text-sm">Discount:</strong>{" "}
                              <input
                                type="number"
                                placeholder="Enter discount"
                                value={selectedVariant[index]?.discount || ""}
                                onChange={(e) =>
                                  handleVariantFieldChange(
                                    index,
                                    "discount_applied",
                                    e.target.value
                                  )
                                }
                                className="py-1 px-4 border border-gray-400 rounded bg-white"
                              />
                            </p>
                          </div>

                          <p className="font-bold mt-4">Sizes:</p>
                          <div className="space-y-3">
                            {selectedVariant[index].inventories.map((inv) => (
                              <div
                                key={inv.inventory_id}
                                className="flex items-center gap-3"
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    selectedSizes[index]?.includes(
                                      inv.size_id
                                    ) || false
                                  }
                                  onChange={() =>
                                    handleSizeCheckboxToggle(index, inv.size_id)
                                  }
                                  className="w-4 h-4 cursor-pointer"
                                />
                                <label className="font-medium">
                                  {inv.size_label}
                                </label>
                                <input
                                  type="number"
                                  placeholder="Enter Quantity"
                                  value={
                                    selectedSizes[index]?.includes(inv.size_id)
                                      ? quantities[index]?.[inv.size_id] || ""
                                      : ""
                                  }
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      index,
                                      inv.size_id,
                                      e.target.value
                                    )
                                  }
                                  disabled={
                                    !selectedSizes[index]?.includes(inv.size_id)
                                  }
                                  className="py-[5px] px-3 text-sm border border-gray-400 bg-white rounded w-36"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 p-3 border-1 border-gray-400 rounded bg-white">
                          <p className="">
                            <strong className="mr-4">Price:</strong> £
                            {selectedVariant[index]?.price_per_unit || 0}
                          </p>
                          <p className="font-[500]">
                            <strong className="mr-4">Sizes:</strong>{" "}
                            {selectedSizes[index]
                              ?.map((sizeId) => {
                                const inv = selectedVariant[
                                  index
                                ]?.inventories?.find(
                                  (i) => i.size_id === sizeId
                                );
                                const qty = quantities[index]?.[sizeId] || 0;
                                return `${inv?.size_label}: qty. ${qty}`;
                              })
                              .join("  |  ")}
                          </p>
                          <p className="font-bold mt-2 text-green-600 border-t-1 border-gray-300 py-1">
                            <span className="text-black">Total Amount:</span> £
                            {(() => {
                              const price = Number(
                                selectedVariant[index]?.price_per_unit || 0
                              );
                              const totalQty = selectedSizes[index]?.reduce(
                                (sum, sizeId) =>
                                  sum +
                                  Number(quantities[index]?.[sizeId] || 0),
                                0
                              );
                              return price * totalQty || 0;
                            })()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* ─── 19) ADD MORE BUTTON BELOW ALL ITEMS ───────────────────────────────── */}
                <div className="">
                  <button
                    type="button"
                    onClick={handleAddItem}
                    className="bg-[#6c3685] font-[500] text-white px-4 py-2 rounded hover:bg-[#4B215F] cursor-pointer"
                  >
                    + Add More
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t-1 border-gray-300 py-10">
              <h1 className="text-[20px] font-[500]">Payment Details</h1>
              <div className="grid grid-cols-2 gap-5">
                <div className="mt-5 flex flex-col gap-1">
                  <label htmlFor="Product Code" className="text-sm font-[600]">
                    Payment Method
                  </label>
                  <div className="relative">
                    <select
                      name="payment_method"
                      id="payment_method"
                      value={formData.order.payment_method}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          order: {
                            ...prev.order,
                            payment_method: e.target.value,
                          },
                        }))
                      }
                      className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] cursor-pointer"
                    >
                      <option value="" selected disabled>
                        Select Business Type
                      </option>
                      <option value="Credit card">Credit card</option>
                      <option value="Direct debit">Direct debit</option>
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Credit">Credit</option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="pointer-events-none absolute inset-y-0 -top-1 right-0 flex items-center px-3 text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 w-full justify-end">
              <button
                type="reset"
                className="py-3 px-6 text-medium text-[#4B215F] border-1 border-[#4B215F] rounded-[30px] font-[500] hover:text-white hover:bg-[#4B215F] hover:cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-3 px-6 text-medium text-white hover:bg-[#4B215F] rounded-[30px] font-[500] bg-[#6e4581] hover:cursor-pointer"
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;

{
  /* Address Details start*/
}
// <div className="border-t-1 border-gray-300 py-10">
//   <h1 className="text-[20px] font-[500]">Address</h1>
//   {selectedBusiness && (
//     <>
//       <div className="mt-3">
//         {/* Billing Address */}
//         <h2 className="mt-5 text-[18px] font-[500]">
//           Billing Address
//         </h2>
//         {selectedBusiness.addresses
//           ?.filter((addr) => addr.address_type === "billing")
//           .map((addr, index) => (
//             <div key={index}>
//               <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line1 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] placeholder:text-[#969696] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line2 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] placeholder:text-[#969696] w-full"
//                   />
//                 </div>
//               </div>

//               <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.city || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.postal_code || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.country || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}

//         {/* Shipping Address */}
//         <h2 className="mt-10 text-[18px] font-[500]">
//           Shipping Address
//         </h2>
//         {selectedBusiness.addresses
//           ?.filter((addr) => addr.address_type === "shipping")
//           .map((addr, index) => (
//             <div key={index}>
//               <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line1 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line2 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//               </div>

//               <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.city || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.postal_code || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.country || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>

//       <button
//         type="button"
//         onClick={handleToggleButton}
//         className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition mt-5 cursor-pointer"
//       >
//         {showAddressSection ? <span>Remove New Address</span> : <span>Add New Address</span> }

//       </button>
//     </>
//   )}

//   {selectedCustomer && (
//     <>
//       <div className="mt-3">
//         {/* Billing Address */}
//         <h2 className="mt-5 text-[18px] font-[500]">
//           Billing Address
//         </h2>
//         {selectedCustomer.addresses
//           ?.filter((addr) => addr.pivot?.type === "billing")
//           .map((addr, index) => (
//             <div key={index}>
//               <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line1 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] placeholder:text-[#969696] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line2 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] placeholder:text-[#969696] w-full"
//                   />
//                 </div>
//               </div>

//               <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.city || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.postal_code || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.country || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}

//         {/* Shipping Address */}
//         <h2 className="mt-10 text-[18px] font-[500]">
//           Shipping Address
//         </h2>
//         {selectedCustomer.addresses
//           ?.filter((addr) => addr.pivot?.type === "shipping")
//           .map((addr, index) => (
//             <div key={index}>
//               <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 1
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line1 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Address Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.address_line2 || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//               </div>

//               <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6">
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.city || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Postal Code
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.postal_code || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label className="font-[500] text-gray-700">
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     value={addr.country || ""}
//                     readOnly
//                     className="py-2 px-4 border-1 border-[#C5C5C5] bg-gray-100 rounded-[8px] w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>

//
//       <button
//         type="button"
//         onClick={handleToggleButton}
//         className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition mt-5 cursor-pointer"
//       >
//          {showAddressSection ? <span>Remove New Address</span> : <span>Add New Address</span> }
//       </button>
//     </>
//   )}
// </div>

{
  /* Address Details ends*/
}
