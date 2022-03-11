import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Foundation = () => {
  const products=useSelector((state)=>state.product.products);
  const[foundation,setfoundation]=useState([]);
  useEffect(()=>{
  if(products){
    setfoundation(products.filter((el)=>(el.category=="foundation")));
  }
},[products]);
  return <div>
    <div className="liste-product">
      {foundation.map((el)=>(<Productcard el={el}/>))}
    </div>
    <Footer/>
  </div>;
};

export default Foundation;
