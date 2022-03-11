import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteorder } from "../js/orderSlice";
import { getall } from "../js/userSlice";
import Footer from "../screens/Footer";
import Search from "./Search";

const Orderss = ({ ping, setping }) => {
  let navigate = useNavigate();
  const users = useSelector((state) => state.user.users);
  const orders = useSelector((state) => state.order.orderss);
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getall());
  }, []);

  return (
    <div>
      <div className="orders-liste">
        <h1>Orders</h1>
        <p>Here you can manage all the Orders.</p>
        <p>
          including add new product and updating the existing one also deleting
          them.
        </p>
        <Search settext={settext} />
        <div className="All-product">
          <div className="list">
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-1" style={{ flexBasis: "20%" }}>
                  ID
                </div>
                <div className="col col-2" style={{ flexBasis: "20%" }}>
                  UserName
                </div>
                <div className="col col-3" style={{ flexBasis: "20%" }}>
                  Paid
                </div>
                <div className="col col-4" style={{ flexBasis: "20%" }}>
                  ShippingPrice
                </div>
                <div className="col col-5" style={{ flexBasis: "20%" }}>
                  TotalPrice
                </div>
                <div className="col col-6" style={{ flexBasis: "20%" }}>
                  action
                </div>
              </li>
              {orders
                ?.filter((el) =>
                  el._id.toLowerCase().includes(text.toLowerCase())
                )
                .map((el) => (
                  <li className="table-row">
                    <div className="col col-1" data-label="Job Id">
                      {el._id}
                    </div>
                    <div
                      className="col col-2"
                      style={{ marginRight: "20px" }}
                      data-label="Job Id"
                    >
                      {users?.find((x) => x._id === el.user)?.name}
                    </div>
                    <div
                      className="col col-3"
                      data-label="Customer Name"
                      style={{ marginLeft: "-300px" }}
                    >
                      {el?.isPaid ? "Yes" : "No"}
                    </div>
                    <div className="col col-4" data-label="Customer Name">
                      {el?.shippingPrice}
                    </div>
                    <div className="col col-5" data-label="Customer Name">
                      {el.totalPrice}
                    </div>
                    <div
                      class="boxx-3"
                      style={{
                        width: "100px",
                        height: "30px",
                        marginLeft: "5px",
                      }}
                    >
                      <div
                        class="btn btn-three"
                        onClick={() => {
                          navigate(`/orderdetail/${el._id}`);
                        }}
                      >
                        <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                          See more...
                        </span>
                      </div>
                    </div>
                    <div
                      class="boxx-3"
                      style={{
                        width: "50px",
                        height: "30px",
                        marginLeft: "5px",
                      }}
                    >
                      <div
                        class="btn btn-three"
                        onClick={() => {
                          dispatch(deleteorder(el._id));
                          setping(!ping);
                        }}
                      >
                        <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                          <ion-icon name="trash-sharp"></ion-icon>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderss;
