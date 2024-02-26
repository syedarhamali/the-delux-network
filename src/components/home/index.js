'use client'

import Hero from "@/components/home/hero";
import Header from "@/components/home/header";
import About from "@/components/home/about";
import TokenSection from "./token";
import TokenomicSection from "./tokenomics";
import RoadMapSection from "./road-map";
import FAQSection from "./faq";

const Home = () => {
  const logoSrc =
    "https://thedeluxnetwork.com/wp-content/uploads/2023/07/The_Delux_Network_Final.png";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/#token", text: "Token" },
    { href: "/#tokenomics", text: "Tokenomics" },
    { href: "/#road-map", text: "Road Map" },
    { href: "/team", text: "Team" },
    { href: "/white-paper", text: "White Paper" },
    { href: "/#faq", text: "FAQ" },
    { href: "/contact-us", text: "Contact Us" },
    { href: "/shop", text: "Shop" },
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
      <About />
      {/* <NFTLogoSection /> */}
      {/* <NewItems /> */}
      <TokenSection />
      <TokenomicSection />
      <RoadMapSection />
      <FAQSection />
    </div>
  );
};

export default Home;
