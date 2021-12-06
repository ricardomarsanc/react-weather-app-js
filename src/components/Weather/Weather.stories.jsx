import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather,
    argTypes: {
        state: { control: { type: "text" }},
        temperature: { control: { type: "number" }}
    }
}

const Template = (args) => <Weather {...args}></Weather>

export const WeatherCloud = Template.bind({})
WeatherCloud.args = { state: "cloud", temperature: 10 }
export const WeatherSunny = () => Template.bind({})
WeatherSunny.args = { state: "sunny", temperature: 20 }