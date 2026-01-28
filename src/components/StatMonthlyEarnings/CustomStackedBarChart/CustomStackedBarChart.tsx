import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  { name: "2012", uv: 120, pv: 100 },
  { name: "2013", uv: 80, pv: 180 },
  { name: "2014", uv: 90, pv: 150 },
  { name: "2015", uv: 150, pv: 140 },
  { name: "2016", uv: 110, pv: 160 },
  { name: "2017", uv: 120, pv: 120 },
  { name: "2018", uv: 130, pv: 140 },
  { name: "2019", uv: 100, pv: 180 },
  { name: "2020", uv: 140, pv: 130 },
  { name: "2021", uv: 110, pv: 170 },
  { name: "2022", uv: 150, pv: 120 },
  { name: "2023", uv: 120, pv: 150 },
];

const StackedBarChart = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* Header Section */}
      <div style={{ marginBottom: "24px" }}>
        <h3
          style={{
            margin: "0 0 16px 0",
            fontSize: "16px",
            color: "#999",
            fontWeight: "500",
          }}
        >
          Monthly Earnings
        </h3>
        <div style={{ display: "flex", gap: "60px" }}>
          <div>
            <p style={{ margin: 0, fontSize: "13px", color: "#999" }}>
              Marketplace
            </p>
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "28px",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              $ 2548
            </p>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: "13px", color: "#999" }}>
              Total Income
            </p>
            <p
              style={{
                margin: "8px 0 0 0",
                fontSize: "28px",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              $ 6985
            </p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
          <XAxis dataKey="name" stroke="#666" fontSize={12} />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1f2e",
              border: "1px solid #444",
            }}
            cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
          />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#00d4ff" />
          <RechartsDevtools />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
