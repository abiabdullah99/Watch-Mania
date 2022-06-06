import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";
const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <>
      <h2 className="dashboard-text">
        Monthly Income Acti<span>vites</span>
      </h2>
      <div data-aos="zoom-in-up" data-aos-duration="2000" className="charts">
        <LineChart
          width={400}
          height={500}
          data={data}
        >
          <Line
            stroke="#e54343"
            dataKey={"investment"}
            activeDot={{ r: 8 }}
          ></Line>
          <Line
            stroke="#2BB8C1"
            dataKey={"revenue"}
            activeDot={{ r: 8 }}
          ></Line>
          <Line stroke="#D86586" dataKey={"sell"}></Line>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#fff" dataKey={"month"}></XAxis>
          <Tooltip />
          <Legend />
          <YAxis stroke="#fff"></YAxis>
        </LineChart>

        <BarChart width={400} height={500} data={data}>
          <Bar dataKey="investment" barSize={25} fill="#2BB8C1" />
          <Bar dataKey="sell" fill="#ffff"></Bar>
          <Bar dataKey="revenue" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#fff"></XAxis>
          <Tooltip />
          <legend />
          <YAxis></YAxis>
        </BarChart>
      </div>
    </>
  );
};

export default Dashboard;
