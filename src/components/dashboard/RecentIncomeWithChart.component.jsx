import React, { useEffect, useState } from "react";
import CustomPieChart from "../charts/CustomPieChart.component";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4F39F6"];

const RecentIncomeWithChart = ({ data, totalIncomes }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const aggregated = {};

    data?.forEach((item) => {
      const source = item?.source;
      const amount = item?.amount || 0;

      if (aggregated[source]) {
        aggregated[source] += amount;
      } else {
        aggregated[source] = amount;
      }
    });

    const dataArray = Object.keys(aggregated).map((source) => ({
      name: source,
      amount: aggregated[source],
    }));

    setChartData(dataArray);
  };

  useEffect(() => {
    prepareChartData();
  }, [data]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Income Chart</h5>
      </div>
      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`Rs. ${totalIncomes}`}
        colors={COLORS}
        showTextAnchor={true}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
