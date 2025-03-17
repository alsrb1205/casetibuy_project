import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PListContext = createContext();

export function PListProvider({ children }) {
    const [productList, setProductList] = useState([]);
    const [selectList, setSelectList]= useState('all');
    const [originalProducts, setOriginalProducts] = useState([]);


    const value = {productList, setProductList,selectList, setSelectList,originalProducts, setOriginalProducts}


    return (
            <PListContext.Provider value={value}>
              {children}
            </PListContext.Provider>
    )
}
