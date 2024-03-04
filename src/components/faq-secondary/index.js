"use client";
import { Disclosure } from "@headlessui/react";
import Footer from "../home/footer";
import Header from "../home/header";
import { faqSecondary } from "./faq-questions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FAQSecondary() {
  return (
    <>
      <Header />
      <div className="w-full bg-[#212428]">
        <div className="relative bg-[#212428] lg:pt-32 pt-20 max-w-3xl px-10 mx-auto lg:max-w-7xl">
          <section className="bg-[#212428] relative" id="faq">
            <div className="flex flex-col gap-6 px-4 mx-auto max-w-[1440px] sm:px-6">
              <h1 className="text-5xl font-bold text-center text-primary-purple">
                FAQ
              </h1>
              <p className="max-w-5xl mx-auto text-center text-white">
                Our FAQ section, is designed to provide you with quick and
                concise answers to the most common questions. We understand that
                you might have inquiries about our products/services, policies,
                and more. This curated list of frequently asked questions aims
                to save you time and provide clarity. If you can’t find the
                information you’re looking for here, feel free to reach out to
                our friendly support team for assistance.
              </p>
              <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                {faqSecondary.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6 ">
                    {({ open }) => (
                      <div
                        className={classNames(open ? "rounded-lg" : "", "p-2 transition-all duration-300 ease-in-out")}
                      >
                        <dt className="text-lg">
                          <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-300">
                            <span className="text-2xl font-semibold text-primary-purple">
                              {faq.question}
                            </span>
                            <span className="flex items-center ml-6 h-7">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={classNames(
                                  open ? "-rotate-180" : "rotate-0",
                                  "h-6 w-6 transform"
                                )}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="pr-12 mt-2 transition-all duration-300 ease-in-out">
                          <p className="text-base text-gray-200" dangerouslySetInnerHTML={{__html: faq.answer}}>
                          </p>
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQSecondary;
