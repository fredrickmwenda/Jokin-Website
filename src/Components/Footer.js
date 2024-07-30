import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1" data-bg-src="assets/img/bg/footer_bg_1.png">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link to='/'><img src="assets/img/logo.png" alt="Jokin" /></Link>
                  </div>
                  <p className="about-text">
                     Turn today’s problems into tomorrow’s opportunities as we push to create solutions that create value                  </p>
                  <div className="th-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/team'>Our Team</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact Us</h3>
                <div className="th-widget-about">
                  <h4 className="footer-info-title">Address Location</h4>
                  <p className="footer-info"><i className="fas fa-map-marker-alt"></i>Suit C1, 2nd Floor, Hurlingham Plaza,Agwings
                  Kodhek Rd.</p>
                  <h4 className="footer-info-title">Phone Number</h4>
                  <p className="footer-info"><i className="fa-sharp fa-solid fa-phone"></i><a className="text-inherit" href="tel:+254 723 992500">+254 723 992500</a></p>
                  <h4 className="footer-info-title">Email Address</h4>
                  <p className="footer-info"><i className="fas fa-envelope"></i><a className="text-inherit" href="mailto:info@jokinconsortium.co.ke">info@jokinconsortium.co.ke</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h4 className="widget_title">Newsletter</h4>
                <div className="newsletter-widget">
                  <p className="title md-10">
                    Subscribe to our Newsletter and receive updates via email. About to construction company.
                  </p>
                  <div className="footer-search-contact mt-25">
                    <form>
                      <input className="form-control" type="email" placeholder="Email Address" />
                    </form>
                    <div className="footer-btn mt-10">
                      <button type="submit" className="th-btn style1 btn-fw foot-btn">Subscribe Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright 2024 <Link to=''>Jokin Consortium Limited</Link>. All Rights Reserved.
              </p>

            </div>
            <div className="col-md-6 text-end d-none d-md-block">
            <p className="developed-by-text">
                Developed by <a href="https://www.servolltech.co.ke" target="_blank" rel="noopener noreferrer">Servoll Technologies</a>
              </p>
              {/* <div className="footer-links">
                <ul>
                  <li><a href="about.html">Terms & Condition</a></li>
                  <li><a href="about.html">Privacy & Policy</a></li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
