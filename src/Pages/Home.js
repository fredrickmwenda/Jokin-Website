import React from 'react';
import Sidemenu from '../Components/Sidemenu';
import PopupSearchBox from '../Components/PopupSearchBox';
import MobileMenu from '../Components/MobileMenu';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import AboutUsSection from '../Components/AboutUsSection';
import CursorElements from '../Components/CursorElements';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'
import ProjectShowcase from '../Components/ProjectShowcase';

const slides = [
  {
    imageSrc: "assets/img/hero/hero_sect_1.jpg",
    title: "Building Beyond Boundaries",
    description: "The construction industry encompasses the planning, design, and execution of buildings, infrastructure, and related projects.",

  },
  {
    imageSrc: "assets/img/hero/hero_bg_1_2.jpg",
    title: "Kotar is Strong Foundation",
    description: "Construction companies offer a wide range of services, such as pre-construction planning, project management, design and architectural.",
      
  }
];

const Home = ({ services }) => (
  <>
    <div>
     <Header services={services} />
      <CursorElements />
      <Sidemenu />
      <PopupSearchBox />
      <MobileMenu />     
      <HeroSection slides={slides} />
      <AboutUsSection />
      <section className="service-area overflow-hidden spacie servi" id="service-sec" data-bg-src="assets/img/bg/service_bg_1.jpg" >
        <div className="container">
          <div className="row">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">The Best Service For You</h2>
            </div>
          </div>
          <div className="slider-area">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{ delay: 30000 }} // 30 seconds interval
              loop={true}
              navigation={{
                prevEl: '.slider-prev',
                nextEl: '.slider-next',
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="service-box" data-bg-src="assets/img/bg/shape_bg_1.png">
                    <div className="service-content">
                      <div className="service-box_icon">
                        <img src={service.icon} alt="icon" />
                      </div>
                      <div className="service-box_number">{String(service.id).padStart(2, '0')}</div>
                    </div>
                    <h3 className="box-title">
                      <a href={service.link}>{service.title}</a>
                    </h3>
                    <p className="service-box_text">{service.description}</p>
                    <a className="line-btn" href={service.link}>Read More <i className="fas fa-arrow-right ms-2"></i></a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <button data-slider-prev="#serviceSlider1" className="slider-arrow slider-prev"><i className="far fa-arrow-left"></i></button>
            <button data-slider-next="#serviceSlider1" className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button> */}
            <a href="about.html" className="th-btn">View All Services<i className="fa-regular fa-arrow-right ms-2"></i></a>

          </div>
        </div>
      </section>


      {/* <section className="consultation-sec bg-title" data-bg-src="assets/img/bg/shape_bg_2.png">

        <div className="container">
          <div className="consultation-title-area">
            <div className="title-area mb-10">
              <span className="sub-title style1 mb-20">Get Consultation</span>
              <h2 className="sec-title text-white">Get A Free Consultation Contact Us <span className="text-theme">!</span></h2>
            </div>
            <div className="">
              <a href="contact.html" className="th-btn style1 th-icon">Contact Us <i className="fa-regular fa-arrow-right ms-2"></i></a>
            </div>
          </div>
          {/* <div className="row align-items-end flex-row-reverse">
            <div className="col-md-8">

            </div>
            <div className="col-md-4">
                <div className="consultation-image movingX">
                    <img src="assets/img/normal/image.png" alt=""/>
                </div>

            </div>
        </div> 
        </div>

      </section> */}

      <ProjectShowcase />
      <section className="space" data-overlay="title" data-opacity="9" data-bg-src="assets/img/bg/cta_bg_1.jpg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="title-area text-center mb-0 text-lg-start">
                <span className="sub-title style1 mb-20">Get Consultation</span>
                <h2 className="sec-title text-white">Get A Free Consultation Contact Us <span className="text-theme">!</span></h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cta-group justify-content-lg-end justify-content-center">
                <a href="contact.html" className="th-btn style1 th-icon">Get Consultations<i className="fa-regular fa-arrow-right ms-2"></i></a>
                <a href="contact.html" className="th-btn style3 th-icon">Work With Us<i className="fa-regular fa-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>




      <ContactSection />
      <Footer />
    </div>
  </>
);

export default Home;
