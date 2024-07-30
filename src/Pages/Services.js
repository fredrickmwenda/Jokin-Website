import React from 'react';
import { useParams } from 'react-router-dom';
import Sidemenu from '../Components/Sidemenu';
import PopupSearchBox from '../Components/PopupSearchBox';
import MobileMenu from '../Components/MobileMenu';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Service = ({ services }) => {


  return (
    <div>
      <Sidemenu />
      <PopupSearchBox />
      <MobileMenu />
      <Header services={services} />
      <div className="breadcumb-wrapper" data-bg-src="assets/img/bg/breadcumb-bg.jpg">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Services</h1>
            <ul className="breadcumb-menu">
              <li><a href="home-company.html">Home</a></li>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="service-area overflow-hidden space" id="service-sec">
        <div className="container">
          <div className="row">
            <div className="title-area mb-0 text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">The Best Service For You</h2>
            </div>
          </div>

          <div className="row gy-4">
            {services.map((service, index) => (
              <div className="col-xl-4 col-md-6" key={index}>
                <div className="service-box style2" data-bg-src="assets/img/bg/shape_bg_1.png">
                  <div className="service-content">
                    <div className="service-box_icon">
                      <img src={`assets/img/icon/service_1_${index + 1}.svg`} alt={`Icon for ${service.title}`} />
                    </div>
                    <div className="service-box_number">{index + 1}</div>
                  </div>
                  <h3 className="box-title">
                    <a href="service-details.html">{service.title}</a>
                  </h3>
                  <p className="service-box_text">{service.description}</p>
                  <a className="line-btn" href="service-details.html">
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-area2" data-overlay="title" data-opacity="9" data-bg-src="assets/img/bg/cta_bg_1.jpg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="title-area mb-0 text-center text-lg-start">
                <span className="sub-title style1 mb-20">Get Consultation</span>
                <h2 className="sec-title text-white">
                  Get A Free Consultation Contact Us <span className="text-theme">!</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-group justify-content-lg-end justify-content-center">
                <a href="contact.html" className="th-btn style1 th-icon">
                  Get Consultations<i className="fa-regular fa-arrow-right ms-2"></i>
                </a>
                <a href="contact.html" className="th-btn style3 th-icon">
                  Work With Us<i className="fa-regular fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-shape">
          <img src="assets/img/normal/cta_1.png" alt="CTA Shape" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Service;
