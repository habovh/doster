import { connect } from 'react-redux';
import { ListView } from 'react-native'
import { Filters } from '../actions';
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

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
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return {
      todoDataSource: ds.cloneWithRows(getVisibleTodos(state.todos, state.visibilityFilter))
    }
}

const mapDispatchToProps = (dispatch) => ({
  onTodoPress: (id) => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
