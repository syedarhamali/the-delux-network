import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const chartData = {
    series: [5, 5, 5 , 7.5 , 1.5, 7,9 , 12 , 10 , 11 , 12 , 5 , 10],
    options: {
      legend: {
        show: false,
      },
      chart: {
        type: "donut",
        foreColor: "#AAA7B2",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                fontSize: "16px",
                color: "#FFFFFF",
              },
            },
          },
        },
      },
      stroke: {
        width: 0,
      },
      labels: ["IDO Distribution 1", "IDO Distribution 2" , 'IDO Distribution 3' , 'NFT Distribution' , 'In-Game Sales Pool' , 'Staking Rewards', 'Liquidity' , 'Marketing', 'P2P Rewards' , 'Treasury' , 'M&A Reserve' , 'Team', 'Advisors & Consultants'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
      colors: ['#8364E2','#383A3E' ]
    },
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        height={"300%"}
        width="800"
      />
    </div>
  );
};

export default PieChart;
