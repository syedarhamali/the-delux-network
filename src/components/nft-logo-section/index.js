import { nftLogoData } from "@/utils/nftlogo";

const NFTLogoSection = () => {
  return (
    <section className="bg-[#212428]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 py-24">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-10">
          {nftLogoData.map((item) => (
            <div
              key={item.id}
              className="px-11 py-8 flex justify-center items-center rounded-lg cursor-pointer bg-[#282B2F] hover:bg-opacity-5 transition duration-300 ease-in-out"
              style={{
                border: "solid 0.0625rem rgb(66 63 63 / 90%)",
                boxShadow: "1px 1px 8px 1px rgb(0 0 0 / 30%)",
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <img
                className="mx-auto"
                  src={item.imageSrc}
                  height={70}
                  width={70}
                  alt={`Image ${item.id}`}
                />
                <p className="text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTLogoSection;
