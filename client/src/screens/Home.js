import React, { useEffect, useState } from "react";
import Caroussel from "../components/Caroussel";
import Productcard from "../components/Productcard";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import { Player } from "video-react";
import ReactPlayer from "react-player";
import { getfeedback } from "../js/feedbackSlice";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);
  const feedbacks = useSelector((state) => state.feedback.feedback);
  const [price, setprice] = useState([]);
  const [rate, setrate] = useState([]);
  const [image, setimage] = useState("lipstick");
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getfeedback());
  }, []);
  useEffect(() => {
    if (products) {
      setprice(
        products.filter((el) => parseFloat(el.price) == parseFloat("100 €"))
      );
    }
  }, [products]);
  useEffect(() => {
    if (products) {
      setrate(
        products.filter((el) => parseFloat(el.rating) == parseFloat("5"))
      );
    }
  }, [products]);
  let options = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  };

  return (
    <div className="home">
      <div className="content">
        <img
          className="content-img "
          src="https://demo.ishithemes.com/opencart/OPC136/OPC136L02/image/catalog/slider/banner1.png"
        />
        <Caroussel className="content-carrousel " />
      </div>
      <div className="elements">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {price.map((el) => (
            <Productcard el={el} />
          ))}
        </div>
        <div className="beauty">
          <img
            className="choose-product"
            src="https://demo.ishithemes.com/opencart/OPC136/OPC136L02/image/catalog/features/featuresbackground.png"
          />

          {/*<ReactPlayer url="https://pin.it/bcfyZT8" />*/}
          <div className="choose-product-content">
            <h1>Choose Your Products</h1>
            <div>
              <div style={{ display: "flex" }}>
                <img
                  src="/assets/im3.png"
                  style={{ width: "70px", height: "50px" }}
                />
                <h4>FOR YOUR HEALTH</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspend
              </p>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <img
                  src="/assets/im3.png"
                  style={{ width: "70px", height: "50px" }}
                />
                <h4>FOR YOUR SKIN</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspend
              </p>
            </div>
          </div>
        </div>
        <div className="category-title">
          <h1>Our Categories</h1>
          <img src="/assets/im4.png"></img>

          <div>
            <div className="cat-liste">
              <ul>
                <li onClick={() => setimage("lipstick")}>Lipstick</li>
                <li onClick={() => setimage("foundation")}>Make Up</li>
                <li onClick={() => setimage("nails")}>Nail Art </li>
                <li onClick={() => setimage("eyecare")}>Skin Care </li>
                <li onClick={() => setimage("hairshampo")}>Hair Care </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img-liste">
          {products
            ?.filter((el) => el.category == image)
            .map((el) => (
              <img src={`http://localhost:5000${el?.url}`} />
            ))}
        </div>
        {/* <div className="category-title">
          <h1 style={{ marginTop: "20px" }}>Special Offers</h1>
          <img src="/assets/im4.png"></img>
        </div>
        <div className="special-offer">
          {rate.map((el) => (
            <Productcard el={el} />
          ))}
        </div> */}

        <div class="testimonial-group">
          <div className="category-title">
            <h1 style={{ marginTop: "150px" }}>Our Testimonials</h1>
            <img src="/assets/im4.png" alt="" />
          </div>
          <div className="testimonials">
            <OwlCarousel
              dots={true}
              loop
              autoplay={true}
              autoplayTimeout={3000}
              margin={50}
              responsive={options}
            >
              {feedbacks?.map((el) => (
                <div className="testimonials-card">
                  <div className="feed-pic">
                    <h2>{el?.name.slice(0, 2)}</h2>
                  </div>
                  <div className="content-card">
                    <h5>
                      {el?.name}
                      {el?.lastname}
                    </h5>

                    <p>{el?.message}</p>
                  </div>
                </div>
              ))}
              {/*<div className="testimonials-card">
              <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitestimonials/views/img/testimonial-2.jpg"></img>
              <div className="content-card">
                <h5>Luies Charles</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  fuga harum blanditiis omnis.{" "}
                </p>
              </div>
            </div>
            <div className="testimonials-card">
              <img src="https://demo.ishithemes.com/prestashop/PRS022/modules/ishitestimonials/views/img/testimonial-3.jpg"></img>
              <div className="content-card">
                <h5>Luies Charles</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  fuga harum blanditiis omnis.{" "}
                </p>
              </div>
        </div>*/}
            </OwlCarousel>
          </div>
        </div>
        <div className="footer">
          <Footer style={{ marginTop: "0px" }} />
        </div>
      </div>
      <div className="feedback-button" onClick={() => navigate("/feedback")}>
        <p>feedback</p>
      </div>
    </div>
  );
};

export default Home;
