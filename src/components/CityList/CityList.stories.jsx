import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Valladolid", country: "España" },
    { city: "París", country: "Francia" },
    { city: "Tokio", country: "Japón" },
    { city: "Londres", country: "Reino Unido" }
]

export const CityExample = (args) => <CityList {...args} onClickCity={action("Click en la fila de la ciudad")}></CityList>
CityExample.args = { cities: cities }