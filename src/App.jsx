import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from './Coin'
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => alert("Ohh Snap! There is an Error."));
  }, []);

  const handleChange = (e) =>{
      setSearch(e.target.value);
      console.log("It works")
  }

  const filterCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="App">
      <h1>Welcome</h1>
      <div className="search">
        <form action="">
          <input type="text" placeholder="Search" onChange={handleChange}/>
        </form>
        </div>
        <div className="container">
        {filterCoins.map(coin =>{
          return(
            <Coin 
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            current_price={coin.current_price}
            market_cap={coin.market_cap}
            price_change_24h={coin.price_change_24h}
            total_volume={coin.total_volume}
            />
          )
        })}
        </div>
    </div>
  );
}

export default App;
