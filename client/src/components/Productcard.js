import React from "react";

import { Link } from "react-router-dom";

const Productcard = ({ el }) => {
  return (
    <div className="product-card">
      <div className="Card">
        <div className="product-image">
          <img src={`http://localhost:5000${el.url}`} />
          <div className="icons-prod">
            <Link to={`/productdetail/${el._id}`}>
              <ion-icon
                className="i"
                style={{
                  margin: "0px 5px",
                  padding: "5px",
                  border: "1px solid rgb(199, 194, 194)",
                  fontSize: "13px",
                  cursor: "pointer",
                  backgroundColor: "#c55a8f8e",
                  border: "none ",
                }}
                name="eye-outline"
              ></ion-icon>
            </Link>
            <ion-icon
              className="i"
              style={{
                margin: "0px 5px",
                padding: "5px",
                border: "1px solid rgb(199, 194, 194)",
                fontSize: "13px",
                cursor: "pointer",
                backgroundColor: "#c55a8f8e",
                border: "none ",
              }}
              name="heart-outline"
            ></ion-icon>
            <ion-icon
              className="i"
              style={{
                margin: "0px 5px",
                padding: "5px",
                border: "1px solid rgb(199, 194, 194)",
                fontSize: "13px",
                cursor: "pointer",
                backgroundColor: "#c55a8f8e",
                border: "none ",
              }}
              name="bag-outline"
            ></ion-icon>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <h4>{el.name}</h4>
          </div>
          <div className="right">
            <section style={{ marginLeft: "5px" }}>{el.price}Dt</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
