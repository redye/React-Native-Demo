'use strict';

import React, {
	Component
} from 'react';

import {
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

export default class Item extends Component {
	render() {
		return (
			<View style={styles.item}>
				<TouchableOpacity onPress={this.props.press}>
					<Image resizeMode='contain' style={styles.img} source={{uri: this.props.url}}>
						<Text numberOfLines={1} style={styles.item_text}>{this.props.title}</Text>
					</Image>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
		height: 100,
		borderWidth: 1,
		borderColor: '#ddd'
	},
	img: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	item_text: {
		backgroundColor: '#000',
		opacity: 0.7,
		color: '#fff',
		height: 25,
		lineHeight: 18,
		textAlign: 'center',
		marginTop: 74
	}
});