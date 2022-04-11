import React from 'react'
import NewNote from './notesComponents/newNote'
import Notes from './notesComponents/notes'
import VisibilityFilter from './notesComponents/visibilityFilter'

const App = () => {
	const filterSelected = (value) => console.log(value)


	return (
		<div>
		  <NewNote />
		  <VisibilityFilter />
		  <Notes />
		</div>
		)
}

export default App




