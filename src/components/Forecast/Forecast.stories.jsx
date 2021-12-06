import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    { hour: 18, state: "clear", temperature: 17, weekDay: "Jueves" },
    { hour: 6, state: "clouds", temperature: 28, weekDay: "Viernes" },
    { hour: 12, state: "drizzle", temperature: 18, weekDay: "Miércoles" },
    { hour: 21, state: "thunderstorm", temperature: -1, weekDay: "Lunes" },
    { hour: 23, state: "snow", temperature: 11, weekDay: "Domingo" },
    { hour: 3, state: "rain", temperature: 4, weekDay: "Sábado" },
]

export const ForecastExample = (args) => (<Forecast {...args}></Forecast>)
ForecastExample.args = { forecastItemList: forecastItemList }