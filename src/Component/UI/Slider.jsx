import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CustomSlider({
  data = [],
  renderSlide,
  slidesPerView = 4,
  loop = true,
  autoplay = true,
  pagination = true,
  spaceBetween = 0,
}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={data.length > slidesPerView && loop}
      centeredSlides={true}
      grabCursor={true}
      slidesPerView={1}
      spaceBetween={spaceBetween}
      speed={4000}
      autoplay={
        autoplay
          ? {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      pagination={
        pagination
          ? {
              clickable: true,
              dynamicBullets: true,
            }
          : false
      }
      breakpoints={{
        0: { slidesPerView: 1.2 }, 
        480: { slidesPerView: 2 }, 
        768: { slidesPerView: 3 }, 
        1024: { slidesPerView }, 
      }}
      onSlideChange={(swiper) => {
        const slides = swiper.slides;
        slides.forEach((slide) => slide.classList.remove("scale-105"));
        const activeSlide = slides[swiper.activeIndex];
        if (activeSlide) activeSlide.classList.add("scale-105");
      }}
      className="!pb-1"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center transition-all duration-500 ease-in-out">
            {renderSlide(item)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
