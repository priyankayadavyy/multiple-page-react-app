import React from "react";
import { Link } from "react-router-dom";
const LogOut = () => {
  return (
    <>
      <div className="container my-4  ">
        <form>
          <h2 className="text-center">LogOut</h2>
          <div data-mdb-input-init className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <label className="form-label" for="form2Example1">
              Email address
            </label>
          </div>
          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
            />
            <label className="form-label" for="form2Example2">
              Password
            </label>
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check"></div>
            </div>

            <div className="col">
              <Link to="#">Forgot password</Link>
            </div>
          </div>
          <button
            type="button"
            data-mdb-button-init
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4 "
          >
            LogOut
          </button>
        </form>
      </div>
    </>
  );
};

export default LogOut;
