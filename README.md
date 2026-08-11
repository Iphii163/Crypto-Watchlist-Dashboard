# 💰 Crypto & Stock Watchlist Dashboard

A responsive **React-based Crypto & Stock Watchlist Dashboard** that fetches live cryptocurrency market data from the CoinGecko API. Users can search for assets, add cryptocurrencies to a personal watchlist, and simulate buying assets using a virtual wallet balance.

## ✨ Features

* Fetches live cryptocurrency market data
* Search assets by name or symbol
* Add cryptocurrencies to a personal watchlist
* Remove assets from the watchlist
* Virtual wallet with an initial balance of **$10,000**
* Simulated asset purchasing
* Prevents purchases when the wallet balance is insufficient
* Persists wallet balance using `localStorage`
* Persists watchlist using `localStorage`
* Responsive layout for different screen sizes
* Loading state while fetching data
* Error handling for failed API requests
* Displays current price and 24-hour price change

## 🛠️ Technologies Used

* **React 19** – UI development
* **JavaScript (ES6+)** – Application logic
* **Axios** – API requests
* **Vite** – Development and build tool
* **CSS3** – Styling and responsive design
* **CoinGecko API** – Cryptocurrency market data
* **LocalStorage** – Persistent wallet and watchlist data

## 📂 Project Structure

```text
crypto-dashboard/
│
├── src/
│   ├── components/
│   │   ├── AssetList.jsx
│   │   ├── AssetRow.jsx
│   │   ├── Dashboard.jsx
│   │   ├── WalletStatus.jsx
│   │   └── WatchList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── package.json
├── eslint.config.js
└── vite.config.js
```

## 🌐 Live Demo

🔗 **[View Live Demo]([https://crypto-watchlist-dashboard-rho.vercel.app])**
