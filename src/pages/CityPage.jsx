import React, { useMemo } from 'react'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import { Grid, CircularProgress } from '@mui/material'
import AppFrame from '../components/AppFrame'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCode } from '../utils/serviceCities'
import { useWeatherDispatchContext, useWeatherStateContext } from '../WeatherContext'

const CityPage = () => {
    const actions = useWeatherDispatchContext()
    const data = useWeatherStateContext()

    const { allWeather, allChartData, allForecastItemList } = data
    const { city, countryCode } = useCityPage(allChartData, allForecastItemList, actions)

    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])

    useCityList(cities, allWeather, actions)

    const cityCode = getCityCode(city, countryCode)
    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const country = countryCode && getCountryNameByCode(countryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    return (
        <AppFrame>
            <Grid container spacing={2} justifyContent="space-around" direction="column">
                <Grid container justifyContent="center" alignItems="flex-end" item xs={ 12 }>
                    <CityInfo 
                        city={ city }
                        country={ country }
                    />
                </Grid>
                <Grid container justifyContent="center" item xs={ 12 }>
                    <Weather
                        state={ state }
                        temperature={ temperature }
                    />
                    {
                        humidity && wind &&
                        <WeatherDetails
                            humidity={ humidity }
                            wind={ wind }
                        />
                    }
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                    {
                        !chartData && !forecastItemList && <CircularProgress />
                    }
                </Grid>
                <Grid item xs={ 12 }>
                    {
                        chartData && <ForecastChart data={ chartData }/>
                    }
                </Grid>
                <Grid item xs={ 12 }>
                    {
                        forecastItemList && <Forecast forecastItemList= { forecastItemList }/>
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage
