import React from 'react'
import {
	View,
	StyleSheet
} from 'react-native'
import Filter from './Filter'
import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'


const styles = StyleSheet.create({
	main: {
		marginTop: 64,
		flex: 1,
	},
})


const TodoIndex = (props) => (
	<View style={styles.main}>
		<AddTodo />
		<Filter {...props} />
		<TodoList />
	</View>
)

export default TodoIndex