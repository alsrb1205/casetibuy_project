// src/components/OrderList.jsx
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import useOrder from "../hooks/useOrder.js";
import SeriesItem from "./product/SeriesItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faGear,
    faArrowRightFromBracket,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function OrderList() {
    const { isLoggedIn } = useContext(AuthContext);
    const { getOrderList, orderList } = useOrder();  // useOrder 훅 사용
    const [orderGroups, setOrderGroups] = useState([]);

    useEffect(() => {
        if (isLoggedIn) {
            // 주문 데이터 가져오기
            getOrderList().then((data) => {
                if (!data) return;
                // orderList 데이터가져온 후 order_id별 그룹화
                const groups = {};
                data.forEach((row) => {
                    if (!groups[row.order_id]) {
                        groups[row.order_id] = [];
                    }
                    groups[row.order_id].push(row);
                });

                // 그룹 배열을 order_date 기준 내림차순 정렬(또는 order_id)
                const orderArray = Object.values(groups).sort(
                    (a, b) => new Date(b[0].order_date) - new Date(a[0].order_date)
                );

                setOrderGroups(orderArray);
            });
        }
    }, [isLoggedIn, getOrderList]);

    if (!orderGroups.length) {
        return <p>구매한 주문이 없습니다.</p>;
    }

    return (
        <div className="flex flex-col gap-8">
            <h2 className="font-bold text-32 mb-30">주문</h2>
            <div className="flex gap-10 mb-10">
                <span className="px-20 py-10 text-white bg-black border rounded-full">
                    모든 주문
                </span>
                <span className="px-20 py-10 border rounded-full">출고 완료</span>
            </div>
            {orderGroups.map((orderGroup) => {
                // orderGroup은 하나의 주문(주문번호가 같은) 내 모든 상품을 담는다
                const orderInfo = orderGroup[0];
                return (
                    <div
                        key={orderInfo.order_id}
                        className="p-16 border rounded-md shadow-sm"
                    >
                        {/* 주문 정보 영역 */}

                        <div className="mb-4">
                            <li className="flex items-center justify-between">
                                <span>
                                    주문 현황 : <span className="font-bold">{orderInfo.order_status}</span>
                                </span>
                                <span className="flex items-center">
                                    <span className="p-2 mr-5 bg-sky text-blue text-10">포인트</span>
                                    <span className="text-blue">적립 완료</span>
                                    <FontAwesomeIcon icon={faAngleRight} className="ml-20" />
                                </span>
                            </li>
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

                        <div className="grid grid-cols-6 gap-16">
                            {orderGroup.map((item, index) => (
                                <SeriesItem
                                    key={`${item.product_id}-${index}`}
                                    imageSrc={item.image}
                                    title={item.product_name}
                                    titleClassName="mt-10"
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
