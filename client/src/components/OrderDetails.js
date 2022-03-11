import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getorderbyid } from "../js/orderSlice";
import { getall } from "../js/userSlice";
import Footer from "../screens/Footer";

const OrderDetails = () => {
  const items = JSON.parse(localStorage.getItem("cartItems"));
  const shippinginfo = JSON.parse(localStorage.getItem("shippinginfo"));
  const user = useSelector((state) => state.user.users);
  const params = useParams();
  const order = useSelector((state) => state.order.order);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorderbyid(params.id));
  }, [dispatch]);
  return (
    <div>
    <div className="orderdetail">
      <div className="order-section">
        <h1>Order summery</h1>
        <div className="order">
          <h3>Order Details</h3>
          <h4>Order Id:{order?._id}</h4>
          <h4>Paid:{order?.isPaid}</h4>
          <h4>createdAt:{order?.createdAt}</h4>
        </div>
        <div className="order-product-details">
          <h3>Product Details</h3>
          <div>
            {order?.orderItems.map((el) => (
              <div className="product-element">
                <img src={`http://localhost:5000${el?.url}`} />
                <div className="alignement-product">
                  <h4>{el.name}</h4>
                  <p>{el.description}</p>
                  <h3>{el.price}Dt</h3>
                  <h3>{el.category}</h3>
                  <br></br>
                  <br></br>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h3>ShippingInfo</h3>
        <div>
          <h4>Address:{order?.shipping.address}</h4>
          <h4>City:{order?.shipping.city}</h4>
          <h4>PostalCode:{order?.shipping.postalCode}</h4>
          <h4>Country:{order?.shipping.country}</h4>
        </div>
        <div className="shipping-info">
        <h3>TotalPrice:{order?.totalPrice}Dt</h3>
        <h3>ShippingPrice:{order?.shippingPrice}Dt</h3>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default OrderDetails;
