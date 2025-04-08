import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const InputLayout = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (type === "password") return showPassword ? "text" : "password";
    return type;
  };

  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="block text-[13px] text-slate-800 mb-1">{label}</label>
      )}

      <div className="flex items-center border border-slate-300 rounded px-3 py-2 relative">
        <input
          type={getInputType()}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none pr-8"
          value={value}
          onChange={onChange}
        />

        {type === "password" && (
          <span
            className="absolute right-3 text-slate-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEye size={18} />
            ) : (
              <FaRegEyeSlash size={18} />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputLayout;
