"use client";

import Link from "next/link";

import sectionBanner from "@/public/section-banner.jpg";

import Pricing from "../../Index/Pricing/pricing";
import Events from "../../Index/Events/events";
import Benefits from "../../Index/Benefits/benefits";
import Banner from "../../Index/Banner/banner";
import Faqs from "../../Index/Faqs/faqs";

function PricingPlan() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Pricing Plan
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /
            <li className="cursor-pointer text-sm lg:text-base">
              Pricing Plan
            </li>
          </ul>
        </div>
      </div>

      <Pricing />
      <Events />
      <Benefits />
      <Banner />
      <Faqs />
    </>
  );
}

export default PricingPlan;
