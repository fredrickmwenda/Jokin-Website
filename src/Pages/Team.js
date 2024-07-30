import React from 'react';
import CursorElements from '../Components/CursorElements';
import Sidemenu from '../Components/Sidemenu';
import PopupSearchBox from '../Components/PopupSearchBox';
import MobileMenu from '../Components/MobileMenu';
import Header from '../Components/Header';
import CtaSection from '../Components/CtaSection';
import Footer from '../Components/Footer';

const teamMembers = [];

const Team = ({services}) => {
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
            <h1 className="breadcumb-title">Team Members</h1>
            <ul className="breadcumb-menu">
              <li><a href="home-company.html">Home</a></li>
              <li>Team Members</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          {teamMembers.length === 0 ? (
            <div className="text-center">
              <h2>Jokin Consortium Limited</h2>
              <p>
                Jokin Consortium Limited includes a team of highly qualified
                professional engineers and other experts in complementary
                disciplines who employ state-of-the-art techniques in
                accomplishing the tasks at hand. The approaches to project
                execution are all-inclusive thereby ensuring in-depth execution of
                each stage of the project.
              </p>
              <p>
                Human Resources are a crucial Asset of any organization and Jokin
                Consortium Limited employs and retains skilled professionals in the
                areas of its expertise. In addition to the permanent staff, the
                company maintains standing agreements with various external
                experts to ensure that relevant expertise is made available within
                the shortest possible period for contracted assignments.
              </p>
            </div>
          ) : (
            <>
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="title-area text-center pe-xl-5 ps-xl-5">
                    <span className="sub-title">Meet Our Team</span>
                    <h2 className="sec-title">We’ve Exclusive Team Members Meet Our Professionals</h2>
                  </div>
                </div>
              </div>
              <div className="row gy-30 gx-30">
                {teamMembers.map((member, index) => (
                  <div className="col-md-6 col-xl-4" key={index}>
                    <div className="th-team team-box style2 th-ani">
                      <div className="team-img">
                        <img src={member.image} alt="Team" />
                      </div>
                      <div className="team-content">
                        <div className="media-body">
                          <h3 className="box-title"><a href="team-details.html">{member.name}</a></h3>
                          <span className="team-desig">{member.designation}</span>
                        </div>
                        <div className="th-social">
                          <a target="_blank" href={member.facebook}><i className="fab fa-facebook-f"></i></a>
                          <a target="_blank" href={member.twitter}><i className="fab fa-twitter"></i></a>
                          <a target="_blank" href={member.instagram}><i className="fab fa-instagram"></i></a>
                          <a target="_blank" href={member.linkedin}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <CtaSection/>
      <Footer/>
    </div>
  );
};

export default Team;
