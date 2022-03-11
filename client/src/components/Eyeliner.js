import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Eyeliner = () => {
  const products=useSelector((state)=>state.product.products);
  const[eyeliner,seteyeliner]=useState([]);
  useEffect(()=>{
    if(products){
      seteyeliner(products.filter((el)=>(el.category=="eyeliner")));
    }
  },[products]);
  return <div>
    <div className="liste-product">
     {eyeliner.map((el)=>(<Productcard el={el}/>))} 
    </div>
    <Footer/>
  </div>;
};
export default Eyeliner;
