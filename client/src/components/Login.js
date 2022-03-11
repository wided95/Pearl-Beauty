import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../js/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div className="register-card">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={() => {
            dispatch(login(user));
            toast("login successfuly!");
            setTimeout(() => {
              navigate("/profile");
            }, 2000);
          }}
        >
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
