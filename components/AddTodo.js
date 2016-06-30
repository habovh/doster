import React from 'react'
import {
	StyleSheet,
	TextInput,
	TouchableHighlight,
	Text,
	View
} from 'react-native'

var styles = StyleSheet.create({
	addTodoContainer: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		margin: 10
	},
	todoInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48bbec',
		borderRadius: 8,
		color: '#48bbec'
	},
	addButton: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#37c88b',
		borderColor: '#37c88b',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	addButtonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	}
})


const AddTodo = (props) => (
	<View style={styles.addTodoContainer}>
		<TextInput
			onSubmitEditing={(value) => console.log('Submitted: ' + value)}
			placeholder="What's next?"
			returnKeyType="done"
			clearButtonMode="while-editing"
			enablesReturnKeyAutomatically={true}
			style={styles.todoInput}
		/>
		<TouchableHighlight
			underlayColor='#37c88b'
			onPress={() => console.log('Add todo button')}
			style={styles.addButton}
		>
			<Text style={styles.addButtonText}>Add</Text>
		</TouchableHighlight>
	</View>
)

export default AddTodo
