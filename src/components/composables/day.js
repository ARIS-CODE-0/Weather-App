function getDayName(timestamp) {
    if(timestamp.toString().length === 10) {
        timestamp = timestamp * 1000;
    }

    const date = new Date(timestamp);

    const days = ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"]

    return days[date.getDay()];
}

function getTempInCelsius(temp) {
    return Math.round(temp - 273.15)
}

function getWeatherEmoji(weatherCode) {
  if (weatherCode >= 200 && weatherCode < 300) return "⛈️"; // Orages
  if (weatherCode >= 300 && weatherCode < 400) return "🌦️"; // Bruine
  if (weatherCode >= 500 && weatherCode < 600) return "🌧️"; // Pluie
  if (weatherCode >= 600 && weatherCode < 700) return "❄️"; // Neige
  if (weatherCode >= 700 && weatherCode < 800) return "🌫️"; // Brouillard
  if (weatherCode === 800) return "☀️"; // Ciel clair
  if (weatherCode > 800 && weatherCode < 805) return "☁️"; // Nuages
  return "❓"; // Par défaut
}
export { getWeatherEmoji, getDayName, getTempInCelsius };