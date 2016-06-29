import React from 'react'

import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View
} from 'react-native'

import {
  createStore
} from 'redux'

import { Provider } from 'react-redux'

import todoApp from './reducers'
import TodoIndex from './containers/TodoIndex'
import devTools from 'remote-redux-devtools'

const store = createStore(todoApp, {}, devTools({
  hostname: 'localhost',
  port: 5678
}));

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


const DosterApp = (props) => (
  <Provider store={store}>
    <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Todos',
            component: TodoIndex
          }}/>
  </Provider>
)


AppRegistry.registerComponent('Doster', () => DosterApp);
