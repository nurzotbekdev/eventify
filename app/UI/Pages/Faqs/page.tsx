"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";

import sectionBanner from "@/public/section-banner.jpg";
import sidebarImg from "@/public/sidebar-image.jpg";
import faqsIcon from "@/public/faqs-icon.svg";

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const generalRef = useRef<HTMLHeadingElement | null>(null);
  const ticketRef = useRef<HTMLHeadingElement | null>(null);
  const eventRef = useRef<HTMLHeadingElement | null>(null);
  const sessionRef = useRef<HTMLHeadingElement | null>(null);
  const foodRef = useRef<HTMLHeadingElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLHeadingElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Frequently asked questions
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">FAQs</li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] flex justify-between items-start flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-[30%] space-y-10 relative xl:sticky xl:top-0 xl:left-0 h-full">
          <div className="info w-full bg-(--gray-light) rounded-lg overflow-hidden shadow-xl">
            <button
              onClick={() => scrollToSection(generalRef)}
              className="flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group"
            >
              <span className="text-gray-500 font-normal group-hover:text-black transition-colors duration-300">
                General questions
              </span>
              <Image src={faqsIcon} alt="faqsIcon" />
            </button>

            <button
              onClick={() => scrollToSection(ticketRef)}
              className="flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group"
            >
              <span className="text-gray-500 font-normal group-hover:text-black transition-colors duration-300">
                Ticket & Payment
              </span>
              <Image src={faqsIcon} alt="faqsIcon" />
            </button>

            <button
              onClick={() => scrollToSection(eventRef)}
              className="flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group"
            >
              <span className="text-gray-500 font-normal group-hover:text-black transition-colors duration-300">
                Event Details
              </span>
              <Image src={faqsIcon} alt="faqsIcon" />
            </button>

            <button
              onClick={() => scrollToSection(sessionRef)}
              className="flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group"
            >
              <span className="text-gray-500 font-normal group-hover:text-black transition-colors duration-300">
                Sessions & Activities
              </span>
              <Image src={faqsIcon} alt="faqsIcon" />
            </button>

            <button
              onClick={() => scrollToSection(foodRef)}
              className="flex items-center w-full justify-between border-b border-gray-300 py-5 px-5 group"
            >
              <span className="text-gray-500 font-normal group-hover:text-black transition-colors duration-300">
                Food, Facilities & Access
              </span>
              <Image src={faqsIcon} alt="faqsIcon" />
            </button>
          </div>

          <div className="bg-(--prim-dark) text-white p-10 rounded-lg overflow-hidden">
            <Link
              href="/"
              className="text-white cursor-pointer text-xl font-medium Unbounded"
            >
              Eventi <span className="text-(--prim)">fy.</span>
            </Link>
            <h3 className="pt-3 font-semibold text-2xl">
              We're here to help-reach out tody
            </h3>
            <span className="flex items-center font-semibold text-2xl mt-6">
              <Icon
                icon="famicons:call-outline"
                width="40"
                height="40"
                className="bg-(--prim) p-2 rounded-full me-3"
              />
              +998 90 784 44 44
            </span>
            <div className="w-130 mt-8 xl:mt-0 xl:translate-x-10 xl:translate-y-23 relative">
              <Image
                src={sidebarImg}
                alt="sidebarImg"
                className="border-10 border-[#ffffff1a] rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[70%]">
          <h3
            ref={eventRef}
            className="text-2xl lg:text-5xl font-bold Unbounded mb-4"
          >
            General questions
          </h3>
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

          <h3
            ref={ticketRef}
            className="text-2xl lg:text-5xl font-bold Unbounded mb-4 mt-10"
          >
            Ticket & Payment
          </h3>
          <ul className="space-y-5">
            {[
              "What are the available registration and ticket pricing tiers?",
              "Are there any early bird or group discounts for attendees?",
              "What specific payment methods are accepted for registration?",
              "Will attendees receive a formal receipt or invoice for payment?",
              "What is the process for canceling or transferring an event ticket?",
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

          <h3
            ref={eventRef}
            className="text-2xl lg:text-5xl font-bold Unbounded mb-4 mt-10"
          >
            Event Details
          </h3>
          <ul className="space-y-5">
            {[
              "How does the complete event register process actually work?",
              "Will participants receive certificates or recognition for attending events?",
              "What should I bring with me to the event?",
              "Are your events safe, and what measures do you take for security?",
              "Can I volunteer or collaborate during events?",
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

          <h3
            ref={sessionRef}
            className="text-2xl lg:text-5xl font-bold Unbounded mb-4 mt-10"
          >
            Sessions & Activities
          </h3>
          <ul className="space-y-5">
            {[
              "Who can I contact for support, queries, or special requirements?",
              "Do you provide accommodations for out-of-town attendees?",
              "How early should I arrive before the event starts?",
              "Are your events safe, and what measures do you take for security?",
              "Can I volunteer or collaborate during events?",
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

          <h3
            ref={foodRef}
            className="text-2xl lg:text-5xl font-bold Unbounded mb-4 mt-10"
          >
            Food, Facilities & Access
          </h3>
          <ul className="space-y-5">
            {[
              "Do you offer online or hybrid versions of your events?",
              "What happens if an event gets postponed or rescheduled?",
              "Can attendees freely switch between sessions and tracks?",
              "Are there any age restrictions for participation?",
              "Can I volunteer or collaborate during events?",
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
