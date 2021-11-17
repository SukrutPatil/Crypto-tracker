import React from "react";
import "./App.css";

const Coin = (props) => {
  // key={coin.id}
  //           image={coin.image}
  //           name={coin.name}
  //           symbol={coin.symbol}
  //           current_price={coin.current_price.toLocaleString("en-US")}
  //           market_cap={coin.market_cap.toLocaleString("en-US")}
  //           price_change_percentage_24h={coin.price_change_percentage_24h.toLocaleString("en-US")}
  //           total_volume={coin.total_volume}
  return (
    <div className="card">
       <div className="image">
         <img src={props.image} alt="" />
         <h3>{props.symbol}</h3>
       </div>
       <h1>{props.name}</h1>
       <div className="info-container">
         <div className="info">
           <p>Current Price</p>
           <strong>₹ {props.current_price}</strong>
         </div>
         <div className="info">
           <p>Price Change</p>
           <strong>{props.price_change_percentage_24h < 0 ? <strong className="loss">{props.price_change_percentage_24h}  %</strong> : <strong className="profit">{props.price_change_percentage_24h}  %</strong>} </strong>
         </div>
       </div>
       <div className="info-container">
         <div className="info">
           <p>Market Cap</p>
           <strong>₹ {props.market_cap}</strong>
         </div>
       </div>
    </div>
  );
};

export default Coin;
