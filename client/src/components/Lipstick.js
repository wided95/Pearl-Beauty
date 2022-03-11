import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Lipstick = () => {
  const products=useSelector((state)=>state.product.products);
  const[lipstick,setlipstick]=useState([]);
  useEffect(()=>{
    if(products){
      setlipstick(products.filter((el)=>(el.category=="lipstick")));
    }
  },[products]);
  return <div>
    <div className="liste-product">
  {lipstick.map((el) => (<Productcard el={el}/>))}
  </div>
  <Footer/></div>;
};

export default Lipstick;
