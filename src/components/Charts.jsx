import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Charts = (props) => {
  const { stats } = props;
  const chartData = Object.values(stats).map((item) => ({
    name: item.name,
    timeTaken: item.timeTaken * 1000,
    comparisons: item.comparisons,
    movements: item.movements,
  }));
  return (
    <>
      {Object.keys(stats).length > 0 ? (
          <div className="dflex flexcol ">
            <BarChart
              width={1200}
              height={300}
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="9 9" stroke="black" />
              <XAxis dataKey="name" stroke="black" />
              <YAxis stroke="black" />
              <Tooltip />
              <Legend />
              <Bar dataKey="comparisons" fill="#82ca9d" />
            </BarChart>
            <BarChart
              width={1200}
              height={300}
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="9 9" stroke="black" />
              <XAxis dataKey="name" stroke="black" />
              <YAxis stroke="black" />
              <Tooltip />
              <Legend />
              <Bar dataKey="movements" fill="#ffc658" />
            </BarChart>
          </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Charts;
