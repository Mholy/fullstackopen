import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterPhonebook, setFilterPhonebook] = useState('')

    const phonesToShow = filterPhonebook 
        ? persons.filter(person => person.name.toLowerCase().includes(filterPhonebook.toLowerCase()))
        : persons

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

    const handleFiltering = (event) => {
        setFilterPhonebook(event.target.value)
    }

    const renderNames = () => phonesToShow.map(person =>
        <div key={person.name}>{person.name} {person.number}</div>
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input onChange={handleFiltering} />
            </div>
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
