import { validValues } from '../../components/IconState'
import { getCityCode, toCelsius } from '../utils'

const getAllWeather = (response, city, countryCode) => {
    const { data } = response
        
    const temperature = toCelsius(data.main.temp)
    const stateFromServer = data.weather[0].main.toLowerCase()

    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const humidity = data.main.humidity
    const wind = data.wind.speed
    
    return({
        [getCityCode(city, countryCode)]: {
            temperature,
            state, 
            humidity,
            wind
        }
    })
}

export default getAllWeather