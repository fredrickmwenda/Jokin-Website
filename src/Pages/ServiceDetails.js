import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidemenu from '../Components/Sidemenu';
import Header from '../Components/Header';
import MobileMenu from '../Components/MobileMenu';
import PopupSearchBox from '../Components/PopupSearchBox';

const ServiceDetails = ({ services }) => {
    const { id } = useParams();
    const service = services.find(service => service.id === id);
    const otherServices = services.filter(service => service.id !== id);
    return (

        <div>
            <Sidemenu />
            <PopupSearchBox />
            <MobileMenu />
            <Header services={services} />


            <div className="breadcumb-wrapper " data-bg-src="assets/img/bg/breadcumb-bg.jpg">
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Service Details</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="home-company.html">Home</a></li>
                            <li>Service Details</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        {service ? (
                            <div className="col-xxl-8 col-lg-8">
                                <div className="page-single mb-0">
                                    <div className="page-img th-anim">
                                        <img src={service.Image} alt={service.title} />
                                    </div>
                                    <div className="page-content">
                                        <h3 className="sec-title page-title">{service.title}</h3>
                                        <p className="sec-textmb-30">{service.description}</p>

                                        <h3 className="mb-20">Service Benefits</h3>
                                        <p className="sec-text mb-30">Residential construction focuses on building homes and apartments, while commercial
                                            construction involves structures like offices, malls, and industrial buildings. Each type
                                            has unique considerations and regulatory requirements.</p>
                                        <div className="features-wrapper mb-50">
                                            <div className="features-content">

                                                <div className="checklist style3">
                                                    <ul>
                                                        <li>Expertise and Experience</li>
                                                        <li>Cost Efficiency</li>
                                                        <li>Time Savings</li>
                                                        <li>Quality Assurance</li>
                                                        <li>Regulatory Compliance</li>
                                                        <li>Customization and Flexibility</li>
                                                        <li>Post-Construction Support</li>
                                                        <li>Single Point of Accountability</li>
                                                        <li>Safety Protocols</li>
                                                        <li>Innovative Solutions</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <div className="features-img th-anim">
                                        <img src="assets/img/normal/feature_img.jpg" alt="">
                                    </div> */}
                                        </div>

                                        {/* <h4 className="mb-20">Work Process</h4>

                                <p className="mb-35">Construction services coordinate various aspects of the project, including subcontractors, suppliers, and inspections, streamlining the construction process.</p>
                                <div className="service-process-wrap">
                                    <div className="service-process">
                                        <div className="service-process_img"><img src="assets/img/icon/process_2_1.svg" alt=""></div>
                                        <div className="service-process_centent">
                                            <h5 className="service-process_title">Project Planning</h5>
                                            <p className="service-process_text">Professional construction services can help.</p>
                                        </div>
                                    </div>
                                    <div className="service-process">
                                        <div className="service-process_img"><img src="assets/img/icon/process_2_2.svg" alt=""></div>
                                        <div className="service-process_centent">
                                            <h5 className="service-process_title">Start Work</h5>
                                            <p className="service-process_text">Professional construction services can help.</p>
                                        </div>
                                    </div>
                                    <div className="service-process">
                                        <div className="service-process_img"><img src="assets/img/icon/process_2_3.svg" alt=""></div>
                                        <div className="service-process_centent">
                                            <h5 className="service-process_title">Project Finished</h5>
                                            <p className="service-process_text">Professional construction services can help.</p>
                                        </div>
                                    </div>
                                </div> */}

                                    </div>
                                </div>
                            </div>) : (
                            <p>Service not found</p>
                        )}
                        <div className="col-xxl-4 col-lg-4">
                            <aside className="sidebar-area">
                                <div className="widget widget_categories  ">
                                    <h3 className="widget_title">All Services</h3>
                                    <ul>
                                        {otherServices.map(otherService => (
                                            <li key={otherService.id}>
                                                <Link to={`/service/${otherService.id}`}>View Details</Link>
                                                {/* <a href="{`/service/${otherService.id}`}">{otherService.title}</a> */}
                                                <i className="fa-regular fa-arrow-right"></i>
                                            </li>



                                        ))}

                                    </ul>
                                </div>
                                <div className="widget widget_download  ">
                                    <h4 className="widget_title">Download</h4>
                                    <div className="donwload-media-wrap">
                                        <div className="download-media">
                                            <div className="download-media_icon">
                                                <i className="fal fa-file-pdf"></i>
                                            </div>
                                            <div className="download-media_info">
                                                <h5 className="download-media_title">Download Brochures</h5>
                                            </div>
                                            <a href="about.html" className="download-media_btn"><i className="far fa-arrow-right"></i></a>
                                        </div>
                                        <div className="download-media">
                                            <div className="download-media_icon">
                                                <i className="fal fa-file-lines"></i>
                                            </div>
                                            <div className="download-media_info">
                                                <h5 className="download-media_title">Download Doc.</h5>
                                            </div>
                                            <a href="about.html" className="download-media_btn"><i className="far fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default ServiceDetails;