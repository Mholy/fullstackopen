import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({clickHandler, text}) => (
	<>
		<button onClick={clickHandler}>{text}</button>
	</>
)

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const setGoodFeedbackHandler = () => () => setGood(good + 1)
	const setNeutralFeedbackHandler = () => () => setNeutral(neutral + 1)
	const setBafFeedbackHandler = () => () => setBad(bad + 1)

	return (
		<>
			<h2>Give feedback</h2>
			<Button clickHandler={setGoodFeedbackHandler()} text="good" />
			<Button clickHandler={setNeutralFeedbackHandler()} text="neutral" />
			<Button clickHandler={setBafFeedbackHandler()} text="bad" />
			<h2>Statistic</h2>
			<p>Good {good}</p>
			<p>Neutral {neutral}</p>
			<p>Bad {bad}</p>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
