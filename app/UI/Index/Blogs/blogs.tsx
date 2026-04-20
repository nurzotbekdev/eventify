"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import MarqueeIcon from "@/public/icon-marquee.svg";
import arrow from "@/public/arrow-icon.svg";
import blog2 from "@/public/blog-02.jpg";
import blog3 from "@/public/blog-03.jpg";

import BlogData from "@/app/Json/Blogs.json";

function Blogs() {
  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] relative space-y-10 lg:space-y-20">
        <div className="relative z-10 text-center mx-auto max-w-full lg:max-w-180">
          <span className="flex items-center bg-(--prim) w-fit mx-auto rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3 py-1 px-2">
            <Image
              src={MarqueeIcon}
              alt="marqueeIcon"
              className="p-2 w-7 h-7 md:w-8 md:h-8"
            />
            Latest Blog
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Explore our latest insights stories and updates
          </h2>
        </div>

        <div className="blog-main grid grid-cols-1 xl:grid-cols-2 gap-10">
          {BlogData.slice(0, 1).map((item) => (
            <Link
              key={item.id}
              href={`/UI/Blog/${item.id}`}
              className="blog-item bg-(--gray-light) p-3 rounded-md space-y-5 group cursor-pointer shadow-md block"
            >
              <div className="blog-image rounded-md overflow-hidden">
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

                <h4 className="text-xl md:text-2xl font-semibold pb-3">
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

          <div className="flex flex-col items-start gap-10">
            <div className="blog-item h-full bg-(--gray-light) rounded-md group cursor-pointer flex justify-between items-center flex-col md:flex-row gap-5 p-4 shadow-md">
              <div className="blog-image rounded-md h-full overflow-hidden w-full md:w-[40%]">
                <Image
                  src={blog2}
                  alt="blog"
                  className="w-full h-full group-hover:scale-110 transition-all duration-500 object-cover"
                />
              </div>
              <div className="blog-content w-full md:w-[60%]">
                <span className="flex items-center gap-2 text-gray-500 pb-3">
                  <Icon
                    icon="ri:user-line"
                    width="24"
                    height="24"
                    className="bg-(--prim) w-6 h-6 rounded-full p-1 text-white"
                  />
                  awaiken
                </span>

                <h4 className="text-xl md:text-2xl font-semibold pb-3">
                  Simple Self-Defense Skills Everyone Should Learn for Safety
                </h4>

                <p className="text-gray-500 text-lg pb-8 border-b border-gray-500/10">
                  Staying safe in everyday life doesn't require advanced...
                </p>

                <Link
                  href="/UI/Blog"
                  className="flex items-center py-5 text-black font-semibold"
                >
                  Read More
                  <Image
                    src={arrow}
                    alt="arrow-icon"
                    className="ms-2 brightness-0"
                  />
                </Link>
              </div>
            </div>

            <div className="blog-item h-full bg-(--gray-light) rounded-md group cursor-pointer flex justify-between items-center flex-col md:flex-row gap-5 p-4 shadow-md">
              <div className="blog-image rounded-md h-full overflow-hidden w-full md:w-[40%]">
                <Image
                  src={blog3}
                  alt="blog"
                  className="w-full h-full group-hover:scale-110 transition-all duration-500 object-cover"
                />
              </div>
              <div className="blog-content w-full md:w-[60%]">
                <span className="flex items-center gap-2 text-gray-500 pb-3">
                  <Icon
                    icon="ri:user-line"
                    width="24"
                    height="24"
                    className="bg-(--prim) w-6 h-6 rounded-full p-1 text-white"
                  />
                  awaiken
                </span>

                <h4 className="text-xl md:text-2xl font-semibold pb-3">
                  The Power of Networking: Building Connections That Last
                </h4>

                <p className="text-gray-500 text-lg pb-8 border-b border-gray-500/10">
                  Staying safe in everyday life doesn't require advanced...
                </p>

                <Link
                  href="/UI/Blog"
                  className="flex items-center py-5 text-black font-semibold"
                >
                  Read More
                  <Image
                    src={arrow}
                    alt="arrow-icon"
                    className="ms-2 brightness-0"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
