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
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

const TodoList = ({ todoDataSource, onTodoPress }) => (
  <View style={styles.container}>
      <ListView
      automaticallyAdjustContentInsets={false}
      dataSource={todoDataSource}
      renderRow={(todo) =>
        <TouchableHighlight onPress={() => onTodoPress(todo.id)} underlayColor='#dddddd'>
          <View>
            <View style={styles.rowContainer}>
              <Text>{todo.completed ? "✅" : "❌"} {todo.text}</Text>
            </View>
            <View style={styles.separator}/>
          </View>
        </TouchableHighlight>}/>
  </View>
  );

export default TodoList
