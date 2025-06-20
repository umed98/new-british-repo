import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

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

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCus from "./pages/AdminPanel/customerPages/AddCus.jsx";
import AddOrder from "./pages/AdminPanel/orderPages/AddOrder.jsx";

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

    if (token && publicPaths.includes(location.pathname)) {
      navigate("/dashboard");
    }
  }, [navigate, location.pathname]);

  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-success" element={<ResetSuccess />} />
        <Route path="/add-cus" element={<AddCus />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Product Flow */}
        <Route
          path="/product-form"
          element={
            <ProtectedRoute>
              <ProductForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-list"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-display"
          element={
            <ProtectedRoute>
              <ProductDisplay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-add-new"
          element={
            <ProtectedRoute>
              <ProductAddNew />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload-pro"
          element={
            <ProtectedRoute>
              <Uploadpro />
            </ProtectedRoute>
          }
        />

        {/* Order Flow */}
        <Route
          path="/add-new-order"
          element={
            <ProtectedRoute>
              <AddNewOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-order"
          element={
            <ProtectedRoute>
              <AddOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-display"
          element={
            <ProtectedRoute>
              <OrderDisplay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-detail-new/:id"
          element={
            <ProtectedRoute>
              <OrderDetailNew />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-list"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-details/:id"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />

        {/* Customer Flow */}
        <Route
          path="/customer-display"
          element={
            <ProtectedRoute>
              <CustomerDisplay />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer-list"
          element={
            <ProtectedRoute>
              <CustomerList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-customer"
          element={
            <ProtectedRoute>
              <AddCustomer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer-info/:id"
          element={
            <ProtectedRoute>
              <CustomerInfo />
            </ProtectedRoute>
          }
        />

        {/* User Flow */}
        <Route
          path="/user-list"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-user"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Layout>
  );
}

export default App;
