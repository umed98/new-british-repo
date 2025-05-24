import React, { useState } from "react";
import axios from "axios";

const AddNewOrder = () => {
  //Form Input State
  const [formData, setFormData] = useState({
    customer: {
      name: "",
      email: "",
      phone: "",
      shipping_address: "",
      billing_address: "",
    },
    order: {
      order_date: "",
      status: "pending",
      total_amount: 0,
      payment_method: "credit_card",
      payment_status: "pending",
      source: "offline", // default
      source_reference: null,
    },

    items: [
      {
        variant_id: 0,
        quantity: 1,
        price_per_unit: 0,
        size_id: 1,
        discount_applied: 0,
        total_price: 0,
      },
    ],
  });

  //Customer Section
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      customer: {
        ...prev.customer,
        [name]: value,
      },
    }));
  };

  //Order Section
  const handleOrderChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      order: {
        ...prev.order,
        [name]:
          name === "total_amount"
            ? parseFloat(value)
            : value === ""
            ? null
            : value,
      },
    }));
  };

  //Item Section
  // const handleItemChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const newItems = [...formData.items];
  //   newItems[index][name] =
  //     name === "variant_id" || name === "quantity"
  //       ? parseInt(value)
  //       : parseFloat(value);
  //   newItems[index].total_price =
  //     newItems[index].quantity * newItems[index].price_per_unit;

  //   setFormData((prev) => ({
  //     ...prev,
  //     items: newItems,
  //   }));
  // };

  //Item Section
  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    const newItems = [...formData.items];

    const numericFields = [
      "variant_id",
      "quantity",
      "price_per_unit",
      "size_id",
      "discount_applied",
    ];

    newItems[index][name] = numericFields.includes(name)
      ? parseFloat(value)
      : value;

    // Recalculate total_price
    newItems[index].total_price =
      newItems[index].quantity * newItems[index].price_per_unit;

    setFormData((prev) => ({
      ...prev,
      items: newItems,
    }));
  };


  //Add Item Section Dynamically on "+ Add Item" button
  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          variant_id: 0,
          quantity: 1,
          price_per_unit: 0,
          size_id: 1,
          discount_applied: 0,
          total_price: 0,
        },
      ],
    }));
  };

  //Delete dynamically Added Item Section
  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      items: newItems,
    }));
  };

  //Form Submit To API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        customer: formData.customer,
        order: formData.order,
        items: formData.items,
      };

      console.log(
        "This is payload",
        payload.customer,
        payload.items,
        payload.order
      );
      const response = await axios.post(
        "https://britishquilting.fastranking.tech/api/new-order",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(
        `Order submitted successfully! Order ID: ${response.data.order_id}`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to submit order.");
    }
  };

  return (
    <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
      <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
        <h1 className="font-[600] text-[28px]">Add Order </h1>
        <form onSubmit={handleSubmit} className="">
          <div className="bg-white flex flex-col rounded-[8px] w-full h-[80%] mt-5 py-5">
            <div className="pb-6 px-8 border-b-1 border-gray-300">
              <h2 className="text-[22px] font-[600] mb-4">Customer Info</h2>
              {/* Row 1 */}
              <div className="flex flex-row w-full gap-4 mb-4">
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Name" className="font-[500] text-[16px]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.customer.name}
                    onChange={handleCustomerChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.customer.email}
                    onChange={handleCustomerChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-row w-full gap-4 mb-4">
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Phone" className="font-[500]">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.customer.phone}
                    onChange={handleCustomerChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Shipping Address" className="font-[500]">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    name="shipping_address"
                    placeholder="Shipping Address"
                    value={formData.customer.shipping_address}
                    onChange={handleCustomerChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    required
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-row w-full mb-4">
                <div className="flex flex-col gap-1 w-[calc(50%-8px)]">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Billing Address
                  </label>
                  <input
                    type="text"
                    name="billing_address"
                    placeholder="Billing Address"
                    value={formData.customer.billing_address}
                    onChange={handleCustomerChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="py-6 px-8 border-b-1 border-gray-300">
              <h2 className="text-[22px] font-[600] mb-4">Order Info</h2>
              <div className="flex flex-row w-full gap-4 mb-4">
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Order Date
                  </label>
                  <input
                    type="date"
                    name="order_date"
                    value={formData.order.order_date}
                    onChange={handleOrderChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Total Amount
                  </label>
                  <input
                    type="number"
                    name="total_amount"
                    placeholder="Total Amount"
                    value={formData.order.total_amount}
                    onChange={handleOrderChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-row w-full gap-4 mb-4">
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.order.status}
                    onChange={handleOrderChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Payment Method
                  </label>
                  <select
                    name="payment_method"
                    value={formData.order.payment_method}
                    onChange={handleOrderChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  >
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row w-full gap-4 mb-4">
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Source
                  </label>
                  <select
                    name="source"
                    value={formData.order.source}
                    onChange={handleOrderChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  >
                    <option value="web">Web</option>
                    <option value="offline">Offline</option>
                    <option value="3rd party">3rd Party</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 w-1/2">
                  <label htmlFor="Email" className="font-[500] text-[16px]">
                    Source Refrence
                  </label>
                  <input
                    type="text"
                    name="source_reference"
                    placeholder="Source Reference (optional)"
                    value={formData.order.source_reference || ""}
                    onChange={handleOrderChange}
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 px-8">
              <h2 className="text-[22px] font-[600] mb-4">Item Info</h2>
              {formData.items.map((item, index) => (
                <div key={index} className=" relative">
                  {index > 0 && (
                    <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="absolute -top-6 -right-0 text-red-600 cursor-pointer"
                  >
                    ✖
                  </button>
                  )} 
                  <div key={index} className="py-2 mb-5">
                    <div className="flex flex-row w-full gap-4 mb-4">
                      <div className="flex flex-col gap-1 w-1/2">
                        <label
                          htmlFor="Email"
                          className="font-[500] text-[16px]"
                        >
                          Varient ID
                        </label>
                        <input
                          type="number"
                          name="variant_id"
                          placeholder="Variant ID"
                          value={item.variant_id}
                          onChange={(e) => handleItemChange(e, index)}
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-1/2">
                        <label
                          htmlFor="Email"
                          className="font-[500] text-[16px]"
                        >
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          placeholder="Quantity"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(e, index)}
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-row w-full gap-4 mb-4">
                      <div className="flex flex-col gap-1 w-1/2">
                        <label
                          htmlFor="Email"
                          className="font-[500] text-[16px]"
                        >
                          Price Per Unit
                        </label>
                        <input
                          type="number"
                          name="price_per_unit"
                          placeholder="Price per unit"
                          value={item.price_per_unit}
                          onChange={(e) => handleItemChange(e, index)}
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-1/2">
                        <label
                          htmlFor="Email"
                          className="font-[500] text-[16px]"
                        >
                          Size ID
                        </label>
                        <input
                          type="number"
                          name="size_id"
                          placeholder="Size Id"
                          value={item.size_id}
                          onChange={(e) => handleItemChange(e, index)}
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-row w-full gap-4 mb-4">
                      <div className="flex flex-col gap-1 w-1/2">
                        <label
                          htmlFor="Email"
                          className="font-[500] text-[16px]"
                        >
                          Discount Applied
                        </label>
                        <input
                          type="number"
                          name="discount_applied"
                          placeholder="Discount Applied"
                          value={item.discount_applied}
                          onChange={(e) => handleItemChange(e, index)}
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>
                      <div className="flex flex-col gap-1 w-1/2">
                        <label
                          htmlFor="Email"
                          className="font-[500] text-[16px]"
                        >
                          Total Price
                        </label>
                        <input
                          type="number"
                          name="total_price"
                          placeholder="Total Price"
                          value={item.total_price}
                          readOnly
                          className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addItem}
                className="px-5 py-2 mb-5 font-[600] border-1 border-green-600 text-green-600 bg-green-100 rounded hover:bg-green-200 cursor-pointer"
              >
                + Add Item
              </button>
            </div>

            <button
              type="submit"
              className="mx-8 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewOrder;
