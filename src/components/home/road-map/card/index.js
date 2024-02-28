const roadMaps = [
  {
    year: "2024",
    quarter: "Q1",
    description: 
    '<p >TDN TIER 1 EXCHANGE LISTING <br /> <br /> CROSS CHAIN FOR LUX LIONS NFTS <br /> <br /> NFT PACK OPENINGS & PACK BREAKS FOR LUX LABS <br /> <br /> NFT MINTING SITE ON  </p>'
  },
  {
    year: "2024",
    quarter: "Q2",
    description: 
    '<p >TDN TIER 1 EXCHANGE LISTING <br /> <br /> CROSS CHAIN FOR LUX LIONS NFTS <br /> <br /> NFT PACK OPENINGS & PACK BREAKS FOR LUX LABS <br /> <br /> NFT MINTING SITE ON  </p>'
  },
  {
    year: "2024",
    quarter: "Q3",
    description:
    '<p >TDN TIER 1 EXCHANGE LISTING <br /> <br /> CROSS CHAIN FOR LUX LIONS NFTS <br /> <br /> NFT PACK OPENINGS & PACK BREAKS FOR LUX LABS <br /> <br /> NFT MINTING SITE ON  </p>'
  },
  {
    year: "2025",
    quarter: "Q4",
    description:
    '<p >TDN TIER 1 EXCHANGE LISTING <br /> <br /> CROSS CHAIN FOR LUX LIONS NFTS <br /> <br /> NFT PACK OPENINGS & PACK BREAKS FOR LUX LABS <br /> <br /> NFT MINTING SITE ON  </p>'
  },
  {
    year: "2024",
    title: "2025 Q1",
    description:
    '<p >TDN TIER 1 EXCHANGE LISTING <br /> <br /> CROSS CHAIN FOR LUX LIONS NFTS <br /> <br /> NFT PACK OPENINGS & PACK BREAKS FOR LUX LABS <br /> <br /> NFT MINTING SITE ON  </p>'
  },
];

const RoadMapCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 mx-auto mt-8 lg:h-auto lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {roadMaps.map((item) => {
          const { year, quarter, description } = item;
          return (
            <div style={{ opacity: 1, transform: "none" }}>
              <article className="relative px-8 overflow-hidden bg-purple-900 isolate rounded-2xl">
                <div className="flex items-center justify-center pt-6">
                  <div className=" max-w-max shrink-0">
                    <p className="text-2xl font-bold">
                      {year} <span className="text-pink-400">{quarter}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between my-6">
                  <div className="flex flex-wrap items-center overflow-hidden text-base leading-normal text-white gap-y-1">
                    <div className="flex items-center gap-x-4">
                      <div className="flex text-center" dangerouslySetInnerHTML={{__html: description}}></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadMapCard;
