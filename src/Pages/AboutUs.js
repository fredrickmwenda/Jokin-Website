import React from 'react';
import '../assets/css/bootstrap.min.css';
import WhyUsSection from '../Components/WhyUsSection';
import CoreValuesSection from '../Components/CoreValuesSection';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import MobileMenu from '../Components/MobileMenu';
import CursorElements from '../Components/CursorElements';

const AboutUs = ({ services }) => {
  return (
    <div>
      <Header services={services}/>
      <MobileMenu/>
      <CursorElements/>
      <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li><a href="home-company.html">Home</a></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="img-box3">
                <div className="img1">
                  <img src="assets/img/normal/about_3.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-20 pe-xl-5 me-xl-5">
                <span className="sub-title style1">About Us </span>
                {/* <h2 className="sec-title mb-20">We Are Always Think On Your Dream</h2> */}
              </div>
              <p className="sec-text mb-30">
                Jokin Consortium Limited is an engineering consulting company established in Kenya in 2020.

                Our job to turn today’s problems into tomorrow’s opportunities, and
                unless we have a solution that creates long-term value, our job isn’t done.
                We understand that no two issues are alike. So, you can rest happy knowing
                that, instead of just adapting old ones, we are constantly innovating for
                new ideas.
                We push to create solutions that create value, and this value is our winning
                edge. Our aim is to surpass two things - your expectations, and the
                industry’s standards.
                We push to create solutions that create value, and this value is our
                winning edge. It’s our job to turn today’s problems into tomorrow’s
                opportunities, and unless we have a solution that creates long-term
                value, our job isn’t done. We understand that no two issues are alike.
                So, you can rest happy knowing that, instead of just adapting old ones,
                we are constantly innovating for new ideas.
              </p>
              <div className="principles-wrap">
                <div className="nav nav-tabs service-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link th-btn active" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button">
                    <img src="assets/img/icon/about_1_1.svg" alt="Mission" />Our Mission
                  </button>
                  <button className="nav-link th-btn" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button">
                    <img src="assets/img/icon/about_1_2.svg" alt="Vision" />Our Vision
                  </button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                    {/* <h5 className="box-title">Our Mission</h5> */}
                    <p className="about-item_text">
                      Our mission is to approach every project with a unique emphasis on delivering excellent engineering solutions and unrivaled customer support.
                    </p>
                  </div>
                  <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                    {/* <h5 className="box-title">Our Vision</h5> */}
                    <p className="about-item_text">
                      To be the leading engineering consultancy company, renowned for our working methodologies, technological heritage, and human resource capabilities.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="title-area mb-20 pe-xl-5 me-xl-5">
                <span className="sub-title style1">Why Choose Us </span>
                {/* <h2 className="sec-title mb-20">We Are Always Think On Your Dream</h2> */}
              </div>
              <p className="sec-text mb-30">
                As problem solvers, we seek solutions that achieve our customers’
                goals. We have built our reputation on our customer focus and
                hands-on approach. Most of our workload comes mainly from
                repeat clients. This is achieved because of our relentless attention
                to detail and having an experienced team with drive and strong
                customer focus skills to ensure client satisfaction on all our
                projects.
              </p>


            </div>
            <div className="col-xl-6">
              <div className="img-box3">
                <div className="img1">
                  <img src="assets/img/blog/blog-grid-5.jpg" alt="About" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <CoreValuesSection/>
      <Footer/>

    </div>
  );
};

export default AboutUs;
