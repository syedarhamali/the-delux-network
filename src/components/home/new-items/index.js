const { default: NewItemsCarousel } = require("../../ui/carousel/new-items");

const NewItems = () => {
  return (
    <section className="bg-[#212428] py-24 relative">
      <div className="flex flex-col gap-6 px-4 mx-auto max-w-[1440px] sm:px-6">
        <h1 className="text-5xl font-bold text-center text-primary-purple">Token Structure</h1>
        <p className="max-w-5xl mx-auto text-center">
          Maximize your potential with our upcoming NFT phases! Don’t miss out
          on the chance to be part of our journey, featuring XRP-powered
          options. By participating in these phases, you’ll gain early access to
          our tokens through NFT’s, exclusive benefits, and harness the power of
          XRP’s innovative technology. Whether you’re an, enthusiast, or
          supporter, taking advantage of our NFT phases can set you on a path to
          secure rewards and be part of a groundbreaking opportunity in the
          world of decentralized finance.
        </p>
        <NewItemsCarousel />
      </div>
    </section>
  );
};

export default NewItems;
