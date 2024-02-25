import ParticleComponent from "../animation";

const Hero = () => {
  return (
    <section className="h-full">
      <div
        className="lg:h-[120vh] h-full bg-cover bg-center lg:py-20 py-24 relative"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <ParticleComponent />
        <div className="flex flex-col items-center gap-6 px-4 mx-auto lg:flex-row lg:gap-4 max-w-[1440px] sm:px-6 ">
          <div className="flex-col flex-1 px-4 pb-8 space-y-5 lg:pb-0">
            <div>
              {/* <p className="text-lg text-primary-purple">
                CRYPTO PACK
              </p> */}
              <div className="inline-flex items-center my-3 text-base border rounded-full border-primary-purple text-gray-70 0 bg-white/10 sm:text-base lg:text-sm hover:text-blue-600">
                <a className="z-10" href="/">
                  <span className="pr-3 sm:px-3 py-0.5 text-black bg-white font-medium leading-5 tracking-wide rounded-full">
                    thedeluxnetwork.com
                  </span>
                </a>
                <div className="z-10 flex items-center mx-2">
                  <span className="ml-2 font-medium text-white sm:ml-4">
                    About the Network
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-1 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white uppercase lg:text-5xl ">
                Discover the Power of XRP, Blockchain and Cryptocurrency
              </h1>
            </div>
            <p className="text-sm text-gray-400 lg:text-base">
              Step out from the crowd and embrace your inner lion with the Delux
              Network. We’re here to revolutionize the crypto landscape, leaving
              the EVM crowd in the dust. Our foundation rests on the powerful
              XRP Ledger, driving our innovation forward. Become a trailblazer
              and join a community that’s shaping the future of cryptocurrency.
              Lead the pack alongside fellow enthusiasts and creators, as we
              forge ahead to create lasting value in the next generation of
              digital assets.
            </p>
            <button className="px-10 py-1 text-sm font-semibold text-white rounded-2xl bg-primary-purple hover:shadow-md hover:shadow-primary-purple">
              Explore
            </button>
            {/* <div className="flex items-center justify-between w-10/12 pt-4">
              <div className="max-w-max">
                <h2 className="text-4xl font-semibold text-white">94215</h2>
                <p>Collectibles</p>
              </div>
              <div className="max-w-max">
                <h2 className="text-4xl font-semibold text-white">27k</h2>
                <p>Auctions</p>
              </div>
              <div className="max-w-max">
                <h2 className="text-4xl font-semibold text-white">4k</h2>
                <p>NFT Artist</p>
              </div>
            </div> */}
          </div>
          <div className="flex-1 ">
            <img
              src="/images/women-with-vr.png"
              className="w-full h-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
