'use client'

import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import NFTLogoSection from "@/app/components/nftLogoSection";

const Home = () => {
  const logoSrc =
    "https://thedeluxnetwork.com/wp-content/uploads/2023/07/The_Delux_Network_Final.png";

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/features", text: "Features" },
    { href: "/resources", text: "Resources" },
    { href: "/pricing", text: "Pricing" },
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
    </div>
  );
};

export default Home;
