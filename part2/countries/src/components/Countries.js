import React from 'react';

import { Country } from './Country';

export const Countries = ({ countries, filter }) => {
    if (filter === '') {
        return null;
    }
    const filteredCountries = filter
        ? countries.filter(country => country.name.toLowerCase().includes(filter))
        : countries;
    const length = filteredCountries.length;
    if (length > 10) {
        return <div>Too many matches, specify another filter</div>;
    }
    else if (length <= 10 && length > 1) {
        return filteredCountries.map(country => (<div key={country.name}>{country.name}</div>));
    }
    else if (length === 1) {
        return <Country country={filteredCountries[0]} />;
    }
    else if (length === 0) {
        return <div>No matches, specify another filter</div>;
    }
};
