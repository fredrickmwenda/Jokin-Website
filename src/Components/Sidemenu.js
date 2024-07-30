import React from "react";
const Sidemenu = () => (
    <div className="sidemenu-wrapper sidemenu-info">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
        <div className="widget">
          <div className="th-widget-about">
            <div className="about-logo">
              <a href="home-company.html"><img src="assets/img/logo.png" alt="Jokin" /></a>
            </div>
            <p className="about-text">Construction services offer tailored solutions to meet the unique needs and specifications of each project.</p>
            <div className="th-social style2">
              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="widget">
          <h3 className="widget_title">Recent Posts</h3>
          <div className="recent-post-wrap">
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html"><img src="assets/img/blog/recent-post-1-1.jpg" alt="Blog Image" /></a>
              </div>
              <div className="media-body">
                <div className="recent-post-meta">
                  <a href="blog.html"><i className="far fa-calendar"></i>24 Feb , 2024</a>
                </div>
                <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Where Vision Meets Concrete Reality</a></h4>
              </div>
            </div>
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html"><img src="assets/img/blog/recent-post-1-2.jpg" alt="Blog Image" /></a>
              </div>
              <div className="media-body">
                <div className="recent-post-meta">
                  <a href="blog.html"><i className="far fa-calendar"></i>22 Feb , 2024</a>
                </div>
                <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Raising the Bar in Construction.</a></h4>
              </div>
            </div>
          </div>
        </div>
        <div className="widget">
          <h3 className="widget_title">Contact Us</h3>
          <div className="th-widget-about">
            <h4 className="footer-info-title">Address Location</h4>
            <p className="footer-info"><i className="fas fa-map-marker-alt"></i>138 MacArthur Ave, USA</p>
            <h4 className="footer-info-title">Phone Number</h4>
            <p className="footer-info"><i className="fa-sharp fa-solid fa-phone"></i><a className="text-inherit" href="tel:+19524357106">+1 952-435-7106</a></p>
            <h4 className="footer-info-title">Email Address</h4>
            <p className="footer-info"><i className="fas fa-envelope"></i><a className="text-inherit" href="mailto:info@kotar.com">info@kotar.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Sidemenu;
  