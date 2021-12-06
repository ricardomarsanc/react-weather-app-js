import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

test("Forecast render", async () => {

    const forecastItemList = [
        { hour: 18, state: "clear", temperature: 17, weekDay: "Jueves" },
        { hour: 6, state: "clouds", temperature: 28, weekDay: "Viernes" },
        { hour: 12, state: "thunderstorm", temperature: 18, weekDay: "Miércoles" },
        { hour: 21, state: "drizzle", temperature: -1, weekDay: "Lunes" },
        { hour: 23, state: "snow", temperature: 11, weekDay: "Domingo" },
        { hour: 3, state: "rain", temperature: 4, weekDay: "Sábado" }
    ]
    const { findAllByTestId } = render(<Forecast forecastItemList={ forecastItemList }></Forecast>)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(forecastItemList.length)
})