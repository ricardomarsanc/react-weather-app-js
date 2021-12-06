import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy, WiDaySunny, WiRain, WiSnow, WiRaindrop, WiThunderstorm, WiDayHaze } from 'react-icons/wi'

export const validValues = ["clouds", "drizzle", "thunderstorm", "clear", "rain", "snow", "mist", "fog"]
const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    mist: WiDayHaze,
    fog: WiDayHaze
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName></StateByName>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
}

export default IconState


