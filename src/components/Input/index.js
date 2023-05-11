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
  value,
  disable,
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
            <label for={option.value} key={option.value}>
              <input
                id={option.value}
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

  if (type === "checkbox") {
    return (
      <div className="input_content">
        <label className="input_label">{label}</label>
        <div className="input_checkbox">
          {options.map((option) => (
            <label for={option.value} key={option.value}>
              <input
                id={option.value}
                name={name}
                type="checkbox"
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
          disabled={disable}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
