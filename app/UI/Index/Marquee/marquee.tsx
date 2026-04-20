"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import MarqueeIcon from "@/public/icon-marquee.svg";

function Marquee() {
  const items: string[] = [
    "Workshop Alerts",
    "Quick Updates",
    "Latest Updates",
    "New Announcements",
    "Live Notice",
    "Event Countdown",
    "Workshop Alerts",
    "Quick Updates",
    "Latest Updates",
    "New Announcements",
    "Live Notice",
    "Event Countdown",
    "Workshop Alerts",
  ];

  return (
    <>
      <div className="w-full bg-(--prim) text-white py-3 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={35}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          className="swiper-wrapper"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="w-auto!">
              <div className="flex items-center">
                <Image src={MarqueeIcon} alt="marqueeIcon" className="me-6" />
                <span className="text-2xl md:text-3xl  whitespace-nowrap hover:text-black transition-colors duration-300 cursor-pointer font-semibold">
                  {item}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Marquee;
