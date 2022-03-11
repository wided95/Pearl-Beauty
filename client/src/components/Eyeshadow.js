import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../screens/Footer";
import Productcard from "./Productcard";

const Eyeshadow = () => {
  const products=useSelector((state)=>(state.product.products));
  const[eyeshadow,seteyeshadow]=useState([]);
  useEffect(()=>{
    if(products){
      seteyeshadow(products.filter((el)=>el.category=="eyeshadow"));
    }
  },[products]);
  return <div><div className="liste-product">
{eyeshadow.map((el)=>(<Productcard el={el}/>))}
  </div>
  <Footer/>
  </div>;
};

export default Eyeshadow;
