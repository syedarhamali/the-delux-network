import PieChart from "@/components/ui/pie-chart";
import TokenomicsTable from "./table";

const TokenomicSection = () => {
  return (
    <section className="bg-[#212428] relative h-full" id="tokenomics">
      <div className="flex flex-col gap-6 px-4 mx-auto max-w-[1440px] sm:px-6">
        <h1 className="pb-4 text-5xl font-bold text-center text-primary-purple">
          Tokenomics
        </h1>
        <div className="flex justify-center w-full">
        <div className="flex items-center gap-2">
          <PieChart />
          <TokenomicsTable />
        </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicSection;
