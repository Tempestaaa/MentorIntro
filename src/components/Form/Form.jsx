import "./Form.css";
import { useState } from "react";
import FormInput from "../../utils/FormInput/FormInput";

const Form = () => {
  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "First Name",
      required: true,
      errorMsg: "First Name cannot be empty",
      autoComplete: "give-name",
    },
    {
      id: 2,
      name: "lname",
      type: "text",
      placeholder: "Last Name",
      required: true,
      errorMsg: "Last Name cannot be empty",
      autoComplete: "family-name",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      errorMsg: "Looks like this is not an email",
      autoComplete: "email",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      errorMsg: "Password cannot be empty",
      autoComplete: "current-password",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="right">
      <div className="freetrial">
        <p>
          <span>Try it for free 7 days</span> then $20/mo. thereafter
        </p>
      </div>
      <div className="form" onSubmit={handleSubmit}>
        <form noValidate>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              errorMsg={input.errorMsg}
            />
          ))}
          <button>
            <p>claim your free trial</p>
          </button>
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
