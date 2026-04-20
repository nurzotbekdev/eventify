"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import MarqueeIcon from "@/public/icon-marquee.svg";
import benefitImg1 from "@/public/benefits-image01.jpg";
import benefitImg2 from "@/public/benefits-image02.jpg";
import benefitIcon1 from "@/public/benefits-icon01.svg";
import benefitIcon2 from "@/public/benefits-icon02.svg";

function Benefits() {
  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] flex items-center justify-between flex-col xl:flex-row gap-10">
        <div className="xl:w-1/2 w-full">
          <span className="flex items-center bg-(--prim) w-fit rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3 py-1 px-2">
            <Image
              src={MarqueeIcon}
              alt="marqueeIcon"
              className="p-2 w-7 h-7 md:w-8 md:h-8"
            />
            Key Benefits
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-5 lg:mb-8">
            Key advantages that ensure your events stand out
          </h2>
          <ul className="flex items-center flex-wrap gap-5 border-b border-t border-gray-100 py-5 lg:py-8">
            <li className="flex items-start xl:items-center flex-col xl:flex-row gap-3">
              <Image
                src={benefitIcon1}
                alt="benefitIcon"
                className="bg-(--prim) hover:bg-black transition-colors duration-300 w-10 h-10 lg:w-15 lg:h-15 p-3 rounded-lg cursor-pointer"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  Expert-Led Keynote Sessions
                </h3>
                <p className="text-gray-500 text-sm md:text-lg">
                  Experience inspiring keynote sessions led by industry experts
                  who share valuable insights, trends, and strategies to help
                  you grow personally and professionally.
                </p>
              </div>
            </li>

            <li className="flex items-start xl:items-center flex-col xl:flex-row gap-3">
              <Image
                src={benefitIcon2}
                alt="benefitIcon"
                className="bg-(--prim) hover:bg-black transition-colors duration-300 w-10 h-10 lg:w-15 lg:h-15 p-3 rounded-lg cursor-pointer"
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  Advanced Event Technology
                </h3>
                <p className="text-gray-500 text-sm md:text-lg">
                  Experience inspiring keynote sessions led by industry experts
                  who share valuable insights, trends, and strategies to help
                  you grow personally and professionally.
                </p>
              </div>
            </li>
          </ul>

          <div className="flex items-center flex-wrap gap-10 mt-8 lg:mt-10">
            <Link href="/UI/Schedules">
              <button className="btn border border-gray-50/20 relative m-0 px-4 py-2.5 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
                <span>View Our Schedule</span>
              </button>
            </Link>
            <div className="flex items-center gap-2 cursor-pointer">
              <Icon
                icon="material-symbols:call"
                width="24"
                height="24"
                className="bg-(--prim) text-white w-10 h-10 p-2 rounded-sm"
              />
              <p className="text-gray-500">
                <span className="block text-black">Call Now!</span>
                +998 90 784 44 44
              </p>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2 w-full h-auto relative benefits-image">
          <div className="glass-effect overflow-hidden rounded-xl relative w-full">
            <Image
              src={benefitImg1}
              alt="benefitImg"
              className="rounded-xl w-full xl:max-w-112.5"
            />
          </div>
          <Image
            src={benefitImg2}
            alt="benefitImg"
            className="rounded-xl mt-5 h-100 w-112.5 absolute right-0 top-40 glass-effect hidden xl:block"
          />
        </div>
      </div>
    </>
  );
}

export default Benefits;
