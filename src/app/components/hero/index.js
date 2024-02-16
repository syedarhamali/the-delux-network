const Hero = () => {
  return (
    <section className="h-screen">
      <div
        className="h-full bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="flex items-center gap-4 px-4 mx-auto max-w-7xl sm:px-6 ">
          <div className="flex-1 flex-col space-y-5 px-4">
            <div>
              <p className="text-lg text-primary-purple font-bold">CRYPTO PACK</p>
              <h1 className="text-5xl font-bold">
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
                    <h2 className="text-2xl font-semibold">94215</h2>
                    <p>Collectibles</p>
                </div>
                <div className="max-w-max">
                    <h2 className="text-2xl font-semibold">27k</h2>
                    <p>Auctions</p>
                </div>
                <div className="max-w-max">
                    <h2 className="text-2xl font-semibold">4k</h2>
                    <p>Artist</p>
                </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="/images/women-with-vr.png" width={546} height={507} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
