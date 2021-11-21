import React, { useState, useCallback } from "react";
import cn from "classnames";

const defaultValues = {
  password: "",
  userName: "",
};

export const Login =()=> {
  const [values, setValues] = useState(defaultValues);

  const isDisabled = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/login`;
    let requestOptions = {
      method: "POST",
      body: JSON.stringify({ values }),
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeTextField = useCallback(
    (prop) => (event) => {
      setValues((values) => ({ ...values, [prop]: event?.target.value }));
    },
    [setValues]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <p class="name_input">User name </p>
          <input
            type="username"
            id="username"
            name="username"
            value={values.userName}
            class="input_form"
            placeholder="Enter your User name"
            onChange={handleChangeTextField("userName")}
            formnovalidate
            placeholder="Enter your User name"
          />
        </p>
        <p>
          <p class="name_input">Password </p>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChangeTextField("password")}
            class="input_form"
          />
        </p>
        <div class="forgot_password">
          <a href="" class="forgot">
            Forgot Password?
          </a>
        </div>
        <div class="input_submit_1">
          <input
            type="submit"
            className={cn({
              input_submit: true,
              input_submit_disabled:
                (values.userName && values.password) === ""
                  ? isDisabled
                  : false,
            })}
            value="Login"
          />
        </div>
      </form>
    </div>
  );
}
