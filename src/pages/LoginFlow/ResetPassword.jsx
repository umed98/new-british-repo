import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
    const areBothFieldsFilled = newPassword.trim() !== "" && confirmPassword.trim() !== "";

  return (
    <div className="h-screen w-full flex flex-col gap-10 justify-center items-center p-4">
      <div className="w-[65%] lg:w-[35%] flex flex-col items-center gap-12">
        <h1 className="text-font text-[#4B215F] text-[50px] font-[400] w-full text-center">
          Reset Password
        </h1>
        <form className="w-full flex flex-col items-center gap-5">
        <div className="flex flex-col gap-1 w-[70%] relative">
            <label className="font-[500] text-[16px]" htmlFor="SetNewPassword">
              Set New Password
            </label>
            <input
              name="new_password"
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter New Password..."
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`w-full px-4 py-[10px] lg:py-[12px] ${ newPassword ? "bg-[#FFFEF7]" : "bg-[#F7F7F7]" } border border-[#C0C0C0] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#4B215F] pr-12`}
            />
            <div
              className="absolute right-4 top-10 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

           <div className="flex flex-col gap-1 w-[70%] relative">
            <label className="font-[500] text-[16px]" htmlFor="ConfirmPassword">
              Confirm Password
            </label>
            <input
              name="confirm_password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter Confirm Password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-4 py-[10px] lg:py-[12px] ${ confirmPassword ? "bg-[#FFFEF7]" : "bg-[#F7F7F7]" } border border-[#C0C0C0] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#4B215F] pr-12`}
            />
            <div
              className="absolute right-4 top-10 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          <Link to="/reset-success" className="bg-[#4B215F] hover:bg-[#664177] text-white text-[16px] lg:text-[20px] font-[600] py-[10px] lg:py-[12px] rounded-[50px] w-[70%] mt-4">
            <button className="w-full text-center cursor-pointer">Continue</button>
          </Link>
        </form>
      </div>

      <div className="w-[45%] lg:w-[20%] flex gap-6 mt-20">
        <div className="h-1.5 w-1/2 rounded-md bg-[#DFBA5D]"></div>
        <div className={`h-1.5 w-1/2 rounded-md ${areBothFieldsFilled ? "bg-[#DFBA5D]" : "bg-[#FCE6EA]"}`}></div>
      </div>
    </div>
  );
};

export default ResetPassword;
