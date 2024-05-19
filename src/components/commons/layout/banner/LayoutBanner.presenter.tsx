import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from 'swiper';
import 'swiper/swiper-bundle.css';
import { NaviWrapper, NaviNext, NaviPrev } from './LayoutBanner.styles';
import { useState } from 'react';

SwiperCore.use([Navigation, Pagination, Autoplay, Mousewheel]);

const slideImages = [
  '/img/cat1.png',
  '/img/cat2.png',
  '/img/cat3.png',
  '/img/cat4.png',
];

export default function LayoutBannerUI(): JSX.Element {
  const [swiper, setSwiper] = useState<any>();

  const handlePrev = () => {
    if (swiper) {
      swiper?.slidePrev();
    }
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <>
      <NaviWrapper>
        <NaviPrev onClick={handlePrev}>
          <img src="/img/prev-icon.svg" />
        </NaviPrev>
        <NaviNext onClick={handleNext}>
          <img src="/img/next-icon.svg" />
        </NaviNext>
      </NaviWrapper>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        mousewheel={true}
        style={{ height: '350px' }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {slideImages.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
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
    </>
  );
}
