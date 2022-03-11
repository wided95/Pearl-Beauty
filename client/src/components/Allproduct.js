import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteprod } from "../js/productSlice";
import Footer from "../screens/Footer";
import Addproduct from "./Addproduct";
import Search from "./Search";
import Updateproduct from "./Updateproduct";

const Allproduct = ({ id, ping, setping }) => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const [text, settext] = useState("");
  return (
    <div>
      <div>
        <div className="all-product">
          <h1>Products</h1>
          <p>Here you can manage all the products.</p>
          <p>
            including add new product and updating the existing one also
            deleting them.
          </p>
          <Addproduct ping={ping} setping={setping} />
          <Search settext={settext}/>
          <div className="All-product">
            <div className="list">
              <ul className="responsive-table">
                <li className="table-header">
                  <div className="col col-1">ID</div>
                  <div className="col col-2">product name</div>
                  <div className="col col-3">price</div>
                  <div className="col col-4">category</div>
                  <div className="col col-5">action</div>
                </li>
                {products
                  ?.filter((el) =>
                    el.name.toLowerCase().includes(text.toLowerCase())
                  )
                  .map((el) => (
                    <li className="table-row">
                      <div className="col col-1" data-label="Job Id">
                        {el._id}
                      </div>
                      <div className="col col-2" data-label="Job Id">
                        {el.name}
                      </div>
                      <div className="col col-3" data-label="Customer Name">
                        {el.price}Dt
                      </div>
                      <div className="col col-4" data-label="Amount">
                        {el.category}
                      </div>
                      <div className="col col-5" data-label="Payment Status">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Updateproduct
                            ping={ping}
                            setping={setping}
                            id={el._id}
                          />
                          <div
                            class="boxx-3"
                            style={{
                              width: "50px",
                              height: "30px",
                              marginLeft: "5px",
                            }}
                          >
                            <div
                              class="btn btn-three"
                              onClick={() => {
                                dispatch(deleteprod(el._id));
                                setping(!ping);
                              }}
                            >
                              <span
                                style={{ marginLeft: "5px", marginTop: "5px" }}
                              >
                                <ion-icon name="trash-sharp"></ion-icon>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Allproduct;
