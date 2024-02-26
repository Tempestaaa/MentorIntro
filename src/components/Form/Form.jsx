import "./Form.css";
import { useState } from "react";
import errorIcon from "../../assets/images/icon-error.svg";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Form = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    error: {
      fname: "First Name cannot be empty",
      lname: "Last Name cannot be empty",
      email: "Email cannot be empty",
      password: "Password cannot be empty",
    },
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleErrors = () => {
    const ValidateErrors = { fname: "", lname: "", email: "", password: "" };
    if (!values.fname.trim()) {
      ValidateErrors.fname = values.error.fname;
    }

    if (!values.lname.trim()) {
      ValidateErrors.lname = values.error.lname;
    }

    if (!values.email.trim()) {
      ValidateErrors.email = values.error.email;
    } else if (!emailRegex.test(values.email.trim())) {
      ValidateErrors.email = "Looks like this is not an email";
    }

    if (!values.password.trim()) {
      ValidateErrors.password = values.error.password;
    }
    return setErrors(ValidateErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleErrors();
  };

  return (
    <div className="right grid">
      <div className="freetrial">
        <p>
          <span>Try it for free 7 days</span> then $20/mo. thereafter
        </p>
      </div>
      <div className="form-container grid" onSubmit={handleSubmit}>
        <form noValidate className="grid">
          <div className="inputs grid">
            {/* FIRST NAME */}
            <div className="input-and-error grid">
              <div
                className={`input-part grid ${
                  errors.fname ? "error-border" : ""
                }`}
              >
                <input
                  type="text"
                  name="fname"
                  value={values.fname}
                  onChange={onChange}
                  autoComplete="give-name"
                  placeholder="First Name"
                />
                {errors.fname && <img src={errorIcon} alt="error icon" />}
              </div>
              {errors.fname && <div className="error-part">{errors.fname}</div>}
            </div>
            {/* LAST NAME */}
            <div className="input-and-error grid">
              <div
                className={`input-part grid ${
                  errors.lname ? "error-border" : ""
                }`}
              >
                <input
                  type="text"
                  name="lname"
                  value={values.lname}
                  onChange={onChange}
                  autoComplete="family-name"
                  placeholder="Last Name"
                />
                {errors.lname && <img src={errorIcon} alt="error icon" />}
              </div>
              {errors.lname && <div className="error-part">{errors.lname}</div>}
            </div>
            {/* EMAIL */}
            <div className="input-and-error grid">
              <div
                className={`input-part grid ${
                  errors.email ? "error-border" : ""
                }`}
              >
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={onChange}
                  autoComplete="email"
                  placeholder="Email"
                />
                {errors.email && <img src={errorIcon} alt="error icon" />}
              </div>
              {errors.email && <div className="error-part">{errors.email}</div>}
            </div>
            {/* PASSWORD */}
            <div className="input-and-error grid">
              <div
                className={`input-part grid ${
                  errors.password ? "error-border" : ""
                }`}
              >
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={onChange}
                  autoComplete="current-password"
                  placeholder="Password"
                />
                {errors.password && <img src={errorIcon} alt="error icon" />}
              </div>
              {errors.password && (
                <div className="error-part">{errors.password}</div>
              )}
            </div>
          </div>
          <input type="submit" value="claim your free trial" />
        </form>
        <div className="terms-and-services">
          <p>
            By clicking the button you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
