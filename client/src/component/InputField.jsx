import React, { useState } from "react";

export default function InputField({
    id,
    type = "text",
    label,
    value,
    setValue,
    error,
    refElement,
    validate,
    shake,
    maxLength,
    inputType,
    onBlur,
}) {
    const [isFocused, setIsFocused] = useState(false); 
    const handleChange = (e) => {
        let newValue = e.target.value;
        if (inputType === "number-only") {
            newValue = newValue.replace(/[^0-9]/g, '');
        }
        if (id === "expiryDate") {
            newValue = newValue.replace(/[^0-9/]/g, '');
            if (newValue.length === 2 && !newValue.includes('/')) {
                newValue = newValue + '/';
            } else if (newValue.length === 3 && newValue.includes('/')) {
                newValue = newValue.slice(0, 2);
            }
        }
        setValue(newValue);
    };

    const handleKeyDown = (e) => {
        if (id === "expiryDate" && e.key === "Backspace") {
            if (value.length === 3 && value.includes('/')) {
                setValue(value.slice(0, 2));
                e.preventDefault();
            }
        }
    };

    const isSuccessMessage = error === "비밀번호가 일치합니다." || error === "사용 가능한 아이디입니다.";

    return (
        <div className="relative w-full mb-25">
            <p
                className={`absolute top-50 left-4 text-11 transition-opacity duration-300
                    ${isSuccessMessage ? 'text-green' : 'text-red-500'}
                    ${error ? "opacity-100" : "opacity-0"}`}
            >
                {error}
            </p>

            <input
                type={type}
                id={id}
                placeholder=" "
                required
                spellCheck="false"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                ref={refElement}
                onFocus={() => setIsFocused(true)} 
                onBlur={() => {
                    setIsFocused(false); 
                    validate();
                    if (onBlur) {
                        onBlur();
                    }
                }}
                className={`peer block w-full pt-20 pb-5 px-8 text-black rounded-12 text-[16px] focus:outline-none
                    bg-white border-1
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${error && !isFocused ? (isSuccessMessage ? "border-green" : "border-red-500") : "border-[#86868b]"}
                    ${isFocused && error ? "border-blue-500" : ""} /* ✨ 로컬 isFocused 사용 ✨ */
                    ${shake ? "animate-shake" : ""}`}
                maxLength={maxLength}
            />

            <label
                htmlFor={id}
                className="text-[#8c8c8c] absolute left-8 transition-all duration-200
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-14
                    peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-11 peer-focus:text-blue-500
                    peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-11 peer-valid:text-blue-500"
            >
                {label}
            </label>
        </div>
    );
}