"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

import AboutImg from "@/public/about-us-image.jpg";
import AchievementImg from "@/public/about-achievement-image.png";
import CircletextImg from "@/public/circle-text.webp";
import MarqueeIcon from "@/public/icon-marquee.svg";
import aboutIcon1 from "@/public/about-icon1.svg";
import aboutIcon2 from "@/public/about-icon2.svg";

function About() {
  const [active, setActive] = useState<string>("mission");

  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] flex items-center justify-between flex-col lg:flex-row lg:gap-20">
        <div className="lg:w-1/2 w-full relative">
          <div className="glass-effect relative overflow-hidden rounded-xl">
            <Image
              src={AboutImg}
              alt="aboutImg"
              className="w-full rounded-xl"
            />
          </div>

          <div className="bg-white shadow-xl max-w-90 rounded-xl text-center ms-auto absolute top-70 -right-15 md:block hidden">
            <div className="w-full text-center mb-8 px-5 pt-6">
              <Image
                src={AchievementImg}
                alt="achievementImg"
                className="w-40 h-40 object-contain mx-auto mb-10 pt-5"
              />
              <h3 className="font-semibold text-lg">
                “Institution for Professional Achievement Awards 2025”
              </h3>
              <p className="text-gray-500 font-medium">by Nisha Trivedi</p>
            </div>
            <h3 className="bg-(--gray-light) py-6 font-semibold text-2xl px-5">
              Celebrating Achievement with Pride
            </h3>
          </div>

          <div className="relative w-50 h-50 md:h-62.5 md:w-62.5 flex items-center justify-center">
            <Image
              src={CircletextImg}
              alt="circletextImg"
              className="absolute inset-0 w-full h-full object-cover image-rotate"
            />
            <span className="relative z-10 flex items-center justify-center rounded-full bg-white text-black text-4xl Unbounded font-semibold">
              25+
            </span>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <span className="flex items-center bg-(--prim) w-fit rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3">
            <Image
              src={MarqueeIcon}
              alt="marqueeIcon"
              className="p-2 w-7 h-7 md:w-8 md:h-8"
            />
            About Us
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            Uncover our mission & purpose behind this event
          </h2>
          <p className="text-gray-500 text-sm md:text-lg">
            Discover the vision that drives this event—a commitment to bringing
            together innovators, leaders, and changemakers to share knowledge,
            spark inspiration, and create meaningful connections.
          </p>
          <ul className="flex justify-between items-center flex-col md:flex-row bg-(--gray-light) mt-5 rounded-lg gap-3 p-3">
            <li className="w-full">
              <button
                onClick={() => setActive("mission")}
                className={`w-full p-3 rounded-lg text-center font-bold cursor-pointer transition ${active === "mission" ? "bg-black text-white" : "bg-white"}`}
              >
                Our Mission
              </button>
            </li>

            <li className="w-full">
              <button
                onClick={() => setActive("vision")}
                className={`w-full p-2 rounded-lg text-center font-bold cursor-pointer transition ${active === "vision" ? "bg-black text-white" : "bg-white"}`}
              >
                Our Vision
              </button>
            </li>

            <li className="w-full">
              <button
                onClick={() => setActive("goal")}
                className={`w-full p-3 rounded-lg text-center font-bold cursor-pointer transition ${active === "goal" ? "bg-black text-white" : "bg-white"}`}
              >
                Our Goal
              </button>
            </li>
          </ul>

          {active === "mission" && (
            <p className="my-5 text-gray-500 text-sm md:text-lg">
              Our Mission is to build a global community where collaboration
              fuels innovation, we aim encourage fresh thinking, spark inspiring
              dialogues, and create a space.
            </p>
          )}

          {active === "vision" && (
            <p className="my-5 text-gray-500 text-sm md:text-lg">
              Our Vision is to build a global community where collaboration
              fuels innovation we aim encourage fresh thinking, spark inspiring
              dialogues, and create a space.
            </p>
          )}

          {active === "goal" && (
            <p className="my-5 text-gray-500 text-sm md:text-lg">
              Our Goal is to build a global community where collaboration fuels
              innovation we aim encourage fresh thinking, spark inspiring
              dialogues, and create a space.
            </p>
          )}

          <ul className="flex items-start flex-col gap-5 border-b border-gray-100 pb-5 lg:pb-10">
            <li className="flex items-center gap-3">
              <Image
                src={aboutIcon1}
                alt="aboutIcon1"
                className="bg-(--prim) w-10 h-10 rounded-lg cursor-pointer p-2"
              />
              <h3 className="text-base sm:text-lg font-semibold">
                Receive real-time event updates.
              </h3>
            </li>

            <li className="flex items-center gap-3">
              <Image
                src={aboutIcon2}
                alt="aboutIcon2"
                className="bg-(--prim) w-10 h-10 rounded-lg cursor-pointer p-2"
              />
              <h3 className="text-base sm:text-lg font-semibold">
                Receive real-time event updates.
              </h3>
            </li>
          </ul>

          <div className="flex items-center flex-wrap gap-10 mt-8 lg:mt-10">
            <Link href="/UI/About">
              <button className="btn border border-gray-50/20 relative m-0 px-4 py-2.5 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
                <span>Learn More About</span>
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
      </div>
    </>
  );
}

export default About;
