import React from 'react'

export const Filter = ({ handleFilter }) => (
    <div>
        find countries <input onChange={handleFilter} />
    </div>
)
