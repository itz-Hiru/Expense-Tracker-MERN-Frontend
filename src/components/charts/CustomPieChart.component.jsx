import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip.component";
import CustomLegend from "./CustomLegend.component";

const CustomPieChart = ({
  data,
  totalAmount,
  label,
  colors,
  showTextAnchor,
}) => {
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
          label={
            showTextAnchor
              ? ({ cx, cy }) => (
                  <>
                    <text
                      x={cx}
                      y={cy - 10}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="14px"
                      fill="#333"
                    >
                      {label}
                    </text>
                    <text
                      x={cx}
                      y={cy + 15}
                      textAnchor="middle"
                      fontSize="18px"
                      fontWeight="400"
                      fill="#333"
                    >
                      {totalAmount}
                    </text>
                  </>
                )
              : null
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomTooltip} />
        <Legend content={CustomLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
