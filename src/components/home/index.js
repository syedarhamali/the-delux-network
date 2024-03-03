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
    { href: "/#road-map", text: "Road Map" },
    { href: "/#tokenomics", text: "Tokenomics" },
    { href: "/#team", text: "Team" },
    { href: "/#faq", text: "FAQ" },
    { href: "/#newsletter", text: "Newsletter" },
    { href: "/docs/whitepaper.pdf", text: "Whitepaper" },
    { href: "/#contact", text: "Contact Us" },
  ];

  const handleMenuClick = () => {
    // Your menu click handler logic here
    console.log("Menu clicked");
  };

  return (
    <div>
      <Header
        logoSrc={logoSrc}
        navLinks={navLinks}
        onMenuClick={handleMenuClick}
      />
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
