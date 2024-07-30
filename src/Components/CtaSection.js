import React from 'react';

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
