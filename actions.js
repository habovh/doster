// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Other constants
export const Filters = [
    {
        actionName: 'SHOW_ALL',
        displayName: 'All',
    },
    {
        actionName: 'SHOW_ACTIVE',
        displayName: 'Active',
    },
    {
        actionName: 'SHOW_COMPLETED',
        displayName: 'Completed',
    },
]

//Actions creators
let nextTodoId = 1
export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
