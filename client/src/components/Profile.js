import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { updateuser } from "../js/userSlice";
import Footer from "../screens/Footer";

const Profile = ({ ping, setping }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setconfirm] = useState("");
  const [users, setusers] = useState({});
  const user = useSelector((state) => state.user.user);
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      setName(user?.name);
      setLastname(user?.lastname);
      setEmail(user?.email);
    }
  }, [user]);
  const submitHandler = (e) => {
    e.preventDefault();

    if (users.password == confirm) {
      dispatch(updateuser({ id: user?._id, users }));
      setping(!ping);

      Swal.fire("User Updated successfuly", "success");
    } else {
      Swal.fire("not match", "fail");
    }
  };
  return (
    <div className="profile">
      <div className="profile-user">
        <h1>User Profile</h1>
        <div>
          <label>Name</label>
          <input
            id="name"
            type="text"
            placeholder={name}
            onChange={(e) => setusers({ ...users, name: e.target.value })}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            id="lastname"
            type="text"
            placeholder={lastname}
            onChange={(e) => setusers({ ...users, lastname: e.target.value })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            id="email"
            type="text"
            placeholder={email}
            onChange={(e) => setusers({ ...users, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id="password"
            type="text"
            placeholder="Enter password"
            onChange={(e) => setusers({ ...users, password: e.target.value })}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            id="password"
            type="text"
            placeholder="Enter confirm password"
            onChange={(e) => setconfirm(e.target.value)}
          />
        </div>
        <div
          style={{
            marginTop: "30px",
            marginLeft: "40px",
            height: "30px",
            width: "400px",
          }}
          class="boxx-3"
          onClick={submitHandler}
        >
          <div
            className="btn btn-three"
            style={{ marginLeft: "0px", marginTop: "-2px", width: "400px" }}
          >
            <span>UPDATE</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
