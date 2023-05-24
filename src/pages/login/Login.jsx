import React, { memo, useCallback, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMutation } from "@tanstack/react-query";
import "./Login.css";
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-unresolved
import { loginApi } from "../../api/auth";

// React query does 2 things:
// Query, i.e getting data from somewhere.
// Mutation, i.e changing data kept somewhere.

// To prevent unnecessary re-render, useMemo() monitors changes
// and returns the memoize value of the function.
const Login = memo(() => {
  const loginUser = useMutation({
    mutationFn:
    async (data) => {
      const response = await loginApi(data);
      return response;
    },
    onSuccess: (data) => {
      // eslint-disable-next-line no-console
      console.log(data);
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });

  const [inputs, setInputs] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [inputType, setInputType] = useState("password");

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputs((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
    setErrors("");
  };

  const handleShowPassword = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  // As long as inputs stays the same, useCallback memoize the function
  // and prevents unnecessary re-renders.
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-console, max-len
      const { usernameOrEmail, password } = inputs;
      loginUser.mutate({ usernameOrEmail, password });
    },
    [inputs, loginUser],
  );
 
  return (
    <>
      <header className="mt-8 py-7 py-md-5">
        <div className="container text-center py-xl-2">
          <h2 className="display-4 fw-semi-bold mb-0 my-text-blue">Welcome!</h2>
        </div>
      </header>
      <div className="container mb-11">
        <div className="row gx-0">
          <div className="col-md-7 col-xl-4 mx-auto">
            <form className="mb-5" action="/">
              <div className="form-group mb-5">
                <label htmlFor="usernameOrEmail" className="my-text-blue mb-2">Username or Email</label>
                <input
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  type="text"
                  className="form-control py-3"
                  placeholder="creative@example.com"
                  value={inputs.usernameOrEmail}
                  // eslint-disable-next-line react/no-unknown-property
                  errors={errors.usernameOrEmail}
                  onChange={handleInputChange}
                />
                {errors.usernameOrEmail && (
                  <div style={styles.errorBox}>{errors.usernameOrEmail}</div>
                )}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="my-text-blue mb-2">Password</label>
                <input
                  id="password"
                  name="password"
                  type={inputType}
                  className="form-control py-3"
                  placeholder="**********"
                  value={inputs.password}
                  // eslint-disable-next-line react/no-unknown-property
                  errors={errors.usernameOrEmail}
                  onChange={handleInputChange}
                />
                {<div style={styles.errorBox}>{errors.password}</div>}
              </div>

              <div className="d-flex align-items-center mb-5 font-size-sm">
                <div className="form-check">
                  <input
                    className="form-check-input text-gray-800"
                    type="checkbox"
                    onClick={handleShowPassword}
                  />
                  <label
                    htmlFor="showPassword"
                    className="form-check-label text-gray-800"
                  >
                    Show Password
                  </label>
                </div>
                <div className="ms-auto">
                  <a className="text-gray-800" href="/">
                    Forgot Password
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-block btn-my-blue w-100 py-3 text-white fs-5"
                onClick={handleSubmit}
                disabled={loginUser.isLoading}
              >
                {loginUser.isLoading ? "Logging in..." : "LOGIN"}
              </button>
            </form>
            <p className="mb-0 font-size-sm text-center">
              Don&rsquo;t have an account?
              {" "}
              <a className="text-underline my-text-blue" href="/">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

const styles = {
  errorBox: {
    color: "red",
    textAlign: "left",
    marginBottom: "20px",
  },
  errorMessageBox: {
    color: "red",
    textAlign: "center",
    marginBottom: "20px",
  },
  successBox: {
    color: "green",
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default Login;
