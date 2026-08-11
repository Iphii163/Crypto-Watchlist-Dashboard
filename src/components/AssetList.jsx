import AssetRow from "./AssetRow";

function AssetList({
  assets,
  walletBalance,
  buyAsset,
  addToWatchlist,
  watchlist,
}) {
  if (assets.length === 0) {
    return (
      <p className="empty">
        No assets found.
      </p>
    );
  }

  return (
    <div className="asset-list">
      {assets.map((asset) => (
        <AssetRow
          key={asset.id}
          asset={asset}
          walletBalance={walletBalance}
          buyAsset={buyAsset}
          addToWatchlist={addToWatchlist}
          watchlist={watchlist}
        />
      ))}
    </div>
  );
}

export default AssetList;