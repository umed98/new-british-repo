import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate ,matchPath } from "react-router-dom";

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
import AddProductData from "./pages/add-product/AddProductData.jsx";
import AddOrderAuto from "./pages/AdminPanel/orderPages/AddOrderAuto.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";


import "react-toastify/dist/ReactToastify.css";
import AddCus from "./pages/AdminPanel/customerPages/AddCus.jsx";
import AddOrder from "./pages/AdminPanel/orderPages/AddOrder.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from 'react-toastify';
 
// Component to handle layout
const Layout = ({ children }) => {
  const location = useLocation();

  const hideLayoutPaths = [
    "/",
    "/forgot-password",
    "/verify-otp",
    "/reset-password",
    "/reset-success",
    "/order-invoice/:order_id",
  ];

    const shouldHideLayout = hideLayoutPaths.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );
   

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
      "/order-invoice/:order_id",
    ];

    if (token && publicPaths.includes(location.pathname)) {
      navigate("/dashboard");
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    <AuthProvider>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-success" element={<ResetSuccess />} />
          <Route path="/add-cus" element={<AddCus />} />
          {/* <Route path="/order-invoice/:order_id" element={<OrderInvoice/> } /> */}

          {/* Protected Routes */}
          <Route path="/dashboard" element={<Home />} />

          {/* Product Flow */}
          <Route path="/product-form" element={ <ProtectedRoute> <ProductForm /> </ProtectedRoute> } />
          <Route path="/add-product-data"  element={ <ProtectedRoute> <AddProductData /> </ProtectedRoute> } />
          <Route path="/product-list" element={ <ProtectedRoute> <ProductList /> </ProtectedRoute> }/>
          <Route path="/product-display" element={<ProductDisplay />} />
          <Route path="/add-product" element={ <ProtectedRoute> <AddProduct /> </ProtectedRoute> } />
          <Route path="/product-add-new" element={<ProductAddNew />} />
          <Route path="/upload-pro" element={ <ProtectedRoute> <Uploadpro /> </ProtectedRoute> } />

          {/* Order Flow */}
          <Route path="/add-new-order" element={ <ProtectedRoute> <AddNewOrder /> </ProtectedRoute> } />
          <Route path="/add-order" element={<AddOrder />} />
          <Route path="/add-order-auto" element={<AddOrderAuto />} />
          <Route path="/order-display" element={<OrderDisplay />} />
          <Route path="/order-detail-new/:id" element={ <ProtectedRoute> <OrderDetailNew /> </ProtectedRoute> } />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/order-details/:order_id" element={ <OrderDetails /> } />
         
           {/* Customer Flow */}
          <Route path="/customer-display" element={<CustomerDisplay />} />
          <Route path="/customer-list" element={ <ProtectedRoute><CustomerList /></ProtectedRoute> } />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/customer-info/:id" element={<CustomerInfo />} />

          {/* User Flow */}
          <Route path="/user-list" element={<UserList />} />
          <Route path="/add-user" element={ <ProtectedRoute> <AddUser /> </ProtectedRoute>
            }
          />
        </Routes>
      
      </Layout>
    </AuthProvider>
    </>
  );
}

export default App;
