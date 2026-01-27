import "./statcard.scss";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: {
    percentage: number;
    type: "positive" | "negative" | "neutral";
  };
  subtitle?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  change,
  subtitle = "From previous period",
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card__header">
        <h3 className="stat-card__title">{title}</h3>
        {icon && <div className="stat-card__icon">{icon}</div>}
      </div>

      <div className="stat-card__value">{value}</div>

      {change && (
        <div className="stat-card__footer">
          <span
            className={`stat-card__change stat-card__change--${change.type}`}
          >
            {change.type === "positive"
              ? "+"
              : change.type === "negative"
                ? "-"
                : ""}
            {Math.abs(change.percentage)}%
          </span>
          <span className="stat-card__subtitle">{subtitle}</span>
        </div>
      )}
    </div>
  );
}
