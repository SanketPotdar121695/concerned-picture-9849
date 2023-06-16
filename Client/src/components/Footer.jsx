import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <h4>Logo</h4>
      <ul>
        <li><a href="#">Imprint</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Privacy Statement</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Settings</a></li>
      </ul>
    </div>
    <div className="footer-column-line"></div>
    <div className="footer-column">
      <h4>Follow Us</h4>
      <ul className="social-icons">
        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
