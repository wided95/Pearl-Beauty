import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { register } from "../js/userSlice";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    social_title: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    Birthdata: "",
  });
  return (
    <div>
      <div className="arrier-signup">
        <h1>Create an account</h1>
        <div className="signup">
          <Link to="/login">
            <p style={{ paddingLeft: "40px", marginTop: "10px" }}>
              Already have an account? Log in instead!
            </p>
          </Link>
          <div
            ClassName="grouped"
            style={{ marginTop: "30px", marginLeft: "40px" }}
          >
            <label style={{ marginRight: "20px" }}>Social title</label>
            <input
              type="radio"
              id="Mrs"
              name="madame"
              value="Mrs."
              checked
              required
              onChange={(e) =>
                setUser({ ...user, social_title: e.target.value })
              }
            />
            <label for="Mrs.">Mrs.</label>
            <input
              type="radio"
              id="Mr"
              name="madame"
              value="Mr."
              required
              onChange={(e) =>
                setUser({ ...user, social_title: e.target.value })
              }
            />
            <label for="Mr.">Mr.</label>
          </div>
          <div className="input-label">
            <label style={{ width: "150px", marginRight: "20px" }}>
              First name
            </label>
            <input
              type="text"
              placeholder="First name"
              required
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            ></input>
            <p style={{ width: "260px", marginLeft: "91px" }}>
              Only letters and the dot (.) character, followed by a space, are
              allowed.
            </p>
          </div>
          <div className="input-label">
            <label style={{ width: "100px", marginRight: "20px" }}>
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              required
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            ></input>
            <p style={{ width: "260px", marginLeft: "91px" }}>
              Only letters and the dot (.) character, followed by a space, are
              allowed.
            </p>
          </div>
          <div className="input-label">
            <label style={{ width: "150px", marginRight: "50px" }}>Email</label>
            <input
              type="email"
              placeholder="Your email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></input>
          </div>
          <div className="input-label">
            <label style={{ width: "150px", marginRight: "20px" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
          </div>
          <div className="input-label">
            <label style={{ width: "150px", marginRight: "25px" }}>
              Birthdata
            </label>
            <input
              type="date"
              onChange={(e) => setUser({ ...user, Birthdata: e.target.value })}
            ></input>
            <label>Optional</label>
          </div>
          <div style={{ marginTop: "40px" }} class="boxx-3">
            <div
              className="btn btn-three"
              onClick={() => {
                dispatch(register(user));
                toast("user added successfuly!");
              }}
            >
              <span>SAVE</span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default SignUp;
