import React from "react";
import { Link } from "react-router-dom";

const HeaderCartItem = ({ cartItem }) => {
  const { name, quantity, price } = cartItem;
  return (
    <li className="clearfix">
      <Link className="message-thumb"></Link>
      <Link className="message-intro">
        {name}
        <span className="message-time">
          {quantity} x ${price}
        </span>
      </Link>
    </li>
  );
};

export default HeaderCartItem;
