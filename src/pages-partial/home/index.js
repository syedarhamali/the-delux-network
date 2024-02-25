'use client'

import Hero from "@/components/hero";
import NFTLogoSection from "@/components/nft-logo-section";
import NewItems from "@/components/new-items";
import About from "./about";
import Header from "@/pages-partial/home/header";

const Home = () => {
  const logoSrc =
    "https://thedeluxnetwork.com/wp-content/uploads/2023/07/The_Delux_Network_Final.png";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/#about", text: "About" },
    { href: "/token", text: "Token" },
    { href: "/tokenomics", text: "Tokenomics" },
    { href: "/road-map", text: "Road Map" },
    { href: "/team", text: "Team" },
    { href: "/white-paper", text: "White Paper" },
    { href: "/faq", text: "FAQ" },
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
      <NFTLogoSection />
      <NewItems />
    </div>
  );
};

export default Home;
