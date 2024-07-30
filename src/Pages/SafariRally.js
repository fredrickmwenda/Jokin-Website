import React from 'react';
import Header from '../Components/Header';
import CursorElements from '../Components/CursorElements';
import Sidemenu from '../Components/Sidemenu';
import PopupSearchBox from '../Components/PopupSearchBox';
import MobileMenu from '../Components/MobileMenu';
import Footer from '../Components/Footer';

const SafariRally = ({services}) => {
  return (
    <div>
      <Header services={services} />
      <CursorElements />
      <Sidemenu />
      <PopupSearchBox />
      <MobileMenu />  
      <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(assets/img/bg/breadcumb-bg.jpg)' }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Project Details</h1>
            <ul className="breadcumb-menu">
              <li><a href="/">Home</a></li>
              <li>Project Details</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space overflow-hidden">
        <div className="container">
          <div className="project-details">
            <div className="page-img">
              <img src="assets/img/project/project_details.jpg" alt="Project" />
            </div>
            <ul className="project-details-wrap">
              <li>
                <h6 className="title">Project Category:</h6>
                <p className="text">Building Construction</p>
              </li>
              <li>
                <h6 className="title">Clients:</h6>
                <p className="text">David Malan</p>
              </li>
              <li>
                <h6 className="title">Project Date:</h6>
                <p className="text">13 June, 2024</p>
              </li>
              <li>
                <h6 className="title">Avenue End Date:</h6>
                <p className="text">22 July, 2024</p>
              </li>
              <li>
                <h6 className="title">Locations:</h6>
                <p className="text">New York - 2546 Firs, USA</p>
              </li>
              <li>
                <h6 className="title">Price After:</h6>
                <p className="text">$1 Million</p>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="page-content style2 mb-40">
                <h3 className="h3 page-title">Project Overview</h3>
                <p className="sec-text mb-25">
                  An industrial manufacturing company is a business entity that specializes in producing and supplying a wide range of products and components used in various industries. These products can range from machinery and equipment to electronics, automotive parts, consumer goods, and more. Industrial manufacturing companies often produce a diverse.
                </p>
                <p className="sec-text mb-n1">
                  The company's success relies on a team of skilled engineers, designers, and technicians who conceptualize, design, and develop the products. Their expertise ensures that the products.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar-area style2 pt-0">
                <div className="widget widget_offer" style={{ backgroundImage: 'url(assets/img/bg/widget_bg_1.jpg)' }}>
                  <div className="offer-banner">
                    <div className="offer">
                      <span className="sub-title">Contact for inquiry</span>
                      <h6 className="box-title">Need Help? We Are Here To Help You</h6>
                      <a href="contact.html" className="th-btn style1">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div className="page-content style2 mb-40">
            <h3 className="page-title">Project Goal</h3>
            <p className="mb-4 pb-2">
              Construction work typically progresses through phases such as foundation, framing, electrical and plumbing installations, interior finishing, and exterior detailing. Construction services offer tailored solutions to meet the unique needs and specifications of each project, allowing for flexibility in design and execution. A focus on safety is integral to construction services.
            </p>
            <div className="row gy-30">
              <div className="col-lg-6">
                <div className="page-img mb-0">
                  <img src="assets/img/project/project_inner_1.jpg" alt="Project" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="checklist style4 mt-n2">
                  <ul>
                    <li>Construction services bring expertise and experience to the table, ensuring that your project</li>
                    <li>Digital how will activities impact traditional</li>
                    <li>Construction services are well-versed in local building codes and regulations, ensuring that your project</li>
                    <li>Architect and technical engineer</li>
                    <li>All these digital elements and projects aim</li>
                    <li>Veniamin Minim quiz niacin sodium</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content style2">
            <h3 className="h3 page-title">Project Challenge</h3>
            <p className="sec-text mb-25">
              With construction services, there is a focus on maintaining high-quality standards in materials, workmanship, and overall construction practices, ensuring a durable and reliable structure. Construction services are well-versed in local building codes and regulations, ensuring that your project meets all necessary compliance standards. Construction services coordinate various aspects of the project.
            </p>
            <div className="checklist style4 list-three-columns mb-n1">
              <ul>
                <li>Five passengers sail that day for a three-hour</li>
                <li>Dedication to client satisfaction</li>
                <li>Being leader in our profession</li>
                <li>Teamwork and collaborations</li>
                <li>Pride in our works and excellences</li>
                <li>Communication and Transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default SafariRally;
