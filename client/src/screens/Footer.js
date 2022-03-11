import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  
  return (
    <div>
      <div className="footer-content">
        <div className="footer-content1">
          <h1>Pearl Beauty</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <h5>Follow Us</h5>
          <div>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>
        </div>
        <div className="vl"></div>
        <div className="footer-content2">
          <div className="footer-div">
            <div style={{ display: "flex" }}>
              <ion-icon name="mail"></ion-icon>
              <h5>Email</h5>
            </div>
            <p>Admin@gmail.com</p>
          </div>
          <div className="footer-div">
            <div style={{ display: "flex" }}>
              <ion-icon name="location"></ion-icon>
              <h5>Address</h5>
            </div>
            <p>Demo-store United States</p>
          </div>
          <div className="footer-div">
            <div style={{ display: "flex" }}>
              <ion-icon name="call"></ion-icon>
              <h5>Call Us</h5>
            </div>
            <p>+216 21874033</p>
          </div>
        </div>
        <div className="vl"></div>
        <div className="footer-content3">
          <h1>Information</h1>
          <p>
            Specials | New products | Best sellers | Our stores | Contact us |
            Sitemap
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
