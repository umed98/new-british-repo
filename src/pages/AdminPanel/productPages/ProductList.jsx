import React, { useState, useMemo, useEffect } from "react";
import { asset } from "../../../assets/asset.js";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const initialData = [
    {
      id: 12356,
      productName: "Linen Fabric",
      category: "Linen",
      price: "£200",
      discount: "20%",
      status: "Deactive",
      lastUpdate: "28/3/2025",
    },
    {
      id: 12357,
      productName: "Cotton Fabric",
      category: "Cotton",
      price: "£240",
      discount: "50%",
      status: "Active",
      lastUpdate: "10/3/2025",
    },
    {
      id: 12358,
      productName: "Linen Fabric",
      category: "Linen",
      price: "£270",
      discount: "30%",
      status: "Deactive",
      lastUpdate: "20/3/2025",
    },
    {
      id: 12359,
      productName: "Silk Fabric",
      category: "Silk",
      price: "£180",
      discount: "70%",
      status: "Active",
      lastUpdate: "10/1/2025",
    },
  ];

  const [data, setData] = useState(initialData);
  const [productToDelete , setProductToDelete] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);


  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Products");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  const handleNavigate = () => {
    navigate("/add-product");
  };
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [modalOpen]);

  // Helper to extract numeric value from price string like "£200"
  const parsePrice = (price) => {
    return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  };

  // Helper to extract numeric percentage from discount string like "20%"
  const parseDiscount = (discount) => {
    return parseFloat(discount.replace("%", "")) || 0;
  };

  // Helper to convert date string (like "28/3/2025") into Date object for comparison
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  // Sorting Logic
  const sortedData = useMemo(() => {
    let sortableData = [...data];

    if (searchTerm) {
      sortableData = sortableData.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "All Products") {
      sortableData = sortableData.filter(
        (item) => item.status === statusFilter
      );
    }

    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        let valA = a[sortConfig.key];
        let valB = b[sortConfig.key];

        // Handle specific data types
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
    }

    return sortableData;
  }, [data, searchTerm, sortConfig, statusFilter]);

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

  const handleDelete = (id) => {
      console.log(id)
      setProductToDelete(id);
      setModalOpen(id);
  }

  const confirmDelete = () => {
     setData(prev => prev.filter(item => item.id != productToDelete));
      console.log(`Product ${productToDelete} deleted successfully!`);
     setModalOpen(false);
     setProductToDelete(null);
  }

  return (
    <>
      <div className=" w-full z-0 pl-[200px] lg:pl-[250px] xl:pl-[300px]">
        <div className="w-full min-h-[91vh] px-5  pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
          <div className="flex justify-between w-full items-center">
            <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-3">
              Product List{" "}
              <span
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
                  Add Products
                </button>
              </div>
            </div>
            <div className="w-full overflow-x-auto flex flex-col justify-between min-h-[620px]">
              <table className="w-full table-auto min-w-max">
                <thead>
                  <tr className="border-b-1 border-[#D6D6D6] text-left">
                    {[
                      ["id", "ID"],
                      ["productName", "Product Name"],
                      ["category", "Category"],
                      ["price", "Price"],
                      ["discount", "Discount"],
                      ["status", "Status"],
                      ["lastUpdate", "Last Updated"],
                      ["action", "Action"],
                    ].map(([key, label]) => (
                      <th
                        key={key}
                        className="p-3 px-4 cursor-pointer relative text-[14px] whitespace-nowrap"
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
                  {paginatedData && paginatedData.length > 0  ?
                  paginatedData.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b-1 border-[#D6D6D6] text-[14px] text-[#656565] font-[500] hover:bg-gray-50"
                    >
                      <td className="p-3 px-6  whitespace-nowrap">{row.id}</td>
                      <td className="p-3 px-6  whitespace-nowrap flex items-center w-full gap-4">
                        <span className="w-[60px]">
                          <img
                            src={asset.demo}
                            alt="img"
                            className="w-[60px] h-[60px]"
                          />
                        </span>
                        <span>{row.productName}</span>
                      </td>
                      <td className="p-3 px-6  whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="p-3 px-6  whitespace-nowrap">
                        {row.price}
                      </td>
                      <td className="p-3 px-6  whitespace-nowrap">
                        {row.discount}
                      </td>
                      <td className="p-3 px-6  whitespace-nowrap">
                        <span
                          className={`px-4 py-1 rounded-full text-sm ${
                            row.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="p-3 px-6  whitespace-nowrap">
                        {row.lastUpdate}
                      </td>
                      <td className="p-3 px-6  whitespace-nowrap">
                        <div className="flex gap-2">
                          <button className="cursor-pointer">
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.29297 7.24805H6.29297C5.76254 7.24805 5.25383 7.45876 4.87876 7.83383C4.50368 8.20891 4.29297 8.71761 4.29297 9.24805V18.248C4.29297 18.7785 4.50368 19.2872 4.87876 19.6623C5.25383 20.0373 5.76254 20.248 6.29297 20.248H15.293C15.8234 20.248 16.3321 20.0373 16.7072 19.6623C17.0823 19.2872 17.293 18.7785 17.293 18.248V17.248"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16.293 5.24815L19.293 8.24815M20.678 6.83315C21.0718 6.43931 21.2931 5.90514 21.2931 5.34815C21.2931 4.79117 21.0718 4.257 20.678 3.86315C20.2841 3.46931 19.75 3.24805 19.193 3.24805C18.636 3.24805 18.1018 3.46931 17.708 3.86315L9.29297 12.2482V15.2482H12.293L20.678 6.83315Z"
                                stroke="#656565"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                          <button onClick={() => handleDelete(row.id)} className="cursor-pointer">
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.573 2.24805C14.9927 2.24816 15.4018 2.38033 15.7423 2.62585C16.0827 2.87138 16.3373 3.2178 16.47 3.61605L17.013 5.24805H20.293C20.5582 5.24805 20.8125 5.3534 21.0001 5.54094C21.1876 5.72848 21.293 5.98283 21.293 6.24805C21.293 6.51326 21.1876 6.76762 21.0001 6.95515C20.8125 7.14269 20.5582 7.24805 20.293 7.24805L20.29 7.31905L19.423 19.462C19.3689 20.2187 19.0301 20.9267 18.475 21.4436C17.9199 21.9605 17.1895 22.248 16.431 22.248H8.15497C7.39643 22.248 6.66608 21.9605 6.11094 21.4436C5.55579 20.9267 5.21708 20.2187 5.16297 19.462L4.29597 7.31805L4.29297 7.24805C4.02775 7.24805 3.7734 7.14269 3.58586 6.95515C3.39833 6.76762 3.29297 6.51326 3.29297 6.24805C3.29297 5.98283 3.39833 5.72848 3.58586 5.54094C3.7734 5.3534 4.02775 5.24805 4.29297 5.24805H7.57297L8.11597 3.61605C8.24867 3.21764 8.5034 2.8711 8.84407 2.62556C9.18473 2.38003 9.59404 2.24795 10.014 2.24805H14.573ZM18.29 7.24805H6.29597L7.15797 19.319C7.17592 19.5713 7.28874 19.8073 7.47373 19.9797C7.65871 20.152 7.90212 20.2479 8.15497 20.248H16.431C16.6838 20.2479 16.9272 20.152 17.1122 19.9797C17.2972 19.8073 17.41 19.5713 17.428 19.319L18.29 7.24805ZM10.293 10.248C10.5379 10.2481 10.7743 10.338 10.9573 10.5008C11.1404 10.6635 11.2573 10.8878 11.286 11.131L11.293 11.248V16.248C11.2927 16.5029 11.1951 16.7481 11.0201 16.9334C10.8452 17.1188 10.606 17.2303 10.3516 17.2452C10.0971 17.2602 9.84659 17.1774 9.65114 17.0138C9.45568 16.8502 9.33007 16.6181 9.29997 16.365L9.29297 16.248V11.248C9.29297 10.9828 9.39833 10.7285 9.58586 10.5409C9.7734 10.3534 10.0278 10.248 10.293 10.248ZM14.293 10.248C14.5582 10.248 14.8125 10.3534 15.0001 10.5409C15.1876 10.7285 15.293 10.9828 15.293 11.248V16.248C15.293 16.5133 15.1876 16.7676 15.0001 16.9552C14.8125 17.1427 14.5582 17.248 14.293 17.248C14.0278 17.248 13.7734 17.1427 13.5859 16.9552C13.3983 16.7676 13.293 16.5133 13.293 16.248V11.248C13.293 10.9828 13.3983 10.7285 13.5859 10.5409C13.7734 10.3534 14.0278 10.248 14.293 10.248ZM14.573 4.24805H10.013L9.67997 5.24805H14.906L14.573 4.24805Z"
                                fill="#656565"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : ( <tr>
                      <td colSpan="8" className="text-center text-[18px] xl:text-[20px] font-[600] pt-[15%] py-6 text-gray-500">
                        No more items in table
                      </td>
                    </tr>
                  )}
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
              Are you sure do you <br /> want delete product{" "}
              <strong>{modalOpen}</strong>
            </span>

            <div className="flex gap-4 w-full justify-between items-center mt-5">
              <button
                onClick={() => setModalOpen(null)}
                className="cursor-pointer hover:shadow-md w-[50%] font-[500] py-[6px] px-5 rounded-full text-[#4B215F] border-1 border-[#4B215F]"
              >
                Cancel
              </button>
              <button onClick={confirmDelete} className="cursor-pointer hover:shadow-md w-[50%] font-[500] py-[6px] px-5 rounded-full text-white bg-[#4B215F] border-1 border-[#4B215F]">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
