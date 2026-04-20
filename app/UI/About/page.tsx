"use client";

import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";

import AchievementImg from "@/public/our-achievements-image.jpg";
import sectionBanner from "@/public/section-banner.jpg";
import MarqueeIcon from "@/public/icon-marquee.svg";
import approachBg from "@/public/bg-image.png";
import OurApproachImg01 from "@/public/our-approach-image-1.jpg";
import OurApproachImg02 from "@/public/our-approach-image-2.jpg";
import OurApproachImg03 from "@/public/our-approach-image-3.jpg";
import featurIcon1 from "@/public/features-icon01.svg";
import featurIcon3 from "@/public/features-icon03.svg";
import featurIcon4 from "@/public/features-icon04.svg";
import achievementIcon01 from "@/public/achievements-icon-01.svg";
import achievementIcon02 from "@/public/achievements-icon-02.svg";

import AboutComponent from "@/app/UI/Index/About/about";
import Benefits from "../Index/Benefits/benefits";
import Speakers from "../Index/Speakers/speakers";
import Banner from "../Index/Banner/banner";
import Testimonials from "../Index/Testimonials/testimonials";
import Faqs from "../Index/Faqs/faqs";

const approachData = [
  {
    img: OurApproachImg01,
    icon: featurIcon1,
    title: "Seamless Execution",
    desc: "Seamless Execution ensures every step of process flows smoothly, minimizing disruptions.",
  },
  {
    img: OurApproachImg02,
    icon: featurIcon3,
    title: "Collaborative Planning",
    desc: "Seamless Execution ensures every step of process flows smoothly, minimizing disruptions.",
  },
  {
    img: OurApproachImg03,
    icon: featurIcon4,
    title: "Continuous Improvement",
    desc: "Seamless Execution ensures every step of process flows smoothly, minimizing disruptions.",
  },
];

const achievementData = [
  {
    icon: achievementIcon01,
    number: 500,
    suffix: "+",
    label: "Global Events Delivered",
  },
  {
    icon: achievementIcon02,
    number: 100,
    suffix: "K+",
    label: "Attendees Connect Worldwide",
  },
  {
    icon: featurIcon3,
    number: 150,
    suffix: "+",
    label: "Industry-Leading Speakers",
  },
  {
    icon: featurIcon4,
    number: 80,
    suffix: "+",
    label: "Citles Hosted Across 10+ Countries",
  },
];

function About() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            About Us
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">About Us</li>
          </ul>
        </div>
      </div>

      <AboutComponent />

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] bg-(--prim-dark) relative!">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={approachBg} alt="approachBg" className="w-full h-full" />
        </div>

        <div className="max-w-full text-center mx-auto lg:max-w-210 z-1 relative">
          <span className="flex items-center bg-(--prim) w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3">
            <Image
              src={MarqueeIcon}
              alt="marqueeIcon"
              className="p-2 w-7 h-7 md:w-8 md:h-9"
            />
            Our Approach
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Approach Our unique approach to successful event management
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
          {approachData.map((item, index) => (
            <div key={index} className="relative approach-card group">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.img}
                  alt="our-approach"
                  className="w-full transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                />
              </div>

              <div className="absolute bottom-5 left-3 z-10">
                <div className="bg-(--prim) p-3 w-12 h-12 flex justify-center items-center cursor-pointer rounded-lg mb-5 transition-all duration-300 hover:bg-white [&:hover>img]:brightness-0">
                  <Image
                    src={item.icon}
                    alt="featureIcon"
                    className="transition-all duration-300"
                  />
                </div>

                <h4 className="text-white font-semibold text-xl sm:text-2xl mb-2">
                  {item.title}
                </h4>

                <p className="text-(--gray-light)">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Benefits />

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] bg-(--prim-dark) relative!">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={approachBg} alt="approachBg" className="w-full h-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 z-2">
            <Image
              src={AchievementImg}
              alt="achievementImg"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 z-2">
            <span className="flex items-center bg-(--prim) w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3">
              <Image
                src={MarqueeIcon}
                alt="marqueeIcon"
                className="p-2 w-7 h-7 md:w-8 md:h-9"
              />
              Our achievements
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Our milestones achievement over the tears
            </h2>

            <p className="text-white mb-4 text-lg">
              Our journey is marked by years of growth, innovation and
              successful event experiencess that have brought people together
              from around the world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-5 gap-3">
              {achievementData.map((item, index) => (
                <div
                  key={index}
                  className="flex text-start sm:items-center flex-col sm:flex-row gap-5 py-4"
                >
                  <div className="bg-(--prim) w-14 h-14 rounded-xl flex justify-center items-center p-3 group hover:bg-white cursor-pointer transition-all duration-300">
                    <Image
                      src={item.icon}
                      alt="achievementIcon"
                      className="transition-all duration-300 brightness-100 group-hover:brightness-0"
                    />
                  </div>

                  <div>
                    <h4 className="text-2xl text-white font-bold">
                      <CountUp end={item.number} duration={2} /> {item.suffix}
                    </h4>
                    <span className="text-white">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/UI/Schedules">
              <button className="btn border border-gray-50/20 relative m-0 px-4 py-2.5 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
                <span>Explore Schedule</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Speakers />
      <Banner />
      <Testimonials />
      <Faqs />
    </>
  );
}

export default About;
