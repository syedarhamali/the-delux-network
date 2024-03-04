'use client'

import Hero from "@/components/home/hero";
import Header from "@/components/home/header";
import TokenomicSection from "./tokenomics";
import RoadMapSection from "./road-map";
import FAQSection from "./faq";
import TeamSection from "./team";
import Footer from "./footer";

const Home = () => {

  return (
    <div>
      <Header />
      <Hero />
      <RoadMapSection />
      <TokenomicSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
