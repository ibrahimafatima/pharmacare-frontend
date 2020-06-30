import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const DasboardInfo = ({ cards }) => {
  return (
    <div className="row">
      {cards.map(({ color, icon: Icon, title, amount }) => (
        <div className="col-md-3" key={title}>
          <div
            className={`iconic-w-horizontal ${color} light-text card-raduis`}
          >
            <Link className="ico-block">
              <span>
                <Icon size="40px" />
              </span>
            </Link>
            <div className="w-meta-info">
              <span
                className="w-meta-value number-animate"
                data-value="1289"
                data-animation-duration="1500"
              >
                {amount}
              </span>
              <span className="w-meta-title">{title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ dashboard: { cards } }) => ({
  cards,
});

export default connect(mapStateToProps)(DasboardInfo);
