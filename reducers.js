'use strict';

import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, Filters } from './actions';

const mockData = [
	{
		id: 0,
		text: 'number 1',
		completed: false
	},
	{
		id: 1,
		text: 'number 2',
		completed: false
	},
	{
		id: 2,
		text: 'number 3',
		completed: true
	}
]

function todos(state = mockData, action) {
	switch (action.type) {
		case ADD_TODO:
			return [
					...state,
					{
						id: action.id,
						text: action.text,
						completed: false
					}
				]
		case TOGGLE_TODO:
			return state.map((todo) => {
					if (todo.id === action.id) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						})
					}
					return todo
				})
		default:
			return state
	}
}

function visibilityFilter(state = Filters[0].actionName, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp
