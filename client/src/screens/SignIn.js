import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../js/userSlice";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      {" "}
      <div className="arrier-signin">
        <div className="login">
        
          <div>
            <label>Email address</label>
            <input
              type="text"
              placeholder="your@email.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="bloc">
           <Link to="/resetpassword"><p>Forgot your Password?</p></Link>
            <div class="boxx-3" style={{ marginRight: "200px" }}>
              <div
                class="btn btn-three"
                onClick={() => {
                  dispatch(login(user));
                  toast("login successfuly!");
                  setTimeout(() => {
                    navigate("/profile");
                  }, 2000);
                }}
              >
                <span style={{ marginLeft: "50px", marginTop: "5px" }}>
                  SIGN IN
                </span>
              </div>
            </div>
          </div>
          <ToastContainer position="center-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
        </div>
        <Link to="/Signup">
          <p>No account? Create one here</p>
        </Link>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default SignIn;
