import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

import filterReducer from './reducers/filterReducer'
import noteReducer from './reducers/noteReducer'


	const reducer = combineReducers({
		notes: noteReducer,
		filter: filterReducer,
	})

	const store = createStore(reducer)

	console.log(store.getState())

	const root = document.getElementById('root')
	const ReactRoot = ReactDOM.createRoot(root)
	ReactRoot.render(
		<Provider store={store}>
			<App />
		</Provider>
		)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

