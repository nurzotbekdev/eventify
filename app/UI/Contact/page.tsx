"use client";

import Link from "next/link";
import Image from "next/image";

import sectionBanner from "@/public/section-banner.jpg";
import contactImg from "@/public/contact-us-img.jpg";
import MarqueeIcon from "@/public/icon-marquee.svg";

function Contact() {
  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded">
            Contact Us
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-2">
            <li>
              <Link href="/" className="cursor-pointer text-sm lg:text-base">
                Home
              </Link>
            </li>
            /<li className="cursor-pointer text-sm lg:text-base">Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%]">
        <div className="bg-(--gray-light) rounded-lg overflow-hidden flex justify-between items-center flex-col xl:flex-row">
          <div className="w-full h-100 md:h-150 lg:h-250 xl:h-full xl:w-[45%] relative">
            <Image
              src={contactImg}
              alt="contactImg"
              className="w-full h-full object-cover object-top"
            />
            <span className="absolute top-0 left-0 bg-black/20 w-full h-full"></span>
          </div>
          <form className="space-y-6 w-full xl:w-[55%] p-3 sm:p-5 lg:p-10">
            <span className="flex items-center bg-(--prim) w-fit rounded-full text-white pe-3 text-sm md:text-base font-medium mb-3">
              <Image
                src={MarqueeIcon}
                alt="marqueeIcon"
                className="p-2 w-7 h-7 md:w-8 md:h-8"
              />
              Contact Us
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in touch with our team anytime today
            </h2>
            <p className="text-gray-500 text-sm md:text-lg">
              Our team is always here to listen, support, and guide you. Whether
              you have questions, need assistance, or want to discuss your next
              project or event.
            </p>

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

      <div className="h-full lg:h-150 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48628.95181124519!2d71.749262016474!3d40.37983287394646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83431937abc5%3A0xcfa4d876b34e7bbc!2sFergana%2C%20Fergana%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1776061480163!5m2!1sen!2s"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
