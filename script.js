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
function applyLoan(){
    let duration = document.getElementById("loanDuration").value;

    let baseLoan = (btcBalance * btcPrice) * 0.5;

    let interestRate = 0;
    if(duration == 7) interestRate = 0.05;
    if(duration == 14) interestRate = 0.08;
    if(duration == 30) interestRate = 0.12;

    let totalLoan = baseLoan + (baseLoan * interestRate);

    loan = totalLoan;
    localStorage.setItem("loan", loan);
    document.getElementById("activeLoan").innerText = "$" + totalLoan.toFixed(2);
}
