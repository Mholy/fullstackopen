import React from 'react'
import SinglePerson from './SinglePerson'

const Persons = ({ persons, personsFilter, handleDeleting }) => {
    const filteredPersons = personsFilter
        ? persons.filter(person =>
              person.name.toLowerCase().includes(personsFilter.toLowerCase())
          )
        : persons

    const renderPersons = () =>
        filteredPersons.map(person => (
            <SinglePerson key={person.id} person={person} handleDeleting={handleDeleting} />
        ))

    return <div>{renderPersons()}</div>
}

export default Persons
