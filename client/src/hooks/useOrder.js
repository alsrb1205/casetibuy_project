import axios from 'axios';
import React, { useCallback, useState } from 'react';

export default function useOrder() {
    const [orderList,setOrderList]=useState([]);

    const getOrderList = useCallback(async () => {
        const id = localStorage.getItem("user_id");
        const result = await axios.post("http://localhost:9000/order/orderlist", {
            memberId: id,
        });
        setOrderList(result.data);
        return result.data;
    },[])





    return {getOrderList, orderList};
}

