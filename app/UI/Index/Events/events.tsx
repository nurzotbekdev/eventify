"use client";

import { useState } from "react";
import Image from "next/image";

import MarqueeIcon from "@/public/icon-marquee.svg";
import eventsbg from "@/public/bg-image.png";
import eventImg1 from "@/public/event-schedule-item-1.jpg";
import eventImg2 from "@/public/event-schedule-item-2.jpg";
import eventImg3 from "@/public/event-schedule-item-3.jpg";
import eventImg4 from "@/public/event-schedule-item-4.jpg";
import eventIcon from "@/public/eventicon.svg";

type EventItem = {
  img: any;
  time: string;
  date: string;
  title: string;
  desc: string;
  location?: string;
};

type DayKey = "day1" | "day2" | "day3";

const events: Record<DayKey, EventItem[]> = {
  day1: [
    {
      img: eventImg1,
      time: "9:00 AM - 5:30 PM",
      date: "22 March 2026",
      title: "Professional Skills Development Workshop",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
    },
    {
      img: eventImg2,
      time: "10:00 AM - 4:00 PM",
      date: "05 May 2026",
      title: "Leadership & Growth Conference",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12 Sector 4, Ipsum City",
    },
    {
      img: eventImg3,
      time: "8:30 AM - 6:00 PM",
      date: "20 June 2026",
      title: "Digital Marketing Masterclass",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
    },
    {
      img: eventImg4,
      time: "11:00 AM - 3:00 PM",
      date: "20 June 2026",
      title: "Annual Innovation Summit 2026",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12 Sector 4, Ipsum City",
    },
  ],
  day2: [
    {
      img: eventImg2,
      time: "10:00 AM - 4:00 PM",
      date: "05 May 2026",
      title: "Leadership & Growth Conference",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12 Sector 4, Ipsum City",
    },
    {
      img: eventImg3,
      time: "8:30 AM - 6:00 PM",
      date: "20 June 2026",
      title: "Digital Marketing Masterclass",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
    },
    {
      img: eventImg1,
      time: "9:00 AM - 5:30 PM",
      date: "22 March 2026",
      title: "Professional Skills Development Workshop",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
    },
    {
      img: eventImg4,
      time: "11:00 AM - 3:00 PM",
      date: "20 June 2026",
      title: "Annual Innovation Summit 2026",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12 Sector 4, Ipsum City",
    },
  ],
  day3: [
    {
      img: eventImg4,
      time: "11:00 AM - 3:00 PM",
      date: "20 June 2026",
      title: "Annual Innovation Summit 2026",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12 Sector 4, Ipsum City",
    },
    {
      img: eventImg1,
      time: "9:00 AM - 5:30 PM",
      date: "22 March 2026",
      title: "Professional Skills Development Workshop",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
    },
    {
      img: eventImg2,
      time: "10:00 AM - 4:00 PM",
      date: "05 May 2026",
      title: "Leadership & Growth Conference",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
      location: "Street, Block 12 Sector 4, Ipsum City",
    },
    {
      img: eventImg3,
      time: "8:30 AM - 6:00 PM",
      date: "20 June 2026",
      title: "Digital Marketing Masterclass",
      desc: "Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.",
    },
  ],
};

function Events() {
  const days: DayKey[] = ["day1", "day2", "day3"];

  const [activeDay, setActiveDay] = useState<DayKey>("day1");

  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] bg-(--prim-dark) relative space-y-10 lg:space-y-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={eventsbg}
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
            Our Event Schedule
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Explore the complete schedule for our event
          </h2>
        </div>

        <div className="event-main w-full flex justify-center items-center flex-col z-10 relative">
          <ul className="flex items-center flex-col w-full sm:flex-row sm:w-fit bg-white/20 backdrop-blur-2xl gap-5 rounded-md sm:rounded-full overflow-hidden p-2 mb-10">
            {days.map((day, index) => (
              <li key={day}>
                <button
                  onClick={() => setActiveDay(day)}
                  className={`text-xl cursor-pointer font-semibold Unbounded p-3 rounded-full transition ${activeDay === day ? "bg-white text-balance" : "text-white"}`}
                >
                  Day 0{index + 1}
                </button>
              </li>
            ))}
          </ul>

          <div className="event-main-content flex flex-col items-start space-y-6">
            {events[activeDay].map((event: EventItem, i: number) => (
              <div
                key={i}
                className="event-item flex justify-between items-center flex-wrap xl:flex-nowrap gap-4 xl:gap-10 text-white border-b border-gray-50/20 pb-4"
              >
                <div className="flex items-start sm:items-center sm:flex-row flex-col gap-6 min-w-full sm:min-w-100">
                  <Image
                    src={event.img}
                    alt="event-imgs"
                    className="rounded-full w-30 h-30"
                  />
                  <div>
                    <h3 className="text-xl font-semibold pb-1">{event.time}</h3>
                    <span>{event.date}</span>
                  </div>
                </div>

                <div className="max-w-150">
                  <h3 className="text-xl font-semibold pb-1">{event.title}</h3>
                  <span>{event.desc}</span>
                </div>

                <div className="flex items-center gap-5">
                  <Image
                    src={eventIcon}
                    alt="eventIcon"
                    className="border border-gray-300/20 rounded-full p-1.5 w-8 h-8"
                  />
                  <p className="text-base">
                    Street, Block 12 Sector 4, Ipsum City
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
