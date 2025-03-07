import React, { useState, useRef, useEffect } from 'react';
import InputField from '../component/InputField.jsx';
import usePayment from '../hooks/usePayment.js';
import AddressModal from '../component/AddressModal.jsx';

export default function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [shippingAddress, setShippingAddress] = useState(null);
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [addressFieldsFocused, setAddressFieldsFocused] = useState(false);
    const zipcodeRef = useRef(null);
    const addressRef = useRef(null);

    const {
        cardNumber,
        setCardNumber,
        expiryDate,
        setExpiryDate,
        cvcNumber,
        setCvcNumber,
        cardError,
        setCardError,
        expiryDateError,
        setExpiryDateError,
        cvcError,
        setCvcError,
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
        setAddressFieldsFocused(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setAddressFieldsFocused(false);
    };

    const onAddressSelected = (addressData) => {
        setAddress(addressData.address);
        setZipcode(addressData.zipcode);
        handleAddressSelect(addressData);
        handleCloseModal();
        setAddressFieldsFocused(true);
    };

    const handleDetailAddressChange = (e) => {
        setDetailAddress(e.target.value);
    };

    useEffect(() => {
        if (addressFieldsFocused) {
            if (zipcodeRef.current) {
                zipcodeRef.current.focus();
            }
            if (addressRef.current) {
                addressRef.current.focus();
            }
        }
    }, [addressFieldsFocused]);

    return (
        <div className="flex justify-center w-full min-h-screen mt-66">
            <div className="flex min-h-screen font-sans w-1000">
                <div className="w-[60%] p-8 border-r overflow-y-auto">
                    <div className="mb-8">
                        <h2 className="mb-4 text-xl font-bold">구매자 정보</h2>
                        <p className="text-gray-500">이름, 이메일, 휴대폰 번호 정보는 마이페이지에서 확인하실 수 있습니다.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="mb-4 text-xl font-bold">배송지 정보</h2>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-gray-500">배송 받으실 주소를 선택해주세요.</p>
                            <button
                                onClick={handleOpenModal}
                                className="px-4 py-2 ml-2 text-white rounded-md bg-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                className="w-full mb-2"
                                readOnly
                            />
                            <InputField
                                id="address"
                                type="text"
                                label="주소"
                                value={address}
                                className="w-full mb-2"
                                readOnly
                            />
                            <InputField
                                id="detailAddress"
                                type="text"
                                label="상세주소 (동/호수, 층수)"
                                value={detailAddress}
                                setValue={setDetailAddress}
                                className="w-full mb-2"
                            />

                            <AddressModal
                                isOpen={isModalOpen}
                                onClose={handleCloseModal}
                                onAddressSelected={onAddressSelected}
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-6 text-xl font-bold">결제 정보</h2>

                        <div className="mb-8">
                            <div
                                className={`mb-4 p-4 border rounded-lg cursor-pointer ${paymentMethod === 'creditCard' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                                onClick={() => handlePaymentMethodChange('creditCard')}
                            >
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <span className={`w-8 h-8 rounded-full border ${paymentMethod === 'creditCard' ? 'bg-black' : 'bg-white'}`}></span>
                                    <span className="text-base font-medium text-gray-700">Credit Card</span>
                                </label>

                                {paymentMethod === 'creditCard' && (
                                    <div className="mt-4 ml-6">
                                        <InputField
                                            id="cardNumber"
                                            type="text"
                                            label="카드 번호"
                                            value={cardNumber}
                                            setValue={setCardNumber}
                                            maxLength={19}
                                            inputType="number-only"
                                            className="mb-3"
                                            validate={validateCardNumber}
                                            error={cardError}
                                            shake={shake.cardNumber}
                                        />
                                        <InputField
                                            id="expiryDate"
                                            type="text"
                                            label="유효기간(MM/YYYY)"
                                            value={expiryDate}
                                            setValue={setExpiryDate}
                                            maxLength={7}
                                            placeholder="MM/YYYY"
                                            className="mb-3"
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
                                            className="mb-3"
                                            validate={validateCvcNumber}
                                            error={cvcError}
                                            shake={shake.cvcNumber}
                                        />
                                    </div>
                                )}
                            </div>

                            <div
                                className={`mb-4 p-4 border rounded-lg cursor-pointer ${paymentMethod === 'kakaoPay' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                                onClick={() => handlePaymentMethodChange('kakaoPay')}
                            >
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <span className={`w-8 h-8 rounded-full border ${paymentMethod === 'kakaoPay' ? 'bg-black' : 'bg-white'}`}></span>
                                    <span className="text-base font-medium text-gray-700">카카오페이</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="w-full text-white py-15 rounded-20 bg-blue">결제하기</button>
                        </div>
                    </div>
                </div>

                <div className="w-[40%] p-8 border" style={{ height: '100%' }}>
                    <h2 className="mb-4 text-xl font-bold">주문 상품 정보</h2>
                </div>
            </div>
        </div>
    );
}