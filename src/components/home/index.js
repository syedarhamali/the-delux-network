'use client'

import Hero from "@/components/home/hero";
import Header from "@/components/home/header";
import TokenomicSection from "./tokenomics";
import RoadMapSection from "./road-map";
import FAQSection from "./faq";
import Footer from "./footer";
import TeamSection from "./team";

const Home = () => {
  const logoSrc =
    "/images/logo.webp";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#token", text: "Token" },
    { href: "/#tokenomics", text: "Tokenomics" },
    { href: "/#road-map", text: "Road Map" },
    { href: "/#team", text: "Team" },
    { href: "/white-paper", text: "White Paper" },
    { href: "/#faq", text: "FAQ" },
    { href: "/#contact", text: "Contact Us" },
  ];

  const handleMenuClick = () => {
    // Your menu click handler logic here
    console.log("Menu clicked");
  };

  return (
    <div>
      {/* <Example /> */}
      <Header
        logoSrc={logoSrc}
        navLinks={navLinks}
        onMenuClick={handleMenuClick}
      />
      <Hero />
      {/* <About /> */}
      {/* <NFTLogoSection /> */}
      {/* <NewItems /> */}
      {/* <TokenSection /> */}
      <RoadMapSection />
      <TokenomicSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
