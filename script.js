let btcPrice = 0;

async function fetchBTCPrice() {
    try {
        let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        let data = await response.json();
        btcPrice = data.bitcoin.usd;
        document.getElementById("btcPrice").innerText = "BTC Price: $" + btcPrice;
    } catch (error) {
        document.getElementById("btcPrice").innerText = "BTC Price: $40,000";
        btcPrice = 40000;
    }
}

fetchBTCPrice();
