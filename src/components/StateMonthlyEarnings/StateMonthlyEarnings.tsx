import CustomActiveShapePieChart from "./CustomActiveShapePieChart/CustomActiveShapePieChart";
import SimpleAreaChart from "./CustomAreaChart/CustomAreaChart";
import StackedBarChart from "./CustomStackedBarChart/CustomStackedBarChart";
import "./stateMonthlyEarnings.scss";

export default function StateMonthlyEarnings({
  darkMode,
}: {
  darkMode: boolean;
}) {
  return (
    <div className="stat-monthly-earnings">
      <div
        className={
          darkMode
            ? "stat-monthly-earnings__item dark"
            : "stat-monthly-earnings__item stat-monthly-earnings__item__light"
        }
      >
        <div>
          <h3>Monthly Earnings</h3>
          <p className="stat-monthly-earnings__item--amount">$24,895</p>
          <p className="stat-monthly-earnings__item--change positive">
            +2.65% since last week
          </p>
        </div>
        <CustomActiveShapePieChart />
        <div>
          <p className="stat-monthly-earnings__item--label">This Month</p>
          <p className="stat-monthly-earnings__item--amount">$8,500</p>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "stat-monthly-earnings__item dark"
            : "stat-monthly-earnings__item stat-monthly-earnings__item__light"
        }
      >
        <SimpleAreaChart />
      </div>
      <div
        className={
          darkMode
            ? "stat-monthly-earnings__item dark"
            : "stat-monthly-earnings__item stat-monthly-earnings__item__light"
        }
      >
        <StackedBarChart />
      </div>
    </div>
  );
}
