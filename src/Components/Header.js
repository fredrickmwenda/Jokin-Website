import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ services }) => (
    
    <header className="th-header header-layout1">
        <div className="header-top">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-between align-items-center">
                    <div className="col-auto d-none d-md-block">
                        <div className="header-links">
                            <ul>
                                <li><i className="fa-regular fa-phone"></i><a href="tel:+254 723 992500">+254 723 992500</a></li>
                                <li className="d-none d-xl-inline-block"><i className="fa-sharp fa-regular fa-location-dot"></i>
                                    <span>2nd Floor, Hurlingham Plaza,Agwings Kodhek Rd</span>
                                </li>
                                <li><i className="fa-regular fa-envelope"></i><a href="mailto:info@jokinconsortium.co.ke">info@jokinconsortium.co.ke</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="social-links">
                            <span className="social-title">Follow Us:</span>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sticky-wrapper">
            <div className="container">
                <div className="menu-area style2">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="header-logo">
                                <a href="home-company.html"><img src="assets/img/logo.png" alt="Jokin" width={170} height={70} /></a>
                            </div>
                        </div>
                        <div className="col-auto me-xl-auto">
                            <nav className="main-menu d-none d-lg-inline-block">
                                <ul>
                                    <li>
                                      <Link to ="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to ="/about-us">About Us</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to ="/projects">Projects</Link>
                                        
                                        <ul className="sub-menu">
                                            
                                                <li>
                                                    <Link to='/project/safari-rally'>Safari Rally</Link>
                                                </li>
                                           
                                        </ul>
                                    </li>
                                    
                                    <li className="menu-item-has-children">
                                        <Link to ="/services">Services</Link>
                                        
                                        <ul className="sub-menu">
                                            {services.map(service => (
                                                <li key={service.id}>
                                                    <Link to={`/service/${service.id}`}>{service.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li><Link to ="/team">Our Team</Link></li>
                                    {/*  set download links to the certificate that the way of the work */}
                                    <li> <Link to ="/compliances">Compliances</Link></li>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#">Shop</a>
                                                <ul className="sub-menu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-details.html">Team Details</a></li>
                                            <li><a href="project.html">Project</a></li>
                                            <li><a href="project-details.html">Project Details</a></li>
                                            <li><a href="faq.html">FAQ Page</a></li>
                                            <li><a href="price.html">Price Package</a></li>
                                            <li><a href="error.html">Error Page</a></li>
                                        </ul>
                                    </li> */}

                                    <li>
                                       <Link to ="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <button type="button" className="th-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i></button>
                        </div>
                        <div className="col-auto d-none d-xl-block">
                            <div className="header-button">
                                <button type="button" className="icon-btn searchBoxToggler"><i className="far fa-search"></i></button>
                                <a href="#" className="icon-btn sideMenuToggler d-none d-lg-block"><i className="fa-solid fa-grid"></i></a>
                                <a href="contact.html" className="th-btn th-icon">GET A QUOTE<i className="fa-regular fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
