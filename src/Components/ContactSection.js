import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert('Your message has been sent successfully.');
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                subject: '',
                message: '',
            });
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    };

    return (
        <div className="space overflow-hidden">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div>
                            <div className="title-area mb-30">
                                <span className="sub-title style1">Get In Touch</span>
                                <h2 className="sec-title">Have An Upcoming Project? Reachout!</h2>
                            </div>
                            <form onSubmit={handleSubmit} className="contact-form2 ajax-contact">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <i className="fal fa-user"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone_number"
                                            id="phone_number"
                                            placeholder="Phone Number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                        />
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select
                                            name="subject"
                                            id="subject"
                                            className="form-select nice-select"
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled selected hidden>
                                                Select S
                                            </option>
                                            <option value="Construction">Construction</option>
                                            <option value="Real Estate">Real Estate</option>
                                            <option value="Industry">Industry</option>
                                            <option value="Architect">Architect</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="3"
                                            className="form-control"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        <i className="fal fa-pencil"></i>
                                    </div>
                                    <div className="form-btn col-12">
                                        <button className="th-btn">Send Message<i className="fa-regular fa-arrow-right ms-2"></i></button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-image">
                            <img src="assets/img/support.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

