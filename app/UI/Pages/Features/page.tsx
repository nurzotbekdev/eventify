"use client";

import Link from "next/link";
import Image from "next/image";

import sectionBanner from "@/public/section-banner.jpg";
import arrow from "@/public/arrow-icon.svg";

import featureData from "@/app/Json/Features.json";

import Highlights from "../../Index/Highlights/highlights";
import Benefits from "../../Index/Benefits/benefits";
import Testimonials from "../../Index/Testimonials/testimonials";
import Faqs from "../../Index/Faqs/faqs";

function Features() {
  return (
    <>
      <div
        className="h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Our Features
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">Features</li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%]">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
          {featureData.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#f6f6f7] backdrop-blur-lg p-8 pb-20 rounded-xl relative transition duration-300"
            >
              <div className="bg-(--prim) p-3 w-12 h-12 flex justify-center items-center rounded-lg mb-15">
                <Image
                  src={feature.icon}
                  alt="featureIcon"
                  width={30}
                  height={30}
                />
              </div>

              <h3 className="text-xl font-bold text-black mb-4">
                {feature.title}
              </h3>

              <p className="font-medium text-gray-500">{feature.description}</p>

              <div className="absolute bottom-5 left-8 right-8 flex items-center text-black font-semibold gap-2 cursor-pointer border-t border-gray-300/60 pt-3">
                Read More{" "}
                <Image
                  src={arrow}
                  alt="arrow-icon"
                  className="ms-2 brightness-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Highlights />
      <Benefits />
      <Testimonials />
      <Faqs />
    </>
  );
}

export default Features;
