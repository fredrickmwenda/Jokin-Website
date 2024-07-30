import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import SwiperCore, {Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import 'swiper/swiper-bundle.css'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const CustomSwiper = ({ children, settings }) => {
  const defaultSettings = {
    slidesPerView: 1,
    pagination: { clickable: true },
    navigation: true,
    loop: true,
    ...settings, // Merge custom settings with default settings
  };

  return (
    <div className="slider-wrapper">
      <Swiper {...defaultSettings} className="mySwiper">
        {children}
      </Swiper>
    </div>
  );
};

const HeroSection = ({ slides }) => (
  <CustomSwiper settings={{ effect: 'slide' }}>
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="slide-inner">
          <img src={slide.imageSrc} alt={slide.title} />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </CustomSwiper>
);

export default HeroSection;

// Usage Example
// const slides = [
//   {
//     imageSrc: "assets/img/hero/hero_sect_1.jpg",
//     title: "Building Beyond Boundaries",
//     description: "The construction industry encompasses the planning, design, and execution of buildings, infrastructure, and related projects.",
//   },
//   {
//     imageSrc: "assets/img/hero/hero_bg_1_2.jpg",
//     title: "Kotar is Strong Foundation",
//     description: "Construction companies offer a wide range of services, such as pre-construction planning, project management, design and architectural.",
//   }
// ];
