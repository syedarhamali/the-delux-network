const roadMaps = [
  {
    year: "2024",
    quarter: "Q1",
    description:
      "<p >TDN TIER 1 EXCHANGE LISTING <br /> <br /> CROSS CHAIN FOR LUX LIONS NFTS <br /> <br /> NFT PACK OPENINGS & PACK BREAKS FOR LUX LABS <br /> <br /> NFT MINTING SITE ON<br />  <br />    LUX LAB EXPANSION & CROSS COLLABORATIONS <br /> <br /> NFT REWARD BOOSTER SYSTEM FOR PURCHASES<br /> <br /> MULTIPLE MARKETING CAMPAIGNS <br /> <br />  AI INTEGRATION FOR LUX LIONS & TDN <br /> <br />  GROW SOCIAL MEDIA TO 10,000 <br /> <br />  GROW UNIQUE NFT HOLDERS TO 500 </p>",
  },
  {
    year: "2024",
    quarter: "Q2",
    description: `<p >
      IRL LUX LION MERCH
& DIGITAL INTEGRATION
<br /> <br />
BUILD NFT INTEGRATED
ONLINE GAMES
<br /> <br />
BUILD ADDITIONAL
P2E GAMES & NFT
INTEGRATED ONLINE
GAMES
<br /> <br />

EXPANSION INTO
ADDITIONAL METAVERSES
<br /> <br />

TDN TOKEN INTEGRATION
& AUTOMATION INTO
P2E GAMES
<br /> <br />

TDN MARKETPLACE FOR
ALL METAVERSE NEEDS
<br /> <br />

BRAND PARTNERSHIPS
<br /> <br />

GROW SOCIAL MEDIA TO
25,000
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 800 </p>`,
  },
  {
    year: "2024",
    quarter: "Q3",
    description: `<p >
      TDN MARKETPLACE
INTEROPERABILITY & CROSS
METAVERSE ITEMS
<br /> <br />
NFT QUESTING PLATFORM
FOR COMMUNITY ENGAGEMENT
<br /> <br />
TDN STAKING PLATFORM
WITHIN MARKETPLACE
<br /> <br />
TDN SELF SUSTAINING
NFT SYSTEM FOR HOLDERS
<br /> <br />
GROW SOCIAL MEDIA TO 50,000
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 1200
      </p>`,
  },
  {
    year: "2024",
    quarter: "Q4",
    description: `<p >
      TDN MARKETPLACE
ENHANCEMENTS
<br /> <br />

TRANSITION AFTERMATH
CURRENCY TO TDN FOR
ECOSYSTEM USE
<br /> <br />

ADDITIONAL TIER 1
EXCHANGE LISTINGS
FOR TDN TOKEN
<br /> <br />

ADDITIONAL TIER 1
EXCHANGE LISTINGS
FOR TDN TOKEN
<br /> <br />

DYNAMIC MARKETPLACE
& AI INTEGRATION
<br /> <br />

GROW SOCIAL MEDIA TO 75,000
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 1700

      </p>`,
  },
  {
    year: "2025",
    quarter: "Q1",
    description: `<p >
      AI ADVANCED DATA
TRAINING AND LONG TERM
MEMORY ENHANCEMENT
<br /> <br />

AI CRYPTO INTEGRATION &
SMART CONTRACT EXECUTION
<br /> <br />

AI AUTONOMOUS FUNCTIONAL
EXPANSION, IMPROVEMENT
& SCALABILITY
<br /> <br />

BROW SOCIAL MEDIA TO 100,000
<br /> <br />
GROW UNIQUE NFT HOLDERS
TO 2300

      </p>`,
  },
];

const RoadMapCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 mx-auto mt-8 md:grid-cols-2 lg:h-auto lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {roadMaps.map((item, key) => {
          const { year, quarter, description } = item;
          return (
            <div key={key} style={{ opacity: 1, transform: "none" }}>
              <article className="relative block h-full px-8 overflow-hidden bg-purple-900 max-w-max md:max-w-md isolate rounded-2xl">
                <div className="flex items-center justify-center pt-6">
                  <div className=" max-w-max shrink-0">
                    <p className="text-4xl font-extrabold text-white">
                      {year} <span className="text-pink-400">{quarter}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-between my-6">
                  <div className="flex flex-wrap items-center overflow-hidden text-base leading-normal text-white gap-y-1">
                    <div className="flex items-center gap-x-4">
                      <div
                        className="flex text-center text-white"
                        dangerouslySetInnerHTML={{ __html: description }}
                      ></div>
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

export default RoadMapCards;
