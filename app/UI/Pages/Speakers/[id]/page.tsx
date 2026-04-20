"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";

import sectionBanner from "@/public/section-banner.jpg";
import sidebarImg from "@/public/sidebar-image.jpg";
import icon1 from "@/public/speakers-icon01.svg";
import icon2 from "@/public/speakers-icon02.svg";
import icon3 from "@/public/speakers-icon03.svg";
import icon4 from "@/public/speakers-icon04.svg";
import icon5 from "@/public/speakers-icon05.svg";
import icon6 from "@/public/speakers-icon06.svg";
import icon7 from "@/public/speakers-icon07.svg";
import icon8 from "@/public/speakers-icon08.svg";

import speakersData from "@/app/Json/Speakers.json";

function SpeakerDetail() {
  const { id } = useParams();

  const speakers = speakersData.find((item) => item.id === Number(id));

  if (!speakers) {
    return (
      <>
        <p className="text-center my-40 text-4xl font-bold">
          Speaker not found
        </p>
      </>
    );
  }
  const skills = [
    { name: "Event Planning", percent: 85 },
    { name: "Team Leadership", percent: 60 },
    { name: "Problem Solving", percent: 75 },
  ];

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            {speakers.name}
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
                href="/UI/Pages/Speakers"
                className="cursor-pointer text-sm lg:text-base"
              >
                Speakers
              </Link>
            </li>
            /
            <li className="cursor-pointer text-sm lg:text-base">
              {speakers.name}
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%] flex justify-between items-start flex-col xl:flex-row gap-8">
        <div className="w-full xl:w-[30%] space-y-10 relative xl:sticky xl:top-0 xl:left-0 h-full">
          <div className="event-info w-full bg-(--gray-light) rounded-lg overflow-hidden ">
            <Image
              src={speakers.image}
              alt={speakers.name}
              width={1200}
              height={500}
              className="w-full"
            />
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
          <h3 className="mt-10 text-2xl lg:text-5xl font-bold Unbounded">
            About {speakers.name}
          </h3>

          <p className="text-[#737681] py-5 text-lg">
            {speakers.name} is a dynamic event strategist and community
            engagement expert with over a decade of experience in organizing
            high-impact conferences, meetups, and professional gatherings. Known
            for his exceptional planning skills and people-centric approach,
            Jacob brings creativity, structure, and energy to every event he
            leads. His commitment to delivering seamless experiences makes him
            one of the most trusted figures in the event industry.
          </p>

          <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
            <li className="flex items-center flex-wrap gap-2 bg-(--gray-light) p-5 rounded-lg">
              <Image
                src={icon1}
                alt="icon"
                className="bg-(--prim) w-12 h-12 rounded-lg group-hover:bg-black transition-colors duration-500 p-3"
              />

              <div>
                <h3 className="text-gray-300 text-base">Email Address</h3>
                <p className="text-xl font-bold">support@domain.com</p>
              </div>
            </li>

            <li className="flex items-center flex-wrap gap-2 bg-(--gray-light) p-5 rounded-lg">
              <Image
                src={icon2}
                alt="icon"
                className="bg-(--prim) w-12 h-12 rounded-lg group-hover:bg-black transition-colors duration-500 p-3"
              />

              <div>
                <h3 className="text-gray-300 text-base">Phone Number</h3>
                <p className="text-xl font-bold">+998 941 44 44</p>
              </div>
            </li>

            <li className="flex items-center flex-wrap gap-2 bg-(--gray-light) p-5 rounded-lg">
              <Image
                src={icon3}
                alt="icon"
                className="bg-(--prim) w-12 h-12 rounded-lg group-hover:bg-black transition-colors duration-500 p-3"
              />

              <div>
                <h3 className="text-gray-300 text-base">Experience</h3>
                <p className="text-xl font-bold">More Than 10 Years</p>
              </div>
            </li>

            <li className="flex items-center flex-wrap gap-2 bg-(--gray-light) p-5 rounded-lg">
              <Image
                src={icon4}
                alt="icon"
                className="bg-(--prim) w-12 h-12 rounded-lg group-hover:bg-black transition-colors duration-500 p-3"
              />

              <div>
                <h3 className="text-gray-300 text-base">Position</h3>
                <p className="text-xl font-bold">Lead Research Scientist</p>
              </div>
            </li>
          </ul>

          <h3 className="mt-10 text-2xl lg:text-5xl font-bold Unbounded">
            What we do
          </h3>

          <p className="text-[#737681] py-5 text-lg">
            We specialize in creating impactful events that inspire learning,
            networking, and collaboration. From conferences and workshops to
            meetups and community gatherings, we plan, manage, and execute every
            detail with precision. Our team works closely with industry experts,
            speakers, and partners to deliver high-quality experiences that
            educate, empower.
          </p>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <li className="flex items-center flex-wrap group gap-3 bg-(--gray-light) p-5 rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src={icon5}
                  alt="icon"
                  className="bg-(--prim) w-10 h-10 p-2 rounded-lg group-hover:bg-black transition-colors duration-500"
                />
                <h3 className="text-xl font-bold">
                  Your Gateway to Inspiring Experiences
                </h3>
              </div>
              <p className="border-t border-gray-200 text-gray-500 flex items-start gap-3 pt-6">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="24"
                  height="24"
                  className="bg-(--prim) text-white rounded-full w-7 h-5"
                />
                Successfully managed and executed multiple high-impact events
                and projects.
              </p>
            </li>

            <li className="flex items-center flex-wrap group gap-3 bg-(--gray-light) p-5 rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src={icon6}
                  alt="icon"
                  className="bg-(--prim) w-10 h-10 p-2 rounded-lg group-hover:bg-black transition-colors duration-500"
                />
                <h3 className="text-xl font-bold">
                  Unlock Knowledge From Industry Experts
                </h3>
              </div>
              <p className="border-t border-gray-200 text-gray-500 flex items-start gap-3 pt-6">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="24"
                  height="24"
                  className="bg-(--prim) text-white rounded-full w-7 h-5"
                />
                Hands-on experience working with diverse clients and large-scale
                projects.
              </p>
            </li>

            <li className="flex items-center flex-wrap group gap-3 bg-(--gray-light) p-5 rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src={icon7}
                  alt="icon"
                  className="bg-(--prim) w-10 h-10 p-2 rounded-lg group-hover:bg-black transition-colors duration-500"
                />
                <h3 className="text-xl font-bold">
                  Crafting Meaningful Moments for Every Attendee
                </h3>
              </div>
              <p className="border-t border-gray-200 text-gray-500 flex items-start gap-3 pt-6">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="24"
                  height="24"
                  className="bg-(--prim) text-white rounded-full w-7 h-5"
                />
                Proven track record of managing conferences, meetups, and
                corporate events.
              </p>
            </li>

            <li className="flex items-center flex-wrap group gap-3 bg-(--gray-light) p-5 rounded-lg">
              <div className="flex items-center gap-3">
                <Image
                  src={icon8}
                  alt="icon"
                  className="bg-(--prim) w-10 h-10 p-2 rounded-lg group-hover:bg-black transition-colors duration-500"
                />
                <h3 className="text-xl font-bold">
                  Bringing Communities Together With Purpose
                </h3>
              </div>
              <p className="border-t border-gray-200 text-gray-500 flex items-start gap-3 pt-6">
                <Icon
                  icon="material-symbols:check-rounded"
                  width="24"
                  height="24"
                  className="bg-(--prim) text-white rounded-full w-7 h-5"
                />
                Extensive industry knowledge backed by real-world practical
                expertise.
              </p>
            </li>
          </ul>

          <h3 className="mt-10 text-2xl lg:text-5xl font-bold Unbounded">
            Work skill
          </h3>

          <p className="text-[#737681] py-5 text-lg pb-6">
            Our team brings extensive real-world experience gained through years
            of managing successful events, conferences, and professional
            projects. We have worked with diverse industries.
          </p>

          <ul className="space-y-8">
            {skills.map((skill, index) => (
              <li key={index}>
                <div className="w-full flex justify-between items-center text-2xl font-semibold mb-3">
                  <span>{skill.name}</span>
                  <span className="Unbounded text-xl">{skill.percent}%</span>
                </div>

                <div className="skill-bar w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-(--prim) rounded-full transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-(--gray-light) p-8 mt-8 rounded-lg">
            <h3 className="text-2xl lg:text-5xl font-bold Unbounded">
              Get in touch
            </h3>
            <p className="text-[#737681] py-5 text-lg">
              We're here to help you with any question, event enquiry, or
              collaboration opportunities. Whether you want to join our upcoming
              events, book a speaker, or learn more about our services.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 rounded-lg bg-white outline-none border border-transparent focus:border-(--prim)"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 rounded-lg bg-white outline-none border border-transparent focus:border-(--prim)"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full p-3 rounded-lg bg-white outline-none border border-transparent focus:border-(--prim)"
                  required
                />
                <input
                  type="text"
                  placeholder="E-mail Address"
                  className="w-full p-3 rounded-lg bg-white outline-none border border-transparent focus:border-(--prim)"
                  required
                />
              </div>

              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full p-4 rounded-lg bg-white outline-none resize-none border border-transparent focus:border-(--prim)"
                required
              ></textarea>

              <button
                type="submit"
                className="btn border border-gray-50/20 relative m-0 px-6 py-3 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]"
              >
                <span>Send A Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpeakerDetail;
