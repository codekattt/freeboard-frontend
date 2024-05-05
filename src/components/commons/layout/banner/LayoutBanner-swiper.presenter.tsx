import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const slideImages = [
  '/img/slide1.png',
  '/img/slide2.png',
  '/img/slide3.png',
  '/img/slide4.png',
];

export default function LayoutBannerUI(): JSX.Element {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {slideImages.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
