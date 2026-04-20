"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import sectionBanner from "@/public/section-banner.jpg";
import schedulesIcon1 from "@/public/schedule-icon01.svg";
import schedulesIcon2 from "@/public/schedule-icon02.svg";

import schedulesData from "@/app/Json/Schedules.json";

type DayKey = "day1" | "day2" | "day3";

function Schedules() {
  const days: DayKey[] = ["day1", "day2", "day3"];

  const [activeDay, setActiveDay] = useState<DayKey>("day1");

  const filteredSchedules = schedulesData.filter(
    (item) => item.day === activeDay,
  );

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Schedules
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">Schedules</li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%]">
        <ul className="flex items-center mx-auto flex-col w-full sm:flex-row sm:w-fit bg-(--gray-light)/80 backdrop-blur-2xl gap-5 rounded-md sm:rounded-full overflow-hidden p-2 mb-10">
          {days.map((day, index) => (
            <li key={day}>
              <button
                onClick={() => setActiveDay(day)}
                className={`text-xl cursor-pointer font-semibold Unbounded p-3 rounded-full transition ${activeDay === day ? "bg-white text-black" : "text-black"}`}
              >
                Day 0{index + 1}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredSchedules.map((item, index) => (
            <div key={index} className="bg-(--gray-light) p-3 rounded-lg group">
              <div className="rounded-lg overflow-hidden relative glass-effect">
                <Image
                  src={item.image}
                  alt="schedule"
                  width={900}
                  height={900}
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <div className="p-5">
                <ul className="flex justify-between items-center">
                  <li className="flex items-center gap-2 text-base font-medium">
                    <Image src={schedulesIcon1} alt="schedulesIcon" />
                    <span>{item.time}</span>
                  </li>

                  <li className="flex items-center gap-2 text-base font-medium">
                    <Image src={schedulesIcon2} alt="schedulesIcon" />
                    <span>{item.place}</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold pb-2 pt-3">{item.title}</h3>

                <p className="text-gray-500 border-b border-gray-400/20 pb-8 mb-5">
                  Unlock your potential and elevate your career with our
                  Professional Skills Development designed
                </p>

                <Link href={`/UI/Schedules/${item.id}`}>
                  <button className="btn border w-full border-gray-50/20 relative m-0 px-4 py-2.5 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
                    <span>View Details</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Schedules;
