import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetailNew = () => {
  const { id } = useParams(); // URL param like /orders/31
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `https://britishquilting.fastranking.tech/api/orders/${id}`
        );

        // Update here: Access the correct key
        setOrder(response.data.data);
      } catch (err) {
        console.error("Error fetching order:", err);
        setError("Failed to fetch order.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);


  if (loading) return <p className="pl-[330px] mt-20">Loading...</p>;
  if (error) return <p className="pl-[330px] mt-20">{error}</p>;
  if (!order) return <p className="pl-[330px] mt-20">No order found with ID {id}</p>;

  return (
    <div className="p-6 pl-[330px] bg-gray-50">
      <h2 className="text-[24px] font-[500] mb-4">Order Details</h2>
<div className="bg-white rounded-[8px] p-6 ">
      <div className="mb-4">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Date:</strong> {order.order_date}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Total:</strong> ${order.total_amount}</p>
        <p><strong>Payment Method:</strong> {order.payment_method}</p>
        <p><strong>Payment Status:</strong> {order.payment_status}</p>
        <p><strong>Source:</strong> {order.source}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold text-md text-green-600">Customer</h3>
        <p><strong>Name:</strong> {order.customer?.name}</p>
        <p><strong>Email:</strong> {order.customer?.email}</p>
        <p><strong>Phone:</strong> {order.customer?.phone}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-green-600">Billing Address</h3>
        <p><strong>Address Line 1</strong>{order.billing_address?.address_line1 || "N/A"}</p>
        <p><strong>Address Line 2</strong>{order.billing_address?.address_line2 || "N/A"}</p>
        <p><strong>City:</strong>{order.billing_address?.city || "N/A"}</p>
         <p><strong>Postal Code:</strong>{order.billing_address?.postal_code || "N/A"}</p>
        <p><strong>Country:</strong>{order.billing_address?.country || "N/A"}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-green-600">Shipping Address</h3>
        <p><strong>Address Line 1: {" "}</strong> {order.shipping_address?.address_line1 || "N/A"}</p>
         <p><strong>Address Line 2: {" "}</strong>{order.shipping_address?.address_line1 || "N/A"}</p>
        <p><strong>City: {" "}</strong> {order.shipping_address?.city || "N/A"}</p>
         <p><strong>Postal Code:{" "}</strong>{order.shipping_address?.postal_code || "N/A"}</p>
        <p><strong>Country:{" "}</strong> {order.shipping_address?.country || "N/A"}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-green-600">Items</h3>
        {order.items.map((item) => (
          <div key={item.id} className="mb-2 p-4 border-1 border-gray-400 rounded-md">
            <p><strong>Product:{" "}</strong> {item.product_name}</p>
            <p><strong>Description:{" "}</strong> {item.product_description}</p>
            <p><strong>Size:{" "}</strong> {item.size_label}</p>
            <p><strong>Quantity:{" "}</strong> {item.quantity}</p>
            <p><strong>Price per Unit:{" "}</strong> ${item.price_per_unit}</p>
            <p><strong>Total Price:{" "}</strong> ${item.total_price}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default OrderDetailNew;

