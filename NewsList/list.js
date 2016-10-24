const React = require('react');
const { Component } = require('react');

const { View } = require('react-native');
const { Text } = require('react-native');
const { StyleSheet } = require('react-native');

// import React, {Component} from 'react';

// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

class List extends Component {
	render() {
		return (
				<View style={styles.list_item}>
					<Text style={styles.list_item_font}>{this.props.title}</Text>
				</View>
			);
	}
}

const styles = StyleSheet.create({
	list_item: {
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		justifyContent: 'center'
	},
	list_item_font: {
		fontSize: 14
	}
});

module.exports = List;