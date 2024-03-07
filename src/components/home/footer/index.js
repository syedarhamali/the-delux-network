import useHubspotForm from "@/hooks/hubspot";
import { navigation } from "./footer-section";
import { useState } from "react";

export default function Footer() {
  const { submitForm } = useHubspotForm();
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitForm(email);
    if (response) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer id="newsletter" className="relative bg-[#212428]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 pt-8 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="hidden h-32 lg:block"
            src="/images/logo.webp"
            alt="Company name"
          />
          <div className="grid grid-cols-2 gap-8 mt-6 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Questions?
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Details
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => {
                    const shouldOpenInNewTab = item.href.startsWith("/docs");
                    return (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target={shouldOpenInNewTab ? "_blank" : "_self"}
                          rel={shouldOpenInNewTab ? "noopener noreferrer" : ""}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form
            className="mt-6 sm:flex sm:max-w-md lg:mt-0"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-inset ring-0 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            {showSuccess && (
              <p className="px-1 py-2 text-green-700">
                Email submitted Successfully!
              </p>
            )}
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 The Delux Network, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
