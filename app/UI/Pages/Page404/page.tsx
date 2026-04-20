"use client";

import Link from "next/link";
import Image from "next/image";

import sectionBanner from "@/public/section-banner.jpg";
import page404 from "@/public/404-error-img.png";

function Page404() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Page not found
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /
            <li className="cursor-pointer text-sm lg:text-base">
              404 Error Page
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%]">
        <div className="flex flex-col items-center justify-center">
          <Image src={page404} alt="page404" className="mb-5" />
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            Oops! page not found
          </h2>
          <p className="text-gray-400 font-medium text-lg mb-3">
            The page you are looking for does not exist.
          </p>

          <Link href="/">
            <button className="btn border border-gray-50/20 relative m-0 px-4 py-3 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
              <span>Back To Homepage</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page404;
