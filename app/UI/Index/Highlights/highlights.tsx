"use client";

import { useEffect, useState } from "react";

import highlights1 from "@/public/highlights-image01.jpg";
import highlights2 from "@/public/highlights-image02.jpg";
import highlights3 from "@/public/highlights-image03.jpg";
import highlights4 from "@/public/highlights-image04.jpg";

const items = [
  {
    id: 1,
    title: "Interactive Panel Discussions",
    desc: "Build meaningful relationships with industry leaders, innovators.",
    img: highlights1,
  },
  {
    id: 2,
    title: "Connect With Top Professionals",
    desc: "Build meaningful relationships with industry leaders, innovators.",
    img: highlights2,
  },
  {
    id: 3,
    title: "Exclusive Access Event Material",
    desc: "Build meaningful relationships with industry leaders, innovators.",
    img: highlights3,
  },
  {
    id: 4,
    title: "Real-Time Event Announcement",
    desc: "Build meaningful relationships with industry leaders, innovators.",
    img: highlights4,
  },
];

function Highlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    items.forEach((item) => {
      const img = new window.Image();
      img.src = item.img.src;
    });
  }, []);

  return (
    <>
      <div className="relative h-200 overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out transform highlights-effect ${activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            style={{ backgroundImage: `url(${item.img.src})` }}
          />
        ))}

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 h-full">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`highlights-item h-full w-full flex flex-col justify-end p-5 transition-all duration-300 ${activeIndex === index ? "active" : ""}`}
            >
              <h4 className="text-xl sm:text-2xl font-semibold text-white">
                {item.title}
              </h4>
              <span className="text-gray-200 text-base">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Highlights;
