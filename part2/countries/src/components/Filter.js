import React from 'react'

export const Filter = ({ handleFilter, value }) => (
    <div>
        find countries <input value={value} onChange={handleFilter} />
    </div>
)
