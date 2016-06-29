import React from 'react'
import {
	View,
	StyleSheet
} from 'react-native'
import Filter from './Filter'
import TodoList from '../containers/TodoList'

const TodoIndex = (props) => (
	<View style={styles.main}>
		<Filter {...props} />
		<TodoList {...props} />
	</View>
)

export default TodoIndex

const styles = StyleSheet.create({
	main: {
		marginTop: 64,
		flex: 1,
	},
})
