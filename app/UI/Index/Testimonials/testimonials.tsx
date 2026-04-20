"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import MarqueeIcon from "@/public/icon-marquee.svg";
import testbg from "@/public/bg-image.png";
import author1 from "@/public/author-1.jpg";
import author2 from "@/public/author-2.jpg";
import author3 from "@/public/author-3.jpg";
import author4 from "@/public/author-4.jpg";
import brand1 from "@/public/company-logo-1.svg";
import brand2 from "@/public/company-logo-2.svg";
import brand3 from "@/public/company-logo-3.svg";
import brand4 from "@/public/company-logo-4.svg";

const brands = [
  { id: "brand-1", img: brand1 },
  { id: "brand-2", img: brand2 },
  { id: "brand-3", img: brand3 },
  { id: "brand-4", img: brand4 },
  { id: "brand-5", img: brand2 },
  { id: "brand-6", img: brand2 },
  { id: "brand-7", img: brand3 },
  { id: "brand-8", img: brand4 },
];

const testimonials = [
  {
    id: 1,
    text: "“Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability.”",
    name: "Sophia Rodrigues",
    role: "Global Marketing Director",
    img: author1,
  },
  {
    id: 2,
    text: "“Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability.”",
    name: "Ralph Edwards",
    role: "Global Marketing Director",
    img: author2,
  },
  {
    id: 3,
    text: "“Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability.”",
    name: "Kristin Watson",
    role: "Global Marketing Director",
    img: author3,
  },
];

function Testimonials() {
  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] bg-(--prim-dark) relative space-y-10 lg:space-y-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={testbg}
            alt="featuresImg"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 text-center mx-auto max-w-full lg:max-w-180">
          <span className="flex items-center bg-(--prim) w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3 py-1 px-2">
            <Image
              src={MarqueeIcon}
              alt="marqueeIcon"
              className="p-2 w-7 h-7 md:w-8 md:h-8"
            />
            Testimonials
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            What our customers say about their experience
          </h2>
        </div>

        <div className="testimonials-main w-full flex justify-center items-center flex-col lg:flex-row z-10 relative gap-8 h-auto lg:h-90">
          <div className="bg-(--prim) text-white flex justify-between items-start flex-col rounded-2xl p-5 sm:p-8 h-full gap-14 lg:gap-0 w-full sm:w-[50%] lg:w-[30%]">
            <div className="tst-info">
              <div className="author-image flex pb-4">
                <Image
                  src={author1}
                  alt="authorImage"
                  className="w-8 h-8 rounded-full -me-3 border border-gray-200"
                />
                <Image
                  src={author2}
                  alt="authorImage"
                  className="w-8 h-8 rounded-full -me-3 border border-gray-200"
                />
                <Image
                  src={author3}
                  alt="authorImage"
                  className="w-8 h-8 rounded-full -me-3 border border-gray-200"
                />
                <Image
                  src={author4}
                  alt="authorImage"
                  className="w-8 h-8 rounded-full -me-3 border border-gray-200"
                />
              </div>
              <p className="text-xl font-semibold">
                Over 15,000+ Attendees Connected Worldwide
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-0 sm:mb-8">
                Client Experience Speak For <br /> Themselves
              </h4>
              <Link href="/UI/Contact">
                <button className="btn border border-gray-50/20 relative m-0 px-4 py-2.5 flex justify-center items-center cursor-pointer capitalize bg-white rounded-lg text-(--prim) hover:text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
                  <span>View All Reviews</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-[70%] h-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 4000 }}
              spaceBetween={30}
              slidesPerView={2}
              breakpoints={{
                1600: { slidesPerView: 2 },
                1000: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
              className="w-full h-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="tst-item bg-white/10 p-5 sm:p-8 rounded-2xl h-full flex justify-between items-start flex-col">
                    <div className="tst-top border-b border-gray-50/10">
                      <div className="flex items-center gap-1 text-yellow-300 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            icon="material-symbols:star-rounded"
                            width="24"
                            height="24"
                          />
                        ))}
                      </div>

                      <p className="text-white mb-10 text-lg lg:text-xl font-semibold">
                        {item.text}
                      </p>
                    </div>

                    <div className="tst-author flex items-center gap-3 pt-5">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="rounded-full w-12 h-12"
                      />
                      <div className="flex flex-col text-white">
                        <strong>{item.name}</strong>
                        <span className="text-gray-300 text-sm">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="brands text-center text-white font-medium w-full">
          <div className="pt-5 flex items-center gap-5 w-full">
            <span className="flex-1 text-sm border-t border-[#ffffff1a]"></span>
            <h2 className="text-white font-semibold whitespace-nowrap text-sm sm:text-md">
              Upcoming Speaker Reveal - Don't Miss Out
            </h2>
            <span className="flex-1 text-sm border-t border-[#ffffff1a]"></span>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mt-10 w-full"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="brand-image flex justify-center items-center w-full">
                  <Image
                    src={brand.img}
                    alt="brand"
                    className="opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
