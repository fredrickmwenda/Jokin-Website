import React, { useEffect, useState } from 'react';

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('/team.json')
      .then(response => response.json())
      .then(data => setTeamMembers(data))
      .catch(error => console.error('Error fetching the team members:', error));
  }, []);

  return (
    <section className="space" data-bg-src="assets/img/bg/team_bg_1.jpg">
      <div className="container z-index-common">
        <div className="row justify-content-lg-between justify-content-center align-items-end">
          <div className="col-xl-6">
            <div className="title-area text-center text-lg-start">
              <span className="sub-title style1">Team Members</span>
              <h2 className="sec-title">Our Professional Team</h2>
            </div>
          </div>
          <div className="col-lg-auto d-none d-xl-block">
            <div className="sec-btn">
              <div className="icon-box">
                <button data-slider-prev="#teamSlider1" className="slider-arrow default"><i className="far fa-arrow-left"></i></button>
                <button data-slider-next="#teamSlider1" className="slider-arrow default"><i className="far fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-area">
          <div className="swiper th-slider has-shadow" id="teamSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'>
            <div className="swiper-wrapper">
              {teamMembers.map((member, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="th-team team-box">
                    <div className="team-img">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="team-content">
                      <div className="media-body">
                        <h3 className="box-title"><a href="team-details.html">{member.name}</a></h3>
                        <span className="team-desig">{member.designation}</span>
                      </div>
                      <div className="th-social">
                        <a target="_blank" rel="noopener noreferrer" href={member.social.facebook}><i className="fab fa-facebook-f"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href={member.social.twitter}><i className="fab fa-twitter"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href={member.social.instagram}><i className="fab fa-instagram"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href={member.social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
