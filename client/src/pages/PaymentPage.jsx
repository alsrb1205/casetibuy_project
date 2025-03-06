import React, { useState } from 'react';
import InputField from '../component/InputField.jsx';
import usePayment from '../hooks/usePayment.js';

export default function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
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


    return (
        <div className="flex justify-center w-full min-h-screen">
            <div className="flex min-h-screen font-sans w-1000">
                <div className="w-[60%] p-8 border-r overflow-y-auto">
                    <div className="mb-8">
                        <h2 className="mb-4 text-xl font-bold">구매자 정보</h2>
                        <p className="text-gray-500">이름, 이메일, 휴대폰 번호 정보는 마이페이지에서 확인하실 수 있습니다.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="mb-4 text-xl font-bold">배송지 정보</h2>
                        <p className="text-gray-500">배송 받으실 주소를 선택해주세요.</p>
                    </div>

                    <div>
                        <h2 className="mb-6 text-xl font-bold">결제 정보</h2>

                        <div className="mb-8">
                            <div className={`mb-4 p-4 border ${paymentMethod === 'creditCard' ? 'border-blue-500' : 'border-gray-300'}`}>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="creditCard"
                                        checked={paymentMethod === 'creditCard'}
                                        onChange={() => handlePaymentMethodChange('creditCard')}
                                        className="w-6 h-6 text-gray-500 border-gray-400 form-radio focus:ring-gray-500"
                                    />
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

                            <div className={`mb-4 p-4 border ${paymentMethod === 'kakaoPay' ? 'border-blue-500' : 'border-gray-300'}`}>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        value="kakaoPay"
                                        checked={paymentMethod === 'kakaoPay'}
                                        onChange={() => handlePaymentMethodChange('kakaoPay')}
                                        className="w-6 h-6 text-gray-500 border-gray-400 form-radio focus:ring-gray-500"
                                    />
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