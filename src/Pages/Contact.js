import React from "react";
import CursorElements from "../Components/CursorElements";
import Sidemenu from "../Components/Sidemenu";
import PopupSearchBox from "../Components/PopupSearchBox";
import MobileMenu from "../Components/MobileMenu";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactSection from "../Components/ContactSection";

const Contact = ({ services }) => {

    return (
    <div>
              <CursorElements />
      <Sidemenu />
      <PopupSearchBox />
      <MobileMenu />
      <Header services={services} />

        <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/breadcumb-bg.jpg">
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">Contact Us</h1>
                    <ul className="breadcumb-menu">
                        <li><a href="home-company.html">Home</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="space">
            <div className="container">
                <div className="row gy-40 gx-30">
                    <div className="col-xl-4 col-lg-6">
                        <div className="title-area mb-30">
                            <h3 className="sec-title">Contact Information</h3>
                        </div>
                        <div className="contact-info-wrap">
                            <div className="contact-info">
                                <div className="contact-info_icon"><i className="fa-light fa-location-dot"></i></div>
                                <div className="media-body">
                                    <p className="contact-info_label">Our Address</p>
                                    <a href="https://www.google.com/maps" className="contact-info_link">2690 Hiltona Street
                                        Victoria Road, New York, Canada</a>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info_icon"><i className="fa-light fa-phone"></i></div>
                                <div className="media-body">
                                    <p className="contact-info_label">Contact Number</p>
                                    <a href="tel:256214203215" className="contact-info_link">Mobile: +256 214 203 215</a>
                                    <a href="mailto:info@konta.com" className="contact-info_link">Email: info@kotar.com</a>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info_icon"><i className="fa-light fa-clock"></i></div>
                                <div className="media-body">
                                    <p className="contact-info_label">Working Hours</p>
                                    <span className="contact-info_link">Monday - Saturday: 8:00 - 15:00</span>
                                    <span className="contact-info_link">Sunday: <span className="text-theme">Closed</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ContactSection />
        <Footer/>
    </div>
)};

export default Contact;