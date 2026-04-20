"use client";

import About from "./About/about";
import Banner from "./Banner/banner";
import Benefits from "./Benefits/benefits";
import Blogs from "./Blogs/blogs";
import Events from "./Events/events";
import Faqs from "./Faqs/faqs";
import Features from "./Features/features";
import Hero from "./Hero/hero";
import Highlights from "./Highlights/highlights";
import Marquee from "./Marquee/marquee";
import Pricing from "./Pricing/pricing";
import Speakers from "./Speakers/speakers";
import Testimonials from "./Testimonials/testimonials";

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Features />
      <Benefits />
      <Events />
      <Speakers />
      <Highlights />
      <Pricing />
      <Banner />
      <Faqs />
      <Testimonials />
      <Blogs />
    </>
  );
}

export default Index;
