const About = () => {
  return (
    <section id="about">
      <div className="bg-[#212428] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-12">
          <div className="relative flex flex-col items-center transition ease-in-out border border-white lg:flex-row rounded-3xl bg-gradient-to-br from-black via-transparent to-gray-900 bg-blend-normal duration-800">
            <div className="petal_bg_div rounded-3xl" />
            <div className="z-10 w-full p-4 text-primary lg:w-1/2 sm:p-16 lg:p-12">
              <div className="pb-3 md:pb-10">
                <span className="block pb-3 text-2xl font-bold leading-6 text-center text-white lg:text-left">
                  The Delux Network
                </span>
                <p className="font-medium md:text-4xl text-lg md:leading-[44px] tracking-[-0.02] text-primary-purple text-center lg:text-left">
                  Your Gateway to the Creator Economy
                </p>
              </div>
              <div>
                <p className="font-normal text-white text-lg leading-[28px] text-primary text-center lg:text-left">
                  Within the DeLux Network, our mission revolves around
                  collaborating with visionary creators to unveil groundbreaking
                  collections and blockchain solutions worldwide. 0ur `range
                  extends from cutting-edge interoperable NFT technologies to
                  pioneering digital goods and services, all fortified by the
                  strength of NFTs. We empower creators to take center stage,
                  liberating them from conventional sales and marketing
                  approaches, and enabling them to fully unlock and amplify the
                  value they bring to the table.
                </p>
              </div>
            </div>
            <div className="z-10 flex flex-row justify-center w-full p-4 lg:w-1/2 sm:p-16 lg:p-12">
              <img
                src="https://thedeluxnetwork.com/wp-content/uploads/2023/07/jonathan-rus-landing-page-tqupwrk1_01.jpg"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* <div className="w-full">
            <h1 className="font-bold text-white text-start text-7xl">
              The Delux Network
            </h1>
            <h3 className="py-2 text-3xl font-bold text-blue-900 text-start">
              Your Gateway to the Creator Economy
            </h3>
            <p className="max-w-2xl text-base text-white text-start ">
              Within the DeLux Network, our mission revolves around
              collaborating with visionary creators to unveil groundbreaking
              collections and blockchain solutions worldwide. 0ur `range extends
              from cutting-edge interoperable NFT technologies to pioneering
              digital goods and services, all fortified by the strength of NFTs.
              We empower creators to take center stage, liberating them from
              conventional sales and marketing approaches, and enabling them to
              fully unlock and amplify the value they bring to the table.
            </p>
            <div className="flex items-center justify-center w-full py-4">
            <button className="px-6 py-4 mx-auto text-white rounded-lg shadow-md shadow-primary-purple hover:opacity-85 bg-primary-purple">
              Learn More About Us
            </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
