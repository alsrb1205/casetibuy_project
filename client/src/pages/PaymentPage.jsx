import React, { useState, useRef, useEffect, useContext } from "react";
import InputField from "../component/InputField.jsx";
import usePayment from "../hooks/usePayment.js";
import AddressModal from "../component/AddressModal.jsx";
import PaymentConfirmModal from "../component/PaymentConfirmModal.jsx";
import Cart from "../component/Cart.jsx"; // Cart 컴포넌트 import
import { AuthContext } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    // 로그인 상태이면 사용자 정보 API 호출
    useEffect(() => {
        if (isLoggedIn) {
            const token = localStorage.getItem("token");
            fetch("http://localhost:9000/member/userinfo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((res) => res.json())
                .then((data) => setUserData(data))
                .catch((err) =>
                    console.error("사용자 정보를 가져오는데 실패했습니다.", err)
                );
        } else {
            setUserData({ name: "", email: "", phone: "" });
        }
    }, [isLoggedIn]);

    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [shippingAddress, setShippingAddress] = useState(null);
    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [detailAddress, setDetailAddress] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    // 에러 상태 (우편번호, 상세주소)
    const [zipcodeError, setZipcodeError] = useState(null);
    const [detailAddressError, setDetailAddressError] = useState(null);

    // 각 필드의 ref
    const zipcodeRef = useRef(null);
    const addressRef = useRef(null);
    const detailAddressRef = useRef(null);

    const {
        cardNumber,
        setCardNumber,
        expiryDate,
        setExpiryDate,
        cvcNumber,
        setCvcNumber,
        cardError,
        expiryDateError,
        cvcError,
        shake,
        validateCardNumber,
        validateExpiryDate,
        validateCvcNumber,
    } = usePayment();

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleAddressSelect = (addressData) => {
        setShippingAddress(addressData);
        console.log("선택한 배송지 정보:", addressData);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const onAddressSelected = (addressData) => {
        setAddress(addressData.address);
        setZipcode(addressData.zipcode);
        handleAddressSelect(addressData);
        handleCloseModal();
        setZipcodeError(null);
    };

    const handleDetailAddressChange = (e) => {
        setDetailAddress(e.target.value);
        if (e.target.value) {
            setDetailAddressError(null);
        }
    };

    // 결제하기 버튼 클릭 시 순차 검증: 첫 번째 누락된 필드에만 에러 메시지와 포커스 적용
    const handleSubmit = () => {
        if (!zipcode) {
            setZipcodeError("주소 검색을 통해 배송지를 선택해주세요.");
            zipcodeRef.current?.focus();
            return;
        }
        if (!detailAddress) {
            setDetailAddressError("상세주소를 입력해주세요.");
            detailAddressRef.current?.focus();
            return;
        }
        if (paymentMethod === "creditCard") {
            validateCardNumber();
            const cleanedCard = cardNumber.replace(/-/g, "");
            if (!cardNumber || cleanedCard.length < 16) return;
            validateExpiryDate();
            if (!expiryDate || expiryDate.length !== 5) return;
            validateCvcNumber();
            if (!cvcNumber || cvcNumber.length !== 3) return;
        }
        // 모든 검증 통과 시 결제 확인 모달 오픈
        setIsConfirmModalOpen(true);
    };

    const handleConfirmPayment = () => {
        alert("결제가 완료되었습니다.");
        navigate("/");
    };

    const handleCancelPayment = () => {
        setIsConfirmModalOpen(false);
    };

    return (
        <div className="flex justify-center w-full min-h-screen mt-66">
            <div className="flex w-full max-w-[600px] min-h-screen font-sans">
                <div className="w-[60%] p-8 border-x-2 overflow-y-auto">
                    <div className="mb-8">
                        <h2 className="mb-10 font-bold text-20">구매자 정보</h2>
                        <InputField id="buyerName" type="text" label="이름" value={userData.name} readOnly />
                        <InputField id="buyerEmail" type="text" label="이메일" value={userData.email} readOnly />
                        <InputField id="buyerPhone" type="text" label="전화번호" value={userData.phone} readOnly />
                    </div>

                    <div className="mb-8">
                        <h2 className="mb-10 font-bold text-20">배송지 정보</h2>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-14">배송 받으실 주소를 선택해주세요.</p>
                            <button
                                onClick={handleOpenModal}
                                className="px-6 py-10 mb-10 ml-5 text-white rounded-6 w-80 text-12 bg-blue"
                            >
                                주소 검색
                            </button>
                        </div>
                        <div>
                            <InputField
                                id="zipcode"
                                type="text"
                                label="우편번호"
                                value={zipcode}
                                readOnly
                                refElement={zipcodeRef}
                                error={zipcodeError}
                            />
                            <InputField id="address" type="text" label="주소" value={address} readOnly refElement={addressRef} />
                            <InputField
                                id="detailAddress"
                                type="text"
                                label="상세주소 (동/호수, 층수)"
                                value={detailAddress}
                                setValue={setDetailAddress}
                                refElement={detailAddressRef}
                                error={detailAddressError}
                                onChange={handleDetailAddressChange}
                            />
                            <AddressModal
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                                onAddressSelected={onAddressSelected}
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-10 font-bold text-20">결제 수단</h2>
                        <div className="mb-20">
                            <div
                                className={`mb-15 px-15 py-10 border rounded-12 cursor-pointer ${paymentMethod === "creditCard"
                                        ? "border-blue-500 bg-blue-100"
                                        : "border-gray-300"
                                    }`}
                                onClick={() => handlePaymentMethodChange("creditCard")}
                            >
                                <label className="flex items-center gap-5 cursor-pointer">
                                    <span
                                        className={`w-15 h-15 rounded-full mb-2 border ${paymentMethod === "creditCard" ? "bg-black" : "bg-white"
                                            }`}
                                    ></span>
                                    <span className="text-base font-medium">Credit Card</span>
                                </label>
                                {paymentMethod === "creditCard" && (
                                    <div className="mt-5">
                                        <InputField
                                            id="cardNumber"
                                            type="text"
                                            label="카드 번호"
                                            value={cardNumber}
                                            setValue={setCardNumber}
                                            maxLength={19}
                                            inputType="number-only"
                                            validate={validateCardNumber}
                                            error={cardError}
                                            shake={shake.cardNumber}
                                        />
                                        <InputField
                                            id="expiryDate"
                                            type="text"
                                            label="유효기간(MM/YY)"
                                            value={expiryDate}
                                            setValue={setExpiryDate}
                                            maxLength={5}
                                            placeholder="MM/YY"
                                            validate={validateExpiryDate}
                                            error={expiryDateError}
                                            shake={shake.expiryDate}
                                        />
                                        <InputField
                                            id="cvcNumber"
                                            type="text"
                                            label="CVC"
                                            value={cvcNumber}
                                            setValue={setCvcNumber}
                                            maxLength={3}
                                            inputType="number-only"
                                            validate={validateCvcNumber}
                                            error={cvcError}
                                            shake={shake.cvcNumber}
                                        />
                                    </div>
                                )}
                            </div>
                            <div
                                className={`px-15 py-10 border rounded-12 cursor-pointer ${paymentMethod === "kakaoPay"
                                        ? "border-blue-500 bg-blue-100"
                                        : "border-gray-300"
                                    }`}
                                onClick={() => handlePaymentMethodChange("kakaoPay")}
                            >
                                <label className="flex items-center gap-5 cursor-pointer">
                                    <span
                                        className={`w-15 h-15 rounded-full mb-2 border ${paymentMethod === "kakaoPay" ? "bg-black" : "bg-white"
                                            }`}
                                    ></span>
                                    <span className="text-base font-medium text-gray-700">
                                        카카오페이
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="my-10">
                            <button
                                className="w-full p-12 text-white rounded-12 bg-blue"
                                onClick={handleSubmit}
                            >
                                결제하기
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[40%] p-8 border-r-2 overflow-y-auto">
                    <h2 className="mb-4 font-bold text-20">주문 상품 정보</h2>
                    <Cart />
                </div>
            </div>

            {isConfirmModalOpen && (
                <PaymentConfirmModal
                    buyerInfo={userData}
                    shippingInfo={{
                        zipcode,
                        address,
                        detailAddress,
                    }}
                    paymentMethod={paymentMethod}
                    cardDetails={{
                        cardNumber,
                        expiryDate,
                        cvcNumber,
                    }}
                    onConfirm={handleConfirmPayment}
                    onCancel={handleCancelPayment}
                />
            )}
        </div>
    );
}
