import img1 from "../assets/01.jpg";
import img2 from "../assets/02.jpg";
import img3 from "../assets/03.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide from "./Slide";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={img1}
            text="Unlocking the power of intelligence. Explore the fascinating world of AI, from machine learning to deep learning, and discover how it's shaping our future. Read more on our blog and stay ahead of the curve."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img2}
            text="Build stunning websites and web applications. Our blog provides valuable resources for web developers of all levels. Learn about front-end, back-end, and full-stack development, and stay updated on the latest trends."
          ></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img3}
            text="In today's digital age, cybersecurity is paramount. Learn about the latest threats, discover best practices for protecting yourself and your data, and stay informed with our cybersecurity insights."
          ></Slide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
