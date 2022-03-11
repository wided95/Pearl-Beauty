import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";
import Search from "./Search";

const Concealer = () => {
  const products = useSelector((state) => state.product.products);
  const [text, settext] = useState("");
  const [concealer, setconcealer] = useState([]);
  useEffect(() => {
    if (products) {
      setconcealer(products.filter((el) => el.category == "concealer"));
    }
  }, [products]);
  return (
    <div className="concealer-product">
      <div className="search-prod">
        <Search settext={settext} />
      </div>
      <div className="liste-product">
        {concealer?.filter((el)=>
                    el.name.toLowerCase().includes(text.toLowerCase())
                  ).map((el) => (
          <Productcard el={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Concealer;
