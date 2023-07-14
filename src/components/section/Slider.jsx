import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
//SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이더</h2>
        <div className="slider__img">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            loop={true}
            //modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="silder s1 container">
                <div className="text">
                  <h3>
                    FOR <br />
                    HEALTH
                  </h3>
                  <p>
                    YOUTUBE
                    <br />
                    IMAGINE/
                  </p>
                  <Link href="#" className="more button-blue">
                    more
                  </Link>
                </div>
                <div className="img" aria-label="hidden">
                  <img
                    src="./assets/images/slider/slider_icon06.png"
                    alt="이미지"
                  />
                  <img
                    src="./assets/images/slider/slider_icon02.png"
                    alt="이미지"
                  />
                  <img
                    src="./assets/images/slider/slider_icon09.png"
                    alt="이미지"
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="silder s1 container">
                <div className="text">
                  <h3>
                    FOR <br />
                    GREEN
                  </h3>
                  <p>
                    PLANT
                    <br />
                    for AIR
                  </p>
                  <Link href="#" className="more button-blue">
                    more
                  </Link>
                  <div className="img" aria-label="hidden">
                    <img
                      src="./assets/images/slider/slider_icon06.png"
                      alt="이미지"
                    />
                    <img
                      src="./assets/images/slider/slider_icon02.png"
                      alt="이미지"
                    />
                    <img
                      src="./assets/images/slider/slider_icon09.png"
                      alt="이미지"
                    />
                  </div>
                  <div className="circle" aria-label="hidden">
                    <span className="circle c1"></span>
                    <span className="circle c2"></span>
                    <span className="circle c3"></span>
                    <span className="circle c4"></span>
                    <span className="circle c5"></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="silder s1 container">
                <div className="text">
                  <h3>
                    FOR <br />
                    FRONEND
                  </h3>
                  <p>
                    DESIRE
                    <br />
                    IMAGINE/
                  </p>
                  <Link href="#" className="more button-blue">
                    more
                  </Link>
                  <div className="img" aria-label="hidden">
                    <img
                      src="./assets/images/slider/slider_icon06.png"
                      alt="이미지"
                    />
                    <img
                      src="./assets/images/slider/slider_icon02.png"
                      alt="이미지"
                    />
                    <img
                      src="./assets/images/slider/slider_icon09.png"
                      alt="이미지"
                    />
                  </div>
                  <div className="circle" aria-label="hidden">
                    <span className="circle c1"></span>
                    <span className="circle c2"></span>
                    <span className="circle c3"></span>
                    <span className="circle c4"></span>
                    <span className="circle c5"></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
