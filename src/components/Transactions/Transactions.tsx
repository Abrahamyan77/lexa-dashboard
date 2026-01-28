import "./transactions.scss";

export default function Transactions() {
  const transactions = [
    {
      id: 1,
      name: "Herbert C. Patton",
      status: "confirm",
      amount: "$14,584",
      date: "5/12/2016",
    },
    {
      id: 2,
      name: "Mathias N. Klausen",
      status: "waiting",
      amount: "$8,541",
      date: "10/11/2016",
    },
    {
      id: 3,
      name: "Nikolaj S. Henriksen",
      status: "confirm",
      amount: "$954",
      date: "8/11/2016",
    },
    {
      id: 4,
      name: "Lasse C. Overgaard",
      status: "expired",
      amount: "$44,584",
      date: "7/11/2016",
    },
    {
      id: 5,
      name: "Kasper S. Jessen",
      status: "confirm",
      amount: "$8,844",
      date: "1/11/2016",
    },
  ];

  const orders = [
    {
      id: "#12354781",
      product: "Riverston Glass Chair",
      status: "delivered",
      price: "$185",
      date: "5/12/2016",
    },
    {
      id: "#52140300",
      product: "Shine Company Catalina",
      status: "delivered",
      price: "$1,024",
      date: "5/12/2016",
    },
    {
      id: "#96254137",
      product: "Trex Outdoor Furniture Cape",
      status: "cancel",
      price: "$657",
      date: "5/12/2016",
    },
    {
      id: "#12365474",
      product: "Oasis Bathroom Teak Corner",
      status: "shipped",
      price: "$8,451",
      date: "5/12/2016",
    },
    {
      id: "#85214796",
      product: "BeoPlay Speaker",
      status: "delivered",
      price: "$584",
      date: "5/12/2016",
    },
    {
      id: "#12354781",
      product: "Riverston Glass Chair",
      status: "delivered",
      price: "$185",
      date: "5/12/2016",
    },
  ];

  return (
    <div className="transactions">
      <div className="transactions__panel">
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

      <div className="transactions__panel">
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
