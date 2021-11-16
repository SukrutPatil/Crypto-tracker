import React from "react";
import "./App.css";

const Coin = (props) => {

  const sr = 1;
  return (
    <div>
        <tr>
          <td>
            <img className="image" src={props.image} alt="logo" />
            <h4>{props.name}</h4>
          </td>
          <td>{props.symbol}</td>
          <td>{props.current_price}</td>
          <td>{props.market_cap}</td>
          <td>{props.price_change_24h <= 0 ? <p className="loss">{props.price_change_24h}</p>:<p className="profit">{props.price_change_24h}</p>}</td>
          <td>{props.total_volume}</td>
        </tr>
    </div>
  );
};

export default Coin;
