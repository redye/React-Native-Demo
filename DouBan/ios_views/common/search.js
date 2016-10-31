/***/

'use strict';

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	TextInput
} from 'react-native';

const Util = require('./util');

export default class Search extends Component {
	render() {
		return (
			<View style={styles.flex}>
				<TextInput style={[styles.input, styles.flex]} {...this.props} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	input: {
		borderWidth: Util.pixel,
		borderColor: '#ddd',
		height: 40,
		paddingLeft: 5
	}
});