import React, { useCallback, useContext, useState } from 'react';
import { DetailContext } from '../context/DetailContext';
import axios from 'axios';

export default function useProduct(initialProducts) {
    const [allProducts, setAllProducts] = useState(initialProducts || []);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts || []);
    const [productList, setProductList] = useState([]);


    const getProductList = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:9000/product/all");
            setProductList(res.data || []);
            return res.data;
        } catch (error) {
            console.error("상품 목록 가져오기 실패:", error);
            return [];
        }
    }, [setProductList]);

    // 필터링 적용 함수
    const applyFilter = useCallback((filterType) => {
        let filtered = allProducts;
        if (filterType === "new") {
            filtered = allProducts.filter((product) => product.isNew);
        } else if (filterType === "hot") {
            filtered = allProducts.filter((product) => product.isHot);
        } else if (filterType === "rec") {
            filtered = allProducts.filter((product) => product.isRec);
        }
        setFilteredProducts(filtered);
    }, [allProducts]);

    // 외부에서 allProducts 상태를 업데이트 할 수 있게 하는 함수
    const updateProducts = useCallback((products) => {
        setAllProducts(products);
        setFilteredProducts(products);
    }, []);




    return {
        allProducts, filteredProducts, updateProducts, applyFilter, getProductList
    };
}


