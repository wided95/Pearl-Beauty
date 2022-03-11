import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShipping } from "../js/cartSlice";
import { addShipping } from "../js/orderSlice";
import Footer from "../screens/Footer";
const Shipping = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartTotalAmount);
  const navigate = useNavigate();
  const [orderDetails, setorderDetails] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const shippinghandler = () => {
    dispatch(saveShipping(orderDetails));
    navigate("/order");
  };

  return (
    <div className="shipping-part">
      <div className="shipping">
        <h1>Shipping</h1>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder=" Adresss..."
            onChange={(e) =>
              setorderDetails({ ...orderDetails, address: e.target.value })
            }
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            placeholder="City..."
            onChange={(e) =>
              setorderDetails({ ...orderDetails, city: e.target.value })
            }
          />
        </div>
        <div>
          <label>Postal Code</label>
          <input
            type="text"
            placeholder=" Postal code..."
            onChange={(e) =>
              setorderDetails({ ...orderDetails, postalCode: e.target.value })
            }
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            placeholder="Country..."
            onChange={(e) =>
              setorderDetails({ ...orderDetails, country: e.target.value })
            }
          />{" "}
        </div>
        <div
          class="boxx-3"
          style={{ marginLeft: "100px" }}
          onClick={shippinghandler}
        >
          <div class="btn btn-three">
            <span style={{ marginLeft: "33px", marginTop: "5px" }}>
              CONTINUE
            </span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Shipping;
