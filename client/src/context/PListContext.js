import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PListContext = createContext();

export function PListProvider({ children }) {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:9000/product/all')
        .then(res => {
            setProductList(res.data);
        })
        .catch(err => console.error(err));
    }, []);

    const value = {productList, setProductList}


    return (
            <PListContext.Provider value={value}>
              {children}
            </PListContext.Provider>
    )
}
