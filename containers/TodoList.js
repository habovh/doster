import { connect } from 'react-redux';
import { ListView } from 'react-native'
import { Filters } from '../actions';
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'
import SwipeableListView from 'SwipeableListView'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters[0].actionName:
        return todos
    case Filters[1].actionName:
        return todos.filter(t => !t.completed)
    case Filters[2].actionName:
        return todos.filter(t => t.completed)
    default:
        return todos
  }
}

const mapStateToProps = (state) => {
    var ds = new SwipeableListView.getNewDataSource()
    return {
      todoDataSource: ds.cloneWithRowsAndSections({s1: getVisibleTodos(state.todos, state.visibilityFilter)}, null, null)
    }
}

const mapDispatchToProps = (dispatch) => ({
  onTodoPress: (id) => dispatch(toggleTodo(id)),
  onTodoDeletePress: (id) => dispatch(deleteTodo(id))
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
