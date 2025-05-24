import React, { useState, useMemo } from "react";
import { asset } from "../../../assets/asset.js";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  // Sample Data
  const initialData = [
    {
      id: 12356,
      userName: "Jane Cooper",
      email: "carl@gmail.com",
      phoneNumber: "+44 1254 254 365",
      totalProducts: "123",
      price: "£200",
      status: "Completed",
      wishlist: "4",
    },
    {
      id: 12357,
      userName: "Kane Cooper",
      email: "john@gmail.com",
      phoneNumber: "+44 1254 345 643",
      totalProducts: "123",
      price: "£220",
      status: "Cancelled",
      wishlist: "1",
    },
    {
      id: 12358,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 254 365",
      totalProducts: "123",
      price: "£180",
      status: "In Progress",
      wishlist: "2",
    },
    {
      id: 12359,
      userName: "Jane Cooper",
      email: "alan@gmail.com",
      phoneNumber: "+44 1254 345 222",
      totalProducts: "123",
      price: "£250",
      status: "Shipped",
      wishlist: "3",
    },
    {
      id: 12360,
      userName: "Jane Cooper",
      email: "alex@gmail.com",
      phoneNumber: "+44 1254 311 000",
      totalProducts: "123",
      price: "£230",
      status: "Cancelled",
      wishlist: "9",
    },

    {
      id: 12361,
      userName: "Jane Cooper",
      email: "andrew@gmail.com",
      phoneNumber: "+44 1254 254 365",
      totalProducts: "123",
      price: "£180",
      status: "In Progress",
      wishlist: "2",
    },
    {
      id: 12362,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 345 222",
      totalProducts: "123",
      price: "£250",
      status: "Shipped",
      wishlist: "3",
    },
    {
      id: 12363,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 311 000",
      totalProducts: "123",
      price: "£230",
      status: "Cancelled",
      wishlist: "9",
    },
    {
      id: 12354,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 345 643",
      totalProducts: "123",
      price: "£220",
      status: "Cancelled",
      wishlist: "1",
    },
    {
      id: 12365,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 254 365",
      totalProducts: "123",
      price: "£180",
      status: "In Progress",
      wishlist: "2",
    },
    {
      id: 12366,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 345 222",
      totalProducts: "123",
      price: "£250",
      status: "Shipped",
      wishlist: "3",
    },
    {
      id: 12367,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 311 000",
      totalProducts: "123",
      price: "£230",
      status: "Cancelled",
      wishlist: "9",
    },

    {
      id: 12368,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 254 365",
      totalProducts: "123",
      price: "£180",
      status: "In Progress",
      wishlist: "2",
    },
    {
      id: 12369,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 345 222",
      totalProducts: "123",
      price: "£250",
      status: "Shipped",
      wishlist: "3",
    },
    {
      id: 12370,
      userName: "Jane Cooper",
      email: "caly@gmail.com",
      phoneNumber: "+44 1254 311 000",
      totalProducts: "123",
      price: "£230",
      status: "Cancelled",
      wishlist: "9",
    },
  ];

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Orders");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const handleNavigate = (id) => {
    navigate(`/order-details/${id}`);
  };

  // Helper Functions
  const parsePrice = (price) => parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  const parseNumber = (val) => parseInt(val, 10) || 0;

  // Sorting Logic
  const sortedData = useMemo(() => {
    let sortableData = [...initialData];

    if (searchTerm) {
      sortableData = sortableData.filter(
        (item) =>
          item.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase())
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

        // Apply parsing for specific fields
        if (sortConfig.key === "price") {
          valA = parsePrice(valA);
          valB = parsePrice(valB);
        } else if (
          sortConfig.key === "wishlist" ||
          sortConfig.key === "totalProducts"
        ) {
          valA = parseNumber(valA);
          valB = parseNumber(valB);
        }

        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return sortableData;
  }, [searchTerm, sortConfig, statusFilter]);

  // Pagination Logic
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div className="w-full pl-[200px] xl:pl-[300px]">
      <div className="w-full px-5 min-h-[91vh] pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
        <div className="flex justify-between w-full items-center">
          <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-4">
            Order List{" "}
            <span
              className={`flex gap-[6px] h-[35px] items-center text-[12px] px-4 border-1 rounded-[40px]  ${
                statusFilter === "Completed"
                  ? "bg-green-100 text-green-700 border-green-700"
                  : statusFilter === "Cancelled"
                  ? "bg-red-100 text-red-600 border-red-600"
                  : statusFilter === "In Progress"
                  ? "bg-[#FFF6D6] text-[#be9500] border-[#be9500]"
                  : statusFilter === "Shipped"
                  ? "bg-[#B8F2FF] text-[#2796AE] border-[#2796AE]"
                  : statusFilter === "All Orders"
                  ? "bg-white text-[#4B215F] border-[#4B215F]"
                  : ""
              }`}
            >
              <div
                className={`w-[7px] h-[7px] rounded-full ${
                  statusFilter === "Completed"
                    ? "  bg-green-700"
                    : statusFilter === "Cancelled"
                    ? "  bg-red-600"
                    : statusFilter === "In Progress"
                    ? "  bg-[#be9500]"
                    : statusFilter === "Shipped"
                    ? "  bg-[#2796AE]"
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
                    className={`text-[#656565] font-[500] ${
                      statusFilter == "All Orders"
                        ? "bg-[#F9F2AB] text-black"
                        : "bg-white"
                    }`}
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
                    value="Completed"
                  >
                    Completed
                  </option>
                  <option
                    className={`text-[#656565] ${
                      statusFilter == "In Progress"
                        ? "bg-[#F9F2AB] text-black"
                        : "bg-white"
                    } font-[500]`}
                    value="In Progress"
                  >
                    In Progress
                  </option>
                  <option
                    className={`text-[#656565] ${
                      statusFilter == "Shipped"
                        ? "bg-[#F9F2AB] text-black"
                        : "bg-white"
                    } font-[500]`}
                    value="Shipped"
                  >
                    Shipped
                  </option>
                  <option
                    className={`text-[#656565] ${
                      statusFilter == "Cancelled"
                        ? "bg-[#F9F2AB] text-black"
                        : "bg-white"
                    } font-[500]`}
                    value="Cancelled"
                  >
                    Cancelled
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
              <button className="font-[600] text-white rounded-[4px] bg-[#4B215F] text-[12px] lg:text-[14px] py-2 px-4 lg:h-[40px] flex items-center gap-1 cursor-pointer">
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
                Add New Order
              </button>
            </div>
          </div>
          <div className="w-full overflow-x-auto flex flex-col justify-between min-h-[620px]">
            <table className="w-full table-auto min-w-max">
              <thead>
                <tr className="border-b-1 border-[#D6D6D6] text-left">
                  {[
                    ["userName", "User Name"],
                    ["id", "Order ID"],
                    ["phoneNumber", "Phone Number"],
                    ["totalProducts", "Total Products"],
                    ["price", "Price"],
                    ["wishlist", "Wishlist"],
                    ["status", "Status"],
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
                {paginatedData.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b-1 border-[#D6D6D6] text-[14px] text-[#656565] font-[500] hover:bg-gray-50"
                  >
                    <td className="p-3 px-6 whitespace-nowrap flex items-center w-full gap-3">
                      <span className="w-[50px]">
                        <img
                          src={asset.demo}
                          alt="img"
                          className="w-[50px] h-[50px] rounded-full"
                        />
                      </span>
                      <div className="cursor-pointer flex flex-col">
                        <span className="text-[14px] font-[500] text-black">
                          {row.userName}
                        </span>
                        <span className="text-[12px] font-[500] text-[#838383]">
                          {row.email}
                        </span>
                      </div>
                    </td>
                    <td className="p-3 px-6  whitespace-nowrap">{row.id}</td>
                    <td className="p-3 px-6  whitespace-nowrap">
                      {row.phoneNumber}
                    </td>
                    <td className="p-3 px-6  whitespace-nowrap">
                      {row.totalProducts}
                    </td>
                    <td className="p-3 px-6  whitespace-nowrap">{row.price}</td>
                    <td className="p-3 px-6  whitespace-nowrap">
                      {row.wishlist}
                    </td>
                    <td className="p-3 px-6  whitespace-nowrap">
                      <span
                        className={`px-4 py-1 flex justify-center items-center w-[70%] rounded-full font-[500] text-[11.5px] 
                            ${
                              row.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : row.status === "Cancelled"
                                ? "bg-red-100 text-red-600"
                                : row.status === "In Progress"
                                ? "bg-[#FFF6D6] text-[#be9500]"
                                : row.status === "Shipped"
                                ? "bg-[#B8F2FF] text-[#2796AE]"
                                : ""
                            }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3 px-6 whitespace-nowrap">
                      <div
                        onClick={() => handleNavigate(row.id)}
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
                ))}
              </tbody>
            </table>

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
                      fill={` ${
                    currentPage == 1
                      ? "#C4CDD5"
                      : "#000000"
                  }`}
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
                    currentPage == totalPages
                      ? "#C4CDD5"
                      : "#000000"
                  }`} 
                    />
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
