/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,

} from 'react-native';

import App from './ViewSrc/App'
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { select } from './Reduces/Reduces';

var store = createStore(select);

export default class DoubleTable extends Component {
  render() {
    let arr = [{ title: 'row1', data: ['row11', 'row12', 'row13', 'row14'] },
    { title: 'row2', data: ['row21', 'row22', 'row23', 'row24'] },
    { title: 'row3', data: ['row31', 'row32', 'row33', 'row34'] },
    { title: 'row4', data: ['row41', 'row42', 'row43', 'row44'] }];
    return (
      <Provider store={store}>
        <App dataArr={arr} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('DoubleTable', () => DoubleTable);
