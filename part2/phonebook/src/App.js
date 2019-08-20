import React, { useState, useEffect } from 'react'
import personsService from './services/persons'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [personsFilter, setPersonsFilter] = useState('')

    useEffect(() => {
        personsService
            .getAll()
            .then(initialPersons => setPersons(initialPersons))
    }, [])

    const handleNameAdd = event => {
        setNewName(event.target.value)
    }

    const handleNumberAdd = event => {
        setNewNumber(event.target.value)
    }

    const handleFilter = event => {
        setPersonsFilter(event.target.value)
    }

    const handleDeleting = (id, name) => {
        if (window.confirm(`Delete ${name}?`, false)) {
            personsService
                .remove(id)
                .then(response => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }

    const checkPersonAdded = (persons, newPerson) => {
        for (let person of persons) {
            if (person.name.toLowerCase() === newPerson.name.toLowerCase()) {
                return person
            }
        }
        return false
    }

    const addName = event => {
        event.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        const addedPerson = checkPersonAdded(persons, newPerson)
        if (addedPerson) {
            if ( window.confirm(`${newPerson.name} is already added to the phonebook, replace the old number with a new one?`, false) ) {
                personsService
                    .update(addedPerson.id, {...addedPerson, number: newPerson.number})
                    .then(updatedPerson => {
                        setPersons(persons.map(person => person.id !== addedPerson.id ? person : updatedPerson))
                    })
            }
        } else {
            personsService
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                })
        }

        setNewName('')
        setNewNumber('')
    }

    return (
        <>
            <h2>Phonebook</h2>
            <Filter handleFilter={handleFilter} />
            <h2>Add a new</h2>
            <PersonForm
                addName={addName}
                handleNameAdd={handleNameAdd}
                handleNumberAdd={handleNumberAdd}
                newName={newName}
                newNumber={newNumber}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} personsFilter={personsFilter} handleDeleting={handleDeleting} />
        </>
    )
}

export default App
