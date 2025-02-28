import React from 'react';
import {Outlet} from 'react-router-dom';
import ProductType from '../../component/product/ProductType.jsx';

export default function LayoutProduct() {
    return (
        <div>
            <ProductType />

            <Outlet />
        </div>
    );
}

