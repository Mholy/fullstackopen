import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Weather = ({ country }) => {
    const [weather, setWeather] = useState({})
    
    useEffect(() => {
        const capital = country.capital.replace(/\s/g,'')
        axios
            .get(
                `http://api.apixu.com/v1/current.json?key=6d42ab699c9f41e1b6494823191808&q=${
                    capital
                }`
            )
            .then(response => {
                setWeather(response.data)
            })
    }, [country])
    if (!weather.hasOwnProperty('current')) {
        return null
    }
    return (
        <>
            <h2>Weather in {country.capital}</h2>
            <div>
                <strong>Temperature:</strong>{' '}
                {weather.current.temp_c} Celsius
            </div>
            <div>
                <img
                    src={`http://${weather.current.condition.icon}`}
                    alt={weather.current.condition.text}
                />
            </div>
            <div>
                <strong>Wind:</strong>{' '}
                {weather.current.wind_mph} mph direction{' '}
                {weather.current.wind_dir}
            </div>
        </>
    )
}
