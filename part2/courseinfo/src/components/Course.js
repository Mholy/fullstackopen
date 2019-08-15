import React from 'react'

const Courses = ( {courses} ) => {
	const course = () => courses.map(course => {
		return (
			<div key={course.id}>
				<Header course={course.name} />
				<Content parts={course.parts} />
				<Total parts={course.parts}/>
			</div>
		)
	})

	return (
		<>
			{course()}
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

export default Courses
