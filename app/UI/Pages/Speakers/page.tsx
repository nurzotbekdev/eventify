"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import speakersData from "@/app/Json/Speakers.json";

import speakerIcon from "@/public/speaker-icon.svg";
import sectionBanner from "@/public/section-banner.jpg";

function Speakers() {
  return (
    <>
      <div
        className="h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Our Speakers
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">Speakers</li>
          </ul>
        </div>
      </div>

      <div className="speakers-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%]">
        {speakersData.map((item) => (
          <div
            key={item.id}
            className="speakers-item bg-(--gray-light) rounded-md relative p-3"
          >
            <div className="speakers-imae p-3 relative overflow-hidden group h-90 lg:h-125 glass-effect">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="w-full h-full rounded-md object-cover"
              />

              <ul className="space-y-3 absolute right-6 bottom-5 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {item.socials.map((item, index) => (
                  <li
                    key={index}
                    className="text-(--prim) bg-white hover:bg-(--prim) hover:text-white w-fit p-2 rounded-full transition-colors duration-300"
                  >
                    <Link href={item.link}>
                      <Icon icon={item.icon} width="24" height="24" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/UI/Pages/Speakers/${item.id}`}
              className="speakes-content flex justify-between items-center px-10 py-4"
            >
              <div>
                <h4 className="text-xl font-semibold pb-1 hover:text-(--prim)">
                  {item.name}
                </h4>
                <p className="text-gray-500">{item.role}</p>
              </div>

              <div className="w-10 h-10 bg-(--prim) p-2.5 rounded-full hover:bg-black transition-colors">
                <Image src={speakerIcon} alt="speakerIcon" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Speakers;
