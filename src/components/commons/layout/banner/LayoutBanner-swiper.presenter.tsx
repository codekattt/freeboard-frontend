import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const slideImages = [
  '/img/cat1.png',
  '/img/cat2.png',
  '/img/cat3.png',
  '/img/cat4.png',
];

export default function LayoutBannerUI(): JSX.Element {
  return (
    <Swiper
      style={{ height: '350px' }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {slideImages.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
