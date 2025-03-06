import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import Layout from "./pages/Layout.jsx";
import "./style/common.css";
import "./style/style.css";
import "swiper/css";
import DetailProduct from "./pages/DetailProduct.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./component/Cart.jsx";
import Home from "./pages/Home.jsx";
import { DetailProvider } from "./context/DetailContext.js";
import { CartProvider } from "./context/CartContext";
import IphoneType from "./pages/product/IphoneType.jsx";
import IphoneAll from "./pages/product/IphoneAll.jsx";
import AllProduct from "./pages/product/AllProduct.jsx";
import ProductList from "./component/product/ProductList.jsx";
import HomeList from "./component/product/HomeList.jsx";
import Title from "./component/product/Title.jsx";
import Model from "./pages/product/Model.jsx";
import ModelAll from "./pages/product/ModelAll.jsx";
import ProductType from "./component/product/ProductType.jsx";
import NewProduct from "./pages/NewProduct.jsx";
import TestList from "./component/TestList.jsx";
import Mypage from "./pages/Mypage.jsx";
import Settings from "./pages/Settings.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import { PListProvider } from "./context/PListContext.js";
import { AuthProvider } from "./context/AuthContext.js";

import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartList));
  // }, [cartList]);

  return (
    <AuthProvider>
      <PListProvider>
        <CartProvider>
          <DetailProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/detail/:pid" element={<DetailProduct />} />
                  <Route path="/new" element={<NewProduct />} />
                  <Route
                    path="/login"
                    element={
                      <PublicRoute> 
                        <Login />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="/mypage"
                    element={
                      <PrivateRoute>
                        <Mypage />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/setting" element={<Settings />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/allproduct" element={<AllProduct />} />
                  <Route path="/iphoneall" element={<IphoneAll />} />
                  <Route path="/iphonetype" element={<IphoneType />} />
                  <Route path="/model" element={<Model />} />
                  <Route path="/modelall" element={<ModelAll />} />
                  <Route path="/productlist" element={<ProductList />} />
                  <Route path="/homelist" element={<HomeList />} />
                  <Route path="/title" element={<Title />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Cart />
          </DetailProvider>
        </CartProvider>
      </PListProvider>
    </AuthProvider>
  );
}

// PrivateRoute 컴포넌트 (로그인한 사용자만 접근이 가능)
function PrivateRoute({ children }) {
  const { isLoggedIn } = React.useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
}

// PublicRoute 컴포넌트 (로그아웃한 사용자만 접근이 가능)
function PublicRoute({ children }) {
  const { isLoggedIn } = React.useContext(AuthContext);
  return !isLoggedIn ? children : <Navigate to="/" />; // 로그인 상태면 메인 페이지로
}


export default App;