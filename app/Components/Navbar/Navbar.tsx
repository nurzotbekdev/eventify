"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/UI/About" },
  {
    label: "Schedules",
    href: "#",
    dropdown: [
      { label: "Schedules", href: "/UI/Schedules" },
      { label: "Schedules Details", href: "/UI/Schedules/1" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    dropdown: [
      { label: "Blog", href: "/UI/Blog" },
      { label: "Blog Details", href: "/UI/Blog/1" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Features", href: "/UI/Pages/Features" },
      { label: "Speakers", href: "/UI/Pages/Speakers" },
      { label: "Speakers Details", href: "/UI/Pages/Speakers/1" },
      { label: "Pricing Plan", href: "/UI/Pages/PricingPlan" },
      { label: "Image Gallery", href: "/UI/Pages/Gallery" },
      { label: "Faq's", href: "/UI/Pages/Faqs" },
      { label: "404", href: "/UI/Pages/Page404" },
    ],
  },
  { label: "Contact", href: "/UI/Contact" },
];

function Navbar() {
  const [menuOpen, setOpenMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setOpenMenu(!menuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full z-20 px-[4%] md:px-[6%] lg:px-[8%] xl:px-[10%] py-3 flex justify-between items-center fixed top-0 left-0 transition-all duration-300 ${scrolled ? "bg-black shadow-md border-b border-gray-50/20" : "bg-white/20 backdrop-blur-md border-b border-gray-300/20"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-white cursor-pointer text-xl font-medium Unbounded"
        >
          Eventi <span className="text-(--prim)">fy.</span>
        </Link>

        {/* Nav */}
        <ul className="lg:flex hidden items-center xl:gap-4 gap-2 text-white">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.dropdown ? (
                <>
                  <span className="cursor-pointer rounded-sm hover:bg-black hover:text-white px-3 py-2 transition-colors flex items-center">
                    {link.label}
                    <Icon
                      icon="ep:arrow-down-bold"
                      width="16"
                      height="16"
                      className="ms-2 transition-transform duration-300 group-hover:rotate-180"
                    />
                  </span>

                  <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden text-black">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="hover:bg-black hover:text-white px-3 py-2 rounded-sm transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="lg:hidden p-1 bg-(--prim) rounded z-50">
          <Icon
            icon={menuOpen ? "material-symbols:close" : "material-symbols:menu"}
            width="28"
            height="28"
            className="text-white cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {menuOpen && (
          <div
            className={`fixed top-15 left-0 w-full bg-white lg:hidden px-[4%] md:px-[6%] pt-2 overflow-y-auto transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl border-b border-gray-200 ${
              menuOpen
                ? "translate-y-0 opacity-100 scale-100 blur-0"
                : "-translate-y-10 opacity-0 scale-95 blur-sm pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-2 text-black">
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="border-b border-gray-100 last:border-none"
                >
                  {link.dropdown ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex justify-between items-center w-full py-2 text-lg font-medium"
                      >
                        {link.label}
                        <Icon
                          icon="ep:arrow-down-bold"
                          className={`transition-transform duration-300 ${
                            openDropdown === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${
                          openDropdown === link.label
                            ? "max-h-100 mb-2"
                            : "max-h-0"
                        }`}
                      >
                        <ul className="p-2 space-y-1">
                          {link.dropdown.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                onClick={() => setOpenMenu(false)}
                                className="block p-2 text-gray-700 border border-gray-200 rounded hover:bg-white"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setOpenMenu(false)}
                      className="block py-2 text-lg font-medium pb-3"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Right button */}
        <Link href="/UI/Contact" className="hidden lg:flex items-center gap-5">
          <button className="btn border border-gray-50/20  relative m-0 px-4 py-3 flex justify-center items-center cursor-pointer capitalize bg-(--prim) rounded-lg text-white font-medium text-base overflow-hidden z-0 transition-all duration-300 ease-[cubic-bezier(0.02,0.01,0.47,1)]">
            <span>Join The Conference</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
