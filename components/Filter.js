'use strict';

import React, { PropTypes } from 'react';

import {
  SegmentedControlIOS,
  StyleSheet
} from 'react-native';
import { Filters } from '../actions'

var styles = StyleSheet.create({
  selector: {
    margin: 20
  }
});

const Filter = (props) => (
  <SegmentedControlIOS
    values={Filters.map((o) => o.displayName)}
    style={styles.selector}
    selectedIndex={props.filterSelectedIndex}
    onValueChange={props.filterValueChange}
  />
)

export default Filter;
