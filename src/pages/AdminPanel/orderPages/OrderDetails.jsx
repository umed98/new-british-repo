import React from "react";
import { useParams } from "react-router-dom";
import { asset } from "../../../assets/asset";

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
const OrderDetails = () => {

  const { id } = useParams();

  const orderId = parseInt(id , 10);

  const order = initialData.find((item) => item.id === orderId)
  return (

      <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
        <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 pb-10 bg-[#F7F7F7]">
          <div className="flex flex-col pt-7 py-3 lg:flex-row gap-3 items-end w-full lg:justify-between lg:items-center">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-[600] text-[25px] lg:text-[28px] flex items-center gap-4">
                Order Details{" "}
                {/* <span
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
                    ? "bg-white text-[#4B215F] border-[#4B215F]" : ""
                }`}
              >
                <div className={`w-[7px] h-[7px] rounded-full ${
                  statusFilter === "Completed"
                    ? "  bg-green-700"
                    : statusFilter === "Cancelled"
                    ? "  bg-red-600"
                    : statusFilter === "In Progress"
                    ? "  bg-[#be9500]"
                    : statusFilter === "Shipped"
                    ? "  bg-[#2796AE]"
                    : statusFilter === "All Orders"
                    ? "bg-[#4B215F]" : ""
                }`}></div>
                {statusFilter}
              </span> */}
              </h1>

              <div className="flex items-center gap-4">
                <button className="font-[600] text-[#4B215F] rounded-[4px] border-1 border-[#4B215F] bg-white text-[12px] lg:text-[14px] py-2 px-4 h-[35px] lg:h-[40px] cursor-pointer">
                  Discard
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
                  Add Products
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col rounded-[8px] w-full h-[80%] mt-5 pb-4">
            <div className="flex justify-between items-center w-full py-5 text-right bg-white px-5 rounded-t-[8px] border-b-1 border-[#dfdfdf]">
              <div className="flex flex-col">
                <span className="text-[#929292] font-[500] text-[16px]">
                  Order ID
                </span>
                <h2 className="text-left text-[20px] font-[600] ">{order.id}</h2>
              </div>
              <button className="flex items-center gap-2 rounded-[40px] bg-[#BBFFD7] font-[500] text-[14px] text-[#27AE60] py-2 px-12 cursor-pointer hover:bg-[#704385]">
                Delivered
              </button>
            </div>

            <div className="w-full flex gap-5 p-5">
              <div className="w-[50%] border border-gray-300 rounded-[8px] p-4 flex flex-col gap-5 justify-left xl:justify-between bg-[#FFFFFA]">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#FFFFE4"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#4B215F"
                  />
                  <path
                    d="M13.5 25C13.5 25.5304 13.7107 26.0391 14.0858 26.4142C14.4609 26.7893 14.9696 27 15.5 27C16.0304 27 16.5391 26.7893 16.9142 26.4142C17.2893 26.0391 17.5 25.5304 17.5 25C17.5 24.4696 17.2893 23.9609 16.9142 23.5858C16.5391 23.2107 16.0304 23 15.5 23C14.9696 23 14.4609 23.2107 14.0858 23.5858C13.7107 23.9609 13.5 24.4696 13.5 25ZM23.5 25C23.5 25.5304 23.7107 26.0391 24.0858 26.4142C24.4609 26.7893 24.9696 27 25.5 27C26.0304 27 26.5391 26.7893 26.9142 26.4142C27.2893 26.0391 27.5 25.5304 27.5 25C27.5 24.4696 27.2893 23.9609 26.9142 23.5858C26.5391 23.2107 26.0304 23 25.5 23C24.9696 23 24.4609 23.2107 24.0858 23.5858C23.7107 23.9609 23.5 24.4696 23.5 25Z"
                    stroke="#4B215F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 25H11.5V21M10.5 13H21.5V25M17.5 25H23.5M27.5 25H29.5V19M29.5 19H21.5M29.5 19L26.5 14H21.5M11.5 16H15.5M11.5 18.562H15.5"
                    stroke="#4B215F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-[16px]">
                  Be patient, package on deliver!
                </span>
                <div className="flex w-full gap-3 justify-between items-center">
                  <div className="bg-[#FFFFE4] rounded-[8px] py-2 px-4 flex xl:flex-row flex-col gap-2 items-center">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.25 12.75C4.25 13.1478 4.40804 13.5294 4.68934 13.8107C4.97064 14.092 5.35218 14.25 5.75 14.25C6.14782 14.25 6.52936 14.092 6.81066 13.8107C7.09196 13.5294 7.25 13.1478 7.25 12.75C7.25 12.3522 7.09196 11.9706 6.81066 11.6893C6.52936 11.408 6.14782 11.25 5.75 11.25C5.35218 11.25 4.97064 11.408 4.68934 11.6893C4.40804 11.9706 4.25 12.3522 4.25 12.75ZM11.75 12.75C11.75 13.1478 11.908 13.5294 12.1893 13.8107C12.4706 14.092 12.8522 14.25 13.25 14.25C13.6478 14.25 14.0294 14.092 14.3107 13.8107C14.592 13.5294 14.75 13.1478 14.75 12.75C14.75 12.3522 14.592 11.9706 14.3107 11.6893C14.0294 11.408 13.6478 11.25 13.25 11.25C12.8522 11.25 12.4706 11.408 12.1893 11.6893C11.908 11.9706 11.75 12.3522 11.75 12.75Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.25 12.75H2.75V9.75M2 3.75H10.25V12.75M7.25 12.75H11.75M14.75 12.75H16.25V8.25M16.25 8.25H10.25M16.25 8.25L14 4.5H10.25M2.75 6H5.75M2.75 7.92147H5.75"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span className="text-[14px]">London (UK)...</span>
                  </div>

                  <svg
                    className="w-[200px] h-[12px]"
                    viewBox="0 0 138 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10545 4.05957H133.185"
                      stroke="#4B215F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="6 6"
                    />
                    <path
                      d="M133.358 6.09473L133.358 1.93652L136.96 4.01562L133.358 6.09473Z"
                      fill="#4B215F"
                      stroke="#4B215F"
                    />
                    <circle
                      cx="2.47559"
                      cy="4.05957"
                      r="1.7627"
                      fill="#4B215F"
                      stroke="#4B215F"
                    />
                  </svg>

                  <div className="bg-[#FFFFE4] rounded-[8px] py-2 px-4 flex gap-2 items-center">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.96094 1.5C11.7511 1.5 13.468 2.21116 14.7339 3.47703C15.9998 4.7429 16.7109 6.45979 16.7109 8.25C16.7109 10.5555 15.4539 12.4425 14.1294 13.7963C13.4677 14.4653 12.7456 15.0719 11.9724 15.6083L11.6529 15.8258L11.5029 15.9255L11.2202 16.1055L10.9682 16.2593L10.6562 16.4408C10.4444 16.5616 10.2048 16.6252 9.96094 16.6252C9.71709 16.6252 9.47746 16.5616 9.26569 16.4408L8.95369 16.2593L8.56369 16.0192L8.41969 15.9255L8.11219 15.7208C7.27806 15.1564 6.50111 14.5118 5.79244 13.7963C4.46794 12.4418 3.21094 10.5555 3.21094 8.25C3.21094 6.45979 3.9221 4.7429 5.18797 3.47703C6.45384 2.21116 8.17073 1.5 9.96094 1.5ZM9.96094 3C8.56855 3 7.23319 3.55312 6.24863 4.53769C5.26406 5.52226 4.71094 6.85761 4.71094 8.25C4.71094 9.9915 5.66494 11.52 6.86419 12.747C7.37984 13.269 7.93718 13.7481 8.53069 14.1795L8.87419 14.424C8.98519 14.5015 9.09194 14.5735 9.19444 14.64L9.48694 14.8275L9.74419 14.9843L9.96094 15.111L10.3022 14.9093L10.5774 14.7367C10.7239 14.6438 10.8807 14.5395 11.0477 14.424L11.3912 14.1795C11.9847 13.7481 12.542 13.269 13.0577 12.747C14.2569 11.5208 15.2109 9.9915 15.2109 8.25C15.2109 6.85761 14.6578 5.52226 13.6732 4.53769C12.6887 3.55312 11.3533 3 9.96094 3ZM9.96094 5.25C10.7566 5.25 11.5196 5.56607 12.0823 6.12868C12.6449 6.69129 12.9609 7.45435 12.9609 8.25C12.9609 9.04565 12.6449 9.80871 12.0823 10.3713C11.5196 10.9339 10.7566 11.25 9.96094 11.25C9.16529 11.25 8.40223 10.9339 7.83962 10.3713C7.27701 9.80871 6.96094 9.04565 6.96094 8.25C6.96094 7.45435 7.27701 6.69129 7.83962 6.12868C8.40223 5.56607 9.16529 5.25 9.96094 5.25ZM9.96094 6.75C9.56311 6.75 9.18158 6.90804 8.90028 7.18934C8.61897 7.47064 8.46094 7.85218 8.46094 8.25C8.46094 8.64782 8.61897 9.02936 8.90028 9.31066C9.18158 9.59196 9.56311 9.75 9.96094 9.75C10.3588 9.75 10.7403 9.59196 11.0216 9.31066C11.3029 9.02936 11.4609 8.64782 11.4609 8.25C11.4609 7.85218 11.3029 7.47064 11.0216 7.18934C10.7403 6.90804 10.3588 6.75 9.96094 6.75Z"
                        fill="black"
                      />
                    </svg>

                    <span className="text-[14px]">Your Address...</span>
                  </div>
                </div>
              </div>

              <div className="w-[25%] border border-gray-300 rounded-[8px] p-4 flex flex-col gap-5 justify-between bg-[#FFFFFA]">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#FFFFE4"
                  />
                  <rect
                    x="1"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#4B215F"
                  />
                  <path
                    d="M13.5 25C13.5 25.5304 13.7107 26.0391 14.0858 26.4142C14.4609 26.7893 14.9696 27 15.5 27C16.0304 27 16.5391 26.7893 16.9142 26.4142C17.2893 26.0391 17.5 25.5304 17.5 25C17.5 24.4696 17.2893 23.9609 16.9142 23.5858C16.5391 23.2107 16.0304 23 15.5 23C14.9696 23 14.4609 23.2107 14.0858 23.5858C13.7107 23.9609 13.5 24.4696 13.5 25ZM23.5 25C23.5 25.5304 23.7107 26.0391 24.0858 26.4142C24.4609 26.7893 24.9696 27 25.5 27C26.0304 27 26.5391 26.7893 26.9142 26.4142C27.2893 26.0391 27.5 25.5304 27.5 25C27.5 24.4696 27.2893 23.9609 26.9142 23.5858C26.5391 23.2107 26.0304 23 25.5 23C24.9696 23 24.4609 23.2107 24.0858 23.5858C23.7107 23.9609 23.5 24.4696 23.5 25Z"
                    stroke="#4B215F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 25H11.5V21M10.5 13H21.5V25M17.5 25H23.5M27.5 25H29.5V19M29.5 19H21.5M29.5 19L26.5 14H21.5M11.5 16H15.5M11.5 18.562H15.5"
                    stroke="#4B215F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div className="flex flex-col">
                  <span className="text-[#838383] text-[14px]">
                    Estimated Arrival
                  </span>
                  <span className="text-black text-[16px]">9 June 2025</span>
                </div>
              </div>

              <div className="w-[25%] border border-gray-300 rounded-[8px] p-4 flex flex-col gap-5 justify-between bg-[#FFFFFA]">
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.648438"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    fill="#FFFFE4"
                  />
                  <rect
                    x="0.648438"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#4B215F"
                  />
                  <path
                    d="M20.1484 10C14.625 10 10.1484 14.4766 10.1484 20C10.1484 25.5234 14.625 30 20.1484 30C25.6719 30 30.1484 25.5234 30.1484 20C30.1484 14.4766 25.6719 10 20.1484 10ZM20.1484 28.332C15.5469 28.332 11.8164 24.6016 11.8164 20C11.8164 15.3984 15.5469 11.668 20.1484 11.668C24.75 11.668 28.4805 15.3984 28.4805 20C28.4805 24.6016 24.75 28.332 20.1484 28.332ZM20.9805 13.332H19.3125V20L23.0625 23.75L24.3125 22.5L20.9805 19.168V13.332Z"
                    fill="black"
                  />
                </svg>

                <div className="flex flex-col">
                  <span className="text-[#838383] text-[14px]">
                    Delivery In
                  </span>
                  <span className="text-black text-[16px]">5 Days</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 p-5 mx-5 shadow-sm rounded-[8px] border border-gray-200 bg-[#FFFFFA]">
              {/* Customer Details */}
              <div className="flex-1 border-r-1 border-gray-300">
                <h2 className="text-[18px] xl:text-[20px] font-[600] mb-4">
                  Customer Details
                </h2>
                <div className="space-y-3 text-[14px] xl:text-[16px]">
                  <div className="flex">
                    <span className="w-32 text-[#9D9D9D] font-[500]">Name</span>
                    <span className="mr-2">:</span>
                    <span className="font-[500]">{order.userName}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-[#9D9D9D] font-[500]">
                      Email Address
                    </span>
                    <span className="mr-2">:</span>
                    <span className="font-[500]">{order.email}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-[#9D9D9D] font-[500]">
                      Mobile Number
                    </span>
                    <span className="mr-2">:</span>
                    <span className="font-[500]">{order.phoneNumber}</span>
                  </div>
                </div>
              </div>

              {/* Billing Address & Payment */}
              <div className="flex-1">
                <h2 className="text-[18px] xl:text-[20px] font-[600] mb-4">Billing Address</h2>
                <div className="flex mb-6">
                  <span className="w-32 text-[#9D9D9D] text-[14px] xl:text-[16px] font-[500]">
                    Office Address
                  </span>
                  <span className="mr-2">:</span>
                  <span className="font-[500] text-[14px] xl:text-[16px]">
                    33 Westover Road, Bournemouth,
                    <br />
                    Dorset, BH1 2BZ...
                  </span>
                </div>

                <h2 className="text-[18px] xl:text-[20px] font-[600] mb-2">Payment Method</h2>
                <div className="flex items-center space-x-3">
                  <img
                    src={asset.masterCard}
                    alt="Mastercard"
                    className="w-12 h-12 xl:w-15 xl:h-15"
                  />
                  <div className="leading-5">
                    <p className="text-[#9D9D9D] text-[14px] xl:text-[16px] font-[500]">
                      My Virtual Debit Card
                    </p>
                    <p className="text-base">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mx-0.5" />
                      <span className="inline-block w-2 h-2 bg-black rounded-full mx-0.5" />
                      <span className="inline-block w-2 h-2 bg-black rounded-full mx-0.5" />
                      <span className="ml-1 text-[16px] xl:text-[18px] font-[500]">8553</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-1 border-gray-200 rounded-t-[8px]  flex flex-col gap-5 p-5 m-5 mb-0">
              <div>
                <h1 className="text-[20px] font-[600]">
                  Items{" "}
                  <span className="py-1 px-2 rounded-full bg-[#fffff5] text-[#4B215F] text-[16px] font-[500]">
                    4
                  </span>
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex gap-3 items-center border-1 border-gray-200 rounded-[8px] p-3">
                  <img
                    src={asset.demo}
                    alt="productImage"
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <h1 className="text-black font-[500] text-[16px] xl:text-[18px]">Linen</h1>
                    <span className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">£89.00</span>
                    <p className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">
                      Category <span className="text-black ">: Cushions</span>
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center border-1 border-gray-200 rounded-[8px] p-3">
                  <img
                    src={asset.demo}
                    alt="productImage"
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <h1 className="text-black font-[500] text-[16px] xl:text-[18px]">Linen</h1>
                    <span className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">£89.00</span>
                    <p className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">
                      Category <span className="text-black ">: Cushions</span>
                    </p>
                  </div>
                </div>
                                <div className="flex gap-3 items-center border-1 border-gray-200 rounded-[8px] p-3">
                  <img
                    src={asset.demo}
                    alt="productImage"
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <h1 className="text-black font-[500] text-[16px] xl:text-[18px]">Linen</h1>
                    <span className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">£89.00</span>
                    <p className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">
                      Category <span className="text-black ">: Cushions</span>
                    </p>
                  </div>
                </div>
                                <div className="flex gap-3 items-center border-1 border-gray-200 rounded-[8px] p-3">
                  <img
                    src={asset.demo}
                    alt="productImage"
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <h1 className="text-black font-[500] text-[16px] xl:text-[18px]">Linen</h1>
                    <span className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">£89.00</span>
                    <p className="text-[#a5a5a5] text-[15px] xl:text-[17px] font-[500]">
                      Category <span className="text-black ">: Cushions</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white py-6 rounded-b-[8px] border border-t-0 border-gray-200 mx-5">
              <div className="flex justify-between items-center px-5 mb-4">
                <h2 className="text-lg font-semibold">Order Summary</h2>
                <span className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Payment Success
                </span>
              </div>

              <div className="space-y-3 text-sm px-5">
                <div className="flex justify-between text-gray-600">
                  <span>Sub- Total</span>
                  <span>£456.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span className="text-red-500">-£30.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>VAT</span>
                  <span>£91.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>£25.00</span>
                </div>
              </div>

              <hr className="my-4 text-gray-200" />

              <div className="flex justify-between font-semibold text-base px-5">
                <span>Total Cost</span>
                <span>£542.00</span>
              </div>
            </div>

            <div className="flex justify-between items-center border border-gray-200 py-5 text-right bg-[#FFFFFA] px-5 m-5 rounded-[8px]">
              <div className="flex items-center gap-2">
                <h2 className="text-[18px] font-[600] ">£542.00</h2>
                <span className="text-[#929292] font-[500] text-[16px] pb-1">
                  (4 Items)
                </span>
              </div>
              <button className="flex items-center gap-2 rounded-[40px] bg-[#4B215F] font-[500] text-[17px] xl:text-[20px] text-white py-2 px-12 cursor-pointer hover:bg-[#704385]">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5 15.1318V19.1318C21.5 19.6623 21.2893 20.171 20.9142 20.546C20.5391 20.9211 20.0304 21.1318 19.5 21.1318H5.5C4.96957 21.1318 4.46086 20.9211 4.08579 20.546C3.71071 20.171 3.5 19.6623 3.5 19.1318V15.1318M7.5 10.1318L12.5 15.1318M12.5 15.1318L17.5 10.1318M12.5 15.1318V3.13184"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Download invoice
              </button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default OrderDetails;
