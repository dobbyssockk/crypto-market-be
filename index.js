import ccxt from 'ccxt';
import { DateTime } from 'luxon';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.get('/candles/:symbol', async (req, res) => {
    const symbol = req.params.symbol;
    const data = await getCryptoCandles(symbol);
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

async function getCryptoCandles(symbol, days = 30) {
    const exchange = new ccxt.binance();

    const market = `${symbol}/USDT`;
    const timeframe = '1d';

    const since = DateTime.now().minus({ days }).toMillis();

    try {
        const ohlcv = await exchange.fetchOHLCV(market, timeframe, since);

        const candles = ohlcv.map(([timestamp, open, high, low, close, volume]) => ({
            timestamp: DateTime.fromMillis(timestamp).toISO(),
            open,
            high,
            low,
            close,
            volume
        }));

        return candles;
    } catch (error) {
        console.error(error);
        return [];
    }
}