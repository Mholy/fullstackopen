import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '14440901223'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const checkPersonAdded = (persons, newPerson) => {
        let personAdded = false;
        for (let person of persons)  {
            if (person.name.toLowerCase() === newPerson.name.toLowerCase()) {
                personAdded = true;
            }
        }
        return  personAdded
    }

    const addName = (event) => {
        event.preventDefault()
        
        const newPerson = {
            name: newName,
            number: newNumber
        }

        if ( checkPersonAdded(persons, newPerson) ) {
            alert(`${newPerson.name} is already added to the phonebook`)
        } else {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameAdd = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberAdd = (event) => {
        setNewNumber(event.target.value)
    }

    const renderNames = () => persons.map(person =>
        <div key={person.name}>{person.name} {person.number}</div>
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameAdd} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberAdd} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {renderNames()}
            </div>
        </div>
    )
}

export default App
