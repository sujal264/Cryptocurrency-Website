document.addEventListener("DOMContentLoaded", () => {
    const btcElement = document.getElementById("bitcoin");
    const ethElement = document.getElementById("ethereum");
    const dogeElement = document.getElementById("dogecoin");

    const API_URL = "https://api.coincap.io/v2/assets";

    async function fetchCryptoPrices() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();

            const bitcoin = data.data.find(coin => coin.id === "bitcoin");
            const ethereum = data.data.find(coin => coin.id === "ethereum");
            const dogecoin = data.data.find(coin => coin.id === "dogecoin");

            if (bitcoin) btcElement.textContent = parseFloat(bitcoin.priceUsd).toFixed(2);
            if (ethereum) ethElement.textContent = parseFloat(ethereum.priceUsd).toFixed(2);
            if (dogecoin) dogeElement.textContent = parseFloat(dogecoin.priceUsd).toFixed(2);

        } catch (error) {
            console.error("Error fetching cryptocurrency prices:", error);
        }
    }

    fetchCryptoPrices();

    setInterval(fetchCryptoPrices, 60000);
});
