import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const inputsRef = useRef([]);

  const isOtpComplete = otp.every(digit => digit !== "");

  useEffect(() => {
    if (resendTimer === 0) return;
    const timer = setInterval(() => {
      setResendTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);

    if (index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d+$/.test(pasted)) return;

    const newOtp = pasted.split("");
    setOtp(newOtp);

    const lastIndex = newOtp.length - 1;
    inputsRef.current[lastIndex].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.includes("")) {
      setError("Please enter complete OTP.");
      return;
    }
    setError("");
    const finalOtp = otp.join("");
    console.log("Submitted OTP:", finalOtp);

    // TODO: API call here
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setOtp(["", "", "", ""]);
      setResendTimer(30);
      console.log("OTP Resent!");
    }
  };

  return (
    <div className="h-screen w-full flex flex-col gap-10 justify-center items-center p-4">
      <div className="w-[50%] lg:w-[45%] flex flex-col items-center gap-8">
        <h1 className="text-[#4B215F] text-font text-[40px] lg:text-[50px] font-medium text-center">
          Enter Your <br />Verification Code
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-8">
          <div
            className="flex gap-8 justify-center w-full"
            onPaste={handlePaste}
          >
            {otp.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                ref={(el) => (inputsRef.current[idx] = el)}
                className={`border-2 ${ error ? "border-red-500" : "border-[#C0C0C0]"} ${ digit !== "" ? "bg-[#FFFEF7]" : "bg-[#F7F7F7]" } bg-[#F7F7F7] text-center font-semibold text-2xl rounded-xl w-22 h-20 focus:outline-none focus:border-3 focus:border-[#664177]`}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

        <Link to="/reset-password" className="bg-[#4B215F] hover:bg-[#664177] text-white text-[16px] lg:text-[20px] font-[600] py-3 rounded-full w-[100%] lg:w-[60%] mt-8">
          <button
            type="submit"
            className="w-full text-center cursor-pointer"
          >
            Continue
          </button>
        </Link>
        </form>

        <div className="flex flex-col items-center gap-2 mt-4">
          {resendTimer > 0 ? (
            <p className="text-gray-500 text-[16px] cursor-pointer">
              Resend OTP in {resendTimer} sec
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-[#4B215F] hover:underline text-[16px] font-medium cursor-pointer"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>

      <div className="w-[45%] lg:w-[20%] flex gap-6 mt-6">
        <div className={`h-1.5 w-1/2 rounded-md ${isOtpComplete ? "bg-[#DFBA5D]" : "bg-[#FCE6EA]"}`}></div>
        <div className="h-1.5 w-1/2 rounded-md bg-[#FCE6EA]"></div>
      </div>
    </div>
  );
};

export default VerifyOtp;
