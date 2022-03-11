import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Mascara = () => {
  const products=useSelector((state)=>state.product.products);
  const[mascara, setmascara]=useState([]);
  useEffect(()=>{
    if(products){
    setmascara(products.filter((el)=>el.category=="mascara"));
    }
  },[products]);
  return <div>
    <div className="liste-product">
      {mascara.map((el)=>(<Productcard el={el}/>))}
    </div>
    <Footer/>
  </div>;
};

export default Mascara;
