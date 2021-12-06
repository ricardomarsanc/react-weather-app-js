import React from 'react'
import PropTypes from 'prop-types'
import { Grid, List, ListItem, Alert } from '@mui/material'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import useCityList from '../../hooks/useCityList'
import { getCityCode } from '../../utils/utils'
import { useWeatherDispatchContext, useWeatherStateContext } from '../../WeatherContext'

const CityListItem = React.memo(function CityListItem({ city, country, countryCode, weather, eventOnClickCity }) {
    return (
        <ListItem button onClick={ () => { return eventOnClickCity(city, countryCode) } }>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={ city } country={ country } />
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather state={ weather && weather.state } temperature={ weather && weather.temperature } />
                </Grid>
            </Grid>
        </ListItem>
    )
})

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode } = cityAndCountry
    return <CityListItem key={ getCityCode(city, countryCode) } eventOnClickCity={ eventOnClickCity } weather={ weather } { ...cityAndCountry }/>
}

const CityList = ({ cities, onClickCity }) => {
    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()

    const { allWeather } = data
    const { error, setError } = useCityList(cities, allWeather, actions)

    return (
        <div>
            {
                error && <Alert onClose={ () => setError(null) } severity="error"> {error} </Alert>
            }
            <List>
                { cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)])) }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default React.memo(CityList)
