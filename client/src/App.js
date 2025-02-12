import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx';
import './style/common.css'
import './style/style.css'
import DetailProduct from './pages/DetailProduct.jsx';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/detail' element={<DetailProduct />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
