import React from 'react'
import ReactDOM from 'react-dom'

const Course = ( {course} ) => {
return (
	<>
		<Header course={course.name} />
		<Content parts={course.parts} />
		<Total parts={course.parts}/>
	</>
)
}

const Header = ( {course} ) =>
		<h1>{course}</h1>

const Content = ( {parts} ) => {
	const part = () => parts.map(part =>
		<Part key={part.id} part={part} />
	)

	return (
		<>
			{part()}
		</>
	)
}

const Part = ( {part} ) =>
		<p>{part.name} {part.exercises}</p>

const Total = ( {parts} ) => {
	const total = () => parts.reduce( (acc, cur) => (acc + cur.exercises), 0 )

	return (
		<>
			<p>Number of exercises {total()}</p>
		</>
	)
}

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			},
			{
				name: 'Redux',
				exercises: 11,
				id: 4
			}
		]
	}

	return (
		<>
			<Course course={course} />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
