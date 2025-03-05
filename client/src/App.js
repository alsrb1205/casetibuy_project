import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <CartProvider>
      <DetailProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/detail/:pid" element={<DetailProduct />} />
              <Route path="/new" element={<NewProduct />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage" element={<Mypage />} />
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
  );
}

export default App;
