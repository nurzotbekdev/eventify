"use client";

import Link from "next/link";
import Image from "next/image";

import sectionBanner from "@/public/section-banner.jpg";
import gallery01 from "@/public/gallery-01.jpg";
import gallery02 from "@/public/gallery-02.jpg";
import gallery03 from "@/public/gallery-03.jpg";
import gallery04 from "@/public/gallery-04.jpg";
import gallery05 from "@/public/gallery-05.jpg";
import gallery06 from "@/public/gallery-06.jpg";
import gallery07 from "@/public/gallery-07.jpg";
import gallery08 from "@/public/gallery-08.jpg";
import gallery09 from "@/public/gallery-09.jpg";

const galleryData = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
];

function Gallery() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Our Gallery
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">Gallery</li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl cursor-pointer relative glass-effect group"
            >
              <Image
                src={item}
                alt="galleryImg"
                className="w-full h-full object-cover transition-all duration-300 hover:scale-110 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
