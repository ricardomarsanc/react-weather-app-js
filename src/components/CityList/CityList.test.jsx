import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

test("CityList render", async () => {
    const cities = [
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Valladolid", country: "España" },
        { city: "París", country: "Francia" },
        { city: "Tokio", country: "Japón" },
        { city: "Londres", country: "Reino Unido" }
    ]
    const { findAllByRole } = render(<CityList cities={ cities } onClickCity={ () => {} }/>)
    const items = await findAllByRole("button")
    expect(items).toHaveLength(cities.length)
})

test("CityList click on item", async () => {
    // Utilizo funciones mock para simular un click
    const clickOnItem =  jest.fn()
    const cities = [
        { city: "Buenos Aires", country: "Argentina" },
        { city: "Valladolid", country: "España" },
        { city: "París", country: "Francia" },
        { city: "Tokio", country: "Japón" },
        { city: "Londres", country: "Reino Unido" }
    ]

    const { findAllByRole } = render(<CityList cities={ cities } onClickCity={ clickOnItem } />)
    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(clickOnItem).toHaveBeenCalledTimes(1)
})