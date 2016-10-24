/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
const React = require('react');
const {
  Component
} = require('react');


var Header = require('./header');
var List = require('./list');
var ImportantNews = require('./important-news');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewsList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <List title='宇航员在太空宣布 “三体” 获奖'></List>
        <List title='NASA发短片纪念火星征程50周年'></List>
        <List title='男生连续做一周苦瓜吃吐女友'></List>
        <List title='女童遭鲨鱼袭击又下海救伙伴'></List>
        <ImportantNews news={[
            '1. 刘慈欣《三体》获 “雨果奖” 为中国作家首次',
            '2. 京津冀协同发展定位明确，北京无经济中心表述',
            '3. 好奇宝宝第一次淋雨，父亲用镜头记录了下来',
            '4. 有了单个 title 碎片后，希望把它拼装成一个真正的 list。我们需要引入一个原生组件 ListView ，并把定义的 title 组件和真实的数据拼装到 ListView 组件中去。'
          ]}>
        </ImportantNews>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('NewsList', () => NewsList);