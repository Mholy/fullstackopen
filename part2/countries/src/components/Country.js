import React from 'react'
import { Weather } from './Weather'

export const Country = ({ country }) => {
    return (
        <>
            <h2>{country.name}</h2>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                ))}
            </ul>
            <p>
                <img src={country.flag} width='150' alt='country flag' />
            </p>
            <Weather country={country} />
        </>
    )
}
