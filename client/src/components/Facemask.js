import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Facemask = () => {
  const products = useSelector((state) => state.product.products);

  const [facemask, setfacemask] = useState([]);
  useEffect(() => {
    if (products) {
      setfacemask(products.filter((el) => el.category == "facemask"));
    }
  }, [products]);
  return <div>
    <div className="liste-product">
  {facemask.map((el) => (<Productcard el={el}/>))}
        </div>
        <Footer/>
  </div>;
};

export default Facemask;
