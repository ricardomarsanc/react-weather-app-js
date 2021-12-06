const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: "Valladolid", country: "España", countryCode: "ES" },
    { city: "París", country: "Francia", countryCode: "FR" },
    { city: "Tokio", country: "Japón", countryCode: "JP" },
    { city: "Londres", country: "Reino Unido", countryCode: "GB" }
]

export const getCities = () => (cities)

export const getCountryNameByCode = (countryCode) => cities.filter(item => item.countryCode === countryCode)[0].country