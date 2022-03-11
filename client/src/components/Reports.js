import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getall } from "../js/userSlice";
import Footer from "../screens/Footer";

const Reports = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getall());
  }, []);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const users = useSelector((state) => state.user.users);
  const products = useSelector((state) => state.product.products);
  const orderss = useSelector((state) => state.order.orderss);
  let nails = products?.filter((el) => el.category == "nails");
  let eyeshadow = products?.filter((el) => el.category == "eyeshadow");
  let eyeliner = products?.filter((el) => el.category == "eyeliner");
  let mascara = products?.filter((el) => el.category == "mascara");
  let lipstick = products?.filter((el) => el.category == "lipstick");
  let eyecare = products?.filter((el) => el.category == "eyecare");
  let facemask = products?.filter((el) => el.category == "facemask");
  let foundation = products?.filter((el) => el.category == "foundation");
  let powder = products?.filter((el) => el.category == "powder");
  let suncare = products?.filter((el) => el.category == "suncare");
  let hairshampo = products?.filter((el) => el.category == "hairshampo");
  let hairdye = products?.filter((el) => el.category == "hairdye");
  let hairstyle = products?.filter((el) => el.category == "hairstyle");
  let eyebrow = products?.filter((el) => el.category == "eyebrow");
  let blush = products?.filter((el) => el.category == "blush");
  let concealer = products?.filter((el) => el.category == "concealer");
  let primer = products?.filter((el) => el.category == "primer");
  let lipliner = products?.filter((el) => el.category == "lipliner");
  let liquidlip = products?.filter((el) => el.category == "liquidlip");

  const data = {
    labels: [
      "nails",
      "eyeshadow",
      "eyeliner",
      "mascara",
      "lipstick",
      "eyecare",
      "facemask",
      "foundation",
      "powder",
      "suncare",
      "hairshampo",
      "hairdye",
      "hairstyle",
      "eyebrow",
      "blush",
      "concealer",
      "primer",
      "lipliner",
      "liquidlip",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          nails?.length,
          eyeshadow?.length,
          eyeliner?.length,
          mascara?.length,
          lipstick?.length,
          eyecare?.length,
          facemask?.length,
          foundation?.length,
          powder?.length,
          suncare?.length,
          hairshampo?.length,
          hairdye?.length,
          hairstyle?.length,
          eyebrow?.length,
          blush?.length,
          concealer?.length,
          primer?.length,
          lipliner?.length,
          liquidlip?.length,
        ],
        backgroundColor: [
          "#ef9a9a",
          "#e57373",
          "#ff5252",
          "#d14157",
          "#db7093",
          "rgba(255, 99, 132, 1)",
          "#c85a5b",
          "#FBCEB1",
          "#F08080",
          "#97233F",
          "#F88379",
          "#dea5a4",
          "rgba(230, 200, 200, 1)",
          "rgba(230, 100, 100, 1)",
          "#de6fa1",
          "#f7bfbe",
          "#F88379",
          "#CD5C5C",
          "#E9967A",
        ],
        borderColor: [
          "#ef9a9a",
          "#e57373",
          "#ff5252",
          "#d14157",
          "#db7093",
          "rgba(255, 99, 132, 1)",
          "#c85a5b",
          "#FBCEB1",
          "#F08080",
          "#97233F",
          "#F88379",
          "#dea5a4",
          "rgba(230, 200, 200, 1)",
          "rgba(230, 100, 100, 1)",
          "#de6fa1",
          "#f7bfbe",
          "#F88379",
          "#CD5C5C",
          "#E9967A",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  
  return (
    <div>
      <div className="reports-liste">
        <div className="reports-element">
          <ion-icon name="people-sharp"></ion-icon>
          <h5>Users</h5>

          <h1 style={{ marginTop: "50px", marginRight: "30px" }}>
            {users?.length}
          </h1>
        </div>
        <div className="reports-element">
          <ion-icon name="cart-sharp"></ion-icon>
          <h5>Orders</h5>
          <h1 style={{ marginTop: "50px", marginRight: "30px" }}>
            {orderss?.length}
          </h1>
        </div>
        <div className="reports-element">
          <ion-icon name="cart-sharp"></ion-icon>
          <h5>Products</h5>

          <h1 style={{ marginTop: "50px",marginRight: "30px" }}>
            {products?.length}
          </h1>
        </div>
      </div>
      <div style={{ marginLeft: "100px", marginBottom: "100px" }}>
        <Pie data={data} />
        
      </div>
    </div>
  );
};

export default Reports;
