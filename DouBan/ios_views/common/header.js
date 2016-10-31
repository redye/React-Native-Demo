/**
 *
 */

'use strict';

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import Icon from './left_icon';

export default class Header extends Component {
	render() {
		let obj = this.props.initObj;
		return (
			<View style={[styles.header, styles.row, styles.center]}>
				<TouchableOpacity style={[styles.row]} onPress={() => this._pop()}>
					<Icon />
					<Text style={styles.fontFFF}>{obj.backName}</Text>
				</TouchableOpacity>

				<View style={[styles.title, styles.center]}>
					<Text style={[styles.fontFFF, styles.titlePos]} numberOfLines={1}>{obj.title}</Text>
				</View>
			</View>
		);
	}

	_pop() {
		this.props.navigator.pop();
	}
}


const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	header: {
		height: 50,
		backgroundColor: '#3497ff',
		paddingTop: 15
	},
	fontFFF: {
		color: '#fff',
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	title: {
		flex: 1
	},
	titlePos: {
		marginLeft: -50,
		width: 200,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});