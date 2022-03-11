import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";
import Search from "./Search";

const EyeCare = () => {
  const products = useSelector((state) => state.product.products);
  const [text, settext] = useState("");
  const [eyecare, seteyecare] = useState([]);
  useEffect(() => {
    if (products) {
      seteyecare(products.filter((el) => el.category == "eyecare"));
    }
  }, [products]);
  return (
    <div>
      <div className="search-prod">
        <Search settext={settext} />
      </div>
      <div className="liste-product">
        {eyecare
          ?.filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
          .map((el) => (
            <Productcard el={el} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default EyeCare;
