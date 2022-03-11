import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";

const Shampo = () => {
  const products = useSelector((state) => state.product.products);
  const [shampo, setshampo] = useState([]);
  useEffect(() => {
    if (products) {
      setshampo(products.filter((el) => el.category == "hairshampo"));
    }
  }, [products]);
  return (
    <div>
      <div className="liste-product">
        {shampo.map((el) => (
          <Productcard el={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shampo;
