"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";

import sectionBanner from "@/public/section-banner.jpg";
import arrow from "@/public/arrow-icon.svg";

import blogData from "@/app/Json/Blogs.json";

function BlogDetail() {
  const { id } = useParams();

  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <>
        <p className="text-center my-40 text-4xl font-bold">Blog not found</p>
      </>
    );
  }

  return (
    <>
      <div
        className="section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative"
        style={{ backgroundImage: `url(${sectionBanner.src})` }}
      >
        <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

        <div className="z-0 text-center">
          <h4 className="text-2xl lg:text-4xl font-medium Unbounded mx-[4%]">
            {blog.title}
          </h4>
          <ul className="flex items-center flex-wrap justify-center gap-8 pt-2 mx-[4%]">
            <li className="cursor-pointer text-sm lg:text-xl font-medium flex items-center gap-2">
              <Icon icon="solar:calendar-broken" width="24" height="24" />
              {blog.date}
            </li>

            <li className="cursor-pointer text-sm lg:text-xl font-medium flex items-center gap-2">
              <Icon icon="lucide:tag" width="24" height="24" />
              {blog.category}
            </li>
          </ul>
        </div>
      </div>

      <div className="px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-[6%] md:py-[10%]">
        <div className="blog-image w-full sm:h-90 lg:h-160">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1800}
            height={1100}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-[#737681] text-sm sm:text-lg pt-5">
          Staying safe in everyday life doesn’t require advanced martial arts
          training—just a strong foundation of simple self-defense skills that
          anyone can learn. These essential techniques empower you to stay
          aware, respond effectively, and protect yourself in unexpected
          situations. From understanding body language and maintaining
          situational awareness to learning basic strikes, escapes, and
          defensive movements.
        </p>

        <p className="text-[#737681] text-sm sm:text-lg pt-5">
          These fundamental skills focus on recognizing danger early,
          maintaining strong situational awareness, and understanding how to set
          clear personal boundaries. They include learning how to break free
          from common grabs, using bodyweight effectively, applying basic
          strikes for escape, and creating safe distance when threatened. Just
          as important are verbal defense skills—using your voice to deter an
          attacker, call for help, or alert people nearby.
        </p>

        <div className="bg-(--prim) text-white flex items-start md:flex-nowrap flex-wrap py-5 px-5 text-lg lg:text-2xl rounded-lg mt-5">
          <span className="w-20 md:w-50">
            <Icon
              icon="tabler:quote"
              width="24"
              height="24"
              className="w-full h-full"
            />
          </span>
          Learn essential self-defense skills designed to help you stay aware,
          react quickly, and protect yourself in unexpected situations. These
          simple, practical techniques build confidence, improve safety, and
          empower you to navigate daily life with greater security and
          preparedness.
        </div>

        <p className="text-[#737681] text-sm sm:text-lg pt-5">
          Simple self-defense also teaches you how to stay calm under pressure,
          trust your instincts, and make quick judgments in moments that matter
          most. These techniques are easy to learn, practical in real-life
          situations, and suitable for all ages and fitness levels. By mastering
          these essential skills, individuals gain the confidence to navigate
          their daily lives with greater security, awareness, and peace of mind.
        </p>

        <h3 className="mt-10 text-2xl lg:text-5xl font-bold Unbounded">
          What is simple self-defense?
        </h3>

        <p className="text-[#737681] text-sm sm:text-lg pt-5">
          Simple self-defense is a practical approach to personal safety that
          focuses on awareness, prevention, and easy-to-learn techniques anyone
          can use. It teaches individuals how to recognize danger early, stay
          alert, set boundaries, and use basic movements to escape harmful
          situations.
        </p>

        <ul className="list-disc ps-5 space-y-5 mt-5">
          <li className="text-sm sm:text-lg text-gray-500">
            Simple self-defense focuses on using basic, practical techniques to
            protect yourself in dangerous situations.
          </li>

          <li className="text-sm sm:text-lg text-gray-500">
            Training includes easy-to-learn moves designed to disable or escape
            from an attacker quickly and safely.
          </li>

          <li className="text-sm sm:text-lg text-gray-500">
            Simple self-defense teaches confidence-building skills that empower
            individuals to stay calm under sudden pressure.
          </li>

          <li className="text-sm sm:text-lg text-gray-500">
            The methods prioritize natural body movements that require minimal
            strength, speed, or flexibility to perform.
          </li>

          <li className="text-sm sm:text-lg text-gray-500">
            Simple self-defense supports using everyday objects for protection
            when escape is not immediately possible.
          </li>
        </ul>

        <p className="text-[#737681] text-sm sm:text-lg pt-5 pb-10">
          The practice of using easy, practical, and quick-to-learn techniques
          to protect yourself in unsafe or threatening situations. It focuses on
          awareness, prevention, and basic physical responses that
          anyone—regardless of age, size, or strength—can use to stay safe.
        </p>

        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-8 pt-5 border-t border-gray-300">
          <div className="flex items-center flex-wrap gap-2">
            <h3 className="text-xl font-semibold">Tages:</h3>
            <ul className="flex items-center flex-wrap gap-4">
              <li className="bg-(--prim) text-white px-5 py-2 rounded-full w-fit font-semibold hover:bg-black transition-colors duration-300 cursor-pointer">
                Protection
              </li>

              <li className="bg-(--prim) text-white px-5 py-2 rounded-full w-fit font-semibold hover:bg-black transition-colors duration-300 cursor-pointer">
                Safety Tips
              </li>

              <li className="bg-(--prim) text-white px-5 py-2 rounded-full w-fit font-semibold hover:bg-black transition-colors duration-300 cursor-pointer">
                Self-Defense
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-5">
            <Link
              href="https://www.facebook.com/"
              className="bg-(--prim) text-white p-2 rounded-full hover:bg-black transition-colors duration-300"
            >
              <Icon icon="mage:facebook" width="24" height="24" />
            </Link>

            <Link
              href="https://www.instagram.com/"
              className="bg-(--prim) text-white p-2 rounded-full hover:bg-black transition-colors duration-300"
            >
              <Icon icon="mdi:instagram" width="24" height="24" />
            </Link>

            <Link
              href="https://www.linkedin.com/"
              className="bg-(--prim) text-white p-2 rounded-full hover:bg-black transition-colors duration-300"
            >
              <Icon icon="ri:linkedin-fill" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
