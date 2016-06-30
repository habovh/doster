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
		margin: 10,
		paddingBottom: 5,
		borderBottomColor: '#0e7aff',
		borderBottomWidth: 1
	},
	todoInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18
	},
	addButton: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#0e7aff',
		borderColor: '#0e7aff',
		borderWidth: 1,
		borderRadius: 8,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	addButtonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	}
})

class AddTodo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			inputText: ""
		}
	}

	addNewTodo = () => {
		this.props.addTodo(this.state.inputText)
		this.setState({ inputText: "" })
		this._textInput.blur()
	}

	render () {
		return (
			<View style={styles.addTodoContainer}>
				<TextInput
					ref={(input) => this._textInput = input}
					value={this.state.inputText}
					onChangeText={inputText => this.setState({ inputText })}
					onSubmitEditing={this.addNewTodo}
					placeholder="What's next?"
					returnKeyType="done"
					clearButtonMode="while-editing"
					enablesReturnKeyAutomatically={true}
					style={styles.todoInput}
				/>
				<TouchableHighlight
					underlayColor='#51bcff'
					onPress={this.addNewTodo}
					style={styles.addButton}>
					<Text style={styles.addButtonText}>+ Add</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

export default AddTodo
