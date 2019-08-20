import React from 'react'

const SinglePerson = ({ person, handleDeleting }) => (
    <div>
        {person.name} {person.number} <button onClick={() => handleDeleting(person.id, person.name)}>delete</button>
    </div>
)

export default SinglePerson
