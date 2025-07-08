import React from "react";

const RadioGroup = ({ options, selected, onChange, name }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">
        Pay Via
      </label>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-1">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected === opt.value}
              onChange={onChange}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
