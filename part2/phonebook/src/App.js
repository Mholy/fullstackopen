import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [personsFilter, setPersonsFilter] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => setPersons(response.data))
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

    const checkPersonAdded = (persons, newPerson) => {
        let personAdded = false
        for (let person of persons) {
            if (person.name.toLowerCase() === newPerson.name.toLowerCase()) {
                personAdded = true
            }
        }
        return personAdded
    }

    const addName = event => {
        event.preventDefault()

        const newPerson = {
            name: newName,
            number: newNumber
        }

        if (checkPersonAdded(persons, newPerson)) {
            alert(`${newPerson.name} is already added to the phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
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
            <Persons persons={persons} personsFilter={personsFilter} />
        </>
    )
}

export default App
