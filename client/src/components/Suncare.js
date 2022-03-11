import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Suncare = () => {
  const products = useSelector((state) => state.product.products);

  const [suncare, setsuncare] = useState([]);
  useEffect(() => {
    if (products) {
      setsuncare(products.filter((el) => el.category == "suncare"));
    }
  }, [products]);
  return <div>
    <div className="liste-product">
  {suncare.map((el) => (<Productcard el={el}/>))}
        </div>
        <Footer/>
  </div>;
};

export default Suncare;
