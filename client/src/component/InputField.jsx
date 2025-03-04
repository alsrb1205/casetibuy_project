export default function InputField({
    id,
    type = "text",
    label,
    value,
    setValue,
    error,
    refElement,
    focused,
    setFocused,
    validate,
    shake,
}) {
    return (
        <div className="relative w-full mb-20">
            <p
                className={`absolute top-50 left-4 text-xs text-red-500 transition-opacity duration-300
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
                onChange={(e) => setValue(e.target.value)}
                ref={refElement}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                    setFocused(false);
                    validate();
                }}
                className={`peer block w-full pt-20 pb-5 px-8 text-black border rounded-12 text-[16px] focus:outline-none
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            ${error && !focused ? "border-red-500" : "bg-white border-gray-300"}
            ${shake ? "animate-shake" : ""}`}
            />

            <label
                htmlFor={id}
                className="absolute left-8 transition-all duration-200
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-14
                peer-focus:top-5 peer-focus:!translate-y-0 peer-focus:text-11 peer-focus:text-blue-500
                peer-valid:top-5 peer-valid:!translate-y-0 peer-valid:text-11 peer-valid:text-blue-500"
            >
                {label}
            </label>
        </div>
    );
}