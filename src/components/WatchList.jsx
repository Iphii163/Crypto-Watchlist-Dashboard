function Watchlist({
  watchlist,
  removeFromWatchlist,
}) {
  return (
    <div className="watchlist">
      <h2>MY WATCHLIST</h2>
      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <p>
            Click "Watch" on an asset to add it
            here.
          </p>

        </div>
      ) : (
        watchlist.map((asset) => (
          <div
            key={asset.id}
            className="watch-item"
          >
            <div className="watch-info">
              <img
                src={asset.image}
                alt={asset.name}
              />
              <div>
                <h4>{asset.name}</h4>
                <span>
                  {asset.symbol.toUpperCase()}
                </span>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() =>
                removeFromWatchlist(asset.id)
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;