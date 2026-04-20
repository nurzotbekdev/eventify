"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

import MarqueeIcon from "@/public/icon-marquee.svg";
import featuresImg from "@/public/bg-image.png";
import featureArrow from "@/public/feature-arrow.svg";

import featuresData from "@/app/Json/Features.json";

function Features() {
  return (
    <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] bg-(--prim-dark) relative space-y-10 lg:space-y-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={featuresImg}
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
          Core Feature
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Core features that power our exceptional services
        </h2>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
        {featuresData.slice(0, 4).map((feature) => (
          <div
            key={feature.id}
            className="bg-white/10 backdrop-blur-lg p-8 pb-20 rounded-xl relative transition duration-300"
          >
            <div className="bg-(--prim) p-3 w-12 h-12 flex justify-center items-center rounded-xl mb-15">
              <Image
                src={feature.icon}
                alt="featureIcon"
                width={30}
                height={30}
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              {feature.title}
            </h3>

            <p className="font-medium text-gray-100">{feature.description}</p>

            <div className="absolute bottom-5 left-8 right-8 flex items-center text-white font-semibold gap-2 cursor-pointer border-t border-gray-200/50 pt-3">
              Read More <Image src={featureArrow} alt="featureArrow" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-white text-center gap-4">
        <p className="font-medium pb-2">
          Join our team and help weave innovation, quality, and success together
          worldwide.
        </p>
        <div className="flex items-center justify-center gap-3 font-semibold text-base sm:text-lg">
          <span>4.9/5</span>
          <div className="flex items-center justify-center text-yellow-400">
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
            <Icon icon="material-symbols:star-rounded" width="24" height="24" />
          </div>
          <span>Our 4200 Review</span>
        </div>
      </div>
    </div>
  );
}

export default Features;
