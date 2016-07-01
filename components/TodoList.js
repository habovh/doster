'use strict';

import React, { PropTypes } from 'react'

import {
  View,
  StyleSheet,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native'

import SwipeableListView from 'SwipeableListView'
import SwipeableQuickActions from 'SwipeableQuickActions'
import SwipeableQuickActionButton from 'SwipeableQuickActionButton'


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    padding: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  todoSwipeDeleteImage: {
    height: 20,
    width: 20
  },
  todoSwipeBackground: {
    backgroundColor: "#dddddd"
  },
  todoSwipeDeleteButton: {
    backgroundColor: "#ff0000",
    flex: 1,
    padding: 5,
    width: 80,
    alignItems:'center'
  },
  todoSwipeDeleteText: {
    color: "#ffffff"
  }
});


const TodoList = ({ todoDataSource, onTodoPress, onTodoDeletePress }) => (
  <View style={styles.container}>
      <SwipeableListView
      bounceFirstRowOnMount={false}
      dataSource={todoDataSource}
      automaticallyAdjustContentInsets={false}
      maxSwipeDistance={80}
      renderRow={(todo) =>
          <View>
            <TouchableHighlight onPress={() => onTodoPress(todo.id)} underlayColor='#dddddd'>
              <View style={styles.rowContainer}>
                <Text>{todo.completed ? "🔳" : "◻️"} {todo.text}</Text>
              </View>
            </TouchableHighlight>
            <View style={styles.separator}/>
          </View>}

      renderQuickActions={(todo) =>
        <SwipeableQuickActions
          style={styles.todoSwipeBackground}>
          <SwipeableQuickActionButton
            style={styles.todoSwipeDeleteButton}
            onPress={() => onTodoDeletePress(todo.id)}
            imageSource={require('../Resources/delete.png')}
            imageStyle={styles.todoSwipeDeleteImage}
            text="Delete"
            textStyle={styles.todoSwipeDeleteText}/>
        </SwipeableQuickActions>
      }/>
  </View>
);

export default TodoList
