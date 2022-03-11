import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";

const Hairdye = () => {
  const products = useSelector((state) => state.product.products);
  const [hairdye, sethairdye] = useState([]);
  useEffect(() => {
    if (products) {
      sethairdye(products.filter((el) => (el.category == "hairdye")));
    }
  }, [products]);
  return (
    <div>
      <div className="liste-product">
        {hairdye.map((el) => (
          <Productcard el={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Hairdye;
