import React, {
	Component
} from 'react';

import {
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

export default class Button extends Component {
	static defaultProps = {
		title: 'button'
	}

	render() {
		return (
			<TouchableOpacity onPress={() => this.buttonClick()}>
				<Text style={[styles.btn, this.props.style]}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}

	buttonClick() {
		this.props.buttonClick && this.props.buttonClick();
	}
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#ff7200',
		height: 33,
		textAlign: 'center',
		color: '#fff',
		marginLeft: 10,
		marginRight: 10,
		lineHeight: 33,
		marginTop: 40,
		fontSize: 16
	}
});