import "./transactions.scss";
import { transactions } from "../../data/Dashboard/transactions";
import { orders } from "../../data/Dashboard/orders";

export default function Transactions({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="transactions">
      <div
        className={
          darkMode
            ? "transactions__panel dark"
            : "transactions__panel transactions__panel__light"
        }
      >
        <h3 className="transactions__title">Latest Transactions</h3>
        <div className="transactions__list">
          {transactions.map((t) => (
            <div key={t.id} className="transactions__item">
              <div className="transactions__avatar">{t.name.charAt(0)}</div>
              <div className="transactions__info">
                <div className="transactions__name">{t.name}</div>
                <div className={`transactions__status status--${t.status}`}>
                  {t.status === "confirm" && "Confirm"}
                  {t.status === "waiting" && "Waiting payment"}
                  {t.status === "expired" && "Payment expired"}
                </div>
              </div>
              <div className="transactions__meta">
                <div className="transactions__amount">{t.amount}</div>
                <div className="transactions__date">{t.date}</div>
                <button className="transactions__edit">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          darkMode
            ? "transactions__panel dark"
            : "transactions__panel transactions__panel__light"
        }
      >
        <h3 className="transactions__title">Latest Orders</h3>
        <div className="transactions__list">
          {orders.map((o) => (
            <div key={o.id + o.product} className="transactions__item">
              <div className="transactions__avatar">{o.product.charAt(0)}</div>
              <div className="transactions__info">
                <div className="transactions__id">{o.id}</div>
                <div className="transactions__product">{o.product}</div>
              </div>
              <div className="transactions__meta">
                <div className={`transactions__badge badge--${o.status}`}>
                  {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                </div>
                <div className="transactions__amount">{o.price}</div>
                <div className="transactions__date">{o.date}</div>
                <button className="transactions__edit">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
