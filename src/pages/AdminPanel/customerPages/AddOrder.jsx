import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://britishquilting.fastranking.tech/api/customers")
      .then((res) => {
        if (res.data.status) {
          setCustomers(res.data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const [formData, setFormData] = useState({
    customer_id: "",
    product_code: "",
    quantity: "",
    price: "",
    description: "",
    total_amount: "",
    payment_method: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "customer_id") {
      const selected = customers.find((cust) => cust.id.toString() === value);
      setSelectedCustomer(selected || null);
    }
  };

  const handleAddressChange = (type, index, e) => {
    const { name, value } = e.target;
    const updated = [...formData[type]];
    updated[index][name] = value;
    setFormData({ ...formData, [type]: updated });
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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://britishquilting.fastranking.tech/api/save-new-order",
        formData
      )
      .then((res) => {
        console.log("API Response:", res);

        if (res.status === 201 || res.status === 200) {
          alert("Order submitted successfully!");
          setFormData({
            customer_id: "",
            product_code: "",
            quantity: "",
            price: "",
            description: "",
            total_amount: "",
            payment_method: "",
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
          setSelectedCustomer(null);
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

  return (
    <div className=" w-full z-0 pl-[200px] lg:pl-[250px] xl:pl-[300px]">
      <div className="w-full min-h-[91vh] h-auto px-5  pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
        <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-4">
          Add Order
        </h1>
        <div className="bg-white rounded-[8px] border-1 border-[#D6D6D6] w-full pb-6 p-8 h-auto mt-5">
          <form onSubmit={handleSubmit} action="">
            <div className="flex flex-col gap-1 max-w-[300px]">
              <label htmlFor="Name" className="text-sm font-[600]">
                Business or Customer Name
              </label>
              <div className="relative">
                <select
                  name="customer_id"
                  id="customer_id"
                  value={formData.customer_id}
                  onChange={handleChange}
                  className="py-2 px-4 border-1 cursor-pointer appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                >
                  <option value="" disabled>
                    Select Customer
                  </option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.first_name || "Unnamed"}
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

            <div className="border-1 border-gray-300 rounded-[6px] p-5 bg-[#fffffa] w-full mt-6 min-h-50">
              {selectedCustomer ? (
                <ul className="space-y-2 text-sm">
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
                    <strong>Mobile:</strong> {selectedCustomer.mobile || "N/A"}
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
              ) : (
                <p className="text-gray-500">
                  Please select a customer to view details.
                </p>
              )}
            </div>

            <div className="border-t-1 border-gray-300 py-10 ">
              <h1 className="text-[20px] font-[500]">Product Details</h1>
              <div className="grid grid-cols-2 gap-5">
                <div className="mt-5 flex flex-col gap-1">
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
                </div>
                <div className="mt-5 flex flex-col gap-1">
                  <label htmlFor="Product Code" className="text-sm font-[600]">
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="border-1 border-gray-300 rounded-[6px] py-2 px-4"
                    placeholder="Enter Qualtity"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-1">
                  <label htmlFor="Product Code" className="text-sm font-[600]">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="border-1 border-gray-300 rounded-[6px] py-2 px-4"
                    placeholder="Enter Price"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-1">
                  <label htmlFor="Product Code" className="text-sm font-[600]">
                    Amount
                  </label>
                  <input
                    type="text"
                    name="total_amount"
                    value={formData.total_amount}
                    onChange={handleChange}
                    className="border-1 border-gray-300 rounded-[6px] py-2 px-4"
                    placeholder="Enter Total Amount"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-1">
                  <label htmlFor="Product Code" className="text-sm font-[600]">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border-1 border-gray-300 rounded-[6px] py-2 px-4"
                    placeholder="Enter Qualtity"
                  />
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
                      value={formData.payment_method}
                      onChange={handleChange}
                      className="py-2 px-4 border-1 appearance-none border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
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

            {/* Address Details start*/}
            <div className="border-t-1 border-gray-300 py-10">
              <h1 className="text-[20px] font-[500]"> Address</h1>
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
                            handleAddressChange("shipping_addresses", index, e)
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
                            handleAddressChange("shipping_addresses", index, e)
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
                            handleAddressChange("shipping_addresses", index, e)
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
                            handleAddressChange("shipping_addresses", index, e)
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
                            handleAddressChange("shipping_addresses", index, e)
                          }
                          placeholder="Enter postal code"
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>
                      {/* <button
                        type="button"
                        onClick={() =>
                          removeAddress("shipping_addresses", index)
                        }
                        className="text-red-600"
                      >
                        ❌ Remove
                      </button> */}
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
            {/* Address Details ends*/}

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
