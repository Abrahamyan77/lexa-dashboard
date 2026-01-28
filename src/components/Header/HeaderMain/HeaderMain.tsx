import "./headermain.scss";
import Container from "../../Container/Container";
import TinyBarChartLeft from "../../GraphLeft/GraphLeft";
import TinyBarChartRight from "../../GraphRight/GraphRight";

interface HeaderMainProps {
  title: string;
  breadcrumbs?: string[];
}

export default function HeaderMain({
  title,
  breadcrumbs = [],
}: HeaderMainProps) {
  return (
    <div className="header-main">
      <Container>
        <div className="header-main__wrapper">
          <div className="header-main__content">
            <h1 className="header-main__title">{title}</h1>
            {breadcrumbs.length > 0 && (
              <div className="header-main__breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className="header-main__crumb">
                    {crumb}
                    {index < breadcrumbs.length - 1 && (
                      <span className="header-main__separator">&gt;</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="header-main__stats">
            <div className="header-main__stat-card">
              <div className="header-main__stat-icon">{}</div>
              <div className="header-main__stat-value">
                <TinyBarChartLeft />
              </div>
              <div className="header-main__stat-label">Item Sold 1230</div>
            </div>
            <div className="header-main__stat-card">
              <div className="header-main__stat-icon">{}</div>
              <div className="header-main__stat-value">
                <TinyBarChartRight />
              </div>
              <div className="header-main__stat-label">Balance $ 2,317</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
