import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

   const[selected, setSelected] = useState("");

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[65%] lg:w-[45%] xl:w-[35%] flex flex-col items-center gap-12">
        <h1 className="text-font text-[#4B215F] text-[50px] font-[400] w-full text-center">
          Forgot Password?
        </h1>
        <form className="w-full flex flex-col items-center gap-5">
          <div className={`w-full border-[3px] flex items-center gap-5 rounded-[13px] ${(selected == "sms") ? "border-[#4B215F] bg-[#FFFEF7]" : "border-[#C6C6C6]"} p-5 lg:p-8 hover:shadow-md`}>
            <svg
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.113281"
                y="0.549805"
                width="80"
                height="80"
                rx="40"
                fill="#F9F2AB"
              />
              <path
                d="M31.7806 35.5498H46.7806M31.7806 42.2165H46.7806M31.7806 48.8831H40.1139M56.7806 40.5498C56.7806 49.7548 49.3189 57.2165 40.1139 57.2165H23.4473V40.5498C23.4473 31.3448 30.9089 23.8831 40.1139 23.8831C49.3189 23.8831 56.7806 31.3448 56.7806 40.5498Z"
                stroke="#4B215F"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <span className="text-[14.5px] lg:text-[16px] font-[500] text-[#686868]">
                  via SMS:
                </span>
                <span className="text-[20px] lg:text-[24px] font-[500]">+25******84</span>
              </div>
              <input
                type="radio"
                name="option"
                onChange={() => setSelected("sms")}
                className="w-[30px] lg:w-[40px] accent-[#4B215F] cursor-pointer"
              />
            </div>
          </div>
          <div className={`w-full border-[3px] flex items-center gap-5 rounded-[13px] ${(selected == "email")? "border-[#4B215F] bg-[#FFFEF7]" : "border-[#C6C6C6]"} p-5 lg:p-8 hover:shadow-md`}>
            <svg
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.113281"
                y="0.588867"
                width="80"
                height="80"
                rx="40"
                fill="#F9F2AB"
              />
              <path
                d="M53.4473 33.9222L40.1139 42.2556L26.7806 33.9222V30.5889L40.1139 38.9222L53.4473 30.5889M53.4473 27.2556H26.7806C24.9306 27.2556 23.4473 28.7389 23.4473 30.5889V50.5889C23.4473 51.4729 23.7985 52.3208 24.4236 52.9459C25.0487 53.571 25.8965 53.9222 26.7806 53.9222H53.4473C54.3313 53.9222 55.1792 53.571 55.8043 52.9459C56.4294 52.3208 56.7806 51.4729 56.7806 50.5889V30.5889C56.7806 29.7048 56.4294 28.857 55.8043 28.2319C55.1792 27.6067 54.3313 27.2556 53.4473 27.2556Z"
                fill="#4B215F"
              />
            </svg>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <span className="text-[14.5px] lg:text-[16px] font-[500] text-[#686868]">
                  via Email:
                </span>
                <span className="text-[20px] lg:text-[24px] font-[500]">abc123@gmail.com</span>
              </div>
              <input
                type="radio"
                name="option"
                onChange={() => setSelected("email")}
                className="w-[30px] lg:w-[40px] accent-[#4B215F] cursor-pointer"
              />
            </div>
          </div>
          <Link to="/verify-otp" className="bg-[#4B215F] hover:bg-[#664177] text-white text-[16px] lg:text-[20px] font-[600] py-[10px] lg:py-[12px] rounded-[50px] w-[75%] mt-4">
             <button className="w-full text-center cursor-pointer">Continue</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
