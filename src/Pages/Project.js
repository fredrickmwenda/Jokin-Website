
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import CursorElements from '../Components/CursorElements';
import Sidemenu from '../Components/Sidemenu';
import MobileMenu from '../Components/MobileMenu';
import Footer from '../Components/Footer';
import PopupSearchBox from '../Components/PopupSearchBox';

const Project = ({services}) => {
  return (
    <div>
      <Header services={services} />
      <CursorElements />
      <Sidemenu />
      <PopupSearchBox />
      <MobileMenu />     

      <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/project.jpg)' }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Projects</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li>Our Projects</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="title-area text-center mb-40">
            <span className="sub-title">Latest Projects</span>
            <h2 className="sec-title">Let’s See Our Latest Projects</h2>
          </div>
          <div className="filter-menu style2 indicator-active filter-menu-active">
            <button data-filter="*" className="tab-btn active" type="button">Show All Work</button>
            <button data-filter=".cat1" className="tab-btn" type="button">Building Construction</button>
            <button data-filter=".cat2" className="tab-btn" type="button">Interior</button>
            <button data-filter=".cat3" className="tab-btn" type="button">Architecture</button>
            <button data-filter=".cat4" className="tab-btn" type="button">Road & Bridge Construction</button>
          </div>
          <div className="row gallery-row filter-active">
            {/* Single Item */}
            <div className="col-md-6 col-xl-auto filter-item cat1">
              <div className="project-box">
                <div className="project-box-img">
                  <img src="assets/img/project/project_3_1.jpg" alt="project" />
                </div>
                <div className="project-box-content">
                  <p className="project-subtitle">Construction</p>
                  <h3 className="box-title"><Link to="/project/safari-rally">Safari Rally</Link></h3>
                  <a href="assets/img/project/project_3_1.jpg" className="gallery-btn popup-image"><i className="fa-regular fa-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="th-pagination text-center mt-80 mb-0">
            <ul>
              <li><a href="blog.html"><i className="fa-regular fa-arrow-left"></i></a></li>
              <li><a href="blog.html">1</a></li>
              <li><a href="blog.html">2</a></li>
              <li><a href="blog.html"><i className="fa-regular fa-arrow-right"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Project;
