/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Home from './home';

export default class Demos extends Component {
  render() {
    return (
        <Home />
    );
  }
}



AppRegistry.registerComponent('Demos', () => Demos);
