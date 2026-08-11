function WalletStatus({
  walletBalance,
}) {
  return (
    <div className="wallet-card">

      <span className="wallet-title">
        Wallet Balance
      </span>

      <h2 className="wallet-amount">
        $
        {walletBalance.toLocaleString(
          undefined,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }
        )}
      </h2>
    </div>
  );
}

export default WalletStatus;