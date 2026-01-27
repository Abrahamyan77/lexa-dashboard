import "./dashboard.scss";
import Container from "../../components/Container/Container";
import StatCard from "../../components/StatCard/StatCard";
import { Package, DollarSign, Tag, ShoppingBag } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Orders",
      value: "1,587",
      icon: <Package size={24} />,
      change: { percentage: 11, type: "positive" as const },
    },
    {
      title: "Revenue",
      value: "$46,782",
      icon: <DollarSign size={24} />,
      change: { percentage: 28, type: "negative" as const },
    },
    {
      title: "Average Price",
      value: "$15.9",
      icon: <Tag size={24} />,
      change: { percentage: 5, type: "positive" as const },
    },
    {
      title: "Product Sold",
      value: "1890",
      icon: <ShoppingBag size={24} />,
      change: { percentage: 18, type: "positive" as const },
    },
  ];

  return (
    <div className="dashboard">
      <Container>
        <div className="dashboard__grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              change={stat.change}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
