function AssetRow({
  asset,
  walletBalance,
  buyAsset,
  addToWatchlist,
  watchlist,
}) {
  const canBuy = walletBalance >= asset.current_price;

  const isWatching = watchlist.some(
  (item) => item.id === asset.id
);


  return (
    <div className="asset-row">

      <div className="asset-left">

        <img
          src={asset.image}
          alt={asset.name}
          className="coin-image"
        />

        <div>
          <h3>{asset.name}</h3>
          <p className="symbol">
            {asset.symbol.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="asset-center">
        <p className="price">
          $
          {asset.current_price.toLocaleString()}
        </p>

        <span
          className={
            asset.price_change_percentage_24h >= 0
              ? "positive"
              : "negative"
          }
        >
          {asset.price_change_percentage_24h.toFixed(
            2
          )}
          %
        </span>

      </div>

      <div className="asset-right">

        <button
        className={
            isWatching
            ? "watch-btn active-watch"
            : "watch-btn"
        }
        disabled={isWatching}
        onClick={() => addToWatchlist(asset)}
        >
            {isWatching ? "★ Watching" : "☆ Watch"}
        </button>

        <button
          className="buy-btn"
          disabled={!canBuy}
          onClick={() =>
            buyAsset(asset)
          }
        >
          {canBuy
            ? "Buy"
            : "Not enough cash"}
        </button>

      </div>

    </div>
  );
}

export default AssetRow;