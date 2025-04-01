import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-brand">
          <h1 className="footer-logo" >plant-ify</h1>
          <p>Your trusted platform to connect plant lovers with reliable plant sitters.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src='./img/facebook.png'/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src='./img/instagram.png'/>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} plant-ify. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
