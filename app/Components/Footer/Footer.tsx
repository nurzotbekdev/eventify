"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import footerIcon from "@/public/footer-icon.svg";
import testbg from "@/public/bg-image.png";

function Footer() {
  return (
    <>
      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] pt-[6%] md:pt-[10%] bg-(--prim-dark) relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image src={testbg} alt="bg-image" className="w-full h-full" />
        </div>

        <div className="z-10 relative text-white flex justify-between items-center gap-10 xl:gap-0 flex-col xl:flex-row mb-10">
          <h4 className="text-xl sm:text-3xl lg:text-4xl font-medium max-w-2xl Unbounded">
            Join our newsletter for event important announcement
          </h4>
          <div>
            <p className="flex items-center gap-3">
              <Image
                src={footerIcon}
                alt="footerIcon"
                className="bg-white/20 w-9 h-9 p-2 rounded-full backdrop-blur-2xl"
              />
              Stay informed with instant updates delivered straight to your
              inbox.
            </p>
            <form className="relative w-full">
              <input
                type="text"
                placeholder="Enter E-mail Address*"
                className="w-full bg-white/20 px-5 py-4 mt-5 rounded-lg outline-none"
                required
              />
              <Icon
                icon="la:telegram"
                width="35"
                height="35"
                className="bg-(--prim) rounded-md p-1 absolute right-3 top-7.5 cursor-pointer"
              />
            </form>
          </div>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-0 z-1 relative py-6 sm:py-8 lg:py-12 border-t border-gray-50/20 border-b">
          <div className="lg:min-w-140">
            <Link
              href="/"
              className="text-white cursor-pointer text-xl font-medium Unbounded"
            >
              Eventi <span className="text-(--prim)">fy.</span>
            </Link>
            <p className="pt-4 text-white max-w-md">
              Experience a world-class conference designed to inspire
              innovation, empower professionals, and connect leaders from around
              the globe.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <Link
                href="/"
                className="w-9 h-9 rounded-full p-1 border border-(--prim) flex justify-center items-center text-white group cursor-pointer hover:bg-(--prim) transition-colors duration-300"
              >
                <Icon icon="mdi:youtube" width="24" height="24" />
              </Link>

              <Link
                href="/"
                className="w-9 h-9 rounded-full p-2 border border-(--prim) flex justify-center items-center text-white group cursor-pointer hover:bg-(--prim) transition-colors duration-300"
              >
                <Icon icon="prime:twitter" width="20" height="20" />
              </Link>

              <Link
                href="/"
                className="w-9 h-9 rounded-full p-1 border border-(--prim) flex justify-center items-center text-white group cursor-pointer hover:bg-(--prim) transition-colors duration-300"
              >
                <Icon icon="mage:facebook" width="24" height="24" />
              </Link>

              <Link
                href="/"
                className="w-9 h-9 rounded-full p-1 border border-(--prim) flex justify-center items-center text-white group cursor-pointer hover:bg-(--prim) transition-colors duration-300"
              >
                <Icon icon="mdi:instagram" width="24" height="24" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-2xl text-white pb-6">
                Quick Links
              </h3>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/UI/About"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/UI/Pages/Speakers"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Speakers
                  </Link>
                </li>

                <li>
                  <Link
                    href="/UI/Pages/Faqs"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Faqs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/UI/Contact"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-2xl text-white pb-6">
                Schedules
              </h3>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Future Finance
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Tech Innovators
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Sustainable Business
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    International Productivity
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    Creative Entrepreneurship
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-2xl text-white pb-6">
                Get In Touch
              </h3>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    +998 90 784 44 44
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    support@domainname.com
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="text-(--gray-light) hover:text-(--prim) transition-colors duration-300"
                  >
                    5/2 Central Business Innovation Near International Trade
                    Tower
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center py-5 text-white font-semibold z-1 relative">
          Copyright © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
