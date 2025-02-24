import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx';
import './style/common.css'
import './style/style.css'
import DetailProduct from './pages/DetailProduct.jsx';
import 'swiper/css';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { ProductProvider } from './context/ProductContext.js';



function App() {
    return (
        <ProductProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path='/detail' element={<DetailProduct />} />
                        <Route path='/login' element={<Login />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductProvider>
    );
}

export default App;
