import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Diners can watch the action in our open kitchen as chefs flame-sear
            pho broth or pan-roast Mekong seafood to order. A 120-label wine
            list and herb-forward signature cocktails are hand-selected to
            complement every dish. Each meal is crafted to be a flavorful
            cultural journey and a lasting memory.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+84 862317600</li>
            <li>Trung@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        CONG TY CO PHAN MOT THANH VIEN NGUYEN CANH TRUNG
      </p>
    </div>
  );
};

export default Footer;
