import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Lipliner = () => {
  const products=useSelector((state)=>state.product.products);
  const[lip,setlip]=useState([]);
  useEffect(()=>{
    if(products){
      setlip(products.filter((el)=>(el.category=="lipliner")));
    }
  },[products]);
  return <div>
    <div className="liste-product">
  {lip.map((el) => (<Productcard el={el}/>))}
  </div>
  <Footer/>
  </div>;
};

export default Lipliner;
