import React from 'react'

const PersonForm = props => (
    <form onSubmit={props.addName}>
        <div>
            name:
            <input value={props.newName} onChange={props.handleNameAdd} />
        </div>
        <div>
            number:
            <input value={props.newNumber} onChange={props.handleNumberAdd} />
        </div>
        <div>
            <button type='submit'>add</button>
        </div>
    </form>
)

export default PersonForm
