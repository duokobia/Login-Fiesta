import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <header className="mt-8 py-7 py-md-5">
        <div className="container text-center py-xl-2">
          <h2 className="display-4 fw-semi-bold mb-0">Welcome!</h2>
        </div>
      </header>
      <div className="container mb-11">
        <div className="row gx-0">
          <div className="col-md-7 col-xl-4 mx-auto">
            <form className="mb-5" action="/">
              <div className="form-group mb-5">
                <label htmlFor="usernameOrEmail">Username or Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="creative@example.com"
                  name="usernameOrEmail"
                />
              </div>

              <div className="form-group mb-5">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  placeholder="**********"
                  name="password"
                />
              </div>

              <div className="d-flex align-items-center mb-5 font-size-sm">
                <div className="form-check">
                  <input
                    className="form-check-input text-gray-800"
                    type="checkbox"
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
                className="btn btn-block btn-primary w-100"
              >
                LOGIN
              </button>
            </form>
            <p className="mb-0 font-size-sm text-center">
              Don&rsquo;t have an account?
              {" "}
              <a className="text-underline" href="/">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
