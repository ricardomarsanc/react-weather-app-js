import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const ForecastItemExample = () => {
    return (
        <ForecastItem
            hour={ 10 }
            weekDay={ "Lunes" }
            state={ "clear" }
            temperature={ 10 }
        ></ForecastItem>
    )
}