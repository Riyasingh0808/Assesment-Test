import React from "react";

const InputField = ({ label, name, value, onChange, error, type = "text" }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border px-3 py-2 rounded 
          ${error ? "border-red-500" : "border-gray-300"} 
          focus:outline-none focus:ring-1 focus:ring-blue-500`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
