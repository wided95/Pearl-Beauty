import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../js/userSlice";
import logo from "../components/logo.png";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [show, setshow] = useState(false);
  const user=useSelector((state)=>state.user.user);
  const [search, setsearch] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const length = JSON.parse(localStorage.getItem("cartItems"));
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector(".navbar");
      if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
      } else {
        nav.classList.remove("add-shadow");
      }
    });
  }, [useSelector]);
  return (
    <div className="navbar">
      <div className="hamburger" onClick={() => setshow(!show)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/*<img className="logo" src={logo} />*/}
     <Link to="/home"><h2 className="logo-text">Pearl Beauty</h2></Link> 
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Skin care
          <ul>
            <Link to="/eyecare">
              <li>Eye care</li>
            </Link>
            <Link to="/facemask">
              <li>Face mask</li>
            </Link>
            <Link to="/suncare">
              <li>Sun care</li>
            </Link>
          </ul>
        </li>
        <li>
          Hair care
          <ul>
            <Link to="/shampo">
              <li>Shampoo</li>
            </Link>
            <Link to="/hairdye">
              <li>Hair dye</li>
            </Link>
            <Link to="/hairstyle">
              <li>Hair styling</li>
            </Link>
          </ul>
        </li>
        <li>
          Make up
          <ul>
            <li>
              Eye
              <ul>
                <Link to="/eyebrow">
                  <li>Eyebrow</li>
                </Link>
                <Link to="/eyeliner">
                  <li>Eyeliner</li>
                </Link>
                <Link to="/eyeshadow">
                  <li>Eyeshadow</li>
                </Link>
                <Link to="/mascara">
                  <li>Mascara</li>
                </Link>
              </ul>
            </li>

            <li>
              Face
              <ul>
                <Link to="/blush">
                  <li>Blush & Bronzer</li>
                </Link>
                <Link to="/concealer">
                  <li>Concealer</li>
                </Link>
                <Link to="/foundation">
                  <li>Foundation</li>
                </Link>
                <Link to="/facepowder">
                  {" "}
                  <li>Face Powder</li>
                </Link>
                <Link to="/faceprimer">
                  <li>Face Primer</li>
                </Link>
              </ul>
            </li>
            <li>
              Lips
              <ul>
                <Link to="/lipliner">
                  {" "}
                  <li>Lip Liner</li>
                </Link>
                <Link to="/lipstick">
                  <li>Lipstick</li>
                </Link>
                <Link to="/liquidlipstick">
                  <li>Liquid Lipstick</li>
                </Link>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Nails">Nails</Link>
        </li>
        <li>
          <Link to="/Contactus">Contact us</Link>
        </li>
      </ul>
      <span>
      {user?.isAdmin ? (
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="log-dashboard"
              >
                Dashboard
              </button>
            ) : null}
        <div
          className="cartt"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ion-icon
            className="cartt"
            name="cart-outline"
            style={{ paddingRight: "10px", width: "21px", height: "21px" }}
          ></ion-icon>
          <span>{length?.length || 0}</span>
        </div>
        {isAuth ? (
          
          <Link to="/Profile">
            <ion-icon className="icons"
              name="person-outline"
              style={{ paddingRight: "10px", width: "21px", height: "21px" }}
            ></ion-icon>
          </Link>
        ) : null}
        {!isAuth ? (
          <span>
            <Link to="/Login">
              {" "}
              <div className="login-logout">
              <ion-icon className="icons"
                name="log-in-outline"
                style={{ width: "21px", height: "21px" }}
              ></ion-icon>
              <p>Login</p>
              </div>
            </Link>
          </span>
        ) : (
          <span
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className="login-logout">
            <ion-icon className="icons"
              style={{ width: "21px", height: "21px" }}
              name="log-out-outline"
            ></ion-icon>
            <p>Logout</p>
            </div>
          </span>
        )}

        {/*<button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          logout
        </button>*/}
      </span>
      {show ? (
        <div className="nav-links-container">
        <div className="nav-links-small">
          <h1 style={{ cursor: "pointer" }} onClick={() => setshow(!show)}>
            <ion-icon name="close-outline" className="nav-drop-down-close"></ion-icon>
          </h1>
          <div className="nav-categories">
            <h3>Skin care</h3>
            <ul>
            <Link to="/eyecare">
              <li>Eye care</li>
            </Link>
            <Link to="/facemask">
              <li>Face mask</li>
            </Link>
            <Link to="/suncare">
              <li>Sun care</li>
            </Link>
            </ul>
          </div>
          <div className="nav-categories">
             <h3>Hair care</h3>
             <ul>
            <Link to="/shampo">
              <li>Shampoo</li>
            </Link>
            <Link to="/hairdye">
              <li>Hair dye</li>
            </Link>
            <Link to="/hairstyle">
              <li>Hair styling</li>
            </Link>
          </ul>
          </div>
          <div className="nav-categories">
             <h3>Make up</h3>
             <div className="nav-categories">
              <h4>Eye</h4>
              <ul>
                <Link to="/eyebrow">
                  <li>Eyebrow</li>
                </Link>
                <Link to="/eyeliner">
                  <li>Eyeliner</li>
                </Link>
                <Link to="/eyeshadow">
                  <li>Eyeshadow</li>
                </Link>
                <Link to="/mascara">
                  <li>Mascara</li>
                </Link>
              </ul>
            </div>

            <div className="nav-categories" >
              <h4>Face</h4>
              <ul>
                <Link to="/blush">
                  <li>Blush & Bronzer</li>
                </Link>
                <Link to="/concealer">
                  <li>Concealer</li>
                </Link>
                <Link to="/foundation">
                  <li>Foundation</li>
                </Link>
                <Link to="/facepowder">
                  {" "}
                  <li>Face Powder</li>
                </Link>
                <Link to="/faceprimer">
                  <li>Face Primer</li>
                </Link>
              </ul>
            </div>

            <div className="nav-categories" >
              <h4>Lips</h4>
              <ul>
                <Link to="/lipliner">
                  {" "}
                  <li>Lip Liner</li>
                </Link>
                <Link to="/lipstick">
                  <li>Lipstick</li>
                </Link>
                <Link to="/liquidlipstick">
                  <li>Liquid Lipstick</li>
                </Link>
              </ul>
            </div> 
          </div>
          
          <h3>
            <Link to="/Nails">Nails</Link>
          </h3>
          <h3>
            <Link to="/Contactus">Contact us</Link>
          </h3>
        </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
