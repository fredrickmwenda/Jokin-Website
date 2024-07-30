import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'

const projects = [
  {
    id: 1,
    title: 'Naivasha Safari Rally',
    description: 'Exciting event with thrilling race...',
    image: 'assets/img/safari.jpg',
    link: '/project/safari-rally',
  },
  // Add other projects here if needed
];

const ProjectShowcase = () => {
  return (
    <section className="project-area overflow-hidden space" data-pos-for="#counter-sec" data-sec-pos="top-half">
      <div className="container th-container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-xxl-6 offset-xxl-3">
            <div className="title-area text-center">
              <span className="sub-title">Latest Projects</span>
              <h2 className="sec-title">Crafting Quality Structures, Creating Lasting Impressions.</h2>
            </div>
          </div>
        </div>
        {projects.length > 2 ? (
          <div className="slider-area">
            <div className="swiper th-slider has-shadow project-slider" id="projectSlider1" data-slider-options='{"centeredSlides":true,"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"3"}}}'>
              <div className="swiper-wrapper">
                {projects.map((project) => (
                  <div className="swiper-slide" key={project.id}>
                    <div className="project-card">
                      <div className="project-img">
                        <img src={project.image} alt="project image" />
                      </div>
                      <div className="project-content">
                        <p className="project-subtitle">{project.title}</p>
                        <h3 className="box-title">
                          <Link to={project.link} className='project-describe'>project.title</Link>
                         
                        </h3>
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slider-pagination"></div>
            </div>
            <button data-slider-prev="#projectSlider1" className="slider-arrow slider-prev"><i className="far fa-arrow-left"></i></button>
            <button data-slider-next="#projectSlider1" className="slider-arrow slider-next"><i className="far fa-arrow-right"></i></button>
          </div>
        ) : (
          <div className="row">
            {projects.map((project) => (
              <div className="col-lg-6" key={project.id}>
                <div className="project-card">
                  <div className="project-img">
                    <img src={project.image} alt="project image" />
                  </div>
                  <div className="project-content">
                    <p className="project-subtitle">{project.title}</p>
                    <h3 className="box-title">
                      <a href={project.link}>{project.title}</a>
                    </h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="shape-mockup d-none d-xl-block" data-top="15%" data-left="0%">
        <img src="assets/img/shape/shape_1.png" alt="shape" />
      </div>
      <div className="shape-mockup movingX d-none d-xxl-block" data-top="20%" data-right="0%">
        <img src="assets/img/shape/shape_2.png" alt="shape" />
      </div>
    </section>
  );
};

export default ProjectShowcase;
