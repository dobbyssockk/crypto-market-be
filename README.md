# 🛠️ Crypto Market [Backend]

A lightweight Node.js + Express server that powers the Crypto Market dashboard. It provides candlestick chart data and real-time price information for selected cryptocurrencies via CCXT and Luxon.

---

## 🔗 Related Project

> 👉 Frontend repository: [crypto-market-fe](https://github.com/dobbyssockk/crypto-market-fe)

---

## 🧭 Project Overview

This backend application exposes a simple API that fetches historical OHLCV (Open-High-Low-Close-Volume) data for cryptocurrencies using the Binance exchange via the `ccxt` library.  
It’s designed to work with the Crypto Market React frontend and includes REST endpoints, timestamp formatting with `luxon`, and full CORS support for local development.

---

## 🚀 Features

- REST API built with Express
- OHLCV candlestick data via `ccxt` (Binance)
- Timestamp formatting using `luxon`
- CORS-enabled for frontend integration

---

## 📡 Available Endpoints

`GET /candles/:symbol`

- Returns 30 days of OHLCV data for the given cryptocurrency symbol.
- Example: `/candles/ETH` → returns data for `ETH/USDT`.

---

## 🛠️ Technologies Used

- **Node.js** – server runtime
- **Express.js** – minimal REST API framework
- **ccxt** – unified crypto market API
- **Luxon** – modern date/time handling
- **CORS** – cross-origin request support

---

## 💡 Key Concepts

- **External API integration**: fetch live data from Binance
- **Custom data formatting**: normalize data for chart rendering
- **Clean architecture**: decoupled backend logic and UI
- **Minimal config**: no build tools or database setup required

---

## 🧪 Local Installation

```bash
git clone https://github.com/dobbyssockk/crypto-market-be.git
cd crypto-market-be
npm install
npm start
```
