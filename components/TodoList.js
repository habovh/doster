'use strict';

import React, { PropTypes } from 'react'

import {
  View,
  StyleSheet,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native'

import Swipeout from 'react-native-swipeout'


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
  },
  swipeout: {
    backgroundColor: '#ffffff'
  }
});

const swipeoutBtns = [
  {
    text: 'Delete',
    type: 'delet',
    onPress: () => {
      console.log('Pressed delete')
    }
  }
]

const TodoList = ({ todoDataSource, onTodoPress }) => (
  <View style={styles.container}>
      <ListView
      automaticallyAdjustContentInsets={false}
      dataSource={todoDataSource}
      renderRow={(todo) =>
          <View>
            <Swipeout
              right={swipeoutBtns}
              style={styles.swipeout}
              autoClose={true}>
              <TouchableHighlight onPress={() => onTodoPress(todo.id)} underlayColor='#dddddd'>
              <View style={styles.rowContainer}>
                <Text>{todo.completed ? "🔳" : "◻️"} {todo.text}</Text>
              </View>
              </TouchableHighlight>
            </Swipeout>
            <View style={styles.separator}/>
          </View>}/>
  </View>
  );

export default TodoList
