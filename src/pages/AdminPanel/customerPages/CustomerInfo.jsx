import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CustomerInfo = () => {
  const { id } = useParams(); // gets the ID from URL
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://britishquilting.fastranking.tech/api/customer/${id}`)
      .then((response) => {
        setCustomer(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="w-full h-[90vh]  z-0 pl-[220px] lg:pl-[270px] xl:pl-[330px] px-10 bg-gray-50 flex justify-center items-center"><h2 className="text-[28px] font-[600] mb-2">Loading...</h2></div>;
  if (!customer) return <div className="w-full h-[90vh]  z-0 pl-[220px] lg:pl-[270px] xl:pl-[330px] px-10 bg-gray-50 flex justify-center items-center"><h2 className="text-[28px] font-[600] mb-2">Customer not found.</h2></div>;


  return (
    <div className="w-full z-0 pl-[220px] lg:pl-[270px] xl:pl-[330px] py-8 px-10 bg-[#F7F7F7]">
      <h2 className="text-[28px] font-[600] mb-4">Customer Information</h2>
    <div className="bg-white p-8 rounded-[8px] shadow-lg">
      {/* Basic Info */}
      <div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">ID:</span> {customer.id}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Active:</span> {customer.is_active ? "Yes" : "No"}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">First Name:</span> {customer.first_name}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Middle Name:</span> {customer.middle_name}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Last Name:</span> {customer.last_name}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Email:</span> {customer.email}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Phone:</span> {customer.phone}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Mobile:</span> {customer.mobile}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Date of Birth:</span> {customer.dob}</div>
        <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Created At:</span> {customer.created_at}</div>
      </div>

      {/* Addresses */}
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">Addresses</h2>
        {customer.addresses.map((addr, index) => (
          <div key={addr.id} className="mb-3 p-4 border-1 border-gray-300 rounded-[8px]">
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Type:</span> {addr.pivot.type}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Line 1:</span> {addr.address_line1}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Line 2:</span> {addr.address_line2}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">City:</span> {addr.city}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Postal Code:</span> {addr.postal_code}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Country:</span> {addr.country}</div>
          </div>
        ))}
      </div>

      {/* Businesses */}
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2">Business Information</h2>
        {customer.businesses.map((biz) => (
          <div key={biz.id} className="mb-3 p-4 border-1 border-gray-300 rounded-[8px]">
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Name:</span> {biz.business_name}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Type:</span> {biz.business_type}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Category:</span> {biz.category}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Website:</span> {biz.website}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Email:</span> {biz.email}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Phone:</span> {biz.phone}</div>
            <div className="text-violet-900 font-[600]"><span className="text-gray-900 font-[500]">Mobile:</span> {biz.mobile}</div>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Payment Methods</h2>
        {customer.payment_methods.length === 0 ? (
          <div className="text-violet-900 font-[600]">No payment methods available.</div>
        ) : (
          customer.payment_methods.map((pm, index) => (
            <div key={index}>
              <div className="text-violet-900 font-[600]"><strong className="text-gray-900 font-[600]">Type:</strong> {pm.type}</div>
              {/* Add other payment method fields here */}
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default CustomerInfo;






  // // Sample Data
  // const initialData = [
  //   {
  //     orderId: "3556",
  //     totalProduct: "35",
  //     price: "£150",
  //     paymentMethod: "Credit card",
  //     status: "Completed"
  //   },
  //   {
  //     orderId: "3557",
  //     totalProduct: "37",
  //     price: "£180",
  //     paymentMethod: "Cash",
  //     status: "Cancelled"
  //   },
  //   {
  //     orderId: "3558",
  //     totalProduct: "41",
  //     price: "£170",
  //     paymentMethod: "Online",
  //     status: "Shipped"
  //   },
  //   {
  //     orderId: "3559",
  //     totalProduct: "45",
  //     price: "£190",
  //     paymentMethod: "Credit card",
  //     status: "Return"
  //   },
  //   {
  //     orderId: "3560",
  //     totalProduct: "49",
  //     price: "£120",
  //     paymentMethod: "Cash",
  //     status: "Completed"
  //   },
  //   {
  //     orderId: "3561",
  //     totalProduct: "52",
  //     price: "£230",
  //     paymentMethod: "Online",
  //     status: "Cancelled"
  //   },
  //   {
  //     orderId: "3562",
  //     totalProduct: "37",
  //     price: "£180",
  //     paymentMethod: "Cash",
  //     status: "Cancelled"
  //   },
  //   {
  //     orderId: "3563",
  //     totalProduct: "41",
  //     price: "£170",
  //     paymentMethod: "Online",
  //     status: "Shipped"
  //   },
  //   {
  //     orderId: "3564",
  //     totalProduct: "45",
  //     price: "£190",
  //     paymentMethod: "Credit card",
  //     status: "Return"
  //   },
  //   {
  //     orderId: "3565",
  //     totalProduct: "49",
  //     price: "£120",
  //     paymentMethod: "Cash",
  //     status: "Completed"
  //   },
  //   {
  //     orderId: "3566 ",
  //     totalProduct: "52",
  //     price: "£230",
  //     paymentMethod: "Online",
  //     status: "Cancelled"
  //   },
  // ]

  // const [searchTerm, setSearchTerm] = useState("");
  // const [cartFilter, setcartFilter] = useState("All Orders");
  // const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  // const [currentPage, setCurrentPage] = useState(1);
  // const rowsPerPage = 6;

  // // Helper Functions
  // const parsewishlist = (wishlist) =>
  //   parseFloat(wishlist.replace(/[^0-9.]/g, "")) || 0;
  // const parseNumber = (val) => parseInt(val, 10) || 0;

  // // Sorting Logic
  // const sortedData = useMemo(() => {
  //   let sortableData = [...initialData];

  //   const term = searchTerm.trim().toLowerCase();

  //   if (term) {
  //     sortableData = sortableData.filter((item) =>
  //       item.orderId.toString().includes(term) ||
  //       item.totalProduct.toString().includes(term) ||
  //       item.price.toString().includes(term) ||
  //       item.paymentMethod.toLowerCase().includes(term) ||
  //       item.status.toLowerCase().includes(term)
  //    );
  //   }

  //   if (cartFilter !== "All Orders") {
  //     sortableData = sortableData.filter((item) => item.status === cartFilter);
  //   }

  //   if (sortConfig.key) {
  //     sortableData.sort((a, b) => {
  //       let valA = a[sortConfig.key];
  //       let valB = b[sortConfig.key];

  //       // Apply parsing for specific fields
  //       if (sortConfig.key === "price") {
  //         valA = parsewishlist(valA); // Good use here to parse "£150" to 150
  //         valB = parsewishlist(valB);
  //       } else if (
  //         sortConfig.key === "totalProduct"
  //       ) {
  //         valA = parseNumber(valA);
  //         valB = parseNumber(valB);
  //       }

  //       if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
  //       if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
  //       return 0;
  //     });
  //   }

  //   return sortableData;
  // }, [searchTerm, sortConfig, cartFilter]);

  // // Pagination Logic
  // const paginatedData = sortedData.slice(
  //   (currentPage - 1) * rowsPerPage,
  //   currentPage * rowsPerPage
  // );

  // const handleSort = (key) => {
  //   let direction = "asc";
  //   if (sortConfig.key === key && sortConfig.direction === "asc") {
  //     direction = "desc";
  //   }
  //   setSortConfig({ key, direction });
  // };

  // const totalPages = Math.ceil(sortedData.length / rowsPerPage);








    // <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px] ">
    //   <div className="w-full px-5 min-h-[90vh] pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
    //     <div className="flex justify-between w-full items-center">
    //       <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-4">
    //         Customer Information
    //         {/* <span
    //           className={`flex gap-[6px] h-[35px] items-center text-[12px] px-4 border-1 rounded-[40px]  ${
    //             cartFilter === "Completed"
    //               ? "bg-green-100 text-green-700 border-green-700"
    //               : cartFilter === "Cancelled"
    //               ? "bg-red-100 text-red-600 border-red-600"
    //               : cartFilter === "In Progress"
    //               ? "bg-[#FFF6D6] text-[#be9500] border-[#be9500]"
    //               : cartFilter === "Shipped"
    //               ? "bg-[#B8F2FF] text-[#2796AE] border-[#2796AE]"
    //               : cartFilter === "All Orders"
    //               ? "bg-white text-[#4B215F] border-[#4B215F]" : ""
    //           }`}
    //         >
    //           <div className={`w-[7px] h-[7px] rounded-full ${
    //             cartFilter === "Completed"
    //               ? "  bg-green-700"
    //               : cartFilter === "Cancelled"
    //               ? "  bg-red-600"
    //               : cartFilter === "In Progress"
    //               ? "  bg-[#be9500]"
    //               : cartFilter === "Shipped"
    //               ? "  bg-[#2796AE]"
    //               : cartFilter === "All Orders"
    //               ? "bg-[#4B215F]" : ""
    //           }`}></div>
    //           {cartFilter}
    //         </span> */}
    //       </h1>

    //       <div className="flex items-center gap-3 border border-[#D3D3D3] rounded-[4px] h-[35px] lg:h-[40px] px-4 w-[300px] bg-white focus-within:ring-1 focus-within:ring-[#4B215F] transition">
    //         <svg
    //           wpostalCodeth="16"
    //           height="16"
    //           viewBox="0 0 13 13"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="text-[#838383]"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M1.76576 2.07631C3.67219 0.169876 6.76313 0.169876 8.66956 2.07631C10.3998 3.80655 10.5597 6.51247 9.14929 8.42305L12.1215 11.3964C12.4074 11.6824 12.4074 12.146 12.1215 12.432C11.8355 12.718 11.3719 12.718 11.0859 12.432L8.1133 9.45925C6.20267 10.8703 3.49624 10.7106 1.76576 8.98011C-0.140671 7.07368 -0.140671 3.98274 1.76576 2.07631ZM2.80133 3.11188C1.46683 4.44638 1.46683 6.61004 2.80133 7.94454C4.13583 9.27904 6.29949 9.27904 7.63399 7.94454C8.9685 6.61004 8.9685 4.44638 7.63399 3.11188C6.29949 1.77738 4.13583 1.77738 2.80133 3.11188Z"
    //             fill="#838383"
    //           />
    //         </svg>
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           value={searchTerm}
    //           onChange={(e) => setSearchTerm(e.target.value)}
    //           className="w-full bg-transparent text-sm text-[#333] placeholder:text-[#838383] focus:outline-none"
    //         />
    //       </div>
    //     </div>

    //     <div className="bg-white p-6 rounded-[18px] mt-5">
    //       <div className="flex items-start gap-6 flex-wrap border bg-[#FFFFFA] border-purple-800 p-4 rounded-lg">
    //         <div className="flex flex-col gap-8 w-full">
    //         <div className="flex-1 grid sm:grid-cols-3 gap-5">
    //           <div className="flex gap-3 items-center">
    //             <img
    //               src="https://randomuser.me/api/portraits/women/44.jpg"
    //               alt="Jane Cooper"
    //               className="w-14 h-14 rounded-full object-cover"
    //             />
    //             <div>
    //               <p className="text-[15px] text-gray-500">Name</p>
    //               <p className="font-semibold text-[18px] text-gray-900">Jane Cooper</p>
    //             </div>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <svg
    //               className="w-14 h-14"
    //               viewBox="0 0 60 60"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <rect
    //                 x="0.5"
    //                 y="0.5"
    //                 width="59"
    //                 height="59"
    //                 rx="29.5"
    //                 fill="white"
    //               />
    //               <rect
    //                 x="0.5"
    //                 y="0.5"
    //                 width="59"
    //                 height="59"
    //                 rx="29.5"
    //                 stroke="#4B215F"
    //               />
    //               <path
    //                 d="M16.6667 18.333H43.3333C44.25 18.333 45 19.083 45 19.9997V39.9997C45 40.9163 44.25 41.6663 43.3333 41.6663H16.6667C15.75 41.6663 15 40.9163 15 39.9997V19.9997C15 19.083 15.75 18.333 16.6667 18.333Z"
    //                 stroke="#4B215F"
    //                 stroke-width="3"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <path
    //                 d="M15 20.833L30 29.9997L45 20.833"
    //                 stroke="#4B215F"
    //                 stroke-width="3"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </svg>
    //             <div>
    //               <p className="text-[15px] text-gray-500">Email ID</p>
    //               <p className="font-semibold text-[18px] text-gray-900">
    //                 debbie.baker@example.com
    //               </p>
    //             </div>
    //           </div>

    //           <div className="flex items-center gap-3">
    //             <svg
    //               className="w-14 h-14"
    //               viewBox="0 0 60 60"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <rect
    //                 x="0.5"
    //                 y="0.5"
    //                 width="59"
    //                 height="59"
    //                 rx="29.5"
    //                 fill="white"
    //               />
    //               <rect
    //                 x="0.5"
    //                 y="0.5"
    //                 width="59"
    //                 height="59"
    //                 rx="29.5"
    //                 stroke="#4B215F"
    //               />
    //               <path
    //                 d="M22.8267 28.3867C24.7467 32.16 27.84 35.2533 31.6133 37.1733L34.5467 34.24C34.92 33.8667 35.44 33.76 35.9067 33.9067C37.4 34.4 39 34.6667 40.6667 34.6667C41.0203 34.6667 41.3594 34.8071 41.6095 35.0572C41.8595 35.3072 42 35.6464 42 36V40.6667C42 41.0203 41.8595 41.3594 41.6095 41.6095C41.3594 41.8595 41.0203 42 40.6667 42C34.6551 42 28.8897 39.6119 24.6389 35.3611C20.3881 31.1103 18 25.3449 18 19.3333C18 18.9797 18.1405 18.6406 18.3905 18.3905C18.6406 18.1405 18.9797 18 19.3333 18H24C24.3536 18 24.6928 18.1405 24.9428 18.3905C25.1929 18.6406 25.3333 18.9797 25.3333 19.3333C25.3333 21 25.6 22.6 26.0933 24.0933C26.24 24.56 26.1333 25.08 25.76 25.4533L22.8267 28.3867Z"
    //                 fill="#4B215F"
    //               />
    //             </svg>
    //             <div>
    //               <p className="text-[15px] text-gray-500">Phone Number</p>
    //               <p className="font-semibold text-[18px] text-gray-900">
    //                 +44 1254 254 365
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex items-center gap-3 col-span-full">
    //           <svg
    //             className="w-14 h-14"
    //             viewBox="0 0 60 60"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <rect
    //               x="0.5"
    //               y="0.5"
    //               width="59"
    //               height="59"
    //               rx="29.5"
    //               fill="white"
    //             />
    //             <rect
    //               x="0.5"
    //               y="0.5"
    //               width="59"
    //               height="59"
    //               rx="29.5"
    //               stroke="#4B215F"
    //             />
    //             <path
    //               d="M29.9993 13.333C22.666 13.333 16.666 19.333 16.666 26.6663C16.666 35.6663 28.3327 45.833 28.8327 46.333C29.166 46.4997 29.666 46.6663 29.9993 46.6663C30.3327 46.6663 30.8327 46.4997 31.166 46.333C31.666 45.833 43.3327 35.6663 43.3327 26.6663C43.3327 19.333 37.3327 13.333 29.9993 13.333ZM29.9993 42.833C26.4993 39.4997 19.9993 32.333 19.9993 26.6663C19.9993 21.1663 24.4993 16.6663 29.9993 16.6663C35.4993 16.6663 39.9993 21.1663 39.9993 26.6663C39.9993 32.1663 33.4993 39.4997 29.9993 42.833ZM29.9993 19.9997C26.3327 19.9997 23.3327 22.9997 23.3327 26.6663C23.3327 30.333 26.3327 33.333 29.9993 33.333C33.666 33.333 36.666 30.333 36.666 26.6663C36.666 22.9997 33.666 19.9997 29.9993 19.9997ZM29.9993 29.9997C28.166 29.9997 26.666 28.4997 26.666 26.6663C26.666 24.833 28.166 23.333 29.9993 23.333C31.8327 23.333 33.3327 24.833 33.3327 26.6663C33.3327 28.4997 31.8327 29.9997 29.9993 29.9997Z"
    //               fill="#4B215F"
    //             />
    //           </svg>
    //           <div>
    //             <p className="text-[15px] text-gray-500">Billing Address</p>
    //             <p className="font-semibold text-[18px] text-gray-900">
    //               33 Westover Road, Bournemouth, Dorset, BH1 2BZ
    //             </p>
    //           </div>
    //         </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bg-white rounded-[18px] border-1 border-[#D6D6D6] w-full h-auto pb-6 mt-5">
    //       <div className="px-6 pt-5 pb-4 border-b-1 border-[#D6D6D6] flex flex-col lg:flex-row gap-3 items-end w-full lg:justify-between lg:items-center">
    //         <div className="relative w-[140px]">
    //           <select
    //             value={cartFilter}
    //             onChange={(e) => {
    //               setcartFilter(e.target.value);
    //               setCurrentPage(1);
    //             }}
    //             className="appearance-none focus:outline-none text-[12px] lg:text-[14px] text-[#838383] font-[500] border focus-within:ring-1 focus-within:ring-[#4B215F] transition border-[#D3D3D3] h-[35px] lg:h-[40px] w-full p-2 pr-5 lg:pr-10 rounded-[4px] cursor-pointer"
    //           >
    //             <option
    //               className={`text-[#656565] font-[500] ${
    //                 cartFilter == "All Orders"
    //                   ? "bg-[#F9F2AB] text-black"
    //                   : "bg-white"
    //               }`}
    //               value="All Orders"
    //             >
    //               All Orders
    //             </option>
    //             <option
    //               className={`text-[#656565] ${
    //                 cartFilter == "Completed"
    //                   ? "bg-[#F9F2AB] text-black"
    //                   : "bg-white"
    //               } font-[500]`}
    //               value="Completed"
    //             >
    //               Completed
    //             </option>
    //             <option
    //               className={`text-[#656565] ${
    //                 cartFilter == "Return"
    //                   ? "bg-[#F9F2AB] text-black"
    //                   : "bg-white"
    //               } font-[500]`}
    //               value="Return"
    //             >
    //               Return
    //             </option>
    //             <option
    //               className={`text-[#656565] ${
    //                 cartFilter == "Shipped"
    //                   ? "bg-[#F9F2AB] text-black"
    //                   : "bg-white"
    //               } font-[500]`}
    //               value="Shipped"
    //             >
    //               Shipped
    //             </option>
    //             <option
    //               className={`text-[#656565] ${
    //                 cartFilter == "Cancelled"
    //                   ? "bg-[#F9F2AB] text-black"
    //                   : "bg-white"
    //               } font-[500]`}
    //               value="Cancelled"
    //             >
    //               Cancelled
    //             </option>
    //           </select>

    //           <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
    //             <svg
    //               className="w-4 h-4 text-[#4B215F]"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWpostalCodeth={2}
    //                 d="M19 9l-7 7-7-7"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full overflow-x-auto  flex flex-col justify-between  min-h-[500px]">
    //         <table className="w-full table-auto min-w-max">
    //           <thead>
    //             <tr className="border-b-1 border-[#D6D6D6] text-left">
    //               {[
    //                 ["orderId", "Order Id"],
    //                 ["totalProduct", "Total Product"],
    //                 ["price", "Price"],
    //                 ["paymentMethod", "Payment method"],
    //                 ["status", "Status"],
    //               ].map(([key, label]) => (
    //                 <th
    //                   key={key}
    //                   className="py-5 px-6 cursor-pointer relative text-[14px] whitespace-nowrap w-[20%]"
    //                   onClick={() => handleSort(key)}
    //                 >
    //                   {label}
    //                   <span
    //                     className={`${
    //                       key === "action" ? "hpostalCodeden" : ""
    //                     } absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]`}
    //                   >
    //                     <svg
    //                       wpostalCodeth="13"
    //                       height="13"
    //                       viewBox="0 0 13 13"
    //                       fill="none"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path
    //                         d="M8.33984 4.49805L6.08984 2.24805L3.83984 4.49805"
    //                         stroke={
    //                           sortConfig.key === key &&
    //                           sortConfig.direction === "desc"
    //                             ? "#000000"
    //                             : "#D6D6D6"
    //                         }
    //                         stroke-wpostalCodeth="1.5"
    //                         stroke-linecap="round"
    //                         stroke-linejoin="round"
    //                       />
    //                       <path
    //                         d="M8.33984 8.99805L6.08984 11.248L3.83984 8.99805"
    //                         stroke={
    //                           sortConfig.key === key &&
    //                           sortConfig.direction === "desc"
    //                             ? "#D6D6D6"
    //                             : "#000000"
    //                         }
    //                         stroke-wpostalCodeth="1.5"
    //                         stroke-linecap="round"
    //                         stroke-linejoin="round"
    //                       />
    //                     </svg>
    //                   </span>
    //                 </th>
    //               ))}
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {paginatedData.map((row) => (
    //               <tr
    //                 key={row.orderId}
    //                 className="relative border-b-1 border-[#D6D6D6] text-[14px] text-[#656565] font-[500] hover:bg-gray-50"
    //               >
    //                 <td className="p-3 px-6  w-[20%] whitespace-nowrap">
    //                   {row.orderId}
    //                 </td>
    //                 <td className="p-3 px-6  w-[20%] whitespace-nowrap">
    //                   {row.totalProduct}
    //                 </td>
    //                 <td className="p-3 px-6  w-[20%] whitespace-nowrap">
    //                   {row.price}
    //                 </td>
    //                 <td className="p-3 px-6  w-[20%] whitespace-nowrap">
    //                   {row.paymentMethod}
    //                 </td>
    //                 <td className="p-3 px-6 w-[20%] whitespace-nowrap">
    //                   <span
    //                       className={`px-4 py-1 flex justify-center items-center w-[70%] rounded-full font-[500] text-[11.5px]
    //                         ${
    //                           row.status === "Completed"
    //                             ? "bg-green-100 text-green-700"
    //                             : row.status === "Cancelled"
    //                             ? "bg-red-100 text-red-600"
    //                             : row.status === "Return"
    //                             ? "bg-[#FFF6D6] text-[#be9500]"
    //                             : row.status === "Shipped"
    //                             ? "bg-[#B8F2FF] text-[#2796AE]"
    //                             : ""
    //                         }`}
    //                     >
    //                       {row.status}
    //                     </span>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>

    //         {/* Pagination */}
    //         <div className="flex justify-end mt-16 mb-4 gap-2 px-5">
    //           <button
    //             className={`px-3 py-1 rounded cursor-pointer border ${currentPage == 1 ? "text-gray-400 border-gray-400" : "text-black border-black" }  font-[500]`}
    //             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    //             disabled={currentPage === 1}
    //           >
    //             {"<"}
    //           </button>

    //           {Array.from({ length: totalPages }, (_, i) => (
    //             <button
    //               key={i}
    //               onClick={() => setCurrentPage(i + 1)}
    //               className={`px-3 py-1 rounded cursor-pointer ${
    //                 currentPage === i + 1
    //                   ? "border border-black text-black font-[500]"
    //                   : "border border-gray-400 text-gray-400"
    //               }`}
    //             >
    //               {i + 1}
    //             </button>
    //           ))}

    //           <button
    //             className={`px-3 py-1 rounded cursor-pointer border ${currentPage == totalPages ? "text-gray-400 border-gray-400" : "text-black border-black" }  font-[500]`}
    //             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    //             disabled={currentPage === totalPages}
    //           >
    //             {">"}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>