import React from "react";
import "./Login.css";

function Login() {
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
                  type="text"
                  className="form-control py-3"
                  placeholder="creative@example.com"
                  name="usernameOrEmail"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="my-text-blue mb-2">Password</label>
                <input
                  className="form-control py-3"
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
                className="btn btn-block btn-my-blue w-100 py-3 text-white fs-5"
              >
                LOGIN
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
}

export default Login;
