import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  { name: "2011", uv: 90, pv: 120, amt: 100 },
  { name: "2012", uv: 150, pv: 100, amt: 110 },
  { name: "2013", uv: 180, pv: 180, amt: 130 },
  { name: "2014", uv: 200, pv: 250, amt: 150 },
  { name: "2015", uv: 280, pv: 280, amt: 180 },
  { name: "2016", uv: 220, pv: 200, amt: 160 },
  { name: "2017", uv: 150, pv: 120, amt: 120 },
];

const SimpleAreaChart = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* Stats Header */}
      <div style={{ display: "flex", gap: "40px", marginBottom: "24px" }}>
        <div>
          <p style={{ margin: 0, fontSize: "13px", color: "#999" }}>
            Marketplace
          </p>
          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "18px",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            $ 89425
          </p>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: "13px", color: "#999" }}>
            Total Income
          </p>
          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "18px",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            $ 56210
          </p>
        </div>
        <div>
          <p style={{ margin: 0, fontSize: "13px", color: "#999" }}>
            Last Month
          </p>
          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "18px",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            $ 8974
          </p>
        </div>
      </div>

      {/* Chart Title */}
      <h3
        style={{
          margin: "0 0 16px 0",
          fontSize: "16px",
          color: "#999",
          fontWeight: "500",
        }}
      >
        Email Sent
      </h3>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1f2e",
              border: "1px solid #444",
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stroke="#ffc658"
            fill="url(#colorAmt)"
          />
          <RechartsDevtools />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleAreaChart;
