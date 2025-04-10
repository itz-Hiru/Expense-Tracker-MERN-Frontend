import React from "react";
import CustomPieChart from "../charts/CustomPieChart.component";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncomes, totalExpenses }) => {
  const balanceData = [
    {
      name: "Total balance",
      amount: totalBalance,
    },
    {
      name: "Total Expense",
      amount: totalExpenses,
    },
    {
      name: "Total Income",
      amount: totalIncomes,
    },
  ];
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Financial Overview</h5>
      </div>
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`Rs. ${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
