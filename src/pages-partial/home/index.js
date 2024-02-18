'use client'

import Products from "@/components/new-items";
import Header from "@/components/header";
import Hero from "@/components/hero";
import NFTLogoSection from "@/components/nft-logo-section";

const Home = () => {
  const logoSrc =
    "https://thedeluxnetwork.com/wp-content/uploads/2023/07/The_Delux_Network_Final.png";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
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
      <NFTLogoSection />
      <Products />
    </div>
  );
};

export default Home;
