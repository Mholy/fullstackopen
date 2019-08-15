import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()

        const newPerson = {
            name: newName
        }

        setPersons(persons.concat(newPerson))
        setNewName('')
    }

    const handleNameAdd = (event) => {
        setNewName(event.target.value)
    }

    const renderNames = () => persons.map(person =>
        <div key={person.name}>{person.name}</div>
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameAdd} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <p>
                {renderNames()}
            </p>
        </div>
    )
}

export default App
