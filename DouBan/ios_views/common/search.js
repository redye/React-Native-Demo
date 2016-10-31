/***/

'use strict';

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native';

const Util = require('./util');

export default class Search extends Component {
	render() {
		return (
			<View style={[styles.flexDirection]}>
				<View style={styles.flex}>
					<TextInput style={[styles.input, styles.flex]} clearButtonMode='while-editing' {...this.props}/>
				</View>
				<TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
					<Text style={{color: '#fff'}}>搜索</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	flexDirection: {
		flexDirection: 'row'
	},
	input: {
		borderWidth: Util.pixel,
		borderColor: '#ddd',
		height: 45,
		paddingLeft: 5
	},
	btn: {
		width: 50,
		backgroundColor: '#0091ff',
		justifyContent: 'center',
		alignItems: 'center'
	}
});