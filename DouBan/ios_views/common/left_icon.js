/**
 * 回退按钮组件
 */

'use strict';

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

const Util = require('./util');

export default class LeftIcon extends Component {
	render() {
		return (
			<View>
				<View style={styles.go}>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	go: {
		borderLeftWidth: 4 * Util.pixel,
		borderBottomWidth: 4 * Util.pixel,
		width: 15,
		height: 15,
		transform: [{
			rotate: '45deg'
		}],
		borderColor: '#fff',
		marginLeft: 10
	}
});