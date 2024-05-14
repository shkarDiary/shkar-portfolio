"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Prev from "@mui/icons-material/ArrowBack";
import Next from "@mui/icons-material/ArrowForward";
import { NextPage } from "next/types";

type WorkItem = {
  name: string;
  url: string;
};
type Works = WorkItem[];

const Slider: NextPage<{ work: Works }> = ({ work }) => {
  const swiper = useRef<any>(null);
  const [width, setWidth] = useState<number>(768);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const isMobile = width <= 768;
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
        navigation={isMobile ? true : false}
        modules={[Pagination, Navigation]}
        style={{ height: "100%", width: "100%" }}
      >
        {work.map((work) => (
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
        <div className=" ml-20 mt-8 space-x-10 hidden md:block ">
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
};
export default Slider;
