import React from "react";
import { render } from "@testing-library/react";
import ForecastItem from './ForecastItem'

test("ForecastItem render", async () => {
    const { findByText } = render(
        <ForecastItem 
            hour={ 10 }
            weekDay={ "Lunes" }
            state={ "clear" }
            temperature={ 10 }
        ></ForecastItem>
    )
})