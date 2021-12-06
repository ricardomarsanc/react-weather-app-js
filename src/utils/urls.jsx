const api_key = "7e35d29b3ccab93823f65d580bd8dd5c"

export const getWeatherUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${api_key}`
)

export const getForecastUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${api_key}`
)