import React from 'react'
import SinglePerson from './SinglePerson'

const Persons = ({ persons, personsFilter }) => {
    const filteredPersons = personsFilter
        ? persons.filter(person =>
              person.name.toLowerCase().includes(personsFilter.toLowerCase())
          )
        : persons

    const renderPersons = () =>
        filteredPersons.map(person => (
            <SinglePerson key={person.name} person={person} />
        ))

    return <div>{renderPersons()}</div>
}

export default Persons
