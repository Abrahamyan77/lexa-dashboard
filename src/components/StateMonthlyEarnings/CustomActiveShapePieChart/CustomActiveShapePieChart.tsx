import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const data = [
  { name: "Download Sales", value: 300 },
  { name: "In-Store Sales", value: 100 },
  { name: "Mail-Order Sales", value: 300 },
];

const COLORS = ["#42ffc6", "#ffffff", "#6366f1"];

type ActiveShapeProps = {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  midAngle?: number;
  fill?: string;
  payload?: { name?: string } & Record<string, unknown>;
  percent?: number;
  value?: number;
};

const renderActiveShape = (props: ActiveShapeProps) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={(outerRadius ?? 0) + 10}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  );
};

const renderCustomLabel = () => {
  return (
    <text
      x="50%"
      y="40%"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#666"
      fontSize="18պղ"
    >
      In-Store Sales 30
    </text>
  );
};

export default function CustomActiveShapePieChart({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "290px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={renderCustomLabel}
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            isAnimationActive={isAnimationActive}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          <RechartsDevtools />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
