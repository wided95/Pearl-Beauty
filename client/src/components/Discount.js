import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Productcard from './Productcard';
const Discount = () => {
    const products = useSelector((state) => state.product.products);
    const [discount, setdiscount] = useState([]);
    useEffect(() => {
        if (products) {
          setdiscount(products.filter((el) => el.price>100));
        }
      }, [products]);
  return (
    <div style={{marginTop:"100px"}}>
{discount?.map((el) => (<div>
          <Productcard el={el}/>
          <p>{el.price=el.price*(30/100)}</p>
         </div>
        ))}
    </div>
  )
}

export default Discount