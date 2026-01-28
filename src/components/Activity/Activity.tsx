import "./activity.scss";

export default function Activity() {
  const inboxItems = [
    {
      id: 1,
      name: "Misty",
      message: "Hey! there I'm available...",
      time: "13:40 PM",
    },
    {
      id: 2,
      name: "Melissa",
      message: "I've finished it! See you so...",
      time: "13:34 PM",
    },
    {
      id: 3,
      name: "Dwayne",
      message: "This theme is awesome!",
      time: "13:17 PM",
    },
    { id: 4, name: "Martin", message: "Nice to meet you", time: "12:20 PM" },
    {
      id: 5,
      name: "Vincent",
      message: "Hey! there I'm available...",
      time: "11:47 AM",
    },
    {
      id: 6,
      name: "Robert Chappa",
      message: "Hey! there I'm available...",
      time: "10:12 PM",
    },
  ];

  const activityItems = [
    {
      id: 1,
      date: "JUN 25",
      action: 'Responded to need "Volunteer Activities"',
    },
    {
      id: 2,
      date: "JUN 24",
      action: 'Added an interest "Volunteer Activities"',
    },
    { id: 3, date: "JUN 23", action: 'Joined the group "Boardsmanship Forum"' },
    {
      id: 4,
      date: "JUN 21",
      action: 'Responded to need "In-Kind Opportunity"',
    },
  ];

  return (
    <div className="activity">
      {/* Inbox */}
      <div className="activity__section activity__inbox">
        <h3 className="activity__title">Inbox</h3>
        <div className="activity__inbox-list">
          {inboxItems.map((item) => (
            <div key={item.id} className="activity__inbox-item">
              <div className="activity__avatar">
                <span>{item.name.charAt(0)}</span>
              </div>
              <div className="activity__inbox-content">
                <p className="activity__inbox-name">{item.name}</p>
                <p className="activity__inbox-message">{item.message}</p>
              </div>
              <p className="activity__inbox-time">{item.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="activity__section activity__feed">
        <div className="activity__tabs">
          <span className="activity__tab">Recent</span>
          <span className="activity__tab active">Activity</span>
          <span className="activity__tab">Feed</span>
        </div>
        <div className="activity__feed-list">
          {activityItems.map((item) => (
            <div key={item.id} className="activity__feed-item">
              <div className="activity__feed-icon"></div>
              <div className="activity__feed-content">
                <p className="activity__feed-date">{item.date}</p>
                <p className="activity__feed-action">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="activity__load-more">Load More</button>
      </div>

      {/* Right Panel */}
      <div className="activity__section activity__right-panel">
        {/* Quote Card */}
        <div className="activity__quote-card">
          <p className="activity__quote-text">
            The European languages are members of the same family. Their
            separate existence is a myth. For science, music, sport, etc, Europe
            the same vocabulary. The languages only in their grammar.
          </p>
        </div>

        {/* User Card */}
        <div className="activity__user-card">
          <div className="activity__user-avatar">
            <span>M</span>
          </div>
          <div className="activity__user-info">
            <p className="activity__user-name">Marie Minnick</p>
            <p className="activity__user-role">Marketing Manager</p>
          </div>
        </div>

        {/* Yearly Sales */}
        <div className="activity__sales-card">
          <p className="activity__sales-title">Yearly Sales</p>
          <p className="activity__sales-amount">52,345</p>
          <p className="activity__sales-description">
            The languages only differ grammar
          </p>
          <a href="#" className="activity__sales-link">
            Learn more »
          </a>
          <div className="activity__sales-chart">
            <div className="activity__bar" style={{ height: "60%" }}></div>
            <div className="activity__bar" style={{ height: "80%" }}></div>
            <div className="activity__bar" style={{ height: "50%" }}></div>
            <div className="activity__bar" style={{ height: "90%" }}></div>
            <div className="activity__bar" style={{ height: "70%" }}></div>
            <div className="activity__bar" style={{ height: "85%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
