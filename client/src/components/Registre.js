import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../js/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registre = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="register-bloc">
      <div className="register-card">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Full name"
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
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
            dispatch(register(user));
            toast("user added successfuly!");
          }}
        >
          Register
        </button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Registre;
