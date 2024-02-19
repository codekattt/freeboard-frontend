import { SliderItem, Wrapper } from './LayoutBanner.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/img/slide_cat1.png" />
        </div>
        <div>
          <SliderItem src="/img/slide2.png" />
        </div>
        <div>
          <SliderItem src="/img/slide3.png" />
        </div>
        <div>
          <SliderItem src="/img/slide4.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
