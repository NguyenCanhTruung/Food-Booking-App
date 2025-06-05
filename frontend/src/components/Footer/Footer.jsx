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
            Thực khách có thể theo dõi hoạt động trong bếp mở của chúng 
            tôi khi các đầu bếp áp chảo nước dùng phở hoặc hải sản Mekong theo yêu cầu. 
            Danh sách rượu vang gồm 120 nhãn hiệu và các loại cocktail đặc trưng có thảo mộc 
            được lựa chọn thủ công để bổ sung cho mỗi món ăn. Mỗi bữa ăn được chế biến để trở 
            thành một hành trình văn hóa đầy hương vị và là một kỷ niệm lâu dài.
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
