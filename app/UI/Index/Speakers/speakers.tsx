"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import MarqueeIcon from "@/public/icon-marquee.svg";
import speakerIcon from "@/public/speaker-icon.svg";
import authore1 from "@/public/author-1.jpg";

import speakersData from "@/app/Json/Speakers.json";

function Speakers() {
  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] relative space-y-10 lg:space-y-20 overflow-hidden">
        <div className="relative z-10 text-center mx-auto max-w-full lg:max-w-180">
          <span className="flex items-center bg-(--prim) w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3 py-1 px-2">
            <Image
              src={MarqueeIcon}
              alt="marqueeIcon"
              className="p-2 w-7 h-7 md:w-8 md:h-8"
            />
            Our Speakers
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Introducing the expert speakers joining our event
          </h2>
        </div>

        <div className="speakers-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {speakersData.slice(0, 3).map((item) => (
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

        <div className="flex items-center gap-3 text-center w-full justify-center flex-wrap">
          <div className="flex items-center">
            <Image
              src={authore1}
              alt="authore1"
              className="w-8 h-8 rounded-full -me-4 border border-gray-400"
            />
            <Icon
              icon="famicons:call-outline"
              width="10"
              height="10"
              className="w-8 h-8 p-1 rounded-full bg-(--prim) text-white"
            />
          </div>
          <p className="text-gray-400">
            Join our speaker and help weave innovation, quality, and success
            together worldwide.
          </p>
        </div>
      </div>
    </>
  );
}

export default Speakers;
