import React, { useState, useMemo, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderDisplay = () => {
  const [data, setData] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Orders");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // initially 10 rows per page
   

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const api = await axios.get(
          "https://britishquilting.fastranking.tech/api/orders"
        );
        console.log("Fetched data:", api.data.orders);
        setData(api.data.orders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const handleNewNavigate = () => {
    navigate(`/add-order`);
  };

  const handleNavigate = (id) => {
    console.log(id, "this is the id")
    navigate(`/order-detail-new/${id}`);
  };

  // Helpers
  const parsePrice = (price) => parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  const parseDiscount = (discount) =>
    parseFloat(discount.replace("%", "")) || 0;
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  // Sorting + Searching + Filtering
  const sortedData = useMemo(() => {
    let sortableData = [...data];

    console.log("this is ", sortableData)

    if (searchTerm) {
      sortableData = sortableData.filter((item) =>
        item.customer_name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "All Orders") {
      sortableData = sortableData.filter(
        (item) => item.status === statusFilter
      );
    }

    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        let valA = a[sortConfig.key];
        let valB = b[sortConfig.key];

        if (sortConfig.key === "price") {
          valA = parsePrice(valA);
          valB = parsePrice(valB);
        } else if (sortConfig.key === "discount") {
          valA = parseDiscount(valA);
          valB = parseDiscount(valB);
        } else if (sortConfig.key === "lastUpdate") {
          valA = parseDate(valA);
          valB = parseDate(valB);
        }

        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    } else {
      // Default sort: latest created_at first
      sortableData.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    }

    return sortableData;
  }, [data, searchTerm, statusFilter, sortConfig]);

  // Pagination
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (id) => {
    console.log("Deleting:", id);
    setProductToDelete(id);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    setData((prev) => prev.filter((item) => item.id !== productToDelete));
    console.log(`Product ${productToDelete} deleted successfully!`);
    setModalOpen(false);
    setProductToDelete(null);
  };

  /* ---------------------------Payment_status and Status Update API---------------------------- */

  // const handleStatusUpdate = async (orderId, newStatus) => {
  //   try {
  //     const response = await axios.put(
  //       `https://britishquilting.fastranking.tech/api/orders/${orderId}/status`,
  //       { status: newStatus }
  //     );

  //     if (response.data.status) {
  //       toast.success("Order status updated successfully!");
  //       // Optionally update local state here
  //     } else {
  //       toast.error(response.data.message || "Failed to update order status.");
  //     }
  //   } catch (error) {
  //     console.error("Update Error:", error);
  //     toast.error(
  //       error.response?.data?.message ||
  //         "Something went wrong while updating the order status."
  //     );
  //   }
  // };
  // 2) When user changes status, call the API AND update local state
  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const response = await axios.put(
        `https://britishquilting.fastranking.tech/api/orders/${orderId}/status`,
        { status: newStatus }
      );

      if (response.data.status) {
        toast.success("Order status updated successfully!");

        // ─── Update `orders` in local state ─────────────────────────
        setData((prev) =>
          prev.map((o) =>
            o.order_id === orderId
              ? { ...o, status: newStatus }
              : o
          )
        );
      } else {
        toast.error(response.data.message || "Failed to update order status.");
      }
    } catch (error) {
      console.error("Update Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while updating the order status."
      );
    }
  };


  return (
    <>
      <div className=" w-full z-0 pl-[200px] lg:pl-[250px] xl:pl-[300px]">
        <div className="w-full min-h-[91vh] px-5  pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
          <div className="flex justify-between w-full items-center">
            <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-3">
              Order Display{" "}
              <span
                className={`flex gap-[6px] h-[35px] items-center text-[12px] px-4 border-1 rounded-[40px]  ${
                  statusFilter === "completed"
                    ? "bg-green-100 text-green-700 border-green-700"
                    : statusFilter === "pending"
                    ? "bg-yellow-100 text-yellow-600 border-yellow-600"
                    : statusFilter === "cancel"
                    ? "bg-red-100 text-red-600 border-red-600"
                    : statusFilter === "All Orders"
                    ? "bg-white text-[#4B215F] border-[#4B215F]"
                    : ""
                }`}
              >
                <div
                  className={`w-[7px] h-[7px] rounded-full ${
                    statusFilter === "completed"
                      ? "  bg-green-700"
                      : statusFilter === "pending"
                      ? "  bg-yellow-600"
                      : statusFilter === "cancel"
                      ? "  bg-red-600"
                      : statusFilter === "All Orders"
                      ? "bg-[#4B215F]"
                      : ""
                  }`}
                ></div>
                {statusFilter}
              </span>
            </h1>

            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <g opacity="0.2">
                <rect
                  x="1.00586"
                  y="1.14648"
                  width="27"
                  height="27"
                  rx="1.5"
                  fill="white"
                  stroke="#D6D6D6"
                />
              </g>
              <circle cx="8.50586" cy="14.6465" r="2" fill="#4B215F" />
              <circle cx="14.5059" cy="14.6465" r="2" fill="#4B215F" />
              <circle cx="20.5059" cy="14.6465" r="2" fill="#4B215F" />
            </svg>
          </div>

          <div className="bg-white rounded-[18px] border-1 border-[#D6D6D6] w-full h-auto pb-6 mt-5">
            <div className="p-6 flex flex-col lg:flex-row gap-3 items-end w-full lg:justify-between lg:items-center">
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-3 border border-[#D3D3D3] rounded-[4px] h-[35px] lg:h-[40px] px-4 w-[300px] bg-white focus-within:ring-1 focus-within:ring-[#4B215F] transition">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#838383]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.76576 2.07631C3.67219 0.169876 6.76313 0.169876 8.66956 2.07631C10.3998 3.80655 10.5597 6.51247 9.14929 8.42305L12.1215 11.3964C12.4074 11.6824 12.4074 12.146 12.1215 12.432C11.8355 12.718 11.3719 12.718 11.0859 12.432L8.1133 9.45925C6.20267 10.8703 3.49624 10.7106 1.76576 8.98011C-0.140671 7.07368 -0.140671 3.98274 1.76576 2.07631ZM2.80133 3.11188C1.46683 4.44638 1.46683 6.61004 2.80133 7.94454C4.13583 9.27904 6.29949 9.27904 7.63399 7.94454C8.9685 6.61004 8.9685 4.44638 7.63399 3.11188C6.29949 1.77738 4.13583 1.77738 2.80133 3.11188Z"
                      fill="#838383"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-sm text-[#333] placeholder:text-[#838383] focus:outline-none"
                  />
                </div>
                <div className="relative w-[140px]">
                  <select
                    value={statusFilter}
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="appearance-none focus:outline-none text-[12px] lg:text-[14px] text-[#838383] font-[500] border focus-within:ring-1 focus-within:ring-[#4B215F] transition border-[#D3D3D3] h-[35px] lg:h-[40px] w-full p-2 pr-5 lg:pr-10 rounded-[4px] cursor-pointer"
                  >
                    <option
                      className={`text-[#656565] p-2 ${
                        statusFilter == "All Orders"
                          ? "bg-[#F9F2AB] text-black"
                          : "bg-white"
                      } font-[500]`}
                      value="All Orders"
                    >
                      All Orders
                    </option>
                    <option
                      className={`text-[#656565] ${
                        statusFilter == "Completed"
                          ? "bg-[#F9F2AB] text-black"
                          : "bg-white"
                      } font-[500]`}
                      value="completed"
                    >
                      Completed
                    </option>
                    <option
                      className={`text-[#656565] ${
                        statusFilter == "Pending"
                          ? "bg-[#F9F2AB] text-black"
                          : "bg-white"
                      } font-[500]`}
                      value="pending"
                    >
                      Pending
                    </option>
                    <option
                      className={`text-[#656565] ${
                        statusFilter == "Cancel"
                          ? "bg-[#F9F2AB] text-black"
                          : "bg-white"
                      } font-[500]`}
                      value="cancel"
                    >
                      Cancel
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-[#4B215F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative  w-[100px] max-w-[140px]">
                    <select
                      id="rowsPerPage"
                      value={rowsPerPage}
                      onChange={(e) => {
                        setRowsPerPage(parseInt(e.target.value));
                        setCurrentPage(1); // reset to page 1 on rows change
                      }}
                      className="border-1 border-[#D3D3D3] outline-none focus-within:ring-1 focus-within:ring-[#4B215F] w-[100px] max-w-[140px] p-2 rounded appearance-none"
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        className="w-4 h-4 text-[#4B215F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <label htmlFor="rowsPerPage" className="text-sm font-[400]">
                    Rows per page:
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="font-[600] text-[#4B215F] rounded-[4px] border-1 border-[#4B215F] bg-white text-[12px] lg:text-[14px] py-2 px-4 h-[35px] lg:h-[40px] cursor-pointer">
                  Import
                </button>
                <button className="font-[600] text-[#4B215F] rounded-[4px] border-1 border-[#4B215F] bg-white text-[12px] lg:text-[14px] py-2 px-4 h-[35px] lg:h-[40px] flex items-center gap-1 cursor-pointer">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.2676 22.646C14.3106 22.646 14.3528 22.6424 14.3939 22.6354L14.529 22.6346C14.733 22.6346 14.928 22.5516 15.07 22.4046L20.136 17.1276C20.269 16.9886 20.3441 16.8016 20.3441 16.6086V7.4186C20.36 4.9096 18.404 2.8706 15.891 2.7806H7.75097C5.31074 2.83305 3.35367 4.80494 3.29333 7.22036L3.29297 18.1556C3.35197 20.6366 5.39997 22.6346 7.86197 22.6346L14.1413 22.6354C14.1823 22.6424 14.2245 22.646 14.2676 22.646ZM13.517 21.135L7.86497 21.1346C6.20797 21.1346 4.83197 19.7926 4.79297 18.1376V7.4186C4.75697 5.7176 6.09697 4.3176 7.78197 4.2806H15.865C17.534 4.3406 18.855 5.7176 18.844 7.4136L18.844 15.663L16.8356 15.662C15.0046 15.667 13.5176 17.159 13.5176 18.987L13.517 21.135ZM11.4344 15.4871C11.8484 15.4871 12.1844 15.1511 12.1844 14.7371L12.184 10.515L13.2464 11.5811C13.5384 11.8751 14.0134 11.8751 14.3074 11.5831C14.6004 11.2911 14.6014 10.8161 14.3094 10.5221L11.9904 8.19289C11.9315 8.12794 11.8615 8.07335 11.7833 8.03215C11.7764 8.02999 11.77 8.02677 11.7637 8.02365C11.7346 8.00788 11.7038 7.99522 11.6721 7.98462C11.669 7.98501 11.666 7.98402 11.663 7.98304C11.591 7.95857 11.5141 7.9461 11.4344 7.9461C11.3568 7.9461 11.282 7.95788 11.2117 7.97975C11.2006 7.98395 11.1888 7.9879 11.1772 7.99214C11.1553 7.99942 11.1344 8.00819 11.114 8.01787C11.1018 8.02415 11.0897 8.03022 11.0779 8.0366C11.0542 8.04899 11.0309 8.06326 11.0086 8.07871C11.001 8.08425 10.9934 8.08968 10.9859 8.09527C10.9537 8.11909 10.9236 8.14563 10.8957 8.1744L8.55737 10.5221C8.26537 10.8161 8.26637 11.2911 8.55937 11.5831C8.85337 11.8751 9.32837 11.8751 9.62037 11.5811L10.684 10.513L10.6844 14.7371C10.6844 15.1511 11.0204 15.4871 11.4344 15.4871ZM15.017 20.294L15.0176 18.987C15.0176 17.983 15.8336 17.165 16.8376 17.162L18.022 17.163L15.017 20.294Z"
                      fill="#4B215F"
                    />
                  </svg>
                  Export
                </button>
                <button
                  onClick={handleNewNavigate}
                  className="font-[600] text-white rounded-[4px] bg-[#4B215F] text-[12px] lg:text-[14px] py-2 px-4 lg:h-[40px] flex items-center gap-1 cursor-pointer"
                >
                  <svg
                    width="15"
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
                  Add Order
                </button>
              </div>
            </div>
            <div className="w-full overflow-x-auto flex flex-col justify-between min-h-[620px]">
              <table className="w-full table-auto min-w-max">
                <thead>
                  <tr className="border-b-1 border-[#D6D6D6] text-left">
                    {[
                      ["order_id", "Order ID"],
                      ["customer_name", "Customer Name"],
                      ["order_date", "Order Date"],
                      // ["quantity", "Quantity"],
                      ["total_amount", "Total Amount"],
                      ["payment_method", "Payment Method"],
                      ["status", "Order Status"],
                      ["created_at", "Created At"],
                      // ["updated_at", "Updated At"],
                      ["action", "Action"],
                    ].map(([key, label]) => (
                      <th
                        key={key}
                        className="p-3 px-6 cursor-pointer relative text-[14px] whitespace-nowrap"
                        onClick={() => handleSort(key)}
                      >
                        {label}
                        <span
                          className={`${
                            key === "action" ? "hidden" : ""
                          } absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-[2px]`}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.33984 4.49805L6.08984 2.24805L3.83984 4.49805"
                              stroke={
                                sortConfig.key === key &&
                                sortConfig.direction === "desc"
                                  ? "#000000"
                                  : "#D6D6D6"
                              }
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.33984 8.99805L6.08984 11.248L3.83984 8.99805"
                              stroke={
                                sortConfig.key === key &&
                                sortConfig.direction === "desc"
                                  ? "#D6D6D6"
                                  : "#000000"
                              }
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData && paginatedData.length > 0 ? (
                    paginatedData.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b-1 border-[#D6D6D6] text-[14px] text-[#656565] font-[500] hover:bg-gray-50"
                      >
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.order_id}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.customer_name}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.order_date}
                        </td>
                        {/* <td className="p-3 px-6 w-60 max-w-80 truncate whitespace-nowrap overflow-hidden">
                          {row.quantity}
                        </td> */}
                        <td className="p-3 px-6 w-60 max-w-80 truncate whitespace-nowrap overflow-hidden">
                          {row.total_amount}
                        </td>
                        <td className="p-3 px-6 w-60 max-w-80 truncate whitespace-nowrap overflow-hidden">
                          {row.payment_method}
                        </td>

                         <td className="px-4 py-2 whitespace-nowrap">
              <div className="relative inline-block w-[200px]">
                <select
                  value={row.status}
                  onChange={(e) =>
                    handleStatusUpdate(row.order_id, e.target.value)
                  }
                  className={`
                    appearance-none rounded-full px-4 pr-8 py-1 text-[12px] w-full
                    ${
                      row.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : row.status === "pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : row.status === "cancel"
                        ? "bg-red-100 text-red-600"
                        : ""
                    }
                  `}
                >
                  <option
                    value="pending"
                    className="bg-yellow-100 text-yellow-700"
                  >
                    Pending
                  </option>
                  <option
                    value="completed"
                    className="bg-green-100 text-green-700"
                  >
                    Completed
                  </option>
                  <option
                    value="cancel"
                    className="bg-red-100 text-red-700"
                  >
                    Cancel
                  </option>
                </select>

                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-500"
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
            </td>

                        {/* <td className="p-3 px-6 whitespace-nowrap">
                          <div className="relative w-full">
                            <select
                              value={row.order_status}
                              onChange={
                                (e) =>
                                  handleStatusUpdate(row.order_id, e.target.value) // Make sure to pass row.id, not customer_id
                              }
                              className={`appearance-none ${
                                row.order_status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : row.order_status === "pending"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : row.order_status === "cancel"
                                  ? "bg-red-100 text-red-600"
                                  : ""
                              } rounded-full px-3 pr-8 py-1 text-[12px]`}
                            >
                              <option
                                value="pending"
                                className="bg-yellow-100 text-yellow-700"
                              >
                                Pending
                              </option>
                              <option
                                value="completed"
                                className="bg-green-100 text-green-700"
                              >
                                Completed
                              </option>
                              <option
                                value="cancel"
                                className="bg-red-100 text-red-700"
                              >
                                Cancel
                              </option>
                            </select>

                           
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                              <svg
                                className="w-3 h-3"
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
                        </td> */}

                        {/* <td className="p-3 px-6 whitespace-nowrap">
                          <div className="relative w-full">
                            <select
                              value={row.payment_status}
                              onChange={(e) =>
                                handleStatusUpdate(
                                  row.order_id,
                                  "payment_status",
                                  e.target.value
                                )
                              }
                              className={` appearance-none pr-8 rounded-full px-3 py-1 text-[12px] ${
                                row.payment_status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : row.payment_status === "pending"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : row.payment_status === "cancel"
                                  ? "bg-red-100 text-red-600"
                                  : ""
                              }`}
                            >
                              <option
                                className="bg-yellow-100 text-yellow-700"
                                value="pending"
                              >
                                Pending
                              </option>
                              <option
                                className="bg-green-100 text-green-700"
                                value="completed"
                              >
                                Completed
                              </option>
                              <option
                                className="bg-red-100 text-red-700"
                                value="cancel"
                              >
                                Cancel
                              </option>
                            </select>

                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                              <svg
                                className="w-3 h-3"
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
                        </td> */}

                        <td className="p-3 px-6 w-50 max-w-50 truncate whitespace-nowrap overflow-hidden">
                          {row.created_at}
                        </td>
                        {/* <td className="p-3 px-6 w-50 max-w-50 truncate whitespace-nowrap overflow-hidden">
                          {row.updated_at}
                        </td> */}
                        <td className="p-3 px-6  whitespace-nowrap">
                          <div
                            onClick={() => handleNavigate(row.order_id)}
                            className="flex gap-2"
                          >
                            <button className="cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="currentColor"
                                  d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"
                                />
                                <path
                                  fill="currentColor"
                                  d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="text-center text-[18px] xl:text-[20px] font-[600] pt-[15%] py-6 text-gray-500"
                      >
                        No more items in table
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="flex justify-between items-center">
                <div className=" text-sm text-gray-600 font-[600] mt-2 px-6">
                  Showing rows {(currentPage - 1) * rowsPerPage + 1}–
                  {Math.min(currentPage * rowsPerPage, sortedData.length)} of{" "}
                  {sortedData.length} total rows
                </div>
                {/* Pagination */}
                <div className="flex justify-end mt-16 mb-4 gap-2 px-5">
                  <button
                    className={`px-3 py-1 rounded cursor-pointer border ${
                      currentPage == 1
                        ? "text-gray-400 border-gray-400"
                        : "text-black border-black"
                    }  font-[500]`}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    <svg
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.32617 1.41L3.74617 6L8.32617 10.59L6.91617 12L0.916172 6L6.91617 0L8.32617 1.41Z"
                        fill={` ${currentPage == 1 ? "#C4CDD5" : "#000000"}`}
                      />
                    </svg>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 rounded cursor-pointer ${
                        currentPage === i + 1
                          ? "border border-black text-black font-[500]"
                          : "border border-gray-400 text-gray-400"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    className={`px-3 py-1 rounded cursor-pointer border ${
                      currentPage == totalPages
                        ? "text-gray-400 border-gray-400"
                        : "text-black border-black"
                    }  font-[500]`}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00585937 1.41L4.58586 6L0.00585937 10.59L1.41586 12L7.41586 6L1.41586 0L0.00585937 1.41Z"
                        fill={` ${
                          currentPage == totalPages ? "#C4CDD5" : "#000000"
                        }`}
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 z-50 flex justify-center items-center bg-black/50 w-full h-[100%]">
          <div className="w-[25%] flex flex-col items-center justify-center gap-6 bg-white p-8 shadow-lg rounded-[12px]">
            <svg
              width="100"
              height="101"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.379883"
                width="100"
                height="100"
                rx="50"
                fill="#F9F2AB"
              />
              <path
                d="M55.4319 26.5527C56.4321 26.553 57.4068 26.8679 58.218 27.4529C59.0293 28.038 59.6359 28.8634 59.9519 29.8123L61.2458 33.7009H69.0611C69.6931 33.7009 70.2991 33.952 70.746 34.3988C71.1928 34.8457 71.4438 35.4517 71.4438 36.0837C71.4438 36.7156 71.1928 37.3217 70.746 37.7685C70.2991 38.2154 69.6931 38.4664 69.0611 38.4664L69.054 38.6356L66.9881 67.5691C66.8592 69.3719 66.0521 71.0589 64.7294 72.2906C63.4066 73.5223 61.6664 74.2071 59.859 74.2074H40.1395C38.3321 74.2071 36.5919 73.5223 35.2691 72.2906C33.9464 71.0589 33.1393 69.3719 33.0104 67.5691L30.9446 38.6332L30.9374 38.4664C30.3055 38.4664 29.6994 38.2154 29.2526 37.7685C28.8057 37.3217 28.5547 36.7156 28.5547 36.0837C28.5547 35.4517 28.8057 34.8457 29.2526 34.3988C29.6994 33.952 30.3055 33.7009 30.9374 33.7009H38.7528L40.0466 29.8123C40.3628 28.863 40.9698 28.0373 41.7815 27.4523C42.5932 26.8672 43.5684 26.5525 44.569 26.5527H55.4319ZM64.2885 38.4664H35.71L37.7639 67.2283C37.8067 67.8293 38.0755 68.3917 38.5163 68.8024C38.9571 69.2131 39.5371 69.4416 40.1395 69.4419H59.859C60.4615 69.4416 61.0415 69.2131 61.4822 68.8024C61.923 68.3917 62.1918 67.8293 62.2346 67.2283L64.2885 38.4664ZM45.2338 45.6146C45.8174 45.6147 46.3807 45.8289 46.8168 46.2167C47.253 46.6045 47.5316 47.1389 47.5999 47.7185L47.6165 47.9973V59.911C47.6159 60.5183 47.3833 61.1024 46.9664 61.544C46.5495 61.9856 45.9797 62.2514 45.3734 62.287C44.7672 62.3226 44.1702 62.1253 43.7045 61.7355C43.2388 61.3457 42.9395 60.7928 42.8678 60.1898L42.8511 59.911V47.9973C42.8511 47.3654 43.1021 46.7593 43.549 46.3125C43.9958 45.8656 44.6019 45.6146 45.2338 45.6146ZM54.7647 45.6146C55.3967 45.6146 56.0027 45.8656 56.4496 46.3125C56.8964 46.7593 57.1475 47.3654 57.1475 47.9973V59.911C57.1475 60.5429 56.8964 61.149 56.4496 61.5958C56.0027 62.0427 55.3967 62.2937 54.7647 62.2937C54.1328 62.2937 53.5267 62.0427 53.0799 61.5958C52.633 61.149 52.382 60.5429 52.382 59.911V47.9973C52.382 47.3654 52.633 46.7593 53.0799 46.3125C53.5267 45.8656 54.1328 45.6146 54.7647 45.6146ZM55.4319 31.3182H44.5666L43.7732 33.7009H56.2253L55.4319 31.3182Z"
                fill="#4B215F"
              />
            </svg>

            <span className="text-[20px] text-center font-[600]">
              Are you sure you <br /> want to delete order with ID{" "}
              <strong>{productToDelete}</strong>
            </span>

            <div className="flex gap-4 w-full justify-between items-center mt-5">
              <button
                onClick={() => setModalOpen(null)}
                className="cursor-pointer hover:shadow-md w-[50%] font-[500] py-[6px] px-5 rounded-full text-[#4B215F] border-1 border-[#4B215F]"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="cursor-pointer hover:shadow-md w-[50%] font-[500] py-[6px] px-5 rounded-full text-white bg-[#4B215F] border-1 border-[#4B215F]"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDisplay;
