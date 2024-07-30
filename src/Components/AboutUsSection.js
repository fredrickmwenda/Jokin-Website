import React from 'react';

const AboutUsSection = () => (
    <div className="overflow-hidden space" id="about-sec">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6">
                    <div className="img-box1">
                        <div className="img1">
                            <img src="assets/img/normal/about_1.jpg" alt="About" />
                        </div>
                        <div className="about-shape-1"></div>
                        <div className="img2 th-anim">
                            <img src="assets/img/normal/about_2.jpg" alt="About" />
                        </div>
                        <div className="th-experience dance">
                            <div className="th-experience_content">
                                <h2 className="experience-year"><span className="counter-number">10</span>k</h2>
                                <p className="experience-text">Customers Satisfied</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="title-area mb-20 pe-xl-5 me-xl-5">
                        <span className="sub-title style1">About Us</span>
                        {/* <h2 className="sec-title mb-20">We Are Always Think On Your Dream</h2> */}
                    </div>
                    <p className="sec-text mb-30">
                        It’s our job to turn today’s problems into tomorrow’s opportunities, and
                        unless we have a solution that creates long-term value, our job isn’t done.
                        We understand that no two issues are alike. So, you can rest happy knowing
                        that, instead of just adapting old ones, we are constantly innovating for
                        new ideas.
                        <br />
                        We push to create solutions that create value, and this value is our winning
                        edge. Our aim is to surpass two things - your expectations, and the
                        industry’s standards.
                    </p>
                    {/* <p className="sec-text mb-30">It’s our job to turn today’s problems into tomorrow’s opportunities, and
                        unless we have a solution that creates long-term value, our job isn’t done.
                        We understand that no two issues are alike. So, you can rest happy knowing
                        that, instead of just adapting old ones, we are constantly innovating for
                        new ideas.
                        <br />
                        We push to create solutions that create value, and this value is our winning
                        edge. Our aim is to surpass two things - your expectations, and the
                        industry’s standards.
                        We push to create solutions that create value, and this value is our
                        winning edge. It’s our job to turn today’s problems into tomorrow’s
                        opportunities, and unless we have a solution that creates long-term
                        value, our job isn’t done. We understand that no two issues are alike.
                        So, you can rest happy knowing that, instead of just adapting old ones,
                        we are constantly innovating for new ideas.
                        </p> */}

                    <div className="about-signature_wrapper">
                        <a href="about.html" className="th-btn">More About Us<i className="fa-regular fa-arrow-right ms-2"></i></a>
                        <div className="about-signature">
                            {/* <div className="signature">
                                <img src="assets/img/normal/signature.png" alt="signature">
                            </div> */}
                            <div className="content">
                                <h6 className="name">Joseph Mwirigi</h6>
                                <span className="desig">Founder of Jokin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AboutUsSection;