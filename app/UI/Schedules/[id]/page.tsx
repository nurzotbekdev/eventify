"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";

import sectionBanner from "@/public/section-banner.jpg";
import sidebarImg from "@/public/sidebar-image.jpg";
import speakerIcon from "@/public/speaker-icon.svg";
import schedulesIcon01 from "@/public/scheduledetails-icon01.svg";
import schedulesIcon02 from "@/public/scheduledetails-icon02.svg";
import schedulesIcon03 from "@/public/scheduledetails-icon03.svg";
import schedulesIcon04 from "@/public/scheduledetails-icon04.svg";
import schedulesIcon05 from "@/public/scheduledetails-icon05.svg";
import schedulesIcon06 from "@/public/scheduledetails-icon06.svg";
import schedulesIcon07 from "@/public/scheduledetails-icon07.svg";
import schedulesIcon08 from "@/public/scheduledetails-icon08.svg";
import schedulesExperctBox1 from "@/public/schedule-expect-box-1.jpg";
import schedulesExperctBox2 from "@/public/schedule-expect-box-2.jpg";
import speakerImg1 from "@/public/speaker-1.jpg";

import schedulesData from "@/app/Json/Schedules.json";

function SchedulesDetail() {
  const { id } = useParams();
  const [openIndex, setOpenIndex] = useState<null | number>(2);

  const schedule = schedulesData.find((item) => item.id === Number(id));
  if (!schedule) {
    return (
      <>
        <p className="text-center my-40 text-4xl font-bold">
          Schedule not found
        </p>
      </>
    );
  }

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
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
            {schedule.title}
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /
            <li>
              <Link
                href="/UI/Schedules"
                className="cursor-pointer text-sm lg:text-base"
              >
                Schedules
              </Link>
            </li>
            /
            <li className="cursor-pointer text-sm lg:text-base">
              {schedule.title}
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] flex justify-between items-start flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-[30%] space-y-10 relative xl:sticky xl:top-0 xl:left-0 h-full">
          <div className="event-info w-full bg-(--gray-light) rounded-lg overflow-hidden">
            <h4 className="text-2xl text-center bg-(--prim) text-white font-medium py-3">
              Event Information
            </h4>
            <ul className="w-full p-5">
              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 pb-4">
                <span className="flex items-center gap-3 text-lg">
                  <Image src={schedulesIcon01} alt="schedulesIcon" />
                  <strong>Date:</strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.date}
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-4">
                <span className="flex items-center gap-3 text-lg">
                  <Image src={schedulesIcon02} alt="schedulesIcon" />
                  <strong>Time:</strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.time}
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-4">
                <span className="flex items-center gap-3 text-lg">
                  <Image src={schedulesIcon03} alt="schedulesIcon" />
                  <strong>Category:</strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  Skill Development
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-4">
                <span className="flex items-center gap-3 text-lg">
                  <Image src={schedulesIcon04} alt="schedulesIcon" />
                  <strong>Organizer:</strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  Sophia Rodrigues
                </span>
              </li>

              <li className="w-full flex items-center justify-between flex-wrap border-b border-gray-500/20 py-4">
                <span className="flex items-center gap-3 text-lg">
                  <Image src={schedulesIcon05} alt="schedulesIcon" />
                  <strong>Location:</strong>
                </span>

                <span className="text-lg font-medium text-gray-500">
                  {schedule.place}
                </span>
              </li>
            </ul>
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
          <div className="h-130 rounded-lg overflow-hidden glass-effect relative">
            <Image
              src={schedule.image}
              alt="scheduleImg"
              width={1100}
              height={520}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-[#737681] pt-5 text-lg">
            Join us for an inspiring and action-packed event designed to bring
            together creators, professionals, and innovators from all walks of
            life. This event features expert-led sessions, interactive
            workshops, and powerful networking opportunities that help you
            learn, grow, and connect with like-minded individuals.
          </p>

          <h3 className="mt-10 text-2xl lg:text-4xl font-bold Unbounded">
            What to expect
          </h3>

          <p className="text-[#737681] pt-5 text-lg">
            Experience a dynamic gathering filled with insightful sessions,
            expert speakers, hands-on workshops, and endless networking
            opportunities. From inspiring keynotes to real-world learning, our
            event is designed to spark ideas, build connections, and help you
            grow personally and professionally.
          </p>

          <ul className="pt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
            <li className="flex items-center flex-wrap gap-2 text-[#737681] text-base">
              <Icon
                icon="material-symbols:check-rounded"
                width="20"
                height="20"
                className="bg-(--prim) text-white rounded-full"
              />
              <span>
                Hard to stay updated with fast-changing industry trends
              </span>
            </li>

            <li className="flex items-center flex-wrap gap-2 text-[#737681] text-base">
              <Icon
                icon="material-symbols:check-rounded"
                width="20"
                height="20"
                className="bg-(--prim) text-white rounded-full"
              />
              <span>
                Limited opportunities to meet potential partners or clients
              </span>
            </li>

            <li className="flex items-center flex-wrap gap-2 text-[#737681] text-base">
              <Icon
                icon="material-symbols:check-rounded"
                width="20"
                height="20"
                className="bg-(--prim) text-white rounded-full"
              />
              <span>Events that don't deliver value for the time invested</span>
            </li>

            <li className="flex items-center flex-wrap gap-2 text-[#737681] text-base">
              <Icon
                icon="material-symbols:check-rounded"
                width="20"
                height="20"
                className="bg-(--prim) text-white rounded-full"
              />
              <span>Speakers who talk theory without real-world examples</span>
            </li>
          </ul>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8 w-full">
            <div className="w-full rounded-lg overflow-hidden glass-effect relative">
              <Image
                src={schedulesExperctBox1}
                alt="schedulesExperctBox1"
                className="w-full h-full"
              />
            </div>

            <div className="w-full rounded-lg overflow-hidden glass-effect relative">
              <Image
                src={schedulesExperctBox2}
                alt="schedulesExperctBox2"
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="w-full flex justify-between items-start flex-col lg:flex-row gap-6 pt-8">
            <div className="speakers-item bg-(--gray-light) rounded-md relative p-3 w-full xl:w-[50%]">
              <div className="speakers-imae p-3 relative overflow-hidden group h-90 lg:h-125 glass-effect">
                <Image
                  src={speakerImg1}
                  alt="speakersImg"
                  fill
                  className="w-full h-full rounded-md object-cover"
                />

                <ul className="space-y-3 absolute right-6 bottom-5 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <li className="text-(--prim) bg-white hover:bg-(--prim) hover:text-(--prim) w-fit p-2 rounded-full cursor-pointer transition-colors duration-300">
                    <Link href="https://www.facebook.com/">
                      <Icon icon="mage:facebook" width="24" height="24" />
                    </Link>
                  </li>
                  <li className="text-(--prim) bg-white hover:bg-(--prim) hover:text-(--prim) w-fit p-2 rounded-full cursor-pointer transition-colors duration-300">
                    <Link href="https://x.com/">
                      <Icon icon="mage:x" width="24" height="24" />
                    </Link>
                  </li>
                  <li className="text-(--prim) bg-white hover:bg-(--prim) hover:text-(--prim) w-fit p-2 rounded-full cursor-pointer transition-colors duration-300">
                    <Link href="https://www.instagram.com/">
                      <Icon icon="mdi:instagram" width="24" height="24" />
                    </Link>
                  </li>
                  <li className="text-(--prim) bg-white hover:bg-(--prim) hover:text-(--prim) w-fit p-2 rounded-full cursor-pointer transition-colors duration-300">
                    <Link href="https://www.youtube.com/">
                      <Icon icon="mage:youtube" width="24" height="24" />
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                href="#"
                className="speakes-content flex justify-between items-center px-8 py-4 gap-4"
              >
                <div>
                  <h4 className="text-xl font-semibold pb-1 hover:text-(--prim)">
                    Sophia Rodrigues
                  </h4>
                  <p className="text-gray-500">Global Marketing Director</p>
                </div>

                <div className="w-10 h-10 bg-(--prim) p-2.5 rounded-full hover:bg-black transition-colors flex items-center justify-center">
                  <Image src={speakerIcon} alt="speakerIcon" />
                </div>
              </Link>
            </div>

            <div className="w-full xl:w-[50%]">
              <h3 className="text-2xl lg:text-4xl font-bold Unbounded">
                What to expect
              </h3>
              <p className="text-[#737681] pt-4 text-lg">
                “Discover the brilliant minds shaping our event. Our speakers
                are industry leaders, innovators, and visionaries.”
              </p>

              <ul className="space-y-6 mt-6">
                <li className="group bg-(--gray-light) p-5 rounded-lg">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Image
                      src={schedulesIcon06}
                      alt="schedulesIcon06"
                      className="w-10 h-10 bg-(--prim) p-2 rounded-lg group-hover:bg-black transition-colors duration-300"
                    />
                    <h3 className="text-xl md:text-2xl font-bold">
                      Expertise Across Industries
                    </h3>
                    <p className="text-[#737681] pt-4 text-lg">
                      Learn from professionals who have shaped trends, led
                      companies, and created impact across various sectors.
                    </p>
                  </div>
                </li>

                <li className="group bg-(--gray-light) p-5 rounded-lg">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Image
                      src={schedulesIcon07}
                      alt="schedulesIcon07"
                      className="w-10 h-10 bg-(--prim) p-2 rounded-lg group-hover:bg-black transition-colors duration-300"
                    />
                    <h3 className="text-xl md:text-2xl font-bold">
                      Real-World Insights
                    </h3>
                    <p className="text-[#737681] pt-4 text-lg">
                      Each speaker shares practical strategies, case studies,
                      and personal experiences that help you grow.
                    </p>
                  </div>
                </li>

                <li className="group bg-(--gray-light) p-5 rounded-lg">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Image
                      src={schedulesIcon08}
                      alt="schedulesIcon08"
                      className="w-10 h-10 bg-(--prim) p-2 rounded-lg group-hover:bg-black transition-colors duration-300"
                    />
                    <h3 className="text-xl md:text-2xl font-bold">
                      Interactive Sessions
                    </h3>
                    <p className="text-[#737681] pt-4 text-lg">
                      Engage in meaningful discussions, Q&A sessions, and
                      hands-on learning moments directly with the speakers.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="mt-10 text-2xl lg:text-5xl font-bold mb-8 Unbounded">
            frequently asked questions
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
        </div>
      </div>
    </>
  );
}

export default SchedulesDetail;
