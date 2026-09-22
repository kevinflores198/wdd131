const tempC = 30;
const windKmh = 11;

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const windchillEl = document.getElementById('windchill');

if (tempC <= 10 && windKmh > 4.8) {
    windchillEl.textContent = `${calculateWindChill(tempC, windKmh)}°C`;
} else {
    windchillEl.textContent = "N/A";
}