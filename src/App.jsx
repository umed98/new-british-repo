import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Login from "./pages/LoginFlow/Login.jsx";
import ResetPassword from "./pages/LoginFlow/ResetPassword.jsx";
import VerifyOtp from "./pages/LoginFlow/VerifyOtp.jsx";
import ResetSuccess from "./pages/LoginFlow/ResetSuccess.jsx";
import ForgotPassword from "./pages/LoginFlow/ForgotPassword.jsx";

import Home from "./pages/Home";
import Navbar from "./pages/AdminPanel/Navbar.jsx";
import Sidebar from "./pages/AdminPanel/Sidebar.jsx";
import ProductForm from "./pages/AdminPanel/productPages/ProductForm.jsx";
import ProductList from "./pages/AdminPanel/productPages/ProductList.jsx";
import AddProduct from "./pages/AdminPanel/productPages/AddProduct.jsx";
import OrderList from "./pages/AdminPanel/orderPages/OrderList.jsx";
import OrderDetails from "./pages/AdminPanel/orderPages/OrderDetails.jsx";
import CustomerList from "./pages/AdminPanel/customerPages/CustomerList.jsx";
import AddCustomer from "./pages/AdminPanel/customerPages/AddCustomer.jsx";
import CustomerInfo from "./pages/AdminPanel/customerPages/CustomerInfo.jsx";
import UserList from "./pages/AdminPanel/userPages/UserList.jsx";
import AddUser from "./pages/AdminPanel/userPages/AddUser.jsx";
import ProductDisplay from "./pages/AdminPanel/productPages/ProductDisplay.jsx";
import CustomerDisplay from "./pages/AdminPanel/customerPages/CustomerDisplay.jsx";
import OrderDisplay from "./pages/AdminPanel/orderPages/OrderDisplay.jsx";
import OrderDetailNew from "./pages/AdminPanel/orderPages/OrderDetailNew.jsx";
import AddNewOrder from "./pages/AdminPanel/orderPages/AddNewOrder.jsx";
import ProductAddNew from "./pages/AdminPanel/productPages/ProductAddNew.jsx";
import Uploadpro from "./pages/AdminPanel/productPages/Uploadpro.jsx";

// Component to handle layout
const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayoutPaths = [
    "/",
    "/forgot-password",
    "/verify-otp",
    "/reset-password",
    "/reset-success",
  ];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      {!shouldHideLayout && <Sidebar />}
      {children}
    </>
  );
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const publicPaths = [
    "/",
    "/forgot-password",
    "/verify-otp",
    "/reset-password",
    "/reset-success",
  ];

  // console.log("Effect running:", { token, pathname: location.pathname });

  if (token && publicPaths.includes(location.pathname)) {
    // console.log("Redirecting to /home...");
    navigate("/home");
  }
}, [navigate, location.pathname]);


  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />

        {/* Product Flow */}
        <Route path="/product-form" element={<ProductForm />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-display" element={<ProductDisplay />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-add-new" element={<ProductAddNew />} />
        <Route path="/upload-pro" element={<Uploadpro />} />

        {/* Order Flow */}
        <Route path="/add-new-order" element={<AddNewOrder />} />
         <Route path="/order-display" element={<OrderDisplay />} />
          <Route path="/order-detail-new/:id" element={<OrderDetailNew />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/order-details/:id" element={<OrderDetails />} />

        {/* Customer Flow */}
        <Route path="/customer-display" element={<CustomerDisplay />} />
        <Route path="/customer-list" element={<CustomerList />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/customer-info/:id" element={<CustomerInfo />} />

        {/* User Flow */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />

        {/* Login Flow */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-success" element={<ResetSuccess />} />
      </Routes>
    </Layout>
  );
}

export default App;
