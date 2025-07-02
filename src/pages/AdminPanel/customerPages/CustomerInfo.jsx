import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../../api/API";
import { toast } from "react-toastify";

const CustomerInfo = () => {
  const { id } = useParams(); // gets the ID from URL
  const [customer, setCustomer] = useState(null);
  const [specialPrice, setSpecialPrice] = useState([]);
  // const [businessSpecialPrices, setBusinessSpecialPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedSpecialPriceId, setSelectedSpecialPriceId] = useState(null);
  const [selectedAddressIds, setSelectedAddressIds] = useState(new Set());
  const [selectedSpecialPriceIds, setSelectedSpecialPriceIds] = useState(
    new Set()
  );
  const navigate = useNavigate();

  useEffect(() => {
    API
      .get(`/api/customer/${id}`)
      .then((response) => {
        setCustomer(response.data.data.customer);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer:", error);
        setLoading(false);
      });
  }, [id]);

  // Fetch customer special prices
  useEffect(() => {
    if (id) {
      const fetchCustomerSpecialPrices = async () => {
        try {
          const response = await API.get(
            `/api/customer/${id}/special-prices-new`
          );
          setSpecialPrice(response.data?.data || []);
        } catch (error) {
          console.error("Error fetching customer special prices:", error);
          setSpecialPrice([]);
        }
      };
      fetchCustomerSpecialPrices();
    }
  }, [id]);

  // Fetch business special prices when customer data is loaded
  // useEffect(() => {
  //   if (customer && customer.businesses && customer.businesses.length > 0) {
  //     const fetchBusinessSpecialPrices = async () => {
  //       try {
  //         const businessId = customer.businesses[0].id; // Assuming first business
  //         const response = await API.get(
  //           `/api/business/${businessId}/special-prices-new`
  //         );
  //         setBusinessSpecialPrices(response.data?.data || []);
  //       } catch (error) {
  //         console.error("Error fetching business special prices:", error);
  //         setBusinessSpecialPrices([]);
  //       }
  //     };
  //     fetchBusinessSpecialPrices();
  //   }
  // }, [customer]);

  const toggleAddress = (addrId) => {
    setSelectedAddressIds((prev) => {
      const next = new Set(prev);
      next.has(addrId) ? next.delete(addrId) : next.add(addrId);
      return next;
    });
  };

  const toggleSpecialPrice = (priceId) => {
    setSelectedSpecialPriceIds((prev) => {
      const next = new Set(prev);
      next.has(priceId) ? next.delete(priceId) : next.add(priceId);
      return next;
    });
  };

  if (loading)
    return (
      <div className="w-full h-[90vh]  z-0 pl-[220px] lg:pl-[270px] xl:pl-[330px] px-10 bg-gray-50 flex justify-center items-center">
        <h2 className="text-[28px] font-[600] mb-2">Loading...</h2>
      </div>
    );
  if (!customer)
    return (
      <div className="w-full h-[90vh]  z-0 pl-[220px] lg:pl-[270px] xl:pl-[330px] px-10 bg-gray-50 flex justify-center items-center">
        <h2 className="text-[28px] font-[600] mb-2">Customer not found.</h2>
      </div>
    );

  const handleAddOrder = () => {
    // Pull the objects the user actually selected
    const chosenAddresses = customer.addresses.filter((a) =>
      selectedAddressIds.has(a.id)
    );
    const chosenSpecialPrices = specialPrice.filter((sp) =>
      selectedSpecialPriceIds.has(sp.id)
    );

    // Require at least one billing and one shipping address
    const hasBilling = chosenAddresses.some(a => a.pivot && a.pivot.type === "billing");
    const hasShipping = chosenAddresses.some(a => a.pivot && a.pivot.type === "shipping");
    if (!hasBilling) {
      toast.error("Please select at least one billing address.");
      return;
    }
    if (!hasShipping) {
      toast.error("Please select at least one shipping address.");
      return;
    }


    // if (chosenSpecialPrices.length === 0) {
    //   alert("Please select at least one special price first.");
    //   return;
    // }

    // Prepare comprehensive data to send to AddOrderAuto
    const orderData = {
      // Customer Information
      customer: {
        id: customer.id,
        first_name: customer.first_name,
        middle_name: customer.middle_name,
        last_name: customer.last_name,
        email: customer.email,
        phone: customer.phone,
        mobile: customer.mobile,
        dob: customer.dob,
        is_active: customer.is_active,
        created_at: customer.created_at,
      },

      // Business Information (first business if available)
      business:
        customer.businesses && customer.businesses.length > 0
          ? {
              id: customer.businesses[0].id,
              business_name: customer.businesses[0].business_name,
              business_type: customer.businesses[0].business_type,
              category: customer.businesses[0].category,
              website: customer.businesses[0].website,
              email: customer.businesses[0].email,
              phone: customer.businesses[0].phone,
              mobile: customer.businesses[0].mobile,
            }
          : null,

      // All available businesses
      businesses: customer.businesses,

      // Selected addresses
      selectedAddresses: chosenAddresses,

      // Selected special prices (now an array)
      selectedSpecialPrices: chosenSpecialPrices,

      // All customer addresses (for reference)
      allAddresses: customer.addresses,

      // All customer special prices (for reference)
      allSpecialPrices: specialPrice,
    };

    // Ship everything to the Add-Order page
    navigate("/add-order-auto", {
      state: orderData,
    });
  };

  return (
    <div className="w-full z-0 pl-[220px] lg:pl-[270px] xl:pl-[330px] py-8 px-10 bg-[#F7F7F7]">
      <h2 className="text-[28px] font-[600] mb-4">Customer Information</h2>
      <div className="bg-white p-8 rounded-[8px] shadow-lg">
        {/* Basic Info */}
        <div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Customer ID:</span>{" "}
            {customer.id}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Active:</span>{" "}
            {customer.is_active ? "Yes" : "No"}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">First Name:</span>{" "}
            {customer.first_name}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Middle Name:</span>{" "}
            {customer.middle_name}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Last Name:</span>{" "}
            {customer.last_name}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Email:</span>{" "}
            {customer.email}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Phone:</span>{" "}
            {customer.phone}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Mobile:</span>{" "}
            {customer.mobile}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Date of Birth:</span>{" "}
            {customer.dob}
          </div>
          <div className="text-violet-900 font-[600]">
            <span className="text-gray-900 font-[500]">Created At:</span>{" "}
            {customer.created_at}
          </div>
        </div>

        {/* Businesses */}
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            Business Information
          </h2>
          {customer.businesses.map((biz) => (
            <div
              key={biz.id}
              className="mb-3 p-4 border-1 border-gray-300 rounded-[8px]"
            >
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Name:</span>{" "}
                {biz.business_name}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Type:</span>{" "}
                {biz.business_type}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Category:</span>{" "}
                {biz.category}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Website:</span>{" "}
                {biz.website}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Email:</span>{" "}
                {biz.email}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Phone:</span>{" "}
                {biz.phone}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Mobile:</span>{" "}
                {biz.mobile}
              </div>
            </div>
          ))}
        </div>

        {/* Addresses */}
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Addresses</h2>
          {customer.addresses.map((addr, index) => (
            <div
              key={addr.id}
              className="mb-3 p-4 border-1 border-gray-300 rounded-[8px]"
            >
              <input
                type="checkbox"
                className="mt-1 accent-violet-700"
                checked={selectedAddressIds.has(addr.id)}
                onChange={() => toggleAddress(addr.id)}
              />
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Type:</span>{" "}
                {addr.pivot.type}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Line 1:</span>{" "}
                {addr.address_line1}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Line 2:</span>{" "}
                {addr.address_line2}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">City:</span>{" "}
                {addr.city}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Postal Code:</span>{" "}
                {addr.postal_code}
              </div>
              <div className="text-violet-900 font-[600]">
                <span className="text-gray-900 font-[500]">Country:</span>{" "}
                {addr.country}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Special Prices */}
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">
            Customer Special Prices
          </h2>
          {specialPrice.length > 0 ? (
            specialPrice.map((spl) => (
              <div
                key={spl.id}
                className="mb-3 p-4 border-1 border-gray-300 rounded-[8px] bg-white shadow-sm"
              >
                <input
                  type="checkbox"
                  name="special_price"
                  className="mt-1 accent-violet-700"
                  checked={selectedSpecialPriceIds.has(spl.id)}
                  onChange={() => toggleSpecialPrice(spl.id)}
                />
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">ID:</span> {spl.variant_id}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">
                    Product Name:
                  </span>{" "}
                  {spl.product_name}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">
                    Special Price:
                  </span>{" "}
                  £{spl.special_price}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">Discount:</span> £
                  {spl.variant_discount}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">Width (cm):</span>{" "}
                  {spl.width_cm}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">
                    Available Quantity:
                  </span>{" "}
                  {spl.available_quantity}
                </div>
                {spl.uses_meter_range && (
                  <div className="text-violet-900 font-[600]">
                    <span className="text-gray-900 font-[500]">
                      Meter Range:
                    </span>{" "}
                    {spl.meter_range_min} - {spl.meter_range_max}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-violet-900 font-[600] p-4 border-1 border-gray-300 rounded-[8px] bg-gray-50">
              No customer special prices available.
            </div>
          )}
        </div>

        {/* Business Special Prices */}
        {/* <div>
          <h2 className="text-xl font-semibold mt-4 mb-2">Business Special Prices</h2>
          {businessSpecialPrices.length > 0 ? (
            businessSpecialPrices.map((bizSpl) => (
              <div
                key={bizSpl.id}
                className="mb-3 p-4 border-1 border-gray-300 rounded-[8px] bg-white shadow-sm"
              >
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">ID:</span>{" "}
                  {bizSpl.id}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">Product Name:</span>{" "}
                  {bizSpl.product_name}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">Special Price:</span>{" "}
                  £{bizSpl.special_price}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">Discount:</span>{" "}
                  £{bizSpl.variant_discount}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">Width (cm):</span>{" "}
                  {bizSpl.width_cm}
                </div>
                <div className="text-violet-900 font-[600]">
                  <span className="text-gray-900 font-[500]">Available Quantity:</span>{" "}
                  {bizSpl.available_quantity}
                </div>
                {bizSpl.uses_meter_range && (
                  <div className="text-violet-900 font-[600]">
                    <span className="text-gray-900 font-[500]">Meter Range:</span>{" "}
                    {bizSpl.meter_range_min} - {bizSpl.meter_range_max}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-violet-900 font-[600] p-4 border-1 border-gray-300 rounded-[8px] bg-gray-50">
              No business special prices available.
            </div>
          )}
        </div> */}

        {/* Payment Methods */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Payment Methods</h2>
          {customer.payment_methods.length === 0 ? (
            <div className="text-violet-900 font-[600]">
              No payment methods available.
            </div>
          ) : (
            <>
            <div className="flex gap-4">
             <strong className="text-gray-900 font-[600]">Type:</strong>{" "}
             <div>
            {
            customer.payment_methods.map((pm, index) => (
              <div key={index}>
                <div className="text-violet-900 font-[600]">
                 
                  {pm.type}
                </div>
                {/* Add other payment method fields here */}
              </div>
            ))
            }
            </div>
            </div>
            </>
          )}
        </div>
      </div>
      <div className="w-full flex justify-end">
      <button
        onClick={handleAddOrder}
        className="mt-6 px-6 py-3 bg-violet-900 hover:bg-violet-700 text-white rounded-[8px] font-semibold cursor-pointer"
      >
        Add New Order
      </button>
      </div>
    </div>
  );
};

export default CustomerInfo;
