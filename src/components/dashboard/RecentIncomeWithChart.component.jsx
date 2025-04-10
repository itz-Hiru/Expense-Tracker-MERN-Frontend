import React, { useEffect, useState } from "react";
import CustomPieChart from "../charts/CustomPieChart.component";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4F39F6"]

const RecentIncomeWithChart = ({ data, totalIncomes }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArray = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    setChartData(dataArray);
  };

  useEffect(() => {
    prepareChartData();
    return () => {};
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
