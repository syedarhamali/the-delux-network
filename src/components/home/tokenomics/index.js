import PieChart from "@/components/ui/pie-chart";
import TokenomicsTable from "./table";

const TokenomicSection = () => {
  return (
    <section className="bg-[#212428] relative h-full" id="tokenomics">
      <div className="flex flex-col px-4 mx-auto max-w-[1440px] sm:px-6">
        <h1 className="pb-4 text-5xl font-bold text-center text-primary-purple">
          Tokenomics
        </h1>
        <div className="flex flex-col items-center justify-center gap-0 md:gap-16 md:flex-row ">
          <img src="/images/tokenomics_chart.png" className="max-h-max lg:w-[500px] w-[300px]" />
          <img src="/images/tokenomics_table.webp" className="h-[700px] lg:max-w-max max-w-xs" />
          {/* <div className="flex items-center gap-2">
            <PieChart />
            <TokenomicsTable />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TokenomicSection;
