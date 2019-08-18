import React from 'react'

import { Country } from './Country'
import { CountriesList } from './CountriesList'

export const Countries = ({ countries, filter, handleFilter }) => {
    if (filter === '') {
        return null
    }
    const filteredCountries = filter
        ? countries.filter(country =>
              country.name.toLowerCase().includes(filter.toLowerCase())
          )
        : countries
    const length = filteredCountries.length

    if (length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (length <= 10 && length > 1) {
        return filteredCountries.map(country => (
            <CountriesList
                key={country.name}
                country={country}
                handleFilter={handleFilter}
            />
        ))
    } else if (length === 1) {
        return <Country country={filteredCountries[0]} />
    } else if (length === 0) {
        return <div>No matches, specify another filter</div>
    }
}
