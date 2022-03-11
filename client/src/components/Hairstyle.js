import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Hairstyle = () => {
  const products=useSelector((state)=>state.product.products);
  const[hairstyle,sethairstyle]=useState([]);
  useEffect(()=>{
    if(products){
      sethairstyle(products.filter((el)=>(el.category=="hairstyle")));
    }
  },[products]);
  return <div><div className="liste-product">
  {hairstyle.map((el) => (<Productcard el={el}/>))}
  </div>
  <Footer/>

  </div>;
};

export default Hairstyle;
