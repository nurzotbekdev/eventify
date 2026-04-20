"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

import MarqueeIcon from "@/public/icon-marquee.svg";
import faqsImg from "@/public/faq-image.jpg";
import { useState } from "react";

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] flex items-center justify-between flex-col lg:flex-row gap-10">
        <div className="faq-image lg:w-1/2 w-full relative h-100 lg:h-200 rounded-3xl glass-effect">
          <Image
            src={faqsImg}
            alt="faqImg"
            className="w-full rounded-xl object-cover h-full"
          />

          <div className="faq-info z-1 bg-(--prim) text-white hidden lg:absolute -right-4 -bottom-2.5 h-65 w-75 border-15 rounded-3xl p-5 lg:flex flex-col justify-between items-start">
            <h4 className="text-xl">Your Questions, Clearly Answer</h4>
            <div>
              <Icon
                icon="famicons:call-outline"
                width="24"
                height="24"
                className="bg-white text-(--prim) w-10 h-10 rounded-full p-2 mb-1"
              />
              <span className="text-lg hover:text-black transition-colors duration-300">
                +998 90 451 74 14
              </span>
            </div>
          </div>
        </div>

        <div className="faq-content lg:w-1/2 w-full">
          <span className="flex items-center bg-(--prim) w-fit rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3">
            <Image
              src={MarqueeIcon}
              alt="marqueeIcon"
              className="p-2 w-7 h-7 md:w-8 md:h-8"
            />
            FAQ's
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            What out customers say faqs their experience
          </h2>
          <ul className="space-y-5">
            {[
              "How does the complete event register process actually work?",
              "Where is the main event venue located precisely?",
              "Can attendees freely switch between sessions and tracks?",
              "Does the event provide virtual participation options online?",
              "What is the event refund and cancellation policy?",
            ].map((question, index) => (
              <li
                key={index}
                className="flex flex-col bg-(--gray-light) px-5 py-4 rounded-xl"
              >
                <button
                  onClick={() => toggle(index)}
                  className={`flex justify-between items-center cursor-pointer transition-all duration-300 border-b ${
                    openIndex === index
                      ? "border-gray-50/20"
                      : "border-transparent"
                  }`}
                >
                  <div className="flex items-start text-start gap-2 text-lg font-semibold">
                    <span className="text-sm sm:text-lg lg:text-xl">
                      {index + 1}
                    </span>
                    <p className="text-sm sm:text-lg lg:text-xl">{question}</p>
                  </div>

                  <Icon
                    icon={
                      openIndex === index
                        ? "ic:baseline-minus"
                        : "ic:sharp-plus"
                    }
                    width="24"
                    height="24"
                    className="text-(--prim) w-5 h-5 border border-(--prim) rounded-full transition-transform duration-300"
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-gray-500">
                    Our event is designed with flexible scheduling, allowing you
                    to move between halls, select sessions that interest you
                    most, and customize your learning experience throughout the
                    day.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Faqs;
