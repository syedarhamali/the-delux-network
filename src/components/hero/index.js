const Hero = () => {
  return (
    <section className="h-full">
      <div
        className="h-[120vh] bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:gap-4 gap-6 px-4 mx-auto max-w-7xl sm:px-6 ">
          <div className="flex-1 flex-col space-y-5 px-4 pb-8 lg:pb-0">
            <div>
              <p className="text-lg text-primary-purple font-bold">CRYPTO PACK</p>
              <h1 className="text-5xl text-white font-bold leading-snug tracking-tight">
                Create, sell and collect digital items.
              </h1>
            </div>
            <p className="text-lg text-gray-400">
              Unit of data stored on a digital ledger, called a blockchain, that
              certifies a digital asset to be unique and therefore not
              interchangeable
            </p>
            <button className="rounded-2xl bg-primary-purple px-8 py-1 hover:shadow-md hover:shadow-primary-purple">
              Explore
            </button>
            <div className="flex justify-between items-center pt-4 w-10/12">
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
            <img src="/images/women-with-vr.png" className="mx-auto" width={546} height={507} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
