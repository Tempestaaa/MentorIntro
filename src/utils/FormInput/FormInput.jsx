import "./FormInput.css";
import errorIcon from "../../assets/images/icon-error.svg";
import { useState } from "react";

const FormInput = ({ errorMsg, onChange, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocused = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <div className="inputs">
        <input
          {...inputProps}
          onChange={onChange}
          required
          onBlur={handleFocused}
          focused={focused.toString()}
          placeholder={
            focused && inputProps.name === "email"
              ? "email@example/com"
              : inputProps.placeholder
          }
        />
        <span>
          <img src={errorIcon} alt="error icon" />
        </span>
      </div>
      {focused && inputProps.value.length === 0 && (
        <div className="errors">{errorMsg}</div>
      )}
    </div>
  );
};

export default FormInput;
