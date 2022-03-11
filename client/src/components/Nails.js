import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";
import Search from "./Search";

const Nails = () => {
  const products = useSelector((state) => state.product.products);
  const [text, settext] = useState("");
  const [nails, setnails] = useState([]);
  useEffect(() => {
    if (products) {
      setnails(products.filter((el) => el.category == "nails"));
    }
  }, [products]);
  return (
    <div>
      <div className="search-prod">
        <Search settext={settext} />
      </div>
      <div className="liste-product">
        {nails
          ?.filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
          .map((el) => (
            <Productcard el={el} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Nails;
