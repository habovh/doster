'use strict';

import React, { PropTypes } from 'react'

import {
  View,
  StyleSheet,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native';


var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const TodoList = ({ todoDataSource, onTodoPress }) => (
  <View style={styles.container}>
      <ListView
      dataSource={todoDataSource}
      renderRow={(todo) =>
        <TouchableHighlight onPress={() => onTodoPress(todo.id)} underlayColor='#dddddd'>
            <Text>{todo.text}{todo.completed ? "✅" : "❌"}</Text>
        </TouchableHighlight>}/>
  </View>
  );

export default TodoList
