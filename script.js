let btcPrice = 0;

async function fetchBTCPrice() {
    try {
        let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        let data = await response.json();
        btcPrice = data.bitcoin.usd;

        let priceElement = document.getElementById("btcPrice");
        if(priceElement){
            priceElement.innerText = "BTC Price: $" + btcPrice;
        }

    } catch (error) {
        btcPrice = 40000;
        let priceElement = document.getElementById("btcPrice");
        if(priceElement){
            priceElement.innerText = "BTC Price: $40,000";
        }
    }
}

fetchBTCPrice();
