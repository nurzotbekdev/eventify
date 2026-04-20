"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

import MarqueeIcon from "@/public/icon-marquee.svg";
import pricingIcon1 from "@/public/pricing-icon01.svg";
import pricingIcon2 from "@/public/pricing-icon02.svg";
import pricingIcon3 from "@/public/pricing-icon03.svg";
import pricingIcon4 from "@/public/pricing-icon04.svg";
import pricingIcon5 from "@/public/pricing-icon05.svg";
import pricingIcon6 from "@/public/pricing-icon06.svg";

const pricingPlans = [
  {
    id: 1,
    icon: pricingIcon1,
    title: "Basic Package",
    subtitle: "Perfect for first-time attend",
    price: "49$",
    features: [
      "Entry to all standard sessions",
      "Access to digital event materials",
      "Basic networking opportunities",
      "Email support",
    ],
  },
  {
    id: 2,
    icon: pricingIcon2,
    title: "Standard Pass",
    subtitle: "Best for professionals",
    price: "59$",
    features: [
      "Entry to all sessions",
      "Reserved seating in key sessions",
      "Access to recordings after event",
      "Priority email & chat support",
    ],
  },
  {
    id: 3,
    icon: pricingIcon3,
    title: "Premium Pass",
    subtitle: "Ultimate experience",
    price: "69$",
    features: [
      "VIP seating in all sessions",
      "Meet & greet with speakers",
      "Exclusive networking lounge",
      "Premium gift package",
    ],
  },
];

function Pricing() {
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
            Pricing Plan
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Discover our flexible pricing plans for attendees
          </h2>
        </div>

        <div className="pricing-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="pricing-item bg-(--gray-light) rounded-md"
            >
              <div className="p-6 sm:p-8 pb-5">
                <div className="flex items-center gap-2">
                  <div className="priding-top bg-(--prim) hover:bg-black transition-colors duration-300 cursor-pointer w-fit p-2 rounded-sm">
                    <Image src={plan.icon} alt="pricingIcon" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{plan.title}</h4>
                    <span className="text-gray-500">{plan.subtitle}</span>
                  </div>
                </div>

                <p className="text-gray-500 pt-10">
                  <span className="text-4xl font-bold Unbounded text-black">
                    {plan.price}
                  </span>
                  One-Time
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 m-4 rounded-md">
                <div className="pb-10 border-b border-gray-100">
                  <h4 className="text-xl font-semibold">What's Included:</h4>
                  <p className="text-gray-500">
                    It could relate to a subscription
                  </p>
                </div>

                <ul className="space-y-4 my-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon
                        icon="material-symbols:check-rounded"
                        width="18"
                        height="18"
                        className="bg-(--prim) text-white rounded-full"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/UI/Pages/PricingPlan">
                  <button className="btn border border-gray-50/20 relative m-0 px-4 py-2.5 w-full rounded-full flex justify-center items-center cursor-pointer capitalize bg-(--prim) text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
                    <span>Get Standard Pass</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <ul className="flex justify-center items-center flex-wrap gap-8">
          <li className="flex items-center gap-1">
            <Image src={pricingIcon4} alt="pricingIcon" />
            <span>Get 30 day free trial</span>
          </li>
          <li className="flex items-center gap-1">
            <Image src={pricingIcon5} alt="pricingIcon" />
            <span>No any hidden fee pay</span>
          </li>
          <li className="flex items-center gap-1">
            <Image src={pricingIcon6} alt="pricingIcon" />
            <span>You can cancel anytime</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pricing;
