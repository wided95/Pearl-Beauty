import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts, removefromCart } from "../js/cartSlice";
import Footer from "../screens/Footer";

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [qty, setqty] = useState(1);
  const total = cartItems?.reduce((a, c) => a + c.price * c.qty, 0);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const isAuth = localStorage.getItem("token");
  localStorage.setItem("totalPrice", total);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const handleCarte = () => {
    if (isAuth) {
      navigate("/shipping");
    } else {
      navigate("/login");
    }
  };
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
        
        <div className="cart-det">
          <h1>Your Shopping</h1>
          <div>
            <h1>Unit Price</h1>
            <h1>Total Price</h1>
          </div>
        </div>
        <div className="content-panier">
          {cartItems?.length === 0 ? (
            <h1>go shop</h1>
          ) : (
            cartItems?.map((el) => (
              <div className="content-cart1">
                <ion-icon
                  name="close-sharp"
                  style={{
                    position: "absolute",
                    marginLeft: "700px",
                    marginTop: "-50px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(removefromCart(el?._id));
                  }}
                ></ion-icon>
                <div className="content-cart">
                  <img src={`http://localhost:5000${el?.url}`}></img>
                  <h4>{el.name}</h4>
                </div>
                <div>
                  <div className="price-button">
                    <h5 className="pricee">{el.price}Dt</h5>
                    <h5>{el.price * el.qty} Dt</h5>
                  </div>
                  {/*<div className="content-plus-munis">
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "0px",
                        marginTop: "0px",
                      }}
                      class="boxx-3"
                    >
                      <div className="btn btn-three">
                        <span>
                          <ion-icon name="add-outline"></ion-icon>
                        </span>
                      </div>
                    </div>
                    <div className="qauntity">
                      <select className="qty" value={el.quantity}>
                        {[...Array(el.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "0px",
                        marginTop: "0px",
                      }}
                      class="boxx-3"
                    >
                      <div className="btn btn-three">
                        <span>
                          <ion-icon name="remove-outline"></ion-icon>
                        </span>
                      </div>
                    </div>
                  </div>*/}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="resumeshop">
        <h1>Shopping Resume</h1>
        <div className="content-panier">
          <div className="contentshop">
            <div className="Totalshop" style={{ marginTop: "40px" }}>
              <h4>Total Items</h4>
              <h4>{cartItems?.length || 0} </h4>
            </div>
            <div className="Totalshop">
              <h4>Total Price</h4>
              <h4>{total || 0}Dt </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "40px",
            width: "200px",
            marginTop: "70px",
          }}
          className="boxx-3"
          onClick={handleCarte}
        >
          <div className="btn btn-three" style={{ width: "200px" }}>
            <span>CONTINUE SHOPPING</span>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Cart;
