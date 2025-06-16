import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();
  const [notHasBusiness, setNotHasBusiness] = useState(false);

  const [formData, setFormData] = useState({
    customer_details: {
      title: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      dob: "",
      gender: "",
      phone_number: "",
      alternate_phone_number: "",
      mobile_number: "",
      alternate_mobile_number: "",
      comment: "",
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
    },

    special_pricing: [
      {
        product_id: null,
        apply_to_all: false,
        variants: [
          {
            id: null,
            special_price: null,
          },
        ],
      },
    ],
    business_details: {
      business_name: "",
      business_category: "",
      business_type: "",
      website: "",
      business_email: "",
      alt_business_email: "",
      b_phone_number: "",
      alternate_b_phone_number: "",
      b_mobile_number: "",
      alternate_b_mobile_number: "",
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
    },
    payment_details: {
      selected_methods: [],
      credit_card: {
        card_number: "",
        card_type: "",
        expiry_date: "",
        cvv: "",
      },
      direct_debit: {
        name_in_bank: "",
        bank_name: "",
        account_number: "",
        sort_code: "",
      },
      credit_days: {
        days: 0,
      },
    },
  });

  const [productOptions, setProductOptions] = useState([]);
  const [productVariants, setProductVariants] = useState({});
  const [editVariants, setEditVariants] = useState({});
  const [showVariants, setShowVariants] = useState(
    formData.special_pricing.map(() => false)
  );

  useEffect(() => {
    setShowVariants((prev) => {
      const newLength = formData.special_pricing.length;
      if (prev.length !== newLength) {
        return [...prev, ...Array(newLength - prev.length).fill(false)];
      }
      return prev;
    });
  }, [formData.special_pricing.length]);

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


  const handleEditToggle = (productIndex, variantIndex) => {
    setEditVariants((prev) => ({
      ...prev,
      [productIndex]: {
        ...prev[productIndex],
        [variantIndex]: !prev?.[productIndex]?.[variantIndex],
      },
    }));
  };

  const handleToggleVariants = (index) => {
    setShowVariants((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

const handleProductChange = async (index, field, value) => {
  const updatedProducts = [...formData.special_pricing];
  updatedProducts[index][field] = value;

  if (field === "product_name") {
    const selectedProduct = productOptions.find(
      (p) => p.product_name === value
    );

    if (selectedProduct) {
      updatedProducts[index].product_id = selectedProduct.id;

      try {
        const response = await axios.get(
          `https://britishquilting.fastranking.tech/api/product/${selectedProduct.id}/variants`
        );
        if (response.data.success) {
          setProductVariants((prev) => ({
            ...prev,
            [index]: response.data.product.variants,
          }));

          updatedProducts[index].variants = response.data.product.variants.map((variant) => ({
            id: variant.id,
            special_price: "",
          }));
        }
      } catch (error) {
        console.error("Error fetching variants:", error);
      }
    }
  }

  setFormData((prev) => ({
    ...prev,
    special_pricing: updatedProducts,
  }));
};

  const handleAddProduct = () => {
    setFormData((prev) => ({
      ...prev,
      special_pricing: [
        ...prev.special_pricing,
        {
          product_id: null,
          apply_to_all: false,
          variants: [
            {
              id: null,
              special_price: null,
            },
          ],
        },
      ],
    }));
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...formData.special_pricing];
    updatedProducts.splice(index, 1);

    const updatedShowVariants = [...showVariants];
    updatedShowVariants.splice(index, 1);

    setFormData((prev) => ({
      ...prev,
      special_pricing: updatedProducts,
    }));
    setShowVariants(updatedShowVariants);
  };

const handleVariantChange = (productIndex, variantIndex, field, value) => {
  setFormData(prev => {
    const updatedSpecialPricing = [...prev.special_pricing];
    const variants = [...(updatedSpecialPricing[productIndex].variants || [])];

    const existingVariant = variants[variantIndex] || {};
    variants[variantIndex] = {
      ...existingVariant,
      [field]: value,
      id: existingVariant.id, // Ensure the `variant_id` is kept in state
    };

    updatedSpecialPricing[productIndex] = {
      ...updatedSpecialPricing[productIndex],
      variants,
    };

    return {
      ...prev,
      special_pricing: updatedSpecialPricing,
    };
  });
};


// ------------------------------------------------------------------------------------------------------------------------------------

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleNestedAddressChange = (
    section,
    addressType,
    index,
    field,
    value
  ) => {
    const updatedAddresses = [...formData[section][addressType]];
    updatedAddresses[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [addressType]: updatedAddresses,
      },
    }));
  };

  const addAddress = (section, addressType) => {
    const updatedAddresses = [...formData[section][addressType]];
    updatedAddresses.push({
      address_line_1: "",
      address_line_2: "",
      city: "",
      postal_code: "",
      country: "",
    });
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [addressType]: updatedAddresses,
      },
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setFormData((prev) => {
      const alreadySelected =
        prev.payment_details.selected_methods.includes(method);
      const updatedMethods = alreadySelected
        ? prev.payment_details.selected_methods.filter((m) => m !== method)
        : [...prev.payment_details.selected_methods, method];

      const updatedPaymentDetails = {
        ...prev.payment_details,
        selected_methods: updatedMethods,
      };

      if (!alreadySelected && method === "credit_days") {
        updatedPaymentDetails.credit_days = {
          ...prev.payment_details.credit_days,
          days: prev.payment_details.credit_days?.days || "30",
        };
      }

      return {
        ...prev,
        payment_details: updatedPaymentDetails,
      };
    });
  };

  const handlePaymentFieldChange = (method, field, value) => {
    setFormData((prev) => ({
      ...prev,
      payment_details: {
        ...prev.payment_details,
        [method]: {
          ...prev.payment_details[method],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = { ...formData };

    // Transform special_pricing
    dataToSend.special_pricing = formData.special_pricing.map((product, index) => {
      const base = {
        product_id: product.product_id,
        apply_to_all: !showVariants[index], // true if checkbox is checked
      };

      if (!showVariants[index]) {
        // Apply to all: include one special_price field
        return {
          ...base,
          special_price: product.special_price,
        };
      } else {
        // Apply to selected variants
        return {
          ...base,
          variants: product.variants
  .map((v, variantIndex) => {
    if (editVariants?.[index]?.[variantIndex]) {
      return {
        id: v.id,
        special_price: v.special_price,
      };
    }
    return null;
  })
  .filter(Boolean), // remove unchecked/null entries

        };
      }
    });



    if (
      !dataToSend.payment_details.selected_methods ||
      dataToSend.payment_details.selected_methods.length === 0
    ) {
      delete dataToSend.payment_details;
    }

    if (!notHasBusiness) {
      const {
        business_name,
        b_phone_number,
        b_mobile_number,
        alternate_b_phone_number,
        alternate_b_mobile_number,
      } = dataToSend.business_details;

      if (!business_name || business_name.trim() === "") {
        alert("Business name is required.");
        return;
      }

      const hasBusinessContact =
        b_phone_number ||
        b_mobile_number ||
        alternate_b_phone_number ||
        alternate_b_mobile_number;

      if (!hasBusinessContact) {
        alert(
          "Please provide at least one contact number in the Business section."
        );
        return;
      }
    } else {
      delete dataToSend.business_details;
    }

    const {
      phone_number,
      mobile_number,
      alternate_phone_number,
      alternate_mobile_number,
    } = dataToSend.customer_details;

    const hasCustomerContact =
      phone_number ||
      mobile_number ||
      alternate_phone_number ||
      alternate_mobile_number;

    if (!hasCustomerContact) {
      alert(
        "Please provide at least one contact number in the Customer section."
      );
      return;
    }

    try {
      const response = await axios.post(
        "https://britishquilting.fastranking.tech/api/new-customer",
        dataToSend
      );

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.data?.success === true
      ) {
        alert("Form submitted successfully!");
        navigate("/customer-display");
      } else {
        const errorMessage =
          response.data?.message || "Something went wrong during submission.";
        alert(`Submission failed: ${errorMessage}`);
      }
    } catch (err) {
      console.error("Error:", err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "An unexpected error occurred.";
      alert(`Submission failed: ${errorMessage}`);
    }
  };



  return (
    <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
      <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
        <h1 className="font-[600] text-[28px]">Add Customer </h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-white flex flex-col rounded-[8px] w-full h-[80%] mt-5 pb-5">
            {/* <div className="w-full flex justify-end pt-5 pr-5">
              <button
                type="button"
                className="cursor-pointer w-24 text-right flex gap-3 items-center justify-center border border-[#4B215F] rounded-[4px] bg-white py-2 px-4 text-[#4B215F]"
              >
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.2505 17.4395C19.6645 17.4395 20.0005 17.7755 20.0005 18.1895C20.0005 18.6035 19.6645 18.9395 19.2505 18.9395H11.9975C11.5835 18.9395 11.2475 18.6035 11.2475 18.1895C11.2475 17.7755 11.5835 17.4395 11.9975 17.4395H19.2505ZM14.6163 0.653643C14.6663 0.692643 16.3393 1.99264 16.3393 1.99264C16.9473 2.35464 17.4223 3.00164 17.6023 3.76764C17.7813 4.52564 17.6513 5.30764 17.2343 5.96864C17.2315 5.97305 17.2287 5.97741 17.2191 5.99037L17.2115 6.00038C17.1439 6.08958 16.8496 6.46164 15.3646 8.32223C15.3508 8.34661 15.3351 8.36945 15.3181 8.39164C15.293 8.42435 15.2658 8.45442 15.2367 8.4818C15.1354 8.60934 15.0284 8.74335 14.9159 8.88424L14.688 9.1697C14.2177 9.75868 13.6599 10.4571 12.9981 11.2855L12.6584 11.7106C11.3807 13.3097 9.74443 15.3572 7.64827 17.9796C7.18927 18.5516 6.50127 18.8846 5.76227 18.8936L2.12327 18.9396H2.11327C1.76627 18.9396 1.46427 18.7016 1.38327 18.3626L0.564274 14.8916C0.395274 14.1726 0.563274 13.4306 1.02427 12.8546L10.4443 1.07264C10.4483 1.06864 10.4513 1.06364 10.4553 1.05964C11.4883 -0.175357 13.3563 -0.357357 14.6163 0.653643ZM9.394 4.787L2.19527 13.7916C2.02427 14.0056 1.96127 14.2816 2.02427 14.5466L2.70527 17.4316L5.74427 17.3936C6.03327 17.3906 6.30027 17.2616 6.47727 17.0416C7.38876 15.9012 8.53433 14.4679 9.71213 12.994L10.1288 12.4726L10.5462 11.9502C11.6508 10.5679 12.7421 9.20207 13.6551 8.05886L9.394 4.787ZM11.6103 2.01664L10.331 3.615L14.5918 6.88593C15.4119 5.8587 15.9514 5.18214 16.0013 5.11764C16.1653 4.85164 16.2293 4.47564 16.1433 4.11364C16.0553 3.74264 15.8243 3.42764 15.4913 3.22664C15.4203 3.17764 13.7353 1.86964 13.6833 1.82864C13.0493 1.32064 12.1243 1.40864 11.6103 2.01664Z"
                    fill="#4B215F"
                  />
                </svg>
                Edit
              </button>
            </div> */}
            {/* <div className="flex gap-4 items-center py-3 px-8">
                <img
                  src={asset.demo}
                  alt="profile"
                  className="rounded-full w-24 h-24"
                />

                <button className="font-[600] text-white rounded-[4px] bg-[#4B215F] text-[12px] lg:text-[14px] py-2 px-4 lg:h-[40px] flex items-center gap-1 cursor-pointer">
                  <svg
                    wpostalCodeth="15"
                    height="15"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.16797 15.6465C8.16797 15.9449 8.2865 16.231 8.49747 16.442C8.70845 16.653 8.9946 16.7715 9.29297 16.7715C9.59134 16.7715 9.87749 16.653 10.0885 16.442C10.2994 16.231 10.418 15.9449 10.418 15.6465V10.7715H15.293C15.5913 10.7715 15.8775 10.653 16.0885 10.442C16.2994 10.231 16.418 9.94485 16.418 9.64648C16.418 9.34812 16.2994 9.06197 16.0885 8.85099C15.8775 8.64001 15.5913 8.52148 15.293 8.52148H10.418V3.64648C10.418 3.34812 10.2994 3.06197 10.0885 2.85099C9.87749 2.64001 9.59134 2.52148 9.29297 2.52148C8.9946 2.52148 8.70845 2.64001 8.49747 2.85099C8.2865 3.06197 8.16797 3.34812 8.16797 3.64648V8.52148H3.29297C2.9946 8.52148 2.70845 8.64001 2.49747 8.85099C2.2865 9.06197 2.16797 9.34812 2.16797 9.64648C2.16797 9.94485 2.2865 10.231 2.49747 10.442C2.70845 10.653 2.9946 10.7715 3.29297 10.7715H8.16797V15.6465Z"
                      fill="white"
                    />
                  </svg>
                  Upload new picture
                </button>
                <button className="font-[600] text-[#4B215F] rounded-[4px] border-1 border-[#4B215F] bg-white text-[12px] lg:text-[14px] py-2 px-4 h-[35px] lg:h-[40px] flex items-center gap-1 cursor-pointer">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16797 1.33105L9.17466 9.33775"
                      stroke="#4B215F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.45703 1.63672L0.881836 9.03133"
                      stroke="#4B215F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  Remove
                </button>
              </div> */}
            <div className="flex items-center gap-3 pt-5 px-8">
              <input
                checked={notHasBusiness}
                onChange={(e) => setNotHasBusiness(e.target.checked)}
                className="accent-[#4B215F] cursor-pointer"
                type="checkbox"
              />
              <span className="text-[16px] font-[500] text-[#4B215F]">
                Not a Business
              </span>
            </div>

            {/* Business Details start*/}
            {!notHasBusiness && (
              <div className=" border-b-1 border-gray-300 pb-8 px-8">
                <div className="flex justify-between items-center pt-5">
                  <h2 className="text-[22px] font-[600] ">Business Details</h2>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-5 gap-6 ">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="business_name"
                      className="font-[500] text-gray-700"
                    >
                      Business Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="business_name"
                      id="business_name"
                      placeholder="Enter business name"
                      value={formData.business_details.business_name}
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "business_name",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="business_category"
                      className="font-[500] text-gray-700"
                    >
                      Business Category<span className="text-red-500"></span>
                    </label>
                    <div className="relative">
                      <select
                        className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        name="business_category"
                        id="business_category"
                        value={formData.business_details.business_category}
                        onChange={(e) =>
                          handleInputChange(
                            "business_details",
                            "business_category",
                            e.target.value
                          )
                        }
                      >
                        <option value="" selected disabled>
                          Select Business Category
                        </option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="Blogging">Blogging</option>
                        <option value="Marketing">Marketing</option>
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
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="business_type"
                      className="font-[500] text-gray-700"
                    >
                      Business Type<span className="text-red-500"></span>
                    </label>
                    <div className="relative">
                      <select
                        name="business_type"
                        id="business_type"
                        value={formData.business_details.business_type}
                        onChange={(e) =>
                          handleInputChange(
                            "business_details",
                            "business_type",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      >
                        <option value="" selected disabled>
                          Select Business Type
                        </option>
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                        <option value="Ltd">Ltd</option>
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
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="website"
                      className="font-[500] text-gray-700"
                    >
                      Website<span className="text-red-500"></span>
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      placeholder="Enter website name"
                      value={formData.business_details.website}
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "website",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="business_phone"
                      className="font-[500] text-gray-700"
                    >
                      Business Email<span className="text-red-500"></span>
                    </label>
                    <input
                      type="email"
                      name="business_email"
                      id="business_email"
                      placeholder="Enter business email"
                      value={formData.business_details.business_email}
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "business_email",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="business_email"
                      className="font-[500] text-gray-700"
                    >
                      Alt. Business Email
                    </label>
                    <input
                      type="email"
                      name="alt_business_email"
                      id="alt_business_email"
                      placeholder="Enter alt. business email"
                      value={formData.business_details.alt_business_email}
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "alt_business_email",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                </div>
                <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone_number"
                      className="font-[500] text-gray-700"
                    >
                      Business Phone Number
                      <span className="text-red-500"></span>
                    </label>
                    <input
                      type="number"
                      name="b_phone_number"
                      id="b_phone_number"
                      placeholder="Enter business phone number"
                      value={formData.business_details.b_phone_number}
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "b_phone_number",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="alternate_phone_number"
                      className="font-[500] text-gray-700"
                    >
                      Alt. Business Phone Number
                    </label>
                    <input
                      type="number"
                      name="alternate_b_phone_number"
                      id="alternate_b_phone_number"
                      placeholder="Enter alternate phone number"
                      value={formData.business_details.alternate_b_phone_number}
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "alternate_b_phone_number",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="mobile_number"
                      className="font-[500] text-gray-700"
                    >
                      Business Mobile Number
                      <span className="text-red-500"></span>
                    </label>
                    <input
                      type="number"
                      name="b_mobile_number"
                      id="b_mobile_number"
                      placeholder="Enter business mobile number"
                      value={formData.business_details.b_mobile_number}
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "b_mobile_number",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="alternate_mobile_number"
                      className="font-[500] text-gray-700"
                    >
                      Alt. Business Mobile Number
                    </label>
                    <input
                      type="number"
                      name="alternate_b_mobile_number"
                      id="alternate_b_mobile_number"
                      placeholder="Enter alternate business mobile number"
                      value={
                        formData.business_details.alternate_b_mobile_number
                      }
                      onChange={(e) =>
                        handleInputChange(
                          "business_details",
                          "alternate_b_mobile_number",
                          e.target.value
                        )
                      }
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                </div>

                {/* Address Details start*/}
                <div className=" mt-3">
                  <h2 className="mt-5 text-[18px] font-[500]">
                    Billing Address
                  </h2>
                  <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="address_line_1"
                        className="font-[500] text-gray-700"
                      >
                        Address Line 1<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="address_line_1"
                        id="bus_b_address_line_1"
                        placeholder="Enter address 1"
                        value={
                          formData.business_details.billing_addresses[0]
                            .address_line_1
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "billing_addresses",
                            0,
                            "address_line_1",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="address_line_2"
                        className="font-[500] text-gray-700"
                      >
                        Address Line 2<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="address_line_2"
                        id="b_address_line_2"
                        placeholder="Enter address 2"
                        value={
                          formData.business_details.billing_addresses[0]
                            .address_line_2
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "billing_addresses",
                            0,
                            "address_line_2",
                            e.target.value
                          )
                        }
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
                        City<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={
                          formData.business_details.billing_addresses[0].city
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "billing_addresses",
                            0,
                            "city",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="postal_code"
                        className="font-[500] text-gray-700"
                      >
                        Postal Code<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        placeholder="Enter postal code"
                        value={
                          formData.business_details.billing_addresses[0]
                            .postal_code
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "billing_addresses",
                            0,
                            "postal_code",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="country"
                        className="font-[500] text-gray-700"
                      >
                        Country<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Enter postal code"
                        value={
                          formData.business_details.billing_addresses[0].country
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "billing_addresses",
                            0,
                            "country",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-3 pb-8 ">
                  <h2 className="mt-5 text-[18px] font-[500]">
                    Shipping Address
                  </h2>
                  <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="address_line_1"
                        className="font-[500] text-gray-700"
                      >
                        Address Line 1<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="address_line_1"
                        placeholder="Enter address 1"
                        value={
                          formData.business_details.shipping_addresses[0]
                            .address_line_1
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "shipping_addresses",
                            0,
                            "address_line_1",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="address_line_2"
                        className="font-[500] text-gray-700"
                      >
                        Address Line 2<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="address_line_2"
                        placeholder="Enter address 2"
                        value={
                          formData.business_details.shipping_addresses[0]
                            .address_line_2
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "shipping_addresses",
                            0,
                            "address_line_2",
                            e.target.value
                          )
                        }
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
                        City<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={
                          formData.business_details.shipping_addresses[0].city
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "shipping_addresses",
                            0,
                            "city",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="postal_code"
                        className="font-[500] text-gray-700"
                      >
                        Postal Code<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        placeholder="Enter postal code"
                        value={
                          formData.business_details.shipping_addresses[0]
                            .postal_code
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "shipping_addresses",
                            0,
                            "postal_code",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="country"
                        className="font-[500] text-gray-700"
                      >
                        Country<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Enter postal code"
                        value={
                          formData.business_details.shipping_addresses[0]
                            .country
                        }
                        onChange={(e) =>
                          handleNestedAddressChange(
                            "business_details",
                            "shipping_addresses",
                            0,
                            "country",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>
                  </div>
                </div>
                {/* Address Details ends*/}
              </div>
            )}
            {/* Business Details ends*/}

            {/* Customer Info Start */}
            <div className="px-8 pt-4 pb-8 border-b-1 border-gray-300">
              <h2 className="text-[22px] font-[600] pt-4">Customer Details</h2>
              <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="font-[500] text-gray-700">
                    Title<span className="text-red-500"></span>
                  </label>
                  <div className="relative">
                    <select
                      className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      name="title"
                      id="title"
                      value={formData.customer_details.title}
                      onChange={(e) =>
                        handleInputChange(
                          "customer_details",
                          "title",
                          e.target.value
                        )
                      }
                    >
                      <option value="select_title" selected disabled>
                        Select Title
                      </option>
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Mrs">Mrs.</option>
                      <option value="Dr">Dr.</option>
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
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="first_name"
                    className="font-[500] text-gray-700"
                  >
                    First Name<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.customer_details.first_name}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "first_name",
                        e.target.value
                      )
                    }
                    placeholder="Enter first name"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="middle_name"
                    className="font-[500] text-gray-700"
                  >
                    Middle Name<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="middle_name"
                    value={formData.customer_details.middle_name}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "middle_name",
                        e.target.value
                      )
                    }
                    placeholder="Enter middle name"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="last_name"
                    className="font-[500] text-gray-700"
                  >
                    Last Name<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.customer_details.last_name}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "last_name",
                        e.target.value
                      )
                    }
                    placeholder="Enter last name"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
              </div>

              <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-5 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="price" className="font-[500] text-gray-700">
                    Email<span className="text-red-500"></span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.customer_details.email}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "email",
                        e.target.value
                      )
                    }
                    placeholder="Enter your email"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price" className="font-[500] text-gray-700">
                    Alt. Email
                  </label>
                  <input
                    type="email"
                    name="alt_email"
                    placeholder="Enter your alt. email"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="dob" className="font-[500] text-gray-700">
                    Date Of Birth<span className="text-red-500"></span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formData.customer_details.dob}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "dob",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="gender" className="font-[500] text-gray-700">
                    Gender<span className="text-red-500"></span>
                  </label>
                  <div className="relative">
                    <select
                      className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      name="gender"
                      id="gender"
                      value={formData.customer_details.gender}
                      onChange={(e) =>
                        handleInputChange(
                          "customer_details",
                          "gender",
                          e.target.value
                        )
                      }
                    >
                      <option value="" selected disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
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

              <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone_number"
                    className="font-[500] text-gray-700"
                  >
                    Phone Number<span className="text-red-500"></span>
                  </label>
                  <input
                    type="number"
                    name="phone_number"
                    id="phone_number"
                    value={formData.customer_details.phone_number}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "phone_number",
                        e.target.value
                      )
                    }
                    placeholder="Enter phone number"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="alternate_phone_number"
                    className="font-[500] text-gray-700"
                  >
                    Alt. Phone Number
                  </label>
                  <input
                    type="number"
                    name="alternate_phone_number"
                    id="alternate_phone_number"
                    value={formData.customer_details.alternate_phone_number}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "alternate_phone_number",
                        e.target.value
                      )
                    }
                    placeholder="Enter alternate phone number"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="mobile_number"
                    className="font-[500] text-gray-700"
                  >
                    Mobile Number<span className="text-red-500"></span>
                  </label>
                  <input
                    type="number"
                    name="mobile_number"
                    id="mobile_number"
                    value={formData.customer_details.mobile_number}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "mobile_number",
                        e.target.value
                      )
                    }
                    placeholder="Enter mobile number"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="alternate_mobile_number"
                    className="font-[500] text-gray-700"
                  >
                    Alt. Mobile Number
                  </label>
                  <input
                    type="number"
                    name="alternate_mobile_number"
                    id="alternate_mobile_number"
                    value={formData.customer_details.alternate_mobile_number}
                    onChange={(e) =>
                      handleInputChange(
                        "customer_details",
                        "alternate_mobile_number",
                        e.target.value
                      )
                    }
                    placeholder="Enter alternate mobile number"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label className="text-sm font-[500]" htmlFor="Comment">
                  Comment
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Enter a comment..."
                  rows="4"
                  value={formData.customer_details.comment}
                  onChange={(e) =>
                    handleInputChange(
                      "customer_details",
                      "comment",
                      e.target.value
                    )
                  }
                  className="border-1 border-gray-300 rounded-[8px] px-4 py-3"
                ></textarea>
              </div>

              <div className="flex flex-col gap-4 mt-6 rounded-lg mb-4 border-1 border-[#C5C5C5] p-4">
                {formData.special_pricing.map((product, index) => (
                
                    <div
                      key={index}
                      className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-5 gap-6  p-4 border-1 border-[#d3d3d3] relative"
                    >
                      <div className="flex flex-col gap-2">
                        <label
                          className="text-sm font-[500]"
                          htmlFor={`product_name_${index}`}
                        >
                          Special Price Offer
                        </label>
                        <div className="relative">
                          <select
                            className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-full cursor-pointer"
                            name="product_name"
                            id={`product_name_${index}`}
                            value={product.product_name}
                            onChange={(e) =>
                              handleProductChange(
                                index,
                                "product_name",
                                e.target.value
                              )
                            }
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
                          <div className="pointer-events-none absolute inset-y-0 right-0 top-0 flex items-center px-3 text-gray-500">
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

                      {/* Optional remove button */}
                      {index !== 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveProduct(index)}
                          className="absolute top-1 right-3 text-red-500 hover:text-red-700 text-2xl font-bold cursor-pointer"
                        >
                          x
                        </button>
                      )}

                      {productVariants[index] && (
                        <div className="col-span-4 mt-4 py-4 px-6 border border-gray-200 rounded-lg bg-gray-50">
                          <div className="grid grid-cols-4 gap-5">
                            <div className="flex items-center gap-2 mb-3">
                              <input
                                type="checkbox"
                                name="apply_to_all"
                                id={`all_checkbox_${index}`}
                                checked={!showVariants[index]} // Checked = "All"
                                onChange={() => handleToggleVariants(index)}
                              />
                              <label
                                htmlFor={`all_checkbox_${index}`}
                                className="text-sm font-medium"
                              >
                                Applies To All Varients
                              </label>
                            </div>
                            {(() => {
                              const selected = productOptions.find(
                                (p) => p.product_name === product.product_name
                              );

                              return (
                                !showVariants[index] &&
                                selected && (
                                  <>
                                    <div className="flex flex-col gap-2">
                                      <label
                                        className="text-sm font-[500]"
                                        htmlFor={`price_${index}`}
                                      >
                                        Price
                                      </label>
                                      <input
                                        type="text"
                                        name="price"
                                        id={`price_${index}`}
                                        value={selected.base_price}
                                        onChange={(e) =>
                                          handleProductChange(
                                            index,
                                            "base_price",
                                            e.target.value
                                          )
                                        }
                                        className="py-2 px-4 border-1 bg-white border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-full"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      <label
                                        className="text-sm font-[500]"
                                        htmlFor={`discount_${index}`}
                                      >
                                        Discount
                                      </label>
                                      <input
                                        type="text"
                                        name="discount"
                                        id={`discount_${index}`}
                                        value={selected.base_discount}
                                        onChange={(e) =>
                                          handleProductChange(
                                            index,
                                            "discount",
                                            e.target.value
                                          )
                                        }
                                        className="py-2 px-4 border-1 bg-white border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-full"
                                      />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                      <label
                                        className="text-sm font-[500]"
                                        htmlFor={`special_price_${index}`}
                                      >
                                        Special Price
                                      </label>
                                      <input
                                        type="number"
                                        name="special_price"
                                        id={`special_price_${index}`}
                                        placeholder="Enter special price"
                                        value={product.special_price || ""}
                                        onChange={(e) =>
                                          handleProductChange(
                                            index,
                                            "special_price",
                                            e.target.value
                                          )
                                        }
                                        className="py-2 px-4 border-1 bg-white border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-full"
                                      />
                                    </div>
                                  </>
                                )
                              );
                            })()}
                          </div>
                          {/* Show variants only if "All" is unchecked */}
                          {showVariants[index] && (
                            <>
                              <h3 className="text-md font-semibold mb-2">
                                Available Variants:
                              </h3>

                              <div className="flex flex-col items-end gap-2 w-full ">
                                <p className="mb-2 text-sm w-3/4">
                                  <strong>Product Name:</strong>{" "}
                                  {formData.special_pricing[index]
                                    ?.product_name || "N/A"}
                                </p>
                                <div className="flex flex-col w-3/4 gap-4">
                                  {productVariants[index]?.map(
                                    (variant, variantIndex) => (
                                      <div className="flex items-start gap-3 w-full">
                                        <label className="flex items-center gap-2 text-sm font-medium">
                                          <input
                                            type="checkbox"
                                            checked={
                                              editVariants?.[index]?.[
                                                variantIndex
                                              ] || false
                                            }
                                            onChange={() =>
                                              handleEditToggle(
                                                index,
                                                variantIndex
                                              )
                                            }
                                          />
                                          Edit
                                        </label>
                                        <div
                                          key={variant.id}
                                          className="flex flex-col w-full justify-center border border-gray-300 shadow-sm rounded-lg p-3 bg-white"
                                        >
                                          {/* Header row with details and edit toggle */}
                                          <div className="flex justify-between items-center mb-2">
                                            <div className="flex gap-10">
                                              <p>
                                                <strong>Price:</strong> £
                                                {variant.price}
                                              </p>
                                              <p>
                                                <strong>Discount:</strong> £
                                                {variant.discount}
                                              </p>
                                            </div>
                                          </div>

                                          {/* Editable fields OR static view */}
                                          {editVariants?.[index]?.[
                                            variantIndex
                                          ] ? (
                                            <div className="grid grid-cols-3 border-t-1 border-gray-300 mt-2 pt-1 gap-5">
                                              <div className="flex flex-col gap-1 font-[600]">
                                                <label>Price</label>
                                                <input
                                                  type="text"
                                                  value={variant.price}
                                                  className="border border-gray-300 py-2 font-[400] px-4 rounded-[6px]"
                                                />
                                              </div>
                                              <div className="flex flex-col gap-1 font-[600]">
                                                <label>Discount</label>
                                                <input
                                                  type="text"
                                                  value={variant.discount}
                                                  className="border border-gray-300 py-2 font-[400] px-4 rounded-[6px]"
                                                />
                                              </div>
                                              <div className="flex flex-col gap-1 font-[600]">
                                                <label>Special Price</label>
                                                <input
                                                  type="number"
                                                  name="special_price"
                                                  value={
                                                    variant.special_price 
                                                  }
                                                  onChange={(e) =>
                                                    handleVariantChange(
                                                      index,
                                                      variantIndex,
                                                      "special_price",
                                                      e.target.value
                                                    )
                                                  }
                                                  placeholder="Enter special price"
                                                  className="border border-gray-300 py-2 font-[400] px-4 rounded-[6px]"
                                                />
                                              </div>
                                            </div>
                                          ) : null}
                                        </div>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                
                ))}
              </div>
              <button
                type="button"
                onClick={handleAddProduct}
                className="border-1 border-violet-900 text-violet-900 rounded-[8px] font-[500] py-2 px-4 w-40 cursor-pointer hover:bg-violet-900 hover:text-white"
              >
                + Add Product
              </button>
            </div>
            {/* Customer Info Ends */}

            {/* Address Details start*/}
            <div className="px-8 mt-3">
              <h2 className="mt-5 text-[18px] font-[500]">Billing Address</h2>
              <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address_line_1"
                    className="font-[500] text-gray-700"
                  >
                    Address Line 1<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="address_line_1"
                    placeholder="Enter address 1"
                    value={
                      formData.customer_details.billing_addresses[0]
                        .address_line_1
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "billing_addresses",
                        0,
                        "address_line_1",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address_line_2"
                    className="font-[500] text-gray-700"
                  >
                    Address Line 2<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="address_line_2"
                    placeholder="Enter address 2"
                    value={
                      formData.customer_details.billing_addresses[0]
                        .address_line_2
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "billing_addresses",
                        0,
                        "address_line_2",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
              </div>
              <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className="font-[500] text-gray-700">
                    City<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formData.customer_details.billing_addresses[0].city}
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "billing_addresses",
                        0,
                        "city",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="postal_code"
                    className="font-[500] text-gray-700"
                  >
                    Postal Code <span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="postal_code"
                    placeholder="Enter postal code"
                    value={
                      formData.customer_details.billing_addresses[0].postal_code
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "billing_addresses",
                        0,
                        "postal_code",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className="font-[500] text-gray-700">
                    Country<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter postal code"
                    value={
                      formData.customer_details.billing_addresses[0].country
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "billing_addresses",
                        0,
                        "country",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3 px-8 pb-8 ">
              <h2 className="mt-5 text-[18px] font-[500]">Shipping Address</h2>
              <div className="w-full grid md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address_line_1"
                    className="font-[500] text-gray-700"
                  >
                    Address Line 1<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="address_line_1"
                    placeholder="Enter address 1"
                    value={
                      formData.customer_details.shipping_addresses[0]
                        .address_line_1
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "shipping_addresses",
                        0,
                        "address_line_1",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address_line_2"
                    className="font-[500] text-gray-700"
                  >
                    Address Line 2<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="address_line_2"
                    placeholder="Enter address 2"
                    value={
                      formData.customer_details.shipping_addresses[0]
                        .address_line_2
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "shipping_addresses",
                        0,
                        "address_line_2",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
              </div>
              <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-5 gap-6 ">
                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className="font-[500] text-gray-700">
                    City<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formData.customer_details.shipping_addresses[0].city}
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "shipping_addresses",
                        0,
                        "city",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="postal_code"
                    className="font-[500] text-gray-700"
                  >
                    Postal Code<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="postal_code"
                    placeholder="Enter postal code"
                    value={
                      formData.customer_details.shipping_addresses[0]
                        .postal_code
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "shipping_addresses",
                        0,
                        "postal_code",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country" className="font-[500] text-gray-700">
                    Country<span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Enter postal code"
                    value={
                      formData.customer_details.shipping_addresses[0].country
                    }
                    onChange={(e) =>
                      handleNestedAddressChange(
                        "customer_details",
                        "shipping_addresses",
                        0,
                        "country",
                        e.target.value
                      )
                    }
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
              </div>
            </div>
            {/* Address Details ends*/}

            {/* Payment Section */}
            <div className="border border-[#dadada] rounded-lg p-6 m-8 bg-[#f7fff3]">
              <h2 className="text-[22px] font-semibold mb-4">Payment method</h2>

              {/* <div className="flex items-center gap-6 mb-6">
                {["credit_card", "debit", "cheque", "cash", "credit"].map(
                  (method) => (
                    <label
                      key={method}
                      className={`flex items-center gap-2 font-[500] cursor-pointer ${
                        paymentMethods.includes(method)
                          ? "text-black"
                          : "text-[#717984]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={method}
                        checked={paymentMethods.includes(method)}
                        onChange={() => handlePaymentChange(method)}
                        className="accent-[#4B215F]"
                      />
                      {method === "credit_card"
                        ? "Credit Card"
                        : method === "debit"
                        ? "Direct Debit"
                        : method === "cheque"
                        ? "Cheque"
                        : method === "credit"
                        ? "Credit"
                        : "Cash"}
                    </label>
                  )
                )}
              </div> */}

              <div className="mb-4 flex items-center gap-5">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={() => handlePaymentMethodChange("credit_card")}
                    checked={formData.payment_details.selected_methods.includes(
                      "credit_card"
                    )}
                  />{" "}
                  Credit Card
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={() => handlePaymentMethodChange("direct_debit")}
                    checked={formData.payment_details.selected_methods.includes(
                      "direct_debit"
                    )}
                  />{" "}
                  Direct Debit
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={() => handlePaymentMethodChange("cash")}
                    checked={formData.payment_details.selected_methods.includes(
                      "cash"
                    )}
                  />{" "}
                  Cash
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={() => handlePaymentMethodChange("cheque")}
                    checked={formData.payment_details.selected_methods.includes(
                      "cheque"
                    )}
                  />{" "}
                  Cheque
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={() => handlePaymentMethodChange("credit_days")}
                    checked={formData.payment_details.selected_methods.includes(
                      "credit_days"
                    )}
                  />{" "}
                  Credit
                </label>
              </div>

              {/* Credit Card Section */}
              {formData.payment_details.selected_methods.includes(
                "credit_card"
              ) && (
                <div className="space-y-4 lg:w-[90%] w-[100%] mb-6">
                  <h3 className="font-semibold text-lg">Credit Card Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-1">
                        Card Number<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="card_number"
                        placeholder="Enter card number"
                        value={formData.payment_details.credit_card.card_number}
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "credit_card",
                            "card_number",
                            e.target.value
                          )
                        }
                        className="w-full py-2 px-4 border border-[#C0C0C0] rounded-[8px] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">
                        Card Type<span className="text-red-500"></span>
                      </label>
                      <select
                        name="card_type"
                        value={formData.payment_details.credit_card.card_type}
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "credit_card",
                            "card_type",
                            e.target.value
                          )
                        }
                        className="py-2 px-4 border-1 bg-white appearance-none border-[#C5C5C5] rounded-[8px] w-full"
                      >
                        <option value="" disabled selected>
                          Select Card Type
                        </option>
                        <option value="Visa">Visa</option>
                        <option value="Master">Master</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-1">
                        Expire Date<span className="text-red-500"></span>
                      </label>
                      <input
                        type="date"
                        name="expiry_date"
                        value={formData.payment_details.credit_card.expiry_date}
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "credit_card",
                            "expiry_date",
                            e.target.value
                          )
                        }
                        className="w-full py-2 px-4 border border-[#C0C0C0] rounded-[8px] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="Enter CVV number"
                        value={formData.payment_details.credit_card.cvv}
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "credit_card",
                            "cvv",
                            e.target.value
                          )
                        }
                        className="w-full py-2 px-4 border border-[#C0C0C0] rounded-[8px] bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Direct Debit Section */}
              {formData.payment_details.selected_methods.includes(
                "direct_debit"
              ) && (
                <div className="space-y-4 lg:w-[90%] w-[100%] mb-6">
                  <h3 className="font-semibold text-lg">
                    Direct Debit Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-1">
                        Name in the Bank<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="name_in_bank"
                        placeholder="Enter name in bank"
                        value={
                          formData.payment_details.direct_debit.name_in_bank
                        }
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "direct_debit",
                            "name_in_bank",
                            e.target.value
                          )
                        }
                        className="w-full py-2 px-4 border border-[#C0C0C0] rounded-[8px] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">
                        Bank Name<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="bank_name"
                        placeholder="Enter bank name"
                        value={formData.payment_details.direct_debit.bank_name}
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "direct_debit",
                            "bank_name",
                            e.target.value
                          )
                        }
                        className="w-full py-2 px-4 border border-[#C0C0C0] rounded-[8px] bg-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium mb-1">
                        Account Number<span className="text-red-500"></span>
                      </label>
                      <input
                        type="number"
                        name="account_number"
                        placeholder="Enter account number"
                        value={
                          formData.payment_details.direct_debit.account_number
                        }
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "direct_debit",
                            "account_number",
                            e.target.value
                          )
                        }
                        className="w-full py-2 px-4 border border-[#C0C0C0] rounded-[8px] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">
                        Sort Code<span className="text-red-500"></span>
                      </label>
                      <input
                        type="text"
                        name="sort_code"
                        placeholder="Enter sort code"
                        value={formData.payment_details.direct_debit.sort_code}
                        onChange={(e) =>
                          handlePaymentFieldChange(
                            "direct_debit",
                            "sort_code",
                            e.target.value
                          )
                        }
                        className="w-full py-2 px-4 border border-[#C0C0C0] rounded-[8px] bg-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.payment_details.selected_methods.includes(
                "credit_days"
              ) && (
                <div className="flex flex-col gap-2">
                  <label htmlFor="credit" className="font-[500]">
                    Credit<span className="text-red-500"></span>
                  </label>
                  <div className="relative w-[40%]">
                    <select
                      className="py-2 px-4 border-1 bg-white appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      name="credit"
                      id="credit"
                      value={formData.payment_details.credit_days.days || ""}
                      onChange={(e) =>
                        handlePaymentFieldChange(
                          "credit_days",
                          "days",
                          e.target.value
                        )
                      }
                    >
                      <option value={formData.payment_details.credit_days.days}>
                        {formData.payment_details.credit_days.days}
                      </option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="pointer-events-none absolute inset-y-0 top-0 right-0 flex items-center px-3 text-gray-500">
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
            </div>
          </div>
          <div className="w-full py-5 pb-8 flex justify-end gap-5">
            <button
              type="reset"
              className="rounded-[40px] text-[#4B215F] font-[500] text-[18px] border border-[#4B215F] py-2 px-12 cursor-pointer hover:bg-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-[40px] bg-[#4B215F] font-[500] text-[18px] text-white py-2 px-12 cursor-pointer hover:bg-[#704385]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
