import ParticleComponent from "../animation";

const Hero = () => {
  return (
    <section className="h-full">
      <div
        className="lg:h-[120vh] h-full bg-cover bg-center py-20 relative"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="flex flex-col items-center gap-6 px-4 mx-auto lg:flex-row lg:gap-4 max-w-7xl sm:px-6 ">
        <ParticleComponent />
          <div className="flex-col flex-1 px-4 pb-8 space-y-5 lg:pb-0">
            <div>
              <p className="text-lg font-bold text-primary-purple">
                CRYPTO PACK
              </p>
              <h1 className="text-5xl font-bold leading-snug tracking-tight text-white">
                Create, sell and collect digital items.
              </h1>
            </div>
            <p className="text-lg text-gray-400">
              Unit of data stored on a digital ledger, called a blockchain, that
              certifies a digital asset to be unique and therefore not
              interchangeable
            </p>
            <button className="px-8 py-1 rounded-2xl bg-primary-purple hover:shadow-md hover:shadow-primary-purple">
              Explore
            </button>
            <div className="flex items-center justify-between w-10/12 pt-4">
              <div className="max-w-max">
                <h2 className="text-2xl font-semibold text-white">94215</h2>
                <p>Collectibles</p>
              </div>
              <div className="max-w-max">
                <h2 className="text-2xl font-semibold text-white">27k</h2>
                <p>Auctions</p>
              </div>
              <div className="max-w-max">
                <h2 className="text-2xl font-semibold text-white">4k</h2>
                <p>Artist</p>
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <img
              src="/images/women-with-vr.png"
              className="mx-auto"
              width={546}
              height={507}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
