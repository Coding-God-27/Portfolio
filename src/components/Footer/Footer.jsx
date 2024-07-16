import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-content">
          <img src={footer_logo} alt="Footer Logo" />
          <p>I'm a recent graduate with a Bachelor's degree in Computer Engineering, specializing in frontend development.</p>
        </div>
        <div className="footer-subscribe-section">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' name="email" id="" />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2023 Saiel Akhade. All Rights Reserved</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
