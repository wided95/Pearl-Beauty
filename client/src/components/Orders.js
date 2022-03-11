import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearCart } from "../js/cartSlice";
import { postorder } from "../js/orderSlice";
import Footer from "../screens/Footer";

const Orders = () => {
  let navigate = useNavigate();
  const items = JSON.parse(localStorage.getItem("cartItems"));
  const shippinginfo = JSON.parse(localStorage.getItem("shippinginfo"));
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [order, setorder] = useState({
    user: user?._id,
    orderItems: items,
    shipping: shippinginfo,
    shippingPrice: 7,
    totalPrice: parseInt(localStorage.getItem("totalPrice")),
  });
  const [cart, setcart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );
  return (
    <div>
    <div
      className="content-page"
      style={{
        paddingTop: "120px",
        width: "100vw",
        background: "rgb(254, 250, 252)",
        paddingBottom: "120px",
      }}
    >
      <div className="main-content">
        <h1>Order summery</h1>
        <div className="content-panier">
          {items?.map((el) => (
            <div className="content-cart1">
              <div className="content-cart">
                <img src={`http://localhost:5000${el?.url}`}></img>
                <h4>{el.name}</h4>
              </div>
              <h5>{el.price*el.qty} dt</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="resumeshop">
        <h1>Shopping Resume</h1>
        <div className="content-panier">
          <div className="contentshop">
            <div className="Totalshop" style={{ marginTop: "40px" }}>
              <h4>Total Items</h4>
              <h4>{items?.length}</h4>
            </div>
            <div className="Totalshop">
              <h4>Total Price</h4>
              <h4>{items?.reduce((a, c) => a + c.price*c.qty, 0) || 0} DT</h4>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "90px",
            marginTop: "50px",
          }}
          className="boxx-3"
          onClick={() => {
            dispatch(postorder(order));
            Swal.fire(
              "Order Passed successfuly",
              "You clicked the button!",
              "success"
            );navigate("/home");dispatch(clearCart(cart));
          }}
        >
          <div className="btn btn-three">
            <span>PLACE ORDER</span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Orders;
