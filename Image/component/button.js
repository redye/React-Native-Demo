import React, {
	Component
} from 'react';

import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text
} from 'react-native';

export default class Button extends Component {
	static defaultProps = {
		title: 'button'
	}
	render() {
		return (
			<TouchableOpacity style={styles.container} onPress={() => this.buttonClick()}>
				<Text style={styles.font}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}

	buttonClick() {
		this.props.buttonClick && this.props.buttonClick();
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingTop: 5,
		paddingBottom: 5,
		borderStyle: 'dashed',
		borderWidth: 1,
		borderColor: '#bbb',
		borderRadius: 4,
		backgroundColor: '#eee',
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		height: 36
	},
	font: {
		fontSize: 16,
		color: '#0ff'
	},
});