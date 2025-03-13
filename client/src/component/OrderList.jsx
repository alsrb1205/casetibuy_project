// src/components/OrderList.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SeriesItem from "./product/SeriesItem.jsx";
import { AuthContext } from "../context/AuthContext.js";

export default function OrderList() {
    const [orderGroups, setOrderGroups] = useState([]);
    const { isLoggedIn } = useContext(AuthContext);
    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        if (isLoggedIn && userId) {
            axios
                .get(`http://localhost:9000/order/member/${userId}`)
                .then((res) => {
                    // res.data는 join 결과의 배열로 넘어옵니다.
                    // order_id 별로 그룹화
                    const groups = {};
                    res.data.forEach((row) => {
                        if (!groups[row.order_id]) {
                            groups[row.order_id] = [];
                        }
                        groups[row.order_id].push(row);
                    });
                    const orderArray = Object.values(groups).sort(
                        (a, b) => new Date(b[0].order_date) - new Date(a[0].order_date)
                    ); setOrderGroups(orderArray);
                })
                .catch((err) => {
                    console.error("Failed to fetch orders", err);
                });
        }
    }, [isLoggedIn, userId]);

    if (!orderGroups.length) {
        return <p>구매한 주문이 없습니다.</p>;
    }
    console.log(orderGroups);

    return (
        <div className="flex flex-col gap-8">
            {orderGroups.map((orderGroup) => {
                // orderGroup은 하나의 주문에 해당하는 모든 상품(행)들을 포함합니다.
                const orderInfo = orderGroup[0]; // 주문 정보는 모든 행에 동일함
                return (
                    <div
                        key={orderInfo.order_id}
                        className="p-16 border rounded-md shadow-sm"
                    >
                        {/* 주문 정보 영역 */}
                        <div className="mb-4">
                            <p>
                                <span className="font-bold">주문 번호:</span>{" "}
                                {orderInfo.order_id}
                            </p>
                            <p>
                                <span className="font-bold">주문 일자:</span>{" "}
                                {new Date(orderInfo.order_date).toLocaleString()}
                            </p>
                            <p>
                                <span className="font-bold">총 금액:</span>{" "}
                                {Number(orderInfo.total_price).toLocaleString()} 원
                            </p>
                            <p>
                                <span className="font-bold">결제 방법:</span>{" "}
                                {orderInfo.payment_method}
                            </p>
                            <p>
                                <span className="font-bold">배송지:</span>{" "}
                                {orderInfo.address}, {orderInfo.detail_address}
                            </p>
                        </div>
                        {/* 주문에 포함된 상품들을 5개씩 그리드로 출력 */}
                        <div className="flex gap-16 overflow-hidden">
                            {orderGroup.map((item, index) => (
                                <SeriesItem
                                    key={`${item.product_id}-${index}`}
                                    imageSrc={item.image}
                                    title={item.product_name}
                                    titleClassName='mt-10'
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
