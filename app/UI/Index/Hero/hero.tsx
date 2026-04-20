"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import author1 from "@/public/author-1.jpg";
import author2 from "@/public/author-2.jpg";
import author3 from "@/public/author-3.jpg";

function Hero() {
  return (
    <>
      <div className="hero-bg h-screen w-full px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%]">
        <div className="lg:max-w-6xl mx-auto text-center h-full flex flex-col justify-center items-center z-10 relative">
          <div className="flex items-center px-3 py-2 rounded-full bg-white/20 backdrop-blur-md text-white mb-3">
            <div className="flex items-center">
              <Image
                src={author1}
                alt="author-img"
                className="h-5 w-5 lg:w-6 lg:h-6 rounded-full border border-white"
              />
              <Image
                src={author2}
                alt="author-img"
                className="h-5 w-5 lg:w-6 lg:h-6 rounded-full border border-white -translate-x-2"
              />
              <Image
                src={author3}
                alt="author-img"
                className="h-5 w-5 lg:w-6 lg:h-6 rounded-full border border-white -translate-x-4"
              />
            </div>
            <p className="text-sm lg:text-shadow-md">
              Ideas that spark change.
            </p>
          </div>

          <h1 className="text-2xl sm:text-3xl mb-4 lg:mb-6 md:text-5xl xl:text-7xl text-white font-bold text-center">
            Connecting Minds to Shape Tomorrow's Big Ideas
          </h1>

          <p className="text-white lg:text-xl py-2 mb-5">
            Experience a powerful gathering of visionaries, creators, and
            industry experts united by one goal—exchanging ideas that spark
            growth, innovation, and meaningful change.
          </p>

          <div className="flex items-center lg:flex-row flex-col gap-5">
            <Link href="/UI/Schedules">
              <button className="btn border border-gray-50/20 relative m-0 px-4 py-3 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
                <span>Explore Schedule</span>
              </button>
            </Link>

            <Link
              href="/"
              className="flex items-center text-white font-semibold"
            >
              <Icon
                icon="mdi:play"
                width="24"
                height="24"
                className="bg-(--prim) rounded-full text-white me-2"
              />
              <span>Watch Video</span>
            </Link>
          </div>

          <div className="pt-5 flex items-center gap-5 w-full">
            <span className="flex-1 text-sm border-t border-[#ffffff1a]"></span>
            <h2 className="text-white font-semibold whitespace-nowrap text-sm sm:text-md">
              Upcoming Speaker Reveal - Don't Miss Out
            </h2>
            <span className="flex-1 text-sm border-t border-[#ffffff1a]"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
