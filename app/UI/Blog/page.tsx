"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import sectionBanner from "@/public/section-banner.jpg";
import arrow from "@/public/arrow-icon.svg";

import blogData from "@/app/Json/Blogs.json";

function Blog() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Our Blog
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">Blog</li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((item) => (
            <Link
              key={item.id}
              href={`/UI/Blog/${item.id}`}
              className="blog-item bg-(--gray-light) p-3 rounded-md space-y-5 group cursor-pointer shadow-md block"
            >
              <div className="blog-image rounded-md overflow-hidden h-65">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="group-hover:scale-110 w-full transition-all duration-500"
                />
              </div>

              <div className="blog-content md:px-6">
                <span className="flex items-center gap-2 text-gray-500 pb-3">
                  <Icon
                    icon="ri:user-line"
                    width="24"
                    height="24"
                    className="bg-(--prim) w-6 h-6 rounded-full p-1 text-white"
                  />
                  {item.author}
                </span>

                <h4 className="text-xl md:text-2xl font-semibold pb-3 hover:text-(--prim) transition-all duration-300">
                  {item.title}
                </h4>

                <p className="text-gray-500 text-lg pb-8 border-b border-gray-500/10">
                  {item.desc}
                </p>

                <div className="flex items-center py-5 text-black font-semibold">
                  Read More
                  <Image
                    src={arrow}
                    alt="arrow-icon"
                    className="ms-2 brightness-0"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
