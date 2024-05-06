"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  Swiper,
  SwiperProps,
  SwiperRef,
  SwiperSlide,
  SwiperSlideProps,
  useSwiper,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Prev from "@mui/icons-material/ArrowBack";
import Next from "@mui/icons-material/ArrowForward";
import { SwiperEvents } from "swiper/types";
const works = [
  { name: "kp1", url: "/works/kp1.jpg" },
  { name: "kp2", url: "/works/kp2.jpg" },
  { name: "kp3", url: "/works/kp3.jpg" },
  { name: "menu", url: "/works/menu.png" },
  { name: "nrtViber", url: "/works/nrtViber.png" },
  { name: "valentine", url: "/works/valentine.jpg" },
  { name: "manipulation", url: "/works/manipulation.png" },
  { name: "logo", url: "/works/logo.jpg" },
];
export default function Slider() {
  const swiper = useRef<any>(null);
  return (
    <div className=" ">
      <Swiper
        ref={swiper}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        style={{ height: "100%", width: "100%" }}
      >
        {works.map((work) => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={work.name}
          >
            <Image
              className=" block w-96 h-96 object-cover "
              height={300}
              width={300}
              alt={`this is ${work.name} image`}
              src={work.url}
            />
          </SwiperSlide>
        ))}
        <div className=" ml-20 mt-8 space-x-10 ">
          <button
            title="prev"
            onClick={() => {
              if (swiper.current) swiper.current.swiper.slidePrev();
            }}
          >
            {<Prev />}
          </button>
          <button
            className="  "
            onClick={() => {
              if (swiper.current) swiper.current.swiper.slideNext();
            }}
            title="next"
          >
            {<Next />}
          </button>
        </div>
      </Swiper>
    </div>
  );
}
