import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo1">
          <h1>
            <b>Subscribe Newslatter</b>
          </h1>
        </div>

        <div className="footer_copyrights">
          <input type="text" placeholder="Enter your Email" className="long" />
          <button className="foot_btn">Subscribe</button>
        </div>

        <div>
          <p>&copy; copyright @2022 All rights reserved</p>
          <p>Terms&Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
