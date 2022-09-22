import React, { useRef } from 'react';
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.scss';

import { Autoplay, Pagination } from "swiper";

import "./WorkSection.css";

function WorkSection() {
  const swiperRef = useRef(null)


  return (
    <div className="work-section" id="work">
      <div className="work-part">
        <div className="work-header">
          <div className="hr-part"></div>
          <span>My Work</span>
          <div className="hr-part"></div>
        </div>
        
        {/* <div className="wrapper"> */} {/* work-boxes */}
          {/* <div className="card"> */}  {/* box-one */}
          <div 
            onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
            onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
          >
            <Swiper 
              ref={swiperRef}
              className="mySwiper wrapper"
              slidesPerView={1}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide className="card">
                <div className="image-part">  {/* image-part */}
                  <img src={img1} alt="" />  {/* image-work */}
                </div>

                <div className="info"> {/* image-description */}
                  <div className="description-header">
                    <span>Responsive Ecommerce Navbar</span>
                  </div>

                  <div className="description-i">
                    <a href="http://go9zen.github.io/responsive-ecommerce-navbar" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" ></i></a>
                  </div>
                </div>
              </SwiperSlide>
            {/* </div> */}

            {/* <div className="card"> */}  {/* box-one */}
              <SwiperSlide className="card">
                <div className="image-part">  {/* image-part */}
                  <img src={img2} alt="" />  {/* image-work */}
                </div>

                <div className="info"> {/* image-description */}
                  <div className="description-header">
                    <span>Responsive Shop & Product Card</span>
                  </div>

                  <div className="description-i">
                    <a href="http://go9zen.github.io/shop-product-cards" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default WorkSection;