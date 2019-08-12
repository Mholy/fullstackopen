import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({clickHandler, text}) => (
	<>
		<button onClick={clickHandler}>{text}</button>
	</>
)

const Statistic = (props) => {
	return (
		<>
			<tr>
				<td>{props.text}</td>
				<td>{props.value}</td>
			</tr>
		</>
	)
}

const Statistics = (props) => {
	const {good, neutral, bad} = props
	let sum = 0
	let avg = 0
	let pos = 0

	sum = good + neutral + bad

	if (sum > 0) {
		avg = (good * 1 + bad * -1) / sum
		pos = good / sum * 100
	}

	if (sum === 0) {
		return (
			<>
				<p>No feedback given</p>
			</>
		)
	}

	return (
		<>
			<table>
				<tbody>
					<Statistic text="Good" value={good} />
					<Statistic text="Neutral" value={neutral} />
					<Statistic text="Bad" value={bad} />
					<Statistic text="Sum" value={sum} />
					<Statistic text="Average" value={avg} />
					<Statistic text="Positive" value={pos} />
				</tbody>
			</table>
		</>
	)
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const setGoodFeedbackHandler = () => () => {
		setGood(good + 1)
	}
	const setNeutralFeedbackHandler = () => () => {
		setNeutral(neutral + 1)
	}
	const setBadFeedbackHandler = () => () => {
		setBad(bad + 1)
	}

	return (
		<>
			<h2>Give feedback</h2>
			<Button clickHandler={setGoodFeedbackHandler()} text="good" />
			<Button clickHandler={setNeutralFeedbackHandler()} text="neutral" />
			<Button clickHandler={setBadFeedbackHandler()} text="bad" />
			<h2>Statistic</h2>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
