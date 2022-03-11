import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Blush = () => {
  const products = useSelector((state) => state.product.products);

  const [blush, setblush] = useState([]);
  useEffect(() => {
    if (products) {
      setblush(products.filter((el) => el.category == "blush"));
    }
  }, [products]);
  return <div><div className="liste-product">
{blush.map((el) => (<Productcard el={el}/>))}
      </div>
      <Footer/>
  </div>;
};

export default Blush;
