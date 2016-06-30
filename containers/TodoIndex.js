import TodoIndex from '../components/TodoIndex.js'
import { connect } from 'react-redux'
import { Filters, setVisibilityFilter, addTodo } from '../actions'
import _ from 'lodash'

const mapStateToProps = (state) => ({
	filterSelectedIndex: _.findIndex(Filters, ['actionName', state.visibilityFilter])
})

const mapDispatchToProps = (dispatch) => ({
	filterValueChange: (displayName) => {
		const filterObj = _.find(Filters, ['displayName', displayName])
		const actionName = filterObj.actionName
		dispatch(setVisibilityFilter(actionName))
	}
})

const TodoIndexCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoIndex)

export default TodoIndexCont
