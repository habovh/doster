import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'


const mapDispatchToProps = (dispatch) => ({
	addTodo: (text) => dispatch(addTodo(text))
})

const AddTodoCont = connect(
	null,
	mapDispatchToProps
)(AddTodo)

export default AddTodoCont