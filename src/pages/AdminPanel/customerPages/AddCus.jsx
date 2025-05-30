import React, { useState } from "react";
import axios from "axios";

const AddCus = () => {
    const [hasBusiness, setHasBusiness] = useState(false);
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
      billing_addresses: [{ address_line_1: "", address_line_2: "", city: "", postal_code: "", country: "" }],
      shipping_addresses: [{ address_line_1: "", address_line_2: "", city: "", postal_code: "", country: "" }],
    },
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
      billing_addresses: [{ address_line_1: "", address_line_2: "", city: "", postal_code: "", country: "" }],
      shipping_addresses: [{ address_line_1: "", address_line_2: "", city: "", postal_code: "", country: "" }],
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
      credit_days: "30",
    },
  });

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleNestedAddressChange = (section, addressType, index, field, value) => {
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
    updatedAddresses.push({ address_line_1: "", address_line_2: "", city: "", postal_code: "", country: "" });
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
      const alreadySelected = prev.payment_details.selected_methods.includes(method);
      const updatedMethods = alreadySelected
        ? prev.payment_details.selected_methods.filter((m) => m !== method)
        : [...prev.payment_details.selected_methods, method];
      return {
        ...prev,
        payment_details: {
          ...prev.payment_details,
          selected_methods: updatedMethods,
        },
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

  try {
    // Create a copy of formData
    const dataToSend = { ...formData };

    // Remove business_details if hasBusiness is false
    if (!hasBusiness) {
      delete dataToSend.business_details;
    }

    await axios.post("https://britishquilting.fastranking.tech/api/new-customer", dataToSend);
    alert("Form submitted successfully!");
  } catch (err) {
    console.error(err);
    alert("Submission failed.");
  }
};


  return (
<form onSubmit={handleSubmit} className="p-6 pl-[320px] space-y-6 max-w-5xl">
  {/* Customer Details */}
  <h2 className="text-2xl font-bold">Customer Details</h2>
  <input type="text" placeholder="TITLE" value={formData.customer_details.title} onChange={(e) => handleInputChange("customer_details", "title", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="FIRST NAME" value={formData.customer_details.first_name} onChange={(e) => handleInputChange("customer_details", "first_name", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="MIDDLE NAME" value={formData.customer_details.middle_name} onChange={(e) => handleInputChange("customer_details", "middle_name", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="LAST NAME" value={formData.customer_details.last_name} onChange={(e) => handleInputChange("customer_details", "last_name", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="EMAIL" value={formData.customer_details.email} onChange={(e) => handleInputChange("customer_details", "email", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="DOB" value={formData.customer_details.dob} onChange={(e) => handleInputChange("customer_details", "dob", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="GENDER" value={formData.customer_details.gender} onChange={(e) => handleInputChange("customer_details", "gender", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="PHONE NUMBER" value={formData.customer_details.phone_number} onChange={(e) => handleInputChange("customer_details", "phone_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="ALTERNATE PHONE NUMBER" value={formData.customer_details.alternate_phone_number} onChange={(e) => handleInputChange("customer_details", "alternate_phone_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="MOBILE NUMBER" value={formData.customer_details.mobile_number} onChange={(e) => handleInputChange("customer_details", "mobile_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="ALTERNATE MOBILE NUMBER" value={formData.customer_details.alternate_mobile_number} onChange={(e) => handleInputChange("customer_details", "alternate_mobile_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />



{/* Temporary Customer Billing and Shipping Addresses (STATIC - SINGLE ADDRESS EACH) */}
<div>
  <h3 className="text-xl font-semibold">BILLING ADDRESS</h3>
  {formData.customer_details.billing_addresses.map((address, index) => (
    <div key={index} className="border p-3 mb-2 rounded">
      <input
        type="text"
        placeholder="Address Line 1"
        value={address.address_line_1}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "billing_addresses", index, "address_line_1", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Address Line 2"
        value={address.address_line_2}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "billing_addresses", index, "address_line_2", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "billing_addresses", index, "city", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Postal Code"
        value={address.postal_code}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "billing_addresses", index, "postal_code", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Country"
        value={address.country}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "billing_addresses", index, "country", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
    </div>
  ))}
  <div>
    <button
      type="button"
      className="border-1 border-gray-400 py-2 px-4"
      onClick={() => addAddress("customer_details", "billing_addresses")}
    >
      + Add more address
    </button>
  </div>
</div>


<div>
  <h3 className="text-xl font-semibold">SHIPPING ADDRESS</h3>
  {formData.customer_details.shipping_addresses.map((address, index) => (
    <div key={index} className="border p-3 mb-2 rounded">
      <input
        type="text"
        placeholder="Address Line 1"
        value={address.address_line_1}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "shipping_addresses", index, "address_line_1", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Address Line 2"
        value={address.address_line_2}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "shipping_addresses", index, "address_line_2", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="City"
        value={address.city}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "shipping_addresses", index, "city", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Postal Code"
        value={address.postal_code}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "shipping_addresses", index, "postal_code", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Country"
        value={address.country}
        onChange={(e) =>
          handleNestedAddressChange("customer_details", "shipping_addresses", index, "country", e.target.value)
        }
        className="w-full border p-2 mb-2 rounded"
      />
    </div>
  ))}
  <div>
    <button
      type="button"
      className="border-1 border-gray-400 py-2 px-4"
      onClick={() => addAddress("customer_details", "shipping_addresses")}
    >
      + Add more address
    </button>
  </div>
</div>



            <div className="flex items-center gap-3 pb-4 px-8">
              <input
                checked={hasBusiness}
                onChange={(e) => setHasBusiness(e.target.checked)}
                className="accent-[#4B215F] cursor-pointer"
                type="checkbox"
              />
              <span className="text-[16px] font-[500] text-[#4B215F]">
                Have Business ?
              </span>
            </div>

 {hasBusiness && (
  <>
  {/* Business Details */}
  <h2 className="text-2xl font-bold">Business Details</h2>
  <input type="text" placeholder="BUSINESS NAME" value={formData.business_details.business_name} onChange={(e) => handleInputChange("business_details", "business_name", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="BUSINESS CATEGORY" value={formData.business_details.business_category} onChange={(e) => handleInputChange("business_details", "business_category", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="BUSINESS TYPE" value={formData.business_details.business_type} onChange={(e) => handleInputChange("business_details", "business_type", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="WEBSITE" value={formData.business_details.website} onChange={(e) => handleInputChange("business_details", "website", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="BUSINESS EMAIL" value={formData.business_details.business_email} onChange={(e) => handleInputChange("business_details", "business_email", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="ALT BUSINESS EMAIL" value={formData.business_details.alt_business_email} onChange={(e) => handleInputChange("business_details", "alt_business_email", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="PHONE NUMBER" value={formData.business_details.b_phone_number} onChange={(e) => handleInputChange("business_details", "b_phone_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="ALTERNATE PHONE NUMBER" value={formData.business_details.alternate_b_phone_number} onChange={(e) => handleInputChange("business_details", "alternate_b_phone_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="MOBILE NUMBER" value={formData.business_details.b_mobile_number} onChange={(e) => handleInputChange("business_details", "b_mobile_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
  <input type="text" placeholder="ALTERNATE MOBILE NUMBER" value={formData.business_details.alternate_b_mobile_number} onChange={(e) => handleInputChange("business_details", "alternate_b_mobile_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />

  
{/* Business Billing Address */}
<div>
  <h3 className="text-xl font-semibold">Business BILLING ADDRESS</h3>
  <div className="border p-3 mb-2 rounded">
    <input
      type="text"
      placeholder="Address Line 1"
      value={formData.business_details.billing_addresses[0].address_line_1}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "billing_addresses", 0, "address_line_1", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="Address Line 2"
      value={formData.business_details.billing_addresses[0].address_line_2}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "billing_addresses", 0, "address_line_2", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="City"
      value={formData.business_details.billing_addresses[0].city}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "billing_addresses", 0, "city", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="Postal Code"
      value={formData.business_details.billing_addresses[0].postal_code}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "billing_addresses", 0, "postal_code", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="Country"
      value={formData.business_details.billing_addresses[0].country}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "billing_addresses", 0, "country", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
  </div>
    <div>
    <button className="border-1 border-gray-400 py-2 px-4"  onClick={() => addAddress("business_details", "billing_addresses")}>+ Add more address</button>
  </div>
</div>

{/* Business Shipping Address */}
<div>
  <h3 className="text-xl font-semibold">Business SHIPPING ADDRESS</h3>
  <div className="border p-3 mb-2 rounded">
    <input
      type="text"
      placeholder="Address Line 1"
      value={formData.business_details.shipping_addresses[0].address_line_1}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "shipping_addresses", 0, "address_line_1", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="Address Line 2"
      value={formData.business_details.shipping_addresses[0].address_line_2}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "shipping_addresses", 0, "address_line_2", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="City"
      value={formData.business_details.shipping_addresses[0].city}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "shipping_addresses", 0, "city", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="Postal Code"
      value={formData.business_details.shipping_addresses[0].postal_code}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "shipping_addresses", 0, "postal_code", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
    <input
      type="text"
      placeholder="Country"
      value={formData.business_details.shipping_addresses[0].country}
      onChange={(e) =>
        handleNestedAddressChange("business_details", "shipping_addresses", 0, "country", e.target.value)
      }
      className="w-full border p-2 mb-2 rounded"
    />
  </div>
  <div>
    <button className="border-1 border-gray-400 py-2 px-4" onClick={() => addAddress("business_details", "shipping_addresses")}>+ Add more address</button>
  </div>
</div>
</>
    )}

  {/* Payment Details */}
  <h2 className="text-2xl font-bold">Payment Details</h2>
  <div className="mb-4">
    <label className="mr-4">
      <input type="checkbox" onChange={() => handlePaymentMethodChange("credit_card")} checked={formData.payment_details.selected_methods.includes("credit_card")} /> Credit Card
    </label>
    <label className="mr-4">
      <input type="checkbox" onChange={() => handlePaymentMethodChange("direct_debit")} checked={formData.payment_details.selected_methods.includes("direct_debit")} /> Direct Debit
    </label>
    <label>
      <input type="checkbox" onChange={() => handlePaymentMethodChange("credit")} checked={formData.payment_details.selected_methods.includes("credit")} /> Credit
    </label>
  </div>

  {/* Payment Method Fields */}
  {formData.payment_details.selected_methods.includes("credit_card") && (
    <>
      <h3 className="font-semibold">Credit Card Info</h3>
      <input type="text" placeholder="CARD NUMBER" value={formData.payment_details.credit_card.card_number} onChange={(e) => handlePaymentFieldChange("credit_card", "card_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <input type="text" placeholder="CARD TYPE" value={formData.payment_details.credit_card.card_type} onChange={(e) => handlePaymentFieldChange("credit_card", "card_type", e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <input type="text" placeholder="EXPIRY DATE" value={formData.payment_details.credit_card.expiry_date} onChange={(e) => handlePaymentFieldChange("credit_card", "expiry_date", e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <input type="text" placeholder="CVV" value={formData.payment_details.credit_card.cvv} onChange={(e) => handlePaymentFieldChange("credit_card", "cvv", e.target.value)} className="w-full border p-2 mb-2 rounded" />
    </>
  )}

  {formData.payment_details.selected_methods.includes("direct_debit") && (
    <>
      <h3 className="font-semibold">Direct Debit Info</h3>
      <input type="text" placeholder="NAME IN BANK" value={formData.payment_details.direct_debit.name_in_bank} onChange={(e) => handlePaymentFieldChange("direct_debit", "name_in_bank", e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <input type="text" placeholder="BANK NAME" value={formData.payment_details.direct_debit.bank_name} onChange={(e) => handlePaymentFieldChange("direct_debit", "bank_name", e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <input type="text" placeholder="ACCOUNT NUMBER" value={formData.payment_details.direct_debit.account_number} onChange={(e) => handlePaymentFieldChange("direct_debit", "account_number", e.target.value)} className="w-full border p-2 mb-2 rounded" />
      <input type="text" placeholder="SORT CODE" value={formData.payment_details.direct_debit.sort_code} onChange={(e) => handlePaymentFieldChange("direct_debit", "sort_code", e.target.value)} className="w-full border p-2 mb-2 rounded" />
    </>
  )}

  {formData.payment_details.selected_methods.includes("credit") && (
    <input type="text" placeholder="CREDIT DAYS" value={formData.payment_details.credit_days} onChange={(e) => handlePaymentFieldChange("credit_days", null, e.target.value)} className="w-full border p-2 mb-2 rounded" />
  )}

  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
    Submit
  </button>
</form>

  );
};

export default AddCus;



{/* Customer Billing and Shipping Addresses (DYNAMIC) */}
  {/* {["billing_addresses", "shipping_addresses"].map((type) => (
    <div key={type}>
      <h3 className="text-xl font-semibold">{type.replace("_", " ").toUpperCase()}</h3>
      {formData.customer_details[type].map((address, i) => (
        <div key={i} className="border p-3 mb-2 rounded">
          <input type="text" placeholder={`Address Line 1 (${i + 1})`} value={address.address_line_1} onChange={(e) => handleNestedAddressChange("customer_details", type, i, "address_line_1", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`Address Line 2 (${i + 1})`} value={address.address_line_2} onChange={(e) => handleNestedAddressChange("customer_details", type, i, "address_line_2", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`City (${i + 1})`} value={address.city} onChange={(e) => handleNestedAddressChange("customer_details", type, i, "city", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`Postal Code (${i + 1})`} value={address.postal_code} onChange={(e) => handleNestedAddressChange("customer_details", type, i, "postal_code", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`Country (${i + 1})`} value={address.country} onChange={(e) => handleNestedAddressChange("customer_details", type, i, "country", e.target.value)} className="w-full border p-2 mb-2 rounded" />
        </div>
      ))}
      <button type="button" className="bg-green-600 text-white px-3 py-1 rounded mb-4" onClick={() => addAddress("customer_details", type)}>
        Add {type.replace("_", " ").replace("addresses", " Address")}
      </button>
    </div>
  ))} */}

  {/* Business Billing & Shipping Addresses (DYNAMIC) */}
  {/* {["billing_addresses", "shipping_addresses"].map((type) => (
    <div key={type}>
      <h3 className="text-xl font-semibold">Business {type.replace("_", " ").toUpperCase()}</h3>
      {formData.business_details[type].map((address, i) => (
        <div key={i} className="border p-3 mb-2 rounded">
          <input type="text" placeholder={`Address Line 1 (${i + 1})`} value={address.address_line_1} onChange={(e) => handleNestedAddressChange("business_details", type, i, "address_line_1", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`Address Line 2 (${i + 1})`} value={address.address_line_2} onChange={(e) => handleNestedAddressChange("business_details", type, i, "address_line_2", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`City (${i + 1})`} value={address.city} onChange={(e) => handleNestedAddressChange("business_details", type, i, "city", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`Postal Code (${i + 1})`} value={address.postal_code} onChange={(e) => handleNestedAddressChange("business_details", type, i, "postal_code", e.target.value)} className="w-full border p-2 mb-2 rounded" />
          <input type="text" placeholder={`Country (${i + 1})`} value={address.country} onChange={(e) => handleNestedAddressChange("business_details", type, i, "country", e.target.value)} className="w-full border p-2 mb-2 rounded" />
        </div>
      ))}
      <button type="button" className="bg-green-600 text-white px-3 py-1 rounded mb-4" onClick={() => addAddress("business_details", type)}>
        Add {type.replace("_", " ").replace("addresses", " Address")}
      </button>
    </div>
  ))} */}
