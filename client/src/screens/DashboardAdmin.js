import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Allproduct from "../components/Allproduct";
import Orderss from "../components/Orderss";
import Reports from "../components/Reports";
import { getorders } from "../js/orderSlice";
import Footer from "./Footer";
const DashboardAdmin = ({ ping, setping }) => {
  const [tab, settab] = useState("0");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorders());
  }, [ping]);

  const orders = useSelector((state) => state.order.orderss);
  console.log(orders);
  return (
    <div>
      <div className="Dashboard-space">
        <div className="navbar-admin">
          <ul>
            <li onClick={() => settab("0")}>
              <ion-icon name="analytics-sharp"></ion-icon>
              <p>Reports</p>
            </li>
            <li onClick={() => settab("1")}>
              <ion-icon name="cart-sharp"></ion-icon>
              <p>Products</p>
            </li>
            <li onClick={() => settab("2")}>
              <ion-icon name="grid-sharp"></ion-icon>
              <p>Orders</p>
            </li>
            {/*<li>
            <ion-icon name="star-sharp"></ion-icon>Promos
          </li>*/}
          </ul>
        </div>
        <div className="dashboard-liste">
          {tab == "0" ? <Reports /> : null}
          {tab == "1" ? <Allproduct ping={ping} setping={setping} /> : null}
          {tab == "2" ? <Orderss ping={ping} setping={setping} /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardAdmin;
