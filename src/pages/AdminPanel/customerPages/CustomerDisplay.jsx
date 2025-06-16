import React, { useState, useMemo, useEffect, useRef } from "react";
import { asset } from "../../../assets/asset.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CustomerDisplay = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Products");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // initially 10 rows per page

  const navigate = useNavigate();
  const dropdownRefs = useRef({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideAny = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!isClickInsideAny) {
        setOpenDropdownId(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch data
  useEffect(() => {
    const getData = async () => {
      try {
        const api = await axios.get(
          "https://britishquilting.fastranking.tech/api/customers"
        );
        console.log("Fetched data:", api.data.data);
        setData(api.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  // Prevent scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  const handleNavigate = () => {
    navigate("/add-customer");
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

    // Search filter
    if (searchTerm) {
      sortableData = sortableData.filter((item) =>
        item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== "All Products") {
      sortableData = sortableData.filter(
        (item) => item.status === statusFilter
      );
    }

    // Manual sort
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

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleView = (id) => {
    console.log(id);
    navigate(`/customer-info/${id}`);
  };

  const handleDelete = (id) => {
    console.log("Deleting:", id);
    setModalOpen(true);
    setProductToDelete(id);
  };

  const confirmDelete = () => {
    setData((prev) => prev.filter((item) => item.id !== productToDelete));
    console.log(`Product ${productToDelete} deleted successfully!`);
    setModalOpen(false);
    setProductToDelete(null);
  };

  const Avatar = ({ name }) => {
    // Generate a random HSL color once
    const randomColor = React.useMemo(() => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 70%, 60%)`;
    }, []);

    // Safely get the first character or fallback to "?"
    const initial = name?.trim()?.[0]?.toUpperCase() || "?";

    return (
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: randomColor,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 500,
          fontSize: 18,
          textTransform: "uppercase",
        }}
      >
        {initial}
      </div>
    );
  };

  return (
    <>
      <div className=" w-full z-0 pl-[200px] lg:pl-[250px] xl:pl-[300px]">
        <div className="w-full min-h-[91vh] px-5  pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
          <div className="flex justify-between w-full items-center">
            <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-3">
              Customer Display{" "}
              {/* <span
                className={`flex gap-[6px] h-[35px] items-center text-[12px] px-4 border-1 rounded-[40px]  ${
                  statusFilter === "Active"
                    ? "bg-green-100 text-green-700 border-green-700"
                    : statusFilter === "Deactive"
                    ? "bg-red-100 text-red-600 border-red-600"
                    : statusFilter === "All Products"
                    ? "bg-white text-[#4B215F] border-[#4B215F]"
                    : ""
                }`}
              >
                <div
                  className={`w-[7px] h-[7px] rounded-full ${
                    statusFilter === "Active"
                      ? "  bg-green-700"
                      : statusFilter === "Deactive"
                      ? "  bg-red-600"
                      : statusFilter === "All Products"
                      ? "bg-[#4B215F]"
                      : ""
                  }`}
                ></div>
                {statusFilter}
              </span> */}
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
                <div className="flex items-center gap-2">
                  <div className="relative  w-[100px] max-w-[140px]">
                    <select
                      id="rowsPerPage"
                      value={rowsPerPage}
                      onChange={(e) => {
                        setRowsPerPage(parseInt(e.target.value));
                        setCurrentPage(1); // reset to page 1 on rows change
                      }}
                      className="border-1 border-[#D3D3D3] outline-none focus-within:ring-1 focus-within:ring-[#4B215F] w-[100px] max-w-[140px] px-2 py-2 rounded appearance-none"
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
                  <label htmlFor="rowsPerPage" className="text-sm">
                    Rows per page:
                  </label>
                </div>
                {/* <div className="relative w-[140px]">
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
                        statusFilter == "All Products"
                          ? "bg-[#F9F2AB] text-black"
                          : "bg-white"
                      } font-[500]`}
                      value="All Products"
                    >
                      All Products
                    </option>
                    <option
                      className={`text-[#656565] ${
                        statusFilter == "Active"
                          ? "bg-[#F9F2AB] text-black"
                          : "bg-white"
                      } font-[500]`}
                      value="Active"
                    >
                      Active
                    </option>
                    <option
                      className={`text-[#656565] ${
                        statusFilter == "Deactive"
                          ? "bg-[#F9F2AB] text-black"
                          : "bg-white"
                      } font-[500]`}
                      value="Deactive"
                    >
                      Deactive
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
                </div> */}
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
                  onClick={handleNavigate}
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
                  Add Customer
                </button>
              </div>
            </div>
            <div className="w-full overflow-x-auto flex flex-col justify-between min-h-[620px]">
              <table className="w-full table-auto min-w-max">
                <thead>
                  <tr className="border-b-1 border-[#D6D6D6] text-left">
                    {[
                      // ["id", "ID"],
                      // ["name", "Name"],
                      // ["email", "Email"],
                      // ["phone", "Phone"],
                      // ["shipping_address", "Shipping Address"],
                      // ["billing_address", "Billing Address"],
                      // ["created_at", "Created At"],
                      // ["updated_at", "Updated At"],
                      // ["action", "Action"],

                      ["id", "ID"],
                      ["is_active", "IS Active"],
                      // ["title", "Title"],
                      ["first_name", "Name"],
                      // ["middle_name", "Middle Name"],
                      // ["last_name", "Last Name"],
                      ["email", "Email"],
                      ["alt_email", "Alt Email"],
                      ["phone", "Phone"],
                      ["alt_phone", "Alt Phone"],
                      ["mobile", "Mobile"],
                      ["alt_mobile", "Alt. Mobile"],
                      ["dob", "DOB"],
                      ["gender", "Gender"],
                      ["created_at", "Created At"],
                      ["updated_at", "Updated At"],
                      ["action", "Action"],
                    ].map(([key, label]) => (
                      <th
                        key={key}
                        className={`p-3 px-6 cursor-pointer relative ${
                          key === "first_name" ? "w-80 min-w-80 max-w-80" : ""
                        } text-[14px] whitespace-nowrap`}
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
                          {row.id}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.is_active}
                        </td>
                        {/* <td className="p-3 px-6  whitespace-nowrap">
                          {row.title}
                        </td> */}
                        <td className="p-3 px-6 w-80 min-w-80 max-w-80 whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-3">
                          <Avatar name={row.first_name} />
                          <span className="w-50 max-w-50 truncate whitespace-nowrap overflow-hidden">
                            {row.first_name} {row.middle_name} {row.last_name}
                          </span>
                        </td>
                        {/* <td className="p-3 px-6  whitespace-nowrap">
                          {row.middle_name}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.last_name}
                        </td> */}
                        <td className="p-3 px-6 w-50 min-w-50 max-w-50 whitespace-nowrap overflow-hidden text-ellipsis">
                          <span
                            className="inline-block select-text"
                            title={row.email}
                          >
                            {row.email}
                          </span>
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.alt_email}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.phone}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.alt_phone}
                        </td>
                        <td className="p-3 px-6 w-50 max-w-50 truncate whitespace-nowrap overflow-hidden">
                          {row.mobile}
                        </td>
                        <td className="p-3 px-6 w-50 max-w-50 truncate whitespace-nowrap overflow-hidden">
                          {row.alt_mobile}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.dob}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          {row.gender}
                        </td>
                        <td className="p-3 px-6 w-50 max-w-50 truncate whitespace-nowrap overflow-hidden">
                          {row.created_at}
                        </td>
                        <td className="p-3 px-6 w-50 max-w-50 truncate whitespace-nowrap overflow-hidden">
                          {row.updated_at}
                        </td>
                        <td className="p-3 px-6  whitespace-nowrap">
                          <div
                            className="relative flex justify-center"
                            ref={(el) => (dropdownRefs.current[row.id] = el)}
                          >
                            <button
                              onClick={() =>
                                setOpenDropdownId(
                                  openDropdownId === row.id ? null : row.id
                                )
                              }
                              className="cursor-pointer"
                            >
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="path-1-inside-1_202_16037"
                                  fill="white"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.34 5.92C14.34 6.98045 13.4805 7.84 12.42 7.84C11.3595 7.84 10.5 6.98045 10.5 5.92C10.5 4.85968 11.3595 4 12.42 4C13.4805 4 14.34 4.85968 14.34 5.92Z"
                                  />
                                </mask>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.34 5.92C14.34 6.98045 13.4805 7.84 12.42 7.84C11.3595 7.84 10.5 6.98045 10.5 5.92C10.5 4.85968 11.3595 4 12.42 4C13.4805 4 14.34 4.85968 14.34 5.92Z"
                                  fill="#33383F"
                                />
                                <path
                                  d="M14.34 5.92H13.34C13.34 6.42817 12.9282 6.84 12.42 6.84V7.84V8.84C14.0327 8.84 15.34 7.53274 15.34 5.92H14.34ZM12.42 7.84V6.84C11.9118 6.84 11.5 6.42817 11.5 5.92H10.5H9.5C9.5 7.53274 10.8073 8.84 12.42 8.84V7.84ZM10.5 5.92H11.5C11.5 5.41192 11.9119 5 12.42 5V4V3C10.8072 3 9.5 4.30744 9.5 5.92H10.5ZM12.42 4V5C12.9281 5 13.34 5.41192 13.34 5.92H14.34H15.34C15.34 4.30744 14.0328 3 12.42 3V4Z"
                                  fill="#33383F"
                                  mask="url(#path-1-inside-1_202_16037)"
                                />
                                <path
                                  d="M12.4199 10.6445C13.2042 10.6445 13.8398 11.2803 13.8398 12.0645C13.8398 12.8488 13.2042 13.4844 12.4199 13.4844C11.6356 13.4843 11 12.8487 11 12.0645C11 11.2803 11.6357 10.6446 12.4199 10.6445Z"
                                  fill="#33383F"
                                  stroke="#33383F"
                                />
                                <mask
                                  id="path-4-inside-2_202_16037"
                                  fill="white"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.34 18.5919C14.34 19.6522 13.4805 20.5119 12.42 20.5119C11.3595 20.5119 10.5 19.6522 10.5 18.5919C10.5 17.5314 11.3595 16.6719 12.42 16.6719C13.4805 16.6719 14.34 17.5314 14.34 18.5919Z"
                                  />
                                </mask>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M14.34 18.5919C14.34 19.6522 13.4805 20.5119 12.42 20.5119C11.3595 20.5119 10.5 19.6522 10.5 18.5919C10.5 17.5314 11.3595 16.6719 12.42 16.6719C13.4805 16.6719 14.34 17.5314 14.34 18.5919Z"
                                  fill="#33383F"
                                />
                                <path
                                  d="M14.34 18.5919H13.34C13.34 19.1 12.9281 19.5119 12.42 19.5119V20.5119V21.5119C14.0328 21.5119 15.34 20.2044 15.34 18.5919H14.34ZM12.42 20.5119V19.5119C11.9119 19.5119 11.5 19.1 11.5 18.5919H10.5H9.5C9.5 20.2044 10.8072 21.5119 12.42 21.5119V20.5119ZM10.5 18.5919H11.5C11.5 18.0837 11.9118 17.6719 12.42 17.6719V16.6719V15.6719C10.8073 15.6719 9.5 16.9791 9.5 18.5919H10.5ZM12.42 16.6719V17.6719C12.9282 17.6719 13.34 18.0837 13.34 18.5919H14.34H15.34C15.34 16.9791 14.0327 15.6719 12.42 15.6719V16.6719Z"
                                  fill="#33383F"
                                  mask="url(#path-4-inside-2_202_16037)"
                                />
                              </svg>
                            </button>
                            {/* Dropdown Menu */}
                            {openDropdownId === row.id && (
                              <div className="absolute right-14 top-0 mt-2 w-40 rounded-md shadow-xl bg-white ring-1 ring-black/10 z-[40]">
                                <div className="py-1">
                                  <button
                                    className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 text-sm text-black hover:bg-yellow-100"
                                    onClick={() => handleView(row.id)}
                                  >
                                    <svg
                                      width="21"
                                      height="20"
                                      viewBox="0 0 21 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.166 3.33301C12.4389 3.33305 14.6132 4.52564 16.6387 6.48438C17.3295 7.15246 17.9547 7.86558 18.5049 8.5791C18.8369 9.00976 19.0731 9.34895 19.2021 9.55078L19.4893 10L19.2021 10.4482C19.0731 10.6501 18.8369 10.9893 18.5049 11.4199C17.9546 12.1336 17.3296 12.8474 16.6387 13.5156C14.6132 15.4744 12.4389 16.666 10.166 16.666C7.89324 16.6659 5.7197 15.4742 3.69434 13.5156C3.00335 12.8474 2.37844 12.1336 1.82812 11.4199C1.49607 10.9893 1.25996 10.6501 1.13086 10.4482L0.84375 10L1.13086 9.55078C1.25996 9.34894 1.49607 9.00974 1.82812 8.5791C2.37833 7.86557 3.00352 7.15246 3.69434 6.48438C5.71972 4.52575 7.89322 3.33314 10.166 3.33301ZM10.166 5C8.41206 5.00014 6.59779 5.99498 4.85352 7.68164C4.22505 8.2894 3.65131 8.94325 3.14746 9.59668C3.03865 9.73779 2.9386 9.8732 2.84668 10C2.93852 10.1267 3.03878 10.2614 3.14746 10.4023C3.65132 11.0558 4.22503 11.7096 4.85352 12.3174C6.59784 14.0041 8.41201 14.9999 10.166 15C11.9202 15 13.735 14.0043 15.4795 12.3174C16.1079 11.7097 16.6808 11.0557 17.1846 10.4023C17.2933 10.2613 17.3944 10.1267 17.4863 10C17.3944 9.8732 17.2934 9.73779 17.1846 9.59668C16.6808 8.94338 16.1078 8.28929 15.4795 7.68164C13.7351 5.9948 11.9201 5.00004 10.166 5ZM10.166 6.66602C12.0069 6.66608 13.5 8.15909 13.5 10C13.4998 11.8408 12.0068 13.3329 10.166 13.333C8.32535 13.3328 6.83318 11.8407 6.83301 10C6.83301 8.15918 8.32524 6.66622 10.166 6.66602ZM10.166 8.33301C9.24566 8.33315 8.5 9.07961 8.5 10C8.50018 10.9202 9.24577 11.6659 10.166 11.666C11.0864 11.666 11.8328 10.9203 11.833 10C11.833 9.07953 11.0865 8.33301 10.166 8.33301Z"
                                        fill="#6F767E"
                                      />
                                    </svg>
                                    View
                                  </button>
                                  <button
                                    className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                                    onClick={() => handleEdit(row.id)}
                                  >
                                    <svg
                                      width="21"
                                      height="20"
                                      viewBox="0 0 21 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13.8633 1.66699C14.4087 1.66703 14.9315 1.88475 15.3135 2.26953L17.8975 4.85352C18.2822 5.23825 18.499 5.76059 18.499 6.30469C18.499 6.84873 18.2822 7.37018 17.8975 7.75488L8.46289 17.1865C7.88091 17.8578 7.05637 18.271 6.11133 18.3359H1.83203V17.502L1.83496 13.9893C1.90606 13.1108 2.31449 12.2941 2.9375 11.7451L12.4111 2.27051C12.7953 1.88401 13.3183 1.66699 13.8633 1.66699ZM4.0791 12.958C3.74154 13.2566 3.53268 13.6745 3.49902 14.0566V16.6699L6.05176 16.6709C6.49688 16.6394 6.91141 16.4323 7.24414 16.0518L13.5459 9.75L10.417 6.62109L4.0791 12.958ZM13.8633 3.33398C13.762 3.33398 13.6651 3.37441 13.5938 3.44629L11.5957 5.44238L14.7236 8.57129L16.7197 6.57715C16.7919 6.50501 16.832 6.40671 16.832 6.30469C16.832 6.20266 16.7918 6.10439 16.7197 6.03223L14.1328 3.44629C14.0615 3.37439 13.9646 3.33402 13.8633 3.33398Z"
                                        fill="#6F767E"
                                      />
                                    </svg>
                                    Edit
                                  </button>
                                  <button
                                    className="cursor-pointer flex items-center gap-2 w-full px-4 py-2 text-sm text-[#e41111] hover:bg-yellow-100"
                                    onClick={() => handleDelete(row.id)}
                                  >
                                    <svg
                                      width="21"
                                      height="20"
                                      viewBox="0 0 21 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10.167 0.833008C15.2295 0.833184 19.334 4.9375 19.334 10C19.3338 15.0624 15.2293 19.1668 10.167 19.167C5.10449 19.167 1.00018 15.0625 1 10C1 4.93739 5.10438 0.833008 10.167 0.833008ZM10.167 2.5C6.02486 2.5 2.66699 5.85786 2.66699 10C2.66717 14.142 6.02497 17.5 10.167 17.5C14.3089 17.4998 17.6668 14.1419 17.667 10C17.667 5.85797 14.309 2.50018 10.167 2.5ZM14.0889 7.25586L11.3447 10L14.0889 12.7441L12.9111 13.9219L10.167 11.1777L7.42285 13.9219L6.24414 12.7441L8.98828 10L6.24414 7.25586L7.42285 6.07715L10.167 8.82129L12.9111 6.07715L14.0889 7.25586Z"
                                        fill="#e41111"
                                      />
                                    </svg>{" "}
                                    Delete
                                  </button>
                                </div>
                              </div>
                            )}
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
              Are you sure you <br /> want to delete customer with ID{" "}
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

export default CustomerDisplay;
