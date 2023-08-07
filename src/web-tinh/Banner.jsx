// import React from "react";
import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/autoplay"
import 'swiper/css/pagination';


function Banner() {
    return (
        <section className="banner-img col-12 container">
            <Swiper
                modules={[Navigation, Autoplay]}
                className=" mySwiper"
                navigation
                space-between={30}
                autoplay-delay={3500}
                loop="true"
            >
                <SwiperSlide style={{ height: "646px" }}  >
                    <img src="./images/banner1.webp" alt="" style={{ maxWidth: "100%", height: "560px" }} />
                </SwiperSlide>
                <SwiperSlide style={{ height: "646px" }}>
                    <img src="./images/d8365491cc713cd35475b1bc17d7dd09.png" alt="" style={{ maxWidth: "100%", height: "560px" }} />
                </SwiperSlide>
            </Swiper>
        </section>

    );
}
export default Banner
