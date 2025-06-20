import React, { useState } from "react";
import { asset } from "../../assets/asset";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const validateLogin = ({ username, password }) => {
    const errors = {};
    if (!username) {
      errors.username = "Username is required.";
    }
    if (!password) {
      errors.password = "Password is required.";
    }
    return errors;
  };

  const login = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(form);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "https://britishquilting.fastranking.tech/api/login",
        form
      );
      const { token, user } = response.data;

      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("token", token);
      storage.setItem(
        "username",
        JSON.stringify({ username: user.username, email: user.email })
      );

      navigate("/dashboard");
    } catch (err) {
      const message = err.response?.data?.message || "Login failed. Try again.";
      setFieldErrors({ general: message });
    }
  };

  return (
    <div className="h-screen w-full flex bg-gray-100">
      <div className="w-[45%] bg-[#4B215F] flex items-end">
        <img src={asset.AuthBg} alt="AuthBg" className="w-full h-[80%]" />
      </div>
      <div
        className="relative bg-white shadow-lg flex flex-col items-center justify-center rounded-2xl p-8 w-[55%]"
        id="conthisoin"
      >
        <img
          src={asset.logo}
          alt="Logo"
          className="absolute top-[10%] w-[60%] lg:w-[45%] xl:w-[35%]"
        />
        <h2 className="text-font text-[50px] font-[400] text-[#4B215F] mt-[30%] lg:mt-[12%]">
          Login
        </h2>

        <form onSubmit={login} className="space-y-4 w-[95%] xl:w-[60%]">
          <div className="flex flex-col gap-1">
            <label className="font-[500] text-[16px]" htmlFor="user">
              Username
            </label>
            <input
              name="user"
              type="text"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              placeholder="user"
              className={`w-full px-4 py-[10px] lg:py-[12px] ${
                form.username !== "" ? "bg-[#FFFEF7]" : "bg-[#F7F7F7]"
              } border border-[#C0C0C0] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#4B215F]`}
            />

            {/* <p className="text-red-500 text-sm mt-1">user error</p> */}
          </div>

          <div className="flex flex-col gap-1 relative">
            <label className="font-[500] text-[16px]" htmlFor="password">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Password"
              className={`w-full px-4 py-[10px] lg:py-[12px] ${
                form.password !== "" ? "bg-[#FFFEF7]" : "bg-[#F7F7F7]"
              } border border-[#C0C0C0] rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#4B215F]`}
            />

            <div
              className="absolute right-4 top-10 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
            {/* <p className="text-red-500 text-sm mt-1"> Password error </p> */}
          </div>
          {/* <p className="text-red-500 text-sm text-center">error</p> */}
          <span className="text-red-500 py-3">{fieldErrors.general}</span>

          <div className="flex justify-between items-center mb-10">
            <div>
              <input onChange={(e) => setRememberMe(e.target.checked)} type="checkbox" className="cursor-pointer" />
              <span className="text-[#7E7E7E] font-[500]"> Remember Me</span>
            </div>
            <Link
              to="/forgot-password"
              className="text-[#7E7E7E] font-[500] hover:text-[#4b4b4b]"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full font-[600] text-[16px] lg:text-[20px] bg-[#4B215F] text-white py-[10px] lg:py-[12px] rounded-[50px] hover:bg-[#7a4d8d] mt-2 cursor-pointer"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between gap-2 items-center w-[95%] lg:w-[60%] py-3">
          <div className="h-[1px] w-[45%] bg-gray-400"></div>
          <span className="text-gray-400 text-[18px] font-[600]">or</span>
          <span className="h-[1px] w-[45%] bg-gray-400"></span>
        </div>

        <div className="flex justify-between w-[95%] xl:w-[60%] gap-3 pb-8 ">
          <button className="flex justify-center items-center shadow-sm cursor-pointer gap-2 w-full bg-[#E4E7EB] rounded-[50px] py-[10px] lg:py-[12px] hover:bg-[#d8d8d8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <path
                fill="#ffc107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
              />
              <path
                fill="#ff3d00"
                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
              />
              <path
                fill="#4caf50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
              />
              <path
                fill="#1976d2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
              />
            </svg>
            <span className="text-[14.5px] lg:text-[16px] font-[500] text-[#4B5768]">
              Continue with Google
            </span>
          </button>
        </div>
        {/* <div className="flex justify-between items-center w-[95%] lg:w-[60%] mt-4">
          <p className="text-[14.5px] lg:text-[16px] font-[500] text-center">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-[16px] font-[500] text-[#4B215F] hover:underline"
            >
              Sign up
            </a>
          </p>
          <Link to="/signup">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M17.7071 7.44084C18.0976 7.83137 18.0976 8.46453 17.7071 8.85506L11.3431 15.219C10.9526 15.6095 10.3195 15.6095 9.92893 15.219C9.53841 14.8285 9.53841 14.1953 9.92893 13.8048L15.5858 8.14795L9.92893 2.4911C9.53841 2.10057 9.53841 1.46741 9.92893 1.07688C10.3195 0.686357 10.9526 0.686357 11.3431 1.07688L17.7071 7.44084ZM1 9.14795C0.447716 9.14795 0 8.70023 0 8.14795C0 7.59566 0.447716 7.14795 1 7.14795V9.14795ZM17 8.14795V9.14795H1V8.14795V7.14795H17V8.14795Z"
                fill="#4B215F"
              />
            </svg>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
