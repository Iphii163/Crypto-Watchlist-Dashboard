import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./App.css";

import Dashboard from "./components/Dashboard";
import WalletStatus from "./components/WalletStatus";
import AssetList from "./components/AssetList";
import Watchlist from "./components/Watchlist";

function App() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [walletBalance, setWalletBalance] = useState(() => {
    const savedBalance = localStorage.getItem("walletBalance");
    return savedBalance ? Number(savedBalance) : 10000;
  });

  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist");

    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );

        setAssets(response.data);
      } catch (err) {
        setError("Failed to fetch assets.");
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  useEffect(() => {
    localStorage.setItem("walletBalance", walletBalance);
  }, [walletBalance]);

  useEffect(() => {
    localStorage.setItem(
      "watchlist",
      JSON.stringify(watchlist)
    );
  }, [watchlist]);

  const filteredAssets = useMemo(() => {
    return assets.filter(
      (asset) =>
        asset.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        asset.symbol
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [assets, search]);

  const buyAsset = (asset) => {
    if (walletBalance >= asset.current_price) {
      setWalletBalance(
        walletBalance - asset.current_price
      );
    }
  };

  const addToWatchlist = (asset) => {
    const exists = watchlist.some(
      (item) => item.id === asset.id
    );

    if (!exists) {
      setWatchlist([...watchlist, asset]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(
      watchlist.filter(
        (asset) => asset.id !== id
      )
    );
  };

  if (loading) {
    return <h2 className="status">Loading...</h2>;
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }

  return (
    <Dashboard>

      <div className="top-bar">
        <h1>
          Crypto & Stock Watchlist Dashboard
        </h1>

        <WalletStatus
          walletBalance={walletBalance}
        />
      </div>

      <input
        className="search"
        type="text"
        placeholder="Search by name or symbol..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="main-content">

        <div className="assets-section">
          <h2>LIVE ASSETS</h2>
          <AssetList
          assets={filteredAssets}
          walletBalance={walletBalance}
          buyAsset={buyAsset}
          addToWatchlist={addToWatchlist}
          watchlist={watchlist}
          />

        </div>
        <div className="watchlist-section">

          <Watchlist
            watchlist={watchlist}
            removeFromWatchlist={
              removeFromWatchlist
            }
          />
        </div>
      </div>
    </Dashboard>
  );
}

export default App;