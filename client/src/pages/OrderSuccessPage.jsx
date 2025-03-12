import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OrderSuccessPage() {
    const [orderData, setOrderData] = useState(null);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const pg_token = searchParams.get("pg_token");

    console.log(`pg_token: ${pg_token}`);

    // localStorage에서 주문 데이터를 불러옵니다.
    useEffect(() => {
        const storedOrder = localStorage.getItem("orderData");
        if (storedOrder) {
            setOrderData(JSON.parse(storedOrder));
        }
    }, []);

    // pg_token이 있을 경우 Kakao 승인 API를 호출 후 주문 생성 API 호출
    useEffect(() => {
        if (pg_token) {
            const tid = localStorage.getItem("tid");
            const totalPrice = localStorage.getItem("total_price");
            const user_id = localStorage.getItem("user_id");
            const partner_order_id = localStorage.getItem("partner_order_id");

            axios
                .post("http://localhost:9000/payment/approve", {
                    pg_token,
                    tid,
                    id: user_id,
                    total_amount: totalPrice,
                    partner_order_id, // 클라이언트가 저장한 partner_order_id 사용
                })
                .then((res) => {
                    console.log("✅ [DEBUG] 카카오페이 승인 성공:", res.data);
                    // 승인 후 localStorage에 저장된 주문 데이터를 DB로 전송
                    const storedOrder = localStorage.getItem("orderData");
                    if (storedOrder) {
                        const orderObj = JSON.parse(storedOrder);
                        axios
                            .post("http://localhost:9000/order/checkout", orderObj)
                            .then((orderRes) => {
                                console.log("✅ [DEBUG] 주문 생성 응답:", orderRes.data);
                                localStorage.removeItem("tid");
                                localStorage.removeItem("total_price");
                                localStorage.removeItem("partner_order_id");
                                setOrderData(orderObj);
                            })
                            .catch((orderErr) => {
                                console.error(
                                    "❌ 주문 생성 오류:",
                                    orderErr.response?.data || orderErr.message
                                );
                                alert("주문 처리 중 오류 발생");
                            });
                    }
                })
                .catch((err) => {
                    console.error(
                        "❌ 카카오페이 승인 실패:",
                        err.response?.data || err.message
                    );
                    alert("결제 승인 중 오류 발생");
                });
        }
    }, [pg_token, navigate]);

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
            <div className="p-10 bg-white rounded-lg shadow-lg w-[500px] text-center">
                <h1 className="mb-6 text-2xl font-bold text-green-600">
                    🎉 주문이 완료되었습니다!
                </h1>

                {orderData ? (
                    <div>
                        <p className="text-lg font-semibold">
                            결제 방법: {orderData.payment_method}
                        </p>
                        <p className="text-lg">
                            배송지: {orderData.address}, {orderData.detail_address}
                        </p>
                        <p className="text-lg font-bold text-blue-600">
                            총 가격: {Number(orderData.total_price).toLocaleString()} 원
                        </p>
                        <h2 className="mt-6 text-xl font-semibold">주문 상품</h2>
                        <ul className="mt-4 text-left">
                            {orderData.cartItems.map((item, index) => (
                                <li key={index} className="p-3 border-b">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.product_image}
                                            alt={item.product_name}
                                            className="w-20 h-20 rounded"
                                        />
                                        <div>
                                            <p className="font-semibold">{item.product_name}</p>
                                            <p className="text-sm text-gray-600">
                                                색상: {item.color} | {item.case_type}
                                            </p>
                                            <p className="text-sm font-bold">
                                                ₩{Number(item.unit_price).toLocaleString()} × {item.qty}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>주문 정보를 불러오는 중...</p>
                )}
            </div>
        </div>
    );
}
