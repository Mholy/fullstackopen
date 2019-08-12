import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({clickHandle, text}) => (
	<>
		<button onClick={clickHandle}>{text}</button>
	</>
)

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

	const getNext = () => () => {
		setSelected( Math.floor(Math.random() * props.anecdotes.length) )
	}

	const vote = () => () => {
		const votes = [...points]
		votes[selected] += 1
		setPoints(votes)
	}

	const getTopOne = () => {
		let maxVotes = points[0]
		let topOne = 0
		for (let i = 0; i < points.length; i++) {
			if (points[i] > maxVotes) topOne = i
		}
		return topOne
	}

	return (
		<>
			<h2>Anecdote of the day</h2>
			<p>{props.anecdotes[selected]}</p>
			<p>has {points[selected]} votes</p>
			<Button clickHandle={vote()} text="vote" />
			<Button clickHandle={getNext()} text="next anecdote" />
			<h2>Anecdote with most votes</h2>
			<p>{props.anecdotes[getTopOne()]}</p>
			<p>has {points[getTopOne()]} votes</p>
		</>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)
