import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import Swal from "sweetalert2";
import { addToCart, cartLength } from "../js/cartSlice";
import { addrating, deleterating } from "../js/productSlice";
import { getreview, postreview } from "../js/reviewSlice";
import Footer from "./Footer";
const ProductDetails = ({ ping, setping }) => {
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const user = useSelector((state) => state.user.user);
  const isAuth = localStorage.getItem("token");
  const reviews = useSelector((state) => state.review.review);
  const prod = products?.find((el) => el._id == params.id);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const [qty, setqty] = useState(1);
  console.log(user);
  const [review, setreview] = useState({
    rating: "",
    comment: "",
    name: "",
  });
  useEffect(() => {
    setreview({ ...review, name: user?.name });
  }, [ping, user]);

  var count = 0;
  prod?.review.forEach(function (value, index) {
    count = count + parseInt(value.rating);
  });

  const avg = count / prod?.review.length;

  return (
    <div>
      <div className="product-details">
        <div className="img-detail">
          <img src={`http://localhost:5000${prod?.url}`} />
        </div>
        <div className="detail-content">
          <h1>{prod?.name}</h1>
          <div style={{ display: "flex", color: "gray" }}>
            <ReactStars
              count={5}
              size={20}
              value={avg || 0}
              edit={false}
              activeColor="#ffd700"
              className="stars"
            />
            <p style={{ marginTop: "5px", marginLeft: "8px" }}>
              ({prod?.review.length} reviews)
            </p>
          </div>
          <p>{prod?.description}</p>
          <div className="review-block">
            <div>
              <ion-icon name="chatbox"></ion-icon>
              <h5 style={{ marginLeft: "4px" }}>Read Review</h5>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <ion-icon name="create"></ion-icon>
              <h5
                style={{ marginRight: "6px", cursor: "pointer" }}
                onClick={() => setshow(!show)}
              >
                Write Review
              </h5>
            </div>
          </div>
          <h4>{prod?.price}dt</h4>
          <div className="achat-product">
            <div className="number-product">
              <select className="qty" onChange={(e) => setqty(e.target.value)}>
                {[...Array(prod?.stock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{ marginLeft: "40px" }}
              class="boxx-3"
              onClick={() => {
                dispatch(addToCart({ productId: prod?._id, qty: qty }));
                Swal.fire(
                  "Product added",
                  "You clicked the button!",
                  "success"
                );
              }}
            >
              <div className="btn btn-three">
                <span>ADD TO CART</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        {prod?.review.map((el) => (
          <div className="review-detail" style={{ position: "relative" }}>
            <h3>{el.name}</h3>
            <p>{el.comment}</p>
            <ReactStars
              count={5}
              size={20}
              value={parseInt(el.rating)}
              edit={false}
              activeColor="#ffd700"
              className="stars"
            />
          </div>
        ))}
      </div>
      {show ? (
        <div className="modalReview">
          <div className="review-body">
            <h1>Add Review</h1>
            <div className="space">
              <label>Name</label>
              <input
                type="text"
                placeholder={user?.name}
                onChange={(e) => setreview({ ...review, name: e.target.value })}
              />
            </div>
            <div className="space">
              <label for="rate">Rating</label>
              <input
                type="range"
                id="rate"
                name="rate"
                min="0"
                max="5"
                onChange={(e) =>
                  setreview({ ...review, rating: e.target.value })
                }
              />
            </div>
            <div className="space">
              <label style={{ marginTop: "10px" }}>Comment</label>
              <textarea
                type="text"
                placeholder="Enter Comment...."
                onChange={(e) =>
                  setreview({ ...review, comment: e.target.value })
                }
              ></textarea>
            </div>
            <div
              class="boxx-3"
              style={{
                marginTop: "30px",
                marginLeft: "0px",
                height: "30px",
                width: "450px",
              }}
            >
              <div
                onClick={() => {
                  dispatch(addrating({ id: prod?._id, review }));
                  Swal.fire(
                    "Review created",
                    "You clicked the button!",
                    "success"
                  );
                  setping(!ping);
                }}
                class="btn btn-three"
                style={{ width: "450px" }}
              >
                <span style={{ marginLeft: "10px", marginTop: "-60px" }}>
                  SUBMIT
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default ProductDetails;
