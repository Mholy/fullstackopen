import React from 'react'

export const CountriesList = ({ country, handleFilter }) => (
    <div>
        {country.name}
        <button onClick={handleFilter} value={country.name}>show</button>
    </div>
)
