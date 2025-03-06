// src/hooks/usePayment.js
import { useState } from 'react';

export default function usePayment() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvcNumber, setCvcNumber] = useState('');
    const [cardError, setCardError] = useState(null);
    const [expiryDateError, setExpiryDateError] = useState(null);
    const [cvcError, setCvcError] = useState(null);
    const [shake, setShake] = useState({
        cardNumber: false,
        expiryDate: false,
        cvcNumber: false,
    });

    const validateCardNumber = () => {
        if (!cardNumber) {
            setCardError("카드 번호를 입력해주세요.");
            setShake(prevShake => ({ ...prevShake, cardNumber: true }));
            setTimeout(() => setShake(prevShake => ({ ...prevShake, cardNumber: false })), 500);
        } else if (cardNumber.length < 16) {
            setCardError("카드 번호 16자리를 입력해주세요.");
            setShake(prevShake => ({ ...prevShake, cardNumber: true }));
            setTimeout(() => setShake(prevShake => ({ ...prevShake, cardNumber: false })), 500);
        } else {
            setCardError(null);
            return null;
        }
    };

    const validateExpiryDate = () => {
        if (!expiryDate) {
            setExpiryDateError("유효기간을 입력해주세요.");
            setShake(prevShake => ({ ...prevShake, expiryDate: true }));
            setTimeout(() => setShake(prevShake => ({ ...prevShake, expiryDate: false })), 500);
        } else if (expiryDate.length !== 7) {
            setExpiryDateError("유효기간 형식에 맞춰 입력해주세요.");
            setShake(prevShake => ({ ...prevShake, expiryDate: true }));
            setTimeout(() => setShake(prevShake => ({ ...prevShake, expiryDate: false })), 500);
        } else {
            setExpiryDateError(null);
            return null;
        }
    };

    const validateCvcNumber = () => {
        if (!cvcNumber) {
            setCvcError("CVC 번호를 입력해주세요.");
            setShake(prevShake => ({ ...prevShake, cvcNumber: true }));
            setTimeout(() => setShake(prevShake => ({ ...prevShake, cvcNumber: false })), 500);
        } else if (cvcNumber.length !== 3) {
            setCvcError("CVC 번호 3자리를 입력해주세요.");
            setShake(prevShake => ({ ...prevShake, cvcNumber: true }));
            setTimeout(() => setShake(prevShake => ({ ...prevShake, cvcNumber: false })), 500);
        } else {
            setCvcError(null);
            return null;
        }
    };

    return {
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
    };
}