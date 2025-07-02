import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import API from "../../../api/API";

const AddOrderAuto = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state, "this is state");
  // Extract data from CustomerInfo.jsx
  const {
    customer,
    business,
    businesses,
    selectedAddresses,
    selectedSpecialPrices,
    allAddresses,
    allSpecialPrices,
  } = location.state || {};

  const [formData, setFormData] = useState({
    order_type: "", // <-- added this
    business_id: business?.id || "",
    customer_id: customer?.id || "",
    billing_id: "",
    shipping_id: "",

    order: {
      order_date: "",
      status: "pending",
      total_amount: "",
      order_discount_amount: "",
      vat_percentage: "",
      vat_amount: "",
      delivery_amount: "",
      payable_amount: "",
      payment_method: "",
      payment_status: "pending",
      source: "crm",
      source_reference: null,
    },
    items: [
      {
        variant_id: "",
        meter_range_id: "",
        quantity: "",
        price_per_unit: "",
        discount_applied: "",
        total_price: "",
      },
    ],
    billing_addresses: selectedAddresses
      ?.filter((addr) => addr.pivot?.type === "billing")
      ?.map((addr) => ({
        address_line_1: addr.address_line1 || "",
        address_line_2: addr.address_line2 || "",
        city: addr.city || "",
        postal_code: addr.postal_code || "",
        country: addr.country || "",
      })) || [
      {
        address_line_1: "",
        address_line_2: "",
        city: "",
        postal_code: "",
        country: "",
      },
    ],
    shipping_addresses: selectedAddresses
      ?.filter((addr) => addr.pivot?.type === "shipping")
      ?.map((addr) => ({
        address_line_1: addr.address_line1 || "",
        address_line_2: addr.address_line2 || "",
        city: addr.city || "",
        postal_code: addr.postal_code || "",
        country: addr.country || "",
      })) || [
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
  //    We store objects keyed by the "item index" whenever the user adds more.
  const [productOptions, setProductOptions] = useState([]); // List of all products
  const [productVariants, setProductVariants] = useState({}); // { [index]: [variantsArray] }
  const [selectedVariant, setSelectedVariant] = useState({}); // { [index]: variantObject }
  const [selectedColor, setSelectedColor] = useState({}); // { [index]: colorId }
  const [selectedSizes, setSelectedSizes] = useState({}); // { [index]: [sizeId, ...] }
  const [quantities, setQuantities] = useState({}); // { [index]: { [sizeId]: qty } }

  // ─── 3) OTHER FORM-RELATED STATES ─────────────────────────────────────────
  const [selectedCustomer, setSelectedCustomer] = useState(customer || null);
  const [selectedBusiness, setSelectedBusiness] = useState(business || null);
  const [customers, setCustomers] = useState([]);
  const [businessList, setBusinessList] = useState(businesses || []);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(
    customer?.id || ""
  );
  const [meterOptions, setMeterOptions] = useState({});
  const [selection, setSelection] = useState({});
  const [specialPrices, setSpecialPrices] = useState(allSpecialPrices || []);
  const [specialBusinessPrices, setSpecialBusinessPrices] = useState([]);
  const [selectedSpecialPriceIds, setSelectedSpecialPriceIds] = useState(
    selectedSpecialPrices && selectedSpecialPrices.length > 0
      ? selectedSpecialPrices.map((sp) => sp.id)
      : []
  );
  const [selectedBusinessSpecialPriceIds, setSelectedBusinessSpecialPriceIds] =
    useState([]);

  const [editedSpecialPrice, setEditedSpecialPrice] = useState({});
  const [editedBusinessSpecialPrice, setEditedBusinessSpecialPrice] = useState(
    {}
  );

  // 1. Add state for checked variants and variant inputs
  const [variantInputs, setVariantInputs] = useState({});
  const [checkedVariants, setCheckedVariants] = useState({});

  // 2. Add handlers for checkbox and variant input changes
  const handleVariantInputChange = (itemIdx, variantId, field, value) => {
    setVariantInputs((prev) => ({
      ...prev,
      [itemIdx]: {
        ...(prev[itemIdx] || {}),
        [variantId]: {
          ...(prev[itemIdx]?.[variantId] || {}),
          [field]: value,
        },
      },
    }));
  };
  const handleVariantCheckbox = (itemIdx, variantId) => {
    setCheckedVariants((prev) => ({
      ...prev,
      [itemIdx]: {
        ...(prev[itemIdx] || {}),
        [variantId]: !(prev[itemIdx] || {})[variantId],
      },
    }));
  };

  // Auto-populate addresses if selected addresses are available
  useEffect(() => {
    if (selectedAddresses && selectedAddresses.length > 0) {
      const billingAddr = selectedAddresses.find(
        (addr) => addr.pivot?.type === "billing"
      );
      const shippingAddr = selectedAddresses.find(
        (addr) => addr.pivot?.type === "shipping"
      );

      if (billingAddr) {
        setBillingAddress(billingAddr.id);
      }
      if (shippingAddr) {
        setShippingAddress(shippingAddr.id);
      }
    }
  }, [selectedAddresses]);

  // Auto-populate special prices if selected
  useEffect(() => {
    if (selectedSpecialPrices && selectedSpecialPrices.length > 0) {
      const newEditedSpecialPrice = {};
      selectedSpecialPrices.forEach((sp) => {
        newEditedSpecialPrice[sp.id] = {
          special_price: sp.special_price,
          variant_discount: sp.variant_discount,
          quantity: "1", // Default quantity
          total_price: sp.special_price,
        };
      });
      setEditedSpecialPrice((prev) => ({
        ...prev,
        ...newEditedSpecialPrice,
      }));
    }
  }, [selectedSpecialPrices]);

  // Auto-set order type and handle data from CustomerInfo
  useEffect(() => {
    if (customer && business) {
      // If both customer and business are available, default to B2B
      setFormData((prev) => ({
        ...prev,
        order_type: "b2b",
        customer_id: customer.id,
        business_id: business.id,
      }));
    } else if (customer) {
      // If only customer is available, set to B2C
      setFormData((prev) => ({
        ...prev,
        order_type: "b2c",
        customer_id: customer.id,
      }));
    } else if (business) {
      // If only business is available, set to B2B
      setFormData((prev) => ({
        ...prev,
        order_type: "b2b",
        business_id: business.id,
      }));
    }
  }, [customer, business]);

  // Populate customers array with customer data from location.state
  useEffect(() => {
    if (customer) {
      setCustomers([customer]);
    }
  }, [customer]);

  // Populate businessList array with business data from location.state
  useEffect(() => {
    if (businesses && businesses.length > 0) {
      setBusinessList(businesses);
    }
  }, [businesses]);

  // Prevent automatic fetching when we already have the data
  useEffect(() => {
    if (customer && !formData.customer_id) {
      setSelectedCustomer(customer);
    }
  }, [customer, formData.customer_id]);

  useEffect(() => {
    if (business && !formData.business_id) {
      setSelectedBusiness(business);
    }
  }, [business, formData.business_id]);

  // // Debug logging to see what data we have
  // useEffect(() => {
  //   console.log("Current state:", {
  //     customer,
  //     business,
  //     selectedCustomer,
  //     selectedBusiness,
  //     formData: {
  //       order_type: formData.order_type,
  //       customer_id: formData.customer_id,
  //       business_id: formData.business_id
  //     },
  //     selectedAddresses,
  //     allAddresses
  //   });
  // }, [customer, business, selectedCustomer, selectedBusiness, formData.order_type, formData.customer_id, formData.business_id, selectedAddresses, allAddresses]);

  //Auto Populate The Order Date
  useEffect(() => {
    if (
      customer?.created_at &&
      (!formData.order.order_date || formData.order.order_date === "")
    ) {
      setFormData((prev) => ({
        ...prev,
        order: {
          ...prev.order,
          order_date: customer.created_at.slice(0, 10),
        },
      }));
    }
  }, [customer, formData.order.order_date]);

  // ─── 4) FETCH INITIAL PRODUCT OPTIONS ──────────────────────────────────────
  useEffect(() => {
    API.get("/api/products")
      .then((res) => {
        if (res.data.success) {
          setProductOptions(res.data.products);
        }
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  // -----------------------------------Handeling the Product change and its variants on "Selected Product"---------------------------------------------------------
  const handleProductChange = async (index, field, value) => {
    const updatedItems = [...formData.items];

    // Always update the changed field first
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    const selectedProduct = productOptions.find(
      (p) => p.product_name === value
    );

    if (selectedProduct) {
      try {
        const res = await API.get(
          `/api/product/${selectedProduct.id}/variants`
        );

        if (res.data.success) {
          const variants = res.data.variants || [];
          const defaultVariant =
            variants.find((v) => v.color_id) || variants[0];

          setProductVariants((prev) => ({
            ...prev,
            [index]: variants,
          }));

          setSelectedColor((prev) => ({
            ...prev,
            [index]: defaultVariant.color_id || null,
          }));

          setSelectedVariant((prev) => ({
            ...prev,
            [index]: defaultVariant,
          }));

          // Check if variant uses meter pricing
          const useMeterPricing = defaultVariant.use_meter_pricing || false;
          const defaultMeterOptions = useMeterPricing
            ? defaultVariant.meter_pricing || []
            : [];
          // console.log("Meter options:", defaultMeterOptions);
          // console.log("Use meter pricing:", useMeterPricing);

          setMeterOptions((prev) => ({
            ...prev,
            [index]: defaultMeterOptions,
          }));

          // Initialize selection based on whether meter pricing is used
          const defaultPrice = useMeterPricing
            ? ""
            : defaultVariant.price || "";
          const defaultDiscount = useMeterPricing
            ? ""
            : defaultVariant.discount || "";
          const defaultFinalPrice = useMeterPricing
            ? ""
            : (
                parseFloat(defaultVariant.price || 0) -
                parseFloat(defaultVariant.discount || 0)
              ).toFixed(2);

          setSelection((prev) => ({
            ...prev,
            [index]: {
              meter_range_id: useMeterPricing ? "" : null,
              price: defaultPrice,
              discount: defaultDiscount,
              finalPrice: defaultFinalPrice,
            },
          }));

          updatedItems[index] = {
            ...updatedItems[index],
            product_id: selectedProduct.id,
            variant_id: defaultVariant?.id || "",
            price_per_unit: defaultPrice,
            discount_applied: defaultDiscount,
            meter_range_id: useMeterPricing ? "" : null,
            total_price: defaultFinalPrice,
          };
        }
      } catch (err) {
        console.error("Failed to fetch variants:", err);
      }
    }

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

    // Also store this variant's ID in formData.items[index]
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

  // ─── 11) "ADD MORE" – PUSH A NEW BLANK ITEM + INITIALIZE STATES ─────────────
  const handleAddItem = () => {
    const newIndex = formData.items.length;

    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          variant_id: "",
          quantity: "",
          meter_range_id: "",
          price_per_unit: "",
          discount_applied: "",
          total_price: "",
        },
      ],
    }));

    setProductVariants((prev) => ({ ...prev, [newIndex]: [] }));
    setSelectedVariant((prev) => ({ ...prev, [newIndex]: null }));
    setSelectedColor((prev) => ({ ...prev, [newIndex]: null }));
    setSelection((prev) => ({
      ...prev,
      [newIndex]: {
        meter_range_id: "",
        price: "",
        discount: "",
        finalPrice: "",
      },
    }));
  };

  // ─── 12) "REMOVE ITEM" – DELETE A GIVEN ITEM INDEX & ITS STATES ─────────────
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
      API.get("/api/businesses")
        .then((res) => {
          if (res.data.status) {
            setBusinessList(res.data.data);
          }
        })
        .catch((err) => console.error(err));
    } else if (selectedType === "b2c") {
      API.get("/api/customers")
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
        const res = await API.get(`/api/customer/${formData.customer_id}`);
        setSelectedCustomer(res.data?.data || null);
      } catch (err) {
        console.error("Failed to fetch customer details:", err);
        setSelectedCustomer(null);
      }
    };
    fetchCustomerDetails();
  }, [formData.customer_id]);

  // ---------------------------------------------------Below Special Price APi For Customer Only-------------------------------------------------------

  useEffect(() => {
    const fetchCustomerSpecialPrices = async () => {
      if (!formData.customer_id) return;
      try {
        const res = await API.get(
          `/api/customer/${formData.customer_id}/special-prices-new`
        );
        setSpecialPrices(res.data?.data || []);
      } catch (err) {
        console.error("Failed to fetch special prices:", err);
        setSpecialPrices([]);
      }
    };

    fetchCustomerSpecialPrices();
  }, [formData.customer_id]);

  // ---------------------------------------------------Above Special Price APi For Customer Only-------------------------------------------------------

  // When formData.business_id changes, fetch details
  useEffect(() => {
    const fetchBusinessDetails = async () => {
      if (!formData.business_id) return;
      try {
        const res = await API.get(`/api/business/${formData.business_id}`);
        setSelectedBusiness(res.data?.data || null);
      } catch (err) {
        console.error("Failed to fetch business details:", err);
        setSelectedBusiness(null);
      }
    };
    fetchBusinessDetails();
  }, [formData.business_id]);

  // ---------------------------------------------------Below Special Price APi For Business Only-------------------------------------------------------

  useEffect(() => {
    const fetchBusinessSpecialPrices = async () => {
      if (!formData.business_id) return;
      try {
        const res = await API.get(
          `/api/business/${formData.business_id}/special-prices-new`
        );
        setSpecialBusinessPrices(res.data?.data || []);
      } catch (err) {
        console.error("Failed to fetch business special prices:", err);
        setSpecialBusinessPrices([]);
      }
    };

    fetchBusinessSpecialPrices();
  }, [formData.business_id]);

  // ---------------------------------------------------Above Special Price APi For Business Only-------------------------------------------------------

  // Build `options` array for your Select component (B2B vs B2C)
  const options = (isBusiness ? businessList : customers).map((item) => ({
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

  // ─── 15.5) UNIFIED CALCULATION TRIGGER ───────────────────────────────────────
  useEffect(() => {
    // Trigger unified calculation when special prices or form items change
    updateOrderTotals();
  }, [
    selectedSpecialPriceIds,
    selectedBusinessSpecialPriceIds,
    specialPrices,
    specialBusinessPrices,
  ]);

  // ─── 15.6) ADDITIONAL CALCULATION TRIGGERS ───────────────────────────────────
  useEffect(() => {
    // Trigger calculation when edited special prices change
    if (
      Object.keys(editedSpecialPrice).length > 0 ||
      Object.keys(editedBusinessSpecialPrice).length > 0
    ) {
      updateOrderTotals();
    }
  }, [editedSpecialPrice, editedBusinessSpecialPrice]);

  // ─── 15.7) INITIAL CALCULATION TRIGGER ───────────────────────────────────────
  useEffect(() => {
    // Trigger initial calculation when component mounts or when special prices are loaded
    if (specialPrices.length > 0 || specialBusinessPrices.length > 0) {
      updateOrderTotals();
    }
  }, [specialPrices, specialBusinessPrices]);

  // ─── 15.8) HELPER FUNCTIONS FOR INDIVIDUAL CALCULATIONS ───────────────────────
  const calculateIndividualSpecialPriceTotals = (item, editedData = {}) => {
    const special_price = parseFloat(
      editedData.special_price ?? item.special_price ?? 0
    );
    const quantity = parseFloat(editedData.quantity ?? item.quantity ?? 0);
    const discount = parseFloat(
      editedData.variant_discount ?? item.variant_discount ?? 0
    );
    const total_price = quantity * (special_price - discount);
    const vat_percentage = 20;
    const vat_amount = parseFloat(
      ((total_price * vat_percentage) / 100).toFixed(2)
    );
    const delivery_amount = 0;
    const payable_amount = parseFloat(
      (total_price + vat_amount + delivery_amount).toFixed(2)
    );

    return {
      total_price,
      vat_amount,
      payable_amount,
    };
  };

  // ─── 15.9) HELPER FUNCTION FOR INDIVIDUAL PRODUCT CALCULATIONS ─────────────────
  const calculateIndividualProductTotals = (index) => {
    const item = formData.items[index];
    const total_price = parseFloat(item.total_price ?? 0);
    const vat_percentage = 20;
    const vat_amount = parseFloat(
      ((total_price * vat_percentage) / 100).toFixed(2)
    );
    const delivery_amount = 0;
    const payable_amount = parseFloat(
      (total_price + vat_amount + delivery_amount).toFixed(2)
    );

    return {
      total_price,
      vat_amount,
      payable_amount,
    };
  };

  // Product search Select Dropdown Options
  const productOptionsFormatted = productOptions.map((p) => ({
    label: p.product_name,
    value: p.product_name,
    id: p.id,
  }));

  /*Meter Selection dropdown----------------------------------------------------------------- */

  const handleSelectionChange = (index, field, value) => {
    const updatedSelection = { ...selection[index], [field]: value };
    const updatedItems = [...formData.items];

    if (field === "meter_range_id") {
      const range = meterOptions[index]?.find(
        (opt) => opt.meter_range_id === parseInt(value)
      );
      updatedSelection.price = range?.price || "";
      updatedSelection.discount = range?.discount || "";
      updatedSelection.finalPrice = (
        parseFloat(range?.price || 0) - parseFloat(range?.discount || 0) || 0
      ).toFixed(2);

      updatedItems[index].meter_range_id = value;
      updatedItems[index].price_per_unit = range?.price || "";
      updatedItems[index].discount_applied = range?.discount || "";
      updatedItems[index].total_price = updatedSelection.finalPrice;
    } else if (field === "price" || field === "discount") {
      const price = parseFloat(updatedSelection.price) || 0;
      const discount = parseFloat(updatedSelection.discount) || 0;
      updatedSelection.finalPrice = (price - discount).toFixed(2);

      updatedItems[index].price_per_unit = updatedSelection.price;
      updatedItems[index].discount_applied = updatedSelection.discount;
      updatedItems[index].total_price = updatedSelection.finalPrice;
    }

    setSelection((prev) => ({
      ...prev,
      [index]: updatedSelection,
    }));

    // Use unified calculation instead of just updating formData
    updateOrderTotals(updatedItems);
  };

  // Function To Calculate total
  const updateOrderTotals = (updatedItems = null) => {
    // Get all items to calculate totals from
    let allItems = [];

    // Add regular form items
    if (updatedItems) {
      allItems = [...updatedItems];
    } else {
      allItems = [...formData.items];
    }

    // Calculate individual section totals
    const productDetailsTotal = allItems.reduce(
      (sum, itm) => sum + parseFloat(itm.total_price ?? 0),
      0
    );

    let customerSpecialPricesTotal = 0;
    let businessSpecialPricesTotal = 0;

    // Add selected customer special prices
    if (selectedSpecialPriceIds.length > 0) {
      selectedSpecialPriceIds.forEach((id) => {
        const item = specialPrices.find((sp) => sp.id === id);
        const edited = editedSpecialPrice[id] || {};
        if (item) {
          const special_price = parseFloat(
            edited.special_price ?? item.special_price ?? 0
          );
          const quantity = parseFloat(edited.quantity ?? item.quantity ?? 0);
          const discount = parseFloat(
            edited.variant_discount ?? item.variant_discount ?? 0
          );
          const total_price = quantity * (special_price - discount);
          customerSpecialPricesTotal += total_price;
          allItems.push({
            price_per_unit: special_price,
            quantity: quantity,
            discount_applied: discount,
            total_price: total_price,
          });
        }
      });
    }

    // Add selected business special prices
    if (selectedBusinessSpecialPriceIds.length > 0) {
      selectedBusinessSpecialPriceIds.forEach((id) => {
        const item = specialBusinessPrices.find((sp) => sp.id === id);
        const edited = editedBusinessSpecialPrice[id] || {};
        if (item) {
          const special_price = parseFloat(
            edited.special_price ?? item.special_price ?? 0
          );
          const quantity = parseFloat(edited.quantity ?? item.quantity ?? 0);
          const discount = parseFloat(
            edited.variant_discount ?? item.variant_discount ?? 0
          );
          const total_price = quantity * (special_price - discount);
          businessSpecialPricesTotal += total_price;
          allItems.push({
            price_per_unit: special_price,
            quantity: quantity,
            discount_applied: discount,
            total_price: total_price,
          });
        }
      });
    }

    // Combined total for payload
    const total_amount = allItems.reduce(
      (sum, itm) => sum + parseFloat(itm.total_price ?? 0),
      0
    );
    const vat_percentage = 20;
    const vat_amount = parseFloat(
      ((total_amount * vat_percentage) / 100).toFixed(2)
    );
    const delivery_amount = 0;
    const payable_amount = parseFloat(
      (total_amount + vat_amount + delivery_amount).toFixed(2)
    );
    const grossAmount = allItems.reduce(
      (sum, itm) =>
        sum +
        parseFloat(itm.price_per_unit ?? 0) * parseFloat(itm.quantity ?? 0),
      0
    );
    const order_discount_amount = parseFloat(
      (grossAmount - total_amount).toFixed(2)
    );

    // Calculate individual section totals for display
    const productDetailsVatAmount = parseFloat(
      ((productDetailsTotal * vat_percentage) / 100).toFixed(2)
    );
    const productDetailsPayableAmount = parseFloat(
      (productDetailsTotal + productDetailsVatAmount + delivery_amount).toFixed(
        2
      )
    );

    const customerSpecialPricesVatAmount = parseFloat(
      ((customerSpecialPricesTotal * vat_percentage) / 100).toFixed(2)
    );
    const customerSpecialPricesPayableAmount = parseFloat(
      (
        customerSpecialPricesTotal +
        customerSpecialPricesVatAmount +
        delivery_amount
      ).toFixed(2)
    );

    const businessSpecialPricesVatAmount = parseFloat(
      ((businessSpecialPricesTotal * vat_percentage) / 100).toFixed(2)
    );
    const businessSpecialPricesPayableAmount = parseFloat(
      (
        businessSpecialPricesTotal +
        businessSpecialPricesVatAmount +
        delivery_amount
      ).toFixed(2)
    );

    setFormData((prev) => ({
      ...prev,
      order: {
        ...prev.order,
        // Combined totals for payload
        total_amount,
        vat_percentage,
        vat_amount,
        delivery_amount,
        payable_amount,
        order_discount_amount,
        // Individual section totals for display
        productDetailsTotal,
        productDetailsVatAmount,
        productDetailsPayableAmount,
        customerSpecialPricesTotal,
        customerSpecialPricesVatAmount,
        customerSpecialPricesPayableAmount,
        businessSpecialPricesTotal,
        businessSpecialPricesVatAmount,
        businessSpecialPricesPayableAmount,
      },
      ...(updatedItems && { items: updatedItems }),
    }));
  };

  // ─── 16) FORM SUBMISSION ─────────────────────────────────────────────────────
  const handleSpecialPriceChange = (field, value, item) => {
    setEditedSpecialPrice((prev) => {
      const updated = {
        ...prev[item.id],
        [field]: value,
      };

      const special_price = parseFloat(
        updated.special_price ?? item.special_price ?? 0
      );
      const quantity = parseFloat(updated.quantity ?? item.quantity ?? 0);
      const discount = parseFloat(
        updated.variant_discount ?? item.variant_discount ?? 0
      );
      const total_price = parseFloat(
        (quantity * (special_price - discount)).toFixed(2)
      );

      const newState = {
        ...prev,
        [item.id]: { ...updated, total_price },
      };

      // Call unified calculation function
      updateOrderTotals();

      return newState;
    });
  };

  const handleBusinessSpecialPriceChange = (field, value, item) => {
    setEditedBusinessSpecialPrice((prev) => {
      const updated = {
        ...prev[item.id],
        [field]: value,
      };

      const special_price = parseFloat(
        updated.special_price ?? item.special_price ?? 0
      );
      const quantity = parseFloat(updated.quantity ?? item.quantity ?? 0);
      const discount = parseFloat(
        updated.variant_discount ?? item.variant_discount ?? 0
      );

      const total_price = parseFloat(
        (quantity * (special_price - discount)).toFixed(2)
      );

      const newState = {
        ...prev,
        [item.id]: { ...updated, total_price },
      };

      // Call unified calculation function
      updateOrderTotals();

      return newState;
    });
  };

  const handleSpecialPriceCheckbox = (id) => {
    setSelectedSpecialPriceIds((prev) => {
      const newIds = prev.includes(id)
        ? prev.filter((sid) => sid !== id)
        : [...prev, id];
      return newIds;
    });
    // Trigger calculation immediately after state update
    setTimeout(() => updateOrderTotals(), 100);
  };

  const handleBusinessSpecialPriceCheckbox = (id) => {
    setSelectedBusinessSpecialPriceIds((prev) => {
      const newIds = prev.includes(id)
        ? prev.filter((sid) => sid !== id)
        : [...prev, id];
      return newIds;
    });
    // Trigger calculation immediately after state update
    setTimeout(() => updateOrderTotals(), 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };

    // ─── BASIC VALIDATIONS ─────────────────────────────────────
    if (!updatedFormData.order?.order_date) {
      alert("Order Date is required.");
      return;
    }

    if (updatedFormData.business_id && !selectedCustomerId) {
      alert("Customer is required when business is selected.");
      return;
    }

    // Build transformedOrderItems ONLY from checked variants with valid input
    let transformedOrderItems = [];
    formData.items.forEach((item, itemIdx) => {
      if (productVariants[itemIdx]) {
        productVariants[itemIdx].forEach((variant) => {
          const input = variantInputs[itemIdx]?.[variant.id];
          if (
            checkedVariants[itemIdx]?.[variant.id] && // Only if checked
            input &&
            input.quantity &&
            parseInt(input.quantity) > 0 &&
            (!variant.use_meter_pricing ||
              (input.meter_range_id && input.meter_range_id !== ""))
          ) {
            // Get price/discount from meter range if needed
            let price_per_unit = variant.price;
            let discount_applied = variant.discount;
            let meter_range_id = null;
            if (variant.use_meter_pricing && input.meter_range_id) {
              const meter = variant.meter_pricing.find(
                (mp) => mp.meter_range_id == input.meter_range_id
              );
              if (meter) {
                price_per_unit = meter.price;
                discount_applied = meter.discount;
                meter_range_id = meter.meter_range_id;
              }
            }
            const quantity = parseInt(input.quantity);
            const total_price =
              (parseFloat(price_per_unit) - parseFloat(discount_applied)) *
              quantity;
            transformedOrderItems.push({
              variant_id: variant.id,
              meter_range_id,
              quantity,
              price_per_unit,
              discount_applied,
              total_price,
            });
          }
        });
      }
    });

    if (!transformedOrderItems.length) {
      toast.error("Please choose at least one product before submitting.");
      return;
    }

    if (!updatedFormData.order?.payment_method) {
      toast.error("Payment Method is required.");
      return;
    }

    // ─── CUSTOMER / BUSINESS ID LOGIC ─────────────────────────
    if (updatedFormData.business_id) {
      updatedFormData.customer_id = selectedCustomerId || "";
    } else {
      if (selectedCustomerId) updatedFormData.customer_id = selectedCustomerId;
      delete updatedFormData.business_id;
    }

    // ─── TRANSFORM ITEMS ───────────────────────────────────────
    // Add selected special prices (customer)
    if (selectedSpecialPriceIds.length > 0) {
      selectedSpecialPriceIds.forEach((id) => {
        const item = specialPrices.find((sp) => sp.id === id);
        const edited = editedSpecialPrice[id] || {};
        if (item) {
          const special_price = parseFloat(
            edited.special_price ?? item.special_price ?? 0
          );
          const quantity = parseFloat(edited.quantity ?? item.quantity ?? 0);
          const discount = parseFloat(
            edited.variant_discount ?? item.variant_discount ?? 0
          );
          const total_price = quantity * (special_price - discount);
          transformedOrderItems.push({
            variant_id: item.variant_id,
            meter_range_id: item.meter_range_id || null,
            quantity,
            price_per_unit: special_price,
            discount_applied: discount,
            total_price,
          });
        }
      });
    }

    // Add selected business special prices
    if (selectedBusinessSpecialPriceIds.length > 0) {
      selectedBusinessSpecialPriceIds.forEach((id) => {
        const item = specialBusinessPrices.find((sp) => sp.id === id);
        const edited = editedBusinessSpecialPrice[id] || {};
        if (item) {
          const special_price = parseFloat(
            edited.special_price ?? item.special_price ?? 0
          );
          const quantity = parseFloat(edited.quantity ?? item.quantity ?? 0);
          const discount = parseFloat(
            edited.variant_discount ?? item.variant_discount ?? 0
          );
          const total_price = quantity * (special_price - discount);
          transformedOrderItems.push({
            variant_id: item.variant_id,
            meter_range_id: item.meter_range_id || null,
            quantity,
            price_per_unit: special_price,
            discount_applied: discount,
            total_price,
          });
        }
      });
    }

    // ─── Compute Grand Total ────────────────────────────────
    // Use values from formData.order that are calculated by updateOrderTotals

    const total_amount = transformedOrderItems.reduce(
      (sum, item) => sum + parseFloat(item.total_price || 0),
      0
    );
    const vat_percentage = 20;
    const vat_amount = parseFloat(
      ((total_amount * vat_percentage) / 100).toFixed(2)
    );
    const delivery_amount = 0;
    const payable_amount = parseFloat(
      (total_amount + vat_amount + delivery_amount).toFixed(2)
    );
    const grossAmount = transformedOrderItems.reduce(
      (sum, item) =>
        sum +
        parseFloat(item.price_per_unit || 0) * parseFloat(item.quantity || 0),
      0
    );
    const order_discount_amount = parseFloat(
      (grossAmount - total_amount).toFixed(2)
    );

    // Use these values in the payload
    const finalPayload = {
      ...updatedFormData,
      order: {
        order_date: updatedFormData.order.order_date,
        status: updatedFormData.order.status,
        total_amount,
        order_discount_amount,
        vat_percentage,
        vat_amount,
        delivery_amount,
        payable_amount,
        payment_method: updatedFormData.order.payment_method,
        payment_status: updatedFormData.order.payment_status,
        source: updatedFormData.order.source,
        source_reference: updatedFormData.order.source_reference,
      },
      items: transformedOrderItems,
    };

    // ─── Handle Address IDs or Raw Addresses ──────────────────
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

    // ─── ADDRESS VALIDATION ─────────────────────────────
    // Billing address: either selected (billingAddress) or filled in Add Addresses
    const billingFilled =
      formData.billing_addresses &&
      formData.billing_addresses.length > 0 &&
      Object.values(formData.billing_addresses[0]).every(
        (val) => val && val.trim() !== ""
      );
    const hasBilling = billingAddress || billingFilled;
    if (!hasBilling) {
      toast.error("Billing address is required.");
      return;
    }
    // Shipping address: either selected (shippingAddress) or filled in Add Addresses
    const shippingFilled =
      formData.shipping_addresses &&
      formData.shipping_addresses.length > 0 &&
      Object.values(formData.shipping_addresses[0]).every(
        (val) => val && val.trim() !== ""
      );
    const hasShipping = shippingAddress || shippingFilled;
    if (!hasShipping) {
      toast.error("Shipping address is required.");
      return;
    }

    // ─── Submit ───────────────────────────────────────────────
    API.post("/api/new-order-new-latest", finalPayload)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Order Placed Successfully!");

          // Reset form
          setFormData({
            order_type: "",
            business_id: "",
            customer_id: "",
            billing_id: "",
            shipping_id: "",
            order: {
              order_date: "",
              status: "pending",
              total_amount: "",
              order_discount_amount: "",
              vat_percentage: "",
              vat_amount: "",
              delivery_amount: "",
              payable_amount: "",
              payment_method: "",
              payment_status: "pending",
              source: "crm",
              source_reference: null,
            },
            items: [
              {
                variant_id: "",
                quantity: "",
                meter_range_id: "",
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
          setSelectedColor({});
          setSelection({});
          setMeterOptions({});
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
    // console.log(finalPayload, "final payload");
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

  // Add these derived values at the top of the component (after state):
  // Removed old derived values - now using unified calculation in updateOrderTotals()

  return (
    <div className=" w-full z-0 pl-[200px] lg:pl-[250px] xl:pl-[300px]">
      <div className="w-full min-h-[91vh] h-auto px-5  pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
        <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-4">
          Add Order
        </h1>
        <div className="bg-white rounded-[8px] border-1 border-[#D6D6D6] w-full pb-6 p-8 h-auto mt-5">
          <form onSubmit={handleSubmit} action="">
            <div className="flex flex-wrap gap-5 w-full items-center">
              <div className="flex flex-col gap-1 min-w-[160px]">
                <label htmlFor="order_type" className="text-sm font-[600]">
                  Select Customer Type
                </label>
                <div className="relative">
                  <select
                    disabled
                    name="order_type"
                    id="order_type"
                    value={formData.order_type || ""}
                    onChange={(e) => handleTypeChange(e)}
                    className="py-[8.5px] text-sm px-4 border-1 cursor-pointer appearance-none border-[#C5C5C5] rounded-[4px] placeholder:text-[#969696] w-full"
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

              <div className="flex flex-col gap-1 ">
                <label htmlFor="name_selector" className="text-sm font-[600]">
                  Business or Contact Name
                </label>

                <Select
                  isSearchable={false}
                  menuIsOpen={false}
                  className=" text-sm cursor-pointer outline-none appearance-none"
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
                  className="py-[8.5px] px-4 text-sm cursor-pointer rounded-[4px] border-1 border-gray-300"
                />
              </div>
            </div>

            <div className="border border-gray-300 rounded-[6px] p-5 bg-[#f8fff3] w-full mt-6 min-h-50">
              {/* Customer Info - Always show if customer exists */}
              {customer && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">
                    Contact Details
                  </h2>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Customer ID:</strong> {customer.id}
                    </p>
                    <p>
                      <strong>Name:</strong> {customer.first_name}{" "}
                      {customer.middle_name} {customer.last_name}
                    </p>
                    <p>
                      <strong>Email:</strong> {customer.email}
                    </p>
                    {customer.phone ? (
                      <p>
                        <strong>Phone:</strong> {customer.phone}
                      </p>
                    ) : customer.mobile ? (
                      <p>
                        <strong>Mobile:</strong> {customer.mobile}
                      </p>
                    ) : (
                      <p>
                        <strong>Phone:</strong> N/A
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Business Info - Always show if business exists */}
              {business && (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">
                    Business Details
                  </h2>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Business ID:</strong> {business.id}
                    </p>
                    <p>
                      <strong>Name:</strong> {business.business_name}
                    </p>
                    <p>
                      <strong>Type:</strong> {business.business_type}
                    </p>
                    <p>
                      <strong>Category:</strong> {business.category}
                    </p>
                    <p>
                      <strong>Website:</strong> {business.website}
                    </p>
                    <p>
                      <strong>Email:</strong> {business.email}
                    </p>
                    {business.phone ? (
                      <p>
                        <strong>Phone:</strong> {business.phone}
                      </p>
                    ) : business.mobile ? (
                      <p>
                        <strong>Mobile:</strong> {business.mobile}
                      </p>
                    ) : (
                      <p>
                        <strong>Phone:</strong> N/A
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Special Prices and Addresses Section */}
              {(customer || business) && (
                <div className="space-y-4 text-sm">
                  {/* Address Info */}
                  {(() => {
                    const billing =
                      selectedAddresses?.find(
                        (addr) => addr.pivot?.type === "billing"
                      ) ||
                      allAddresses?.find(
                        (addr) => addr.pivot?.type === "billing"
                      );
                    const shipping =
                      selectedAddresses?.find(
                        (addr) => addr.pivot?.type === "shipping"
                      ) ||
                      allAddresses?.find(
                        (addr) => addr.pivot?.type === "shipping"
                      );

                    return (
                      <>
                        <div className="mt-4">
                          <h2 className="text-lg font-semibold mb-2 text-gray-800">
                            Special Prices
                          </h2>

                          {specialPrices.length > 0 ? (
                            <div className="space-y-3">
                              {specialPrices.map((item) => (
                                <div
                                  key={item.id}
                                  className="border border-gray-300 rounded p-3 shadow-sm bg-white flex items-center"
                                >
                                  <input
                                    type="checkbox"
                                    name="selectedSpecialPrice"
                                    value={item.variant_id}
                                    checked={selectedSpecialPriceIds.includes(
                                      item.id
                                    )}
                                    onChange={() =>
                                      handleSpecialPriceCheckbox(item.id)
                                    }
                                    className="mr-3"
                                  />

                                  <div className="flex-1">
                                    <p>
                                      <strong>Variant ID:</strong>{" "}
                                      {item.variant_id}
                                    </p>
                                    <p>
                                      <strong>Special Price:</strong> £
                                      {item.special_price}
                                    </p>

                                    {selectedSpecialPriceIds.includes(
                                      item.id
                                    ) && (
                                      <div className="mt-4 p-4 border rounded bg-gray-50">
                                        <div className="flex items-end flex-wrap gap-6">
                                          {/* Meter Range */}
                                          {item?.uses_meter_range && (
                                            <div className="flex flex-col gap-1">
                                              <label className="text-black font-[500] text-sm">
                                                Meter Range
                                              </label>
                                              <input
                                                type="text"
                                                value={`${item.meter_range_min} - ${item.meter_range_max}`}
                                                readOnly
                                                className="border bg-white border-gray-300 rounded px-2 py-1 w-52"
                                              />
                                            </div>
                                          )}

                                          {/* Price */}
                                          <div className="flex flex-col gap-1">
                                            <label className="text-black font-[500] text-sm">
                                              Price
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                editedSpecialPrice[item.id]
                                                  ?.special_price ??
                                                item.special_price ??
                                                ""
                                              }
                                              onChange={(e) =>
                                                handleSpecialPriceChange(
                                                  "special_price",
                                                  e.target.value,
                                                  item
                                                )
                                              }
                                              className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                            />
                                          </div>

                                          {/* Discount */}
                                          <div className="flex flex-col gap-1">
                                            <label className="text-black font-[500] text-sm">
                                              Discount
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                editedSpecialPrice[item.id]
                                                  ?.variant_discount ??
                                                item.variant_discount ??
                                                ""
                                              }
                                              onChange={(e) =>
                                                handleSpecialPriceChange(
                                                  "variant_discount",
                                                  e.target.value,
                                                  item
                                                )
                                              }
                                              className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                            />
                                          </div>

                                          {/* Quantity */}
                                          <div className="flex flex-col gap-1">
                                            <label className="text-black font-[500] text-sm">
                                              Quantity
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                editedSpecialPrice[item.id]
                                                  ?.quantity ??
                                                item.quantity ??
                                                ""
                                              }
                                              onChange={(e) =>
                                                handleSpecialPriceChange(
                                                  "quantity",
                                                  e.target.value,
                                                  item
                                                )
                                              }
                                              className="border border-gray-300 px-2 bg-white py-1 rounded w-20"
                                            />
                                          </div>

                                          {/* Total Price */}
                                          <div className="flex flex-col gap-1">
                                            <label className="text-black font-[500] text-sm">
                                              Total Price
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                editedSpecialPrice[item.id]
                                                  ?.total_price ??
                                                item.total_price ??
                                                ""
                                              }
                                              readOnly
                                              className="border px-2 py-1 border-gray-300 bg-white rounded w-32"
                                            />
                                          </div>

                                          <div>
                                            <label className="block text-sm font-medium mb-1">
                                              VAT %
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                formData?.order
                                                  ?.vat_percentage ?? 0
                                              }
                                              readOnly
                                              className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                            />
                                          </div>
                                          <div>
                                            <label className="block text-sm font-medium mb-1">
                                              VAT Amount
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                calculateIndividualSpecialPriceTotals(
                                                  item,
                                                  editedSpecialPrice[item.id]
                                                ).vat_amount
                                              }
                                              readOnly
                                              className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                            />
                                          </div>

                                          <div>
                                            <label className="block text-sm font-medium mb-1">
                                              Delivery Amount
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                formData?.order
                                                  ?.delivery_amount ?? 0
                                              }
                                              readOnly
                                              className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                            />
                                          </div>

                                          <div>
                                            <label className="block text-sm font-medium mb-1">
                                              Payable Amount
                                            </label>
                                            <input
                                              type="number"
                                              value={
                                                calculateIndividualSpecialPriceTotals(
                                                  item,
                                                  editedSpecialPrice[item.id]
                                                ).payable_amount
                                              }
                                              readOnly
                                              className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500">
                              No special prices found for this customer.
                            </p>
                          )}
                        </div>

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
              )}

              {/* Business Special Prices Section - Only show if business exists and no customer special prices */}
              {business &&
                specialBusinessPrices.length > 0 &&
                specialPrices.length === 0 && (
                  <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">
                      Business Special Prices
                    </h2>
                    <div className="space-y-3">
                      {specialBusinessPrices.map((item) => (
                        <div
                          key={item.id}
                          className="border border-gray-300 rounded p-3 shadow-sm bg-white flex items-center"
                        >
                          <input
                            type="checkbox"
                            name="selectedBusinessSpecialPrice"
                            value={item.variant_id}
                            checked={selectedBusinessSpecialPriceIds.includes(
                              item.id
                            )}
                            onChange={() =>
                              handleBusinessSpecialPriceCheckbox(item.id)
                            }
                            className="mr-3"
                          />
                          <div className="flex-1">
                            <p>
                              <strong>Variant ID:</strong> {item.variant_id}
                            </p>
                            <p>
                              <strong>Special Price:</strong> £
                              {item.special_price}
                            </p>
                            {selectedBusinessSpecialPriceIds.includes(
                              item.id
                            ) && (
                              <div className="mt-4 p-4 border rounded bg-gray-50">
                                <div className="flex items-end flex-wrap gap-6">
                                  {/* Meter Range */}
                                  {item?.uses_meter_range && (
                                    <div className="flex flex-col gap-1">
                                      <label className="text-black font-[500] text-sm">
                                        Meter Range
                                      </label>
                                      <input
                                        type="text"
                                        value={`${item.meter_range_min} - ${item.meter_range_max}`}
                                        readOnly
                                        className="border bg-white border-gray-300 rounded px-2 py-1 w-52"
                                      />
                                    </div>
                                  )}
                                  {/* Price */}
                                  <div className="flex flex-col gap-1">
                                    <label className="text-black font-[500] text-sm">
                                      Price
                                    </label>
                                    <input
                                      type="number"
                                      value={
                                        editedBusinessSpecialPrice[item.id]
                                          ?.special_price ??
                                        item.special_price ??
                                        ""
                                      }
                                      onChange={(e) =>
                                        handleBusinessSpecialPriceChange(
                                          "special_price",
                                          e.target.value,
                                          item
                                        )
                                      }
                                      className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                    />
                                  </div>
                                  {/* Discount */}
                                  <div className="flex flex-col gap-1">
                                    <label className="text-black font-[500] text-sm">
                                      Discount
                                    </label>
                                    <input
                                      type="number"
                                      name="discount"
                                      value={
                                        editedBusinessSpecialPrice[item.id]
                                          ?.variant_discount ??
                                        item.variant_discount ??
                                        ""
                                      }
                                      onChange={(e) =>
                                        handleBusinessSpecialPriceChange(
                                          "variant_discount",
                                          e.target.value,
                                          item
                                        )
                                      }
                                      className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                    />
                                  </div>
                                  {/* Quantity */}
                                  <div className="flex flex-col gap-1">
                                    <label className="text-black font-[500] text-sm">
                                      Quantity
                                    </label>
                                    <input
                                      type="number"
                                      name="quantity"
                                      value={
                                        editedBusinessSpecialPrice[item.id]
                                          ?.quantity ??
                                        item.quantity ??
                                        ""
                                      }
                                      onChange={(e) =>
                                        handleBusinessSpecialPriceChange(
                                          "quantity",
                                          e.target.value,
                                          item
                                        )
                                      }
                                      className="border border-gray-300 px-2 bg-white py-1 rounded w-20"
                                    />
                                  </div>
                                  {/* Total Price */}
                                  <div className="flex flex-col gap-1">
                                    <label className="text-black font-[500] text-sm">
                                      Total Price
                                    </label>
                                    <input
                                      type="number"
                                      value={
                                        editedBusinessSpecialPrice[item.id]
                                          ?.total_price ??
                                        item.total_price ??
                                        ""
                                      }
                                      readOnly
                                      className="border px-2 py-1 border-gray-300 bg-white rounded w-32"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      VAT %
                                    </label>
                                    <input
                                      type="number"
                                      value={
                                        formData?.order?.vat_percentage ?? 0
                                      }
                                      readOnly
                                      className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      VAT Amount
                                    </label>
                                    <input
                                      type="number"
                                      value={
                                        calculateIndividualSpecialPriceTotals(
                                          item,
                                          editedBusinessSpecialPrice[item.id]
                                        ).vat_amount
                                      }
                                      readOnly
                                      className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      Delivery Amount
                                    </label>
                                    <input
                                      type="number"
                                      value={
                                        formData?.order?.delivery_amount ?? 0
                                      }
                                      readOnly
                                      className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium mb-1">
                                      Payable Amount
                                    </label>
                                    <input
                                      type="number"
                                      value={
                                        calculateIndividualSpecialPriceTotals(
                                          item,
                                          editedBusinessSpecialPrice[item.id]
                                        ).payable_amount
                                      }
                                      readOnly
                                      className="border bg-white border-gray-300 rounded px-2 py-1 w-28"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Business Addresses Section - Only show if business exists and no customer addresses */}
              {business &&
                selectedBusiness?.addresses &&
                selectedBusiness.addresses.length > 0 &&
                !selectedAddresses &&
                !allAddresses && (
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
                      {selectedBusiness.addresses.filter(
                        (addr) => addr.address_type === "billing"
                      ).length > 0 ? (
                        selectedBusiness.addresses
                          .filter((addr) => addr.address_type === "billing")
                          .map((address, idx) => (
                            <div key={idx} className="flex gap-2 items-start">
                              <input
                                type="radio"
                                name="billing_address"
                                checked={billingAddress === address.id}
                                onChange={() => setBillingAddress(address.id)}
                              />

                              <div className="mb-3">
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
                      <h4 className="font-semibold underline mb-2">
                        Shipping Addresses
                      </h4>
                      {selectedBusiness.addresses.filter(
                        (addr) => addr.address_type === "shipping"
                      ).length > 0 ? (
                        selectedBusiness.addresses
                          .filter((addr) => addr.address_type === "shipping")
                          .map((address, idx) => (
                            <div key={idx} className="flex gap-2 items-start">
                              <input
                                type="radio"
                                name="shipping_address"
                                checked={shippingAddress === address.id}
                                onChange={() => setShippingAddress(address.id)}
                              />
                              <ul className="">
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
                )}
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
                {formData.items.map((product, index) => (
                  <div key={index} className="flex flex-col gap-6 w-full mt-6">
                    <div className="flex flex-col justify-between gap-5">
                      <div className="w-[30%]">
                        {/* Product Dropdown */}
                        <div className="w-full min-w-[250px] flex flex-col gap-2">
                          <label
                            className="text-sm font-[500]"
                            htmlFor={`product_name_${index}`}
                          >
                            Product Name List{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Select
                              className="w-full"
                              classNamePrefix="react-select"
                              options={productOptionsFormatted}
                              placeholder="Select Product Name"
                              value={
                                product.product_name
                                  ? {
                                      label: product.product_name,
                                      value: product.product_name,
                                    }
                                  : null
                              }
                              onChange={(selectedOption) => {
                                handleProductChange(
                                  index,
                                  "product_name",
                                  selectedOption.value
                                );
                                handleProductChange(
                                  index,
                                  "product_id",
                                  selectedOption.id
                                );
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      {productVariants[index] &&
                        productVariants[index].length > 0 && (
                          <div className="flex flex-col gap-4">
                            {productVariants[index].map((variant) => {
                              const input =
                                variantInputs[index]?.[variant.id] || {};
                              let price = "";
                              let discount = "";
                              let meter_range_id = null;
                              if (variant.use_meter_pricing) {
                                if (input.meter_range_id) {
                                  const meter = variant.meter_pricing.find(
                                    (mp) =>
                                      mp.meter_range_id == input.meter_range_id
                                  );
                                  if (meter) {
                                    price = meter.price;
                                    discount = meter.discount;
                                    meter_range_id = meter.meter_range_id;
                                  }
                                }
                              } else {
                                price = variant.price;
                                discount = variant.discount;
                              }
                              const quantity = parseInt(input.quantity) || 0;
                              const totalPrice =
                                quantity > 0
                                  ? (parseFloat(price) - parseFloat(discount)) *
                                    quantity
                                  : 0;
                              const vatPercentage = 20;
                              const vatAmount =
                                (totalPrice * vatPercentage) / 100;
                              const deliveryAmount = 0;
                              const payableAmount =
                                totalPrice + vatAmount + deliveryAmount;
                              return (
                                <div
                                  key={variant.id}
                                  className="w-full flex flex-row gap-3 bg-gray-50 p-4 rounded border mb-4 items-start"
                                >
                                  <input
                                    type="checkbox"
                                    checked={
                                      !!checkedVariants[index]?.[variant.id]
                                    }
                                    onChange={() =>
                                      handleVariantCheckbox(index, variant.id)
                                    }
                                    style={{ marginRight: 8 }}
                                    className="cursor-pointer"
                                  />
                                  <div className="flex flex-col gap-1">
                                    <label className="text-sm font-[500]">
                                      Color
                                    </label>
                                    <input
                                      type="text"
                                      value={variant.color_name || ""}
                                      readOnly
                                      className="w-24 py-1 px-4 border border-gray-400 rounded bg-white"
                                    />
                                  </div>
                                  {variant.use_meter_pricing &&
                                    variant.meter_pricing && (
                                      <div className="flex flex-col gap-1">
                                        <label className="text-sm font-[500]">
                                          Meter Range:
                                        </label>
                                        <div className="relative cursor-pointer w-52">
                                          <select
                                            className="bg-white rounded appearance-none px-2 py-1 w-full border cursor-pointer"
                                            value={input.meter_range_id || ""}
                                            onChange={(e) =>
                                              handleVariantInputChange(
                                                index,
                                                variant.id,
                                                "meter_range_id",
                                                e.target.value
                                              )
                                            }
                                          >
                                            <option value="">
                                              Select Meter Range
                                            </option>
                                            {variant.meter_pricing.map((mp) => (
                                              <option
                                                key={mp.meter_range_id}
                                                value={mp.meter_range_id}
                                              >
                                                {mp.min_meters} -{" "}
                                                {mp.max_meters}m (₤{mp.price},
                                                Discount: ₤{mp.discount})
                                              </option>
                                            ))}
                                          </select>

                                          {/* SVG Arrow positioned absolutely */}
                                          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
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
                                    )}
                                  <div className="flex gap-3">
                                    <div className="w-28 ">
                                      <label className="text-sm font-[500]">
                                        Price
                                      </label>
                                      <input
                                        type="number"
                                        value={price}
                                        readOnly
                                        placeholder="price"
                                        className="border bg-white border-gray-300 rounded px-2 py-1 w-28 "
                                      />
                                    </div>
                                    <div className="w-28 ">
                                      <label className="text-sm font-[500]">
                                        Discount
                                      </label>
                                      <input
                                        type="number"
                                        value={discount}
                                        readOnly
                                        placeholder="discount"
                                        className="border bg-white border-gray-300 rounded px-2 py-1 w-28 "
                                      />
                                    </div>
                                    <div className="w-28 ">
                                      <label className="text-sm font-[500]">
                                        Quantity
                                      </label>
                                      <input
                                        type="number"
                                        min="1"
                                        value={input.quantity || ""}
                                        placeholder="quantity"
                                        className="border border-gray-300 px-2 bg-white py-1 rounded w-28 "
                                        onChange={(e) =>
                                          handleVariantInputChange(
                                            index,
                                            variant.id,
                                            "quantity",
                                            e.target.value
                                          )
                                        }
                                        disabled={
                                          variant.use_meter_pricing &&
                                          !input.meter_range_id
                                        }
                                      />
                                    </div>
                                    <div className="w-32 ">
                                      <label className="text-sm font-[500]">
                                        Total Price
                                      </label>
                                      <input
                                        type="number"
                                        value={totalPrice || ""}
                                        readOnly
                                        placeholder="total price"
                                        className="border px-2 py-1 border-gray-300 bg-white rounded w-32 "
                                      />
                                    </div>
                                    <div className="w-28 ">
                                      <label className="text-sm font-[500]">
                                        VAT %
                                      </label>
                                      <input
                                        type="number"
                                        value={vatPercentage}
                                        readOnly
                                        className="border bg-white border-gray-300 rounded px-2 py-1 w-28 "
                                      />
                                    </div>
                                    <div className="w-28 ">
                                      <label className="text-sm font-[500]">
                                        VAT Amount
                                      </label>
                                      <input
                                        type="number"
                                        value={vatAmount || ""}
                                        readOnly
                                        className="border bg-white border-gray-300 rounded px-2 py-1 w-28 "
                                      />
                                    </div>
                                    <div className="w-32 ">
                                      <label className="text-sm font-[500]">
                                        Delivery Amount
                                      </label>
                                      <input
                                        type="number"
                                        value={deliveryAmount}
                                        readOnly
                                        className="border bg-white border-gray-300 rounded px-2 py-1 w-32 "
                                      />
                                    </div>
                                    <div className="w-36 ">
                                      <label className="text-sm font-[500]">
                                        Payable Amount
                                      </label>
                                      <input
                                        type="number"
                                        value={payableAmount || ""}
                                        readOnly
                                        className="border bg-white border-gray-300 rounded px-2 py-1 w-36 "
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                    </div>
                    {formData.items.length > 1 && index !== 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(index)}
                        className="bg-red-400 rounded-md font-[500] py-2 px-4 w-24 text-white hover:underline hover:bg-red-600 text-sm cursor-pointer"
                      >
                        Remove
                      </button>
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
                        Select Payment Method
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

export default AddOrderAuto;
