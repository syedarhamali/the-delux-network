'use client'

import React, { useEffect, useState } from "react";

const Logo = ({ src, alt, width, height }) => {
  return (
    <a href="/">
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <div className="relative sm:ml-5 md:ml-5 lg:ml-5 xl:ml-2 2xl:ml-1">
      <a
        className="flex items-center gap-3 text-base font-semibold leading-6 text-white"
        href={href}
      >
        {children}
      </a>
    </div>
  );
};

const HamburgerMenuButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:bg-gray-200"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
};

const Header = ({ logoSrc, navLinks, onMenuClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5 * window.innerHeight / 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed right-0 left-0 top-0 z-[100] ${scrolled ? 'bg-[#1E2028]/90' : 'bg-transparent'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 ">
        <div className="fixed inset-x-0 w-full h-20 py-2 bg-transparent" />
        <div className="flex items-center justify-between pt-1 pb-3 md:justify-start">
          <div className="z-10 flex md:flex-1">
            <Logo src={logoSrc} alt={"Logo"} width={134} height={32} />
          </div>
          <div className="z-10 flex lg:hidden">
            <HamburgerMenuButton onClick={onMenuClick} />
          </div>
          <div className="relative hidden lg:flex">
            <div className="hidden lg:flex md:gap-x-6 lg:gap-x-6">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
