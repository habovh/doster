import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

import {
	
} from 'react-native'

const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) => dispatch(addTodo(text))
})

const AddTodoCont = connect(
	null,
	mapDispatchToProps
)(AddTodo)

export default AddTodoCont