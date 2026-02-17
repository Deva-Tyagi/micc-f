// import Head from 'next/head'

import React from "react";
import HeroBanner from './hero/HeroBanner';
import Hero2 from "./hero/Hero2";
import Hero3 from "./hero/Hero3";
import Hero4 from "./hero/Hero4";
// import Hero5 from "./hero/Hero5";
import Hero6 from "./hero/Hero6";
// import Hero7 from "./hero/Hero7";
import Hero8 from "./hero/Hero8";
import TrainingBanner from "./hero/HeroNew";
import EnrollmentCTA from "./hero/Hero8";

const Home = () => {
  return (
    <main>
      {/* <HeroBanner /> */}
      <TrainingBanner />
      <Hero2 />
      <Hero4 />
      {/* <Hero5 /> */}
      <Hero6 />
      {/* <Hero7 /> */}
      {/* <EnrollmentCTA /> */}
      <Hero3 />
    </main>
  );
};

export default Home;
