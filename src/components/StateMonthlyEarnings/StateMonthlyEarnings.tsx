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
        <div className="monlhley">
          <h3>Monthly Earnings</h3>
          <div className="monlhley__flex">
            <div>
              <p className="stat-monthly-earnings__item--amount">$24,895</p>
              <p className="stat-monthly-earnings__item--change ">
                {" "}
                Marketplace
              </p>
            </div>
            <div>
              <p className="stat-monthly-earnings__item--amount">$23651</p>
              <p className="stat-monthly-earnings__item--change ">
                {" "}
                Total Income
              </p>
            </div>
          </div>
        </div>

        <CustomActiveShapePieChart />
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
