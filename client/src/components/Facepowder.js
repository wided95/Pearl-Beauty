import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";

const Facepowder = () => {
  const products = useSelector((state) => state.product.products);
  const [powder, setpowder] = useState([]);
  useEffect(() => {
    if (products) {
      setpowder(products.filter((el) => el.category == "powder"));
    }
  }, [products]);
  return (
    <div>
      <div className="liste-product">
        {powder.map((el) => (
          <Productcard el={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Facepowder;
