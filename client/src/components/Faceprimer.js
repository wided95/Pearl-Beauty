import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../screens/Footer';
import Productcard from './Productcard';

const Faceprimer = () => {
  const products = useSelector((state) => state.product.products);
  const [primer, setprimer] = useState([]);
  useEffect(() => {
    if (products) {
      setprimer(products.filter((el) => el.category == "primer"));
    }
  }, [products]);
  return <div>
    <div className="liste-product">
        {primer.map((el) => (
          <Productcard el={el} />
        ))}
      </div>
      <Footer />
  </div>;
};

export default Faceprimer;
