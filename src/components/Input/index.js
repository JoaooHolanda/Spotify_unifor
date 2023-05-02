import { useState } from "react";
import "./input.css";

export default function Input({
  label,
  type,
  onChange,
  placeholder,
  options,
  name,
  required,
}) {
  const [selectedValue, setSelectedValue] = useState("");

  // const handleOptionChange = event => {
  //     const value = event.target.value;
  //     console.log(event.target.value);
  //     setSelectedValue(value);
  //     onChange(event);
  // };

  if (type === "radio") {
    return (
      <div className="input_content">
        <label className="input_label">{label}</label>
        <div className="input_radio">
          {options.map((option) => (
            <label key={option.value}>
              <input
                name={name}
                checked={selectedValue == option.value}
                type="radio"
                value={option.value}
                onChange={onChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="input_container">
      <div className="input_content">
        <label className="input_label">{label}</label>

        <input
          name={name}
          type={type}
          onChange={(e) => {
            onChange(e);
          }}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
