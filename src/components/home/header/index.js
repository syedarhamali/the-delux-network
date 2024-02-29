import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Logo = ({ src, alt, width, height }) => {
  return (
    <a href="/">
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
};

const NavLink = ({ href, children , onClick }) => {
  return (
    <div className="relative py-1 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-2 2xl:ml-1" onClick={onClick}>
      <a
        className="flex items-center gap-3 text-sm font-semibold leading-6 text-white lg:text-base"
        href={href}
      >
        {children}
      </a>
    </div>
  );
};

const Header = ({ logoSrc, navLinks }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (5 * window.innerHeight) / 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed right-0 left-0 top-0 z-10 ${
        scrolled ? "bg-[#1E2028]/90" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 ">
        <div className="fixed inset-x-0 w-full h-20 py-2 bg-transparent" />
        <div className="flex items-center justify-between pt-1 pb-3 md:justify-start">
          <div className="z-10 flex md:flex-1">
            <Logo src={logoSrc} alt={"Logo"} width={100} height={20} />
          </div>
          <div className="z-10 flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md lg:p-2.5 p-1 text-gray-400 hover:bg-gray-200"
              onClick={() => setMobileMenuOpen(true)}
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
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </button>
          </div>
          <div className="relative hidden md:flex">
            <div className="hidden md:flex md:gap-x-0 lg:gap-x-6">
              {navLinks.map((link, index) => (
                <NavLink key={index} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={mobileMenuOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50"
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="absolute block md:hidden top-0 w-full max-w-sm p-6 rounded-lg shadow-md bg-[#212428]">
                <div className="flex justify-between mb-4">
                  <div>
                    <Logo src={logoSrc} alt={"Logo"} width={100} height={20} />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:bg-gray-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close main menu</span>
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="py-2">
                  {navLinks.map((link, index) => (
                    <NavLink key={index} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                      {link.text}
                    </NavLink>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
