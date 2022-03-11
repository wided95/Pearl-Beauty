import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Eyebrow = () => {
  const products = useSelector((state) => state.product.products);

  const [eyebrow, seteyebrow] = useState([]);
  useEffect(() => {
    if (products) {
      seteyebrow(products.filter((el) => el.category == "eyebrow"));
    }
  }, [products]);
  return <div>
    <div className="liste-product">
  {eyebrow.map((el) => (<Productcard el={el}/>))}
        </div>
        <Footer/>
  </div>;
};

export default Eyebrow;
