import React, { useEffect } from "react";
import { asset } from "../../assets/asset";
import { useNavigate } from "react-router-dom";

const ResetSuccess = () => {

  const navigate = useNavigate();

useEffect(() => {

  setTimeout(() => {
     navigate("/home");
  } ,2500)
}, []);

  return (
    <div className="h-screen w-full flex flex-col gap-10 justify-center items-center p-4">
      <div className="w-[65%] lg:w-[35%] flex flex-col items-center gap-6">
        <div className="relative flex justify-center items-center">
          <svg
            className="w-24 h-24 absolute top-[55%]"
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="checkbox-circle"
              cx="26"
              cy="26"
              r="25"
              fill="#4B215F"
              stroke="#4B215F"
              strokeWidth="2"
            />
            <path
              className="checkbox-check"
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
              d="M14 27 l7 7 l17 -17"
            />
            <style>
              {`
      .checkbox-circle {
        transform: scale(0);
        transform-origin: center;
        animation: circle-pop 0.5s ease-out forwards;
      }

      .checkbox-check {
        stroke-dasharray: 40;
        stroke-dashoffset: 40;
        opacity: 0;
        animation: draw-check 1s ease-out forwards;
        animation-delay: 0.6s;
      }

      @keyframes circle-pop {
        0% {
          transform: scale(0);
        }
        80% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }

      @keyframes draw-check {
        0% {
          stroke-dashoffset: 40;
          opacity: 0;
        }
        60% {
          opacity: 1;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `}
            </style>
          </svg>

          <img src={asset.regSuccessful} alt="" />
        </div>

        <h1 className="text-font text-[#4B215F] text-[50px] font-[400] w-full text-center">
          Your password has been successfully reset
        </h1>
      </div>
    </div>
  );
};

export default ResetSuccess;
