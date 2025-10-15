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
}) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={loop}
      centeredSlides={true}
      grabCursor={true}
      slidesPerView={1}
      spaceBetween={30}
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
        640: { slidesPerView: 2 },
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
