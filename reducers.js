'use strict';

import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, Filters } from './actions';

const mockData = [
	{
		id: 1,
		text: 'Display todo list',
		completed: true
	},
	{
		id: 2,
		text: 'Toggle todo',
		completed: true
	},
	{
		id: 3,
		text: 'Effective filters',
		completed: true
	},
	{
		id: 4,
		text: 'Add new todo',
		completed: false
	}
]

function todos(state = [], action) {
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
