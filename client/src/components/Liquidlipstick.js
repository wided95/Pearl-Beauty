import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Liquidlipstick = () => {
  const products=useSelector((state)=>state.product.products);
  const[liquid,setliquid]=useState([]);
  useEffect(()=>{
    if(products){
      setliquid(products.filter((el)=>(el.category=="liquidlip")));
    }
  },[products]);
  return <div>
    <div className="liste-product">
  {liquid.map((el) => (<Productcard el={el}/>))}
  </div>
  <Footer/></div>;
};

export default Liquidlipstick;
