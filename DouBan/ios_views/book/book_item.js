/***/

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

const Util = require('./../common/util');

export default class BookItem extends Component {
	render() {
		let row = this.props.row;
		return (
			<TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
				<View style={[styles.center]}>
					<Image source={{uri: row.image}} style={styles.book_img} />
				</View>
				<View style={styles.content}>
					<View>
						<Text style={{width: 200}} numberOfLines={1}>{row.title}</Text>
					</View>
					<View style={{marginTop: 10}}>
						<Text style={[styles.publisher, {width: 200}]} numberOfLines={1}>{row.publisher}</Text>
					</View>
					<View style={{marginTop: 10}}>
						<Text style={[styles.publisher, {width: 200}]} numberOfLines={1}>{row.author}</Text>
					</View>
					<View style={[styles.row, {marginTop: 10}]}>
						<Text style={[styles.price]}>{row.price}</Text>
						<Text style={[styles.price]}>{row.pages}页</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	item: {
		height: 120,
		borderTopWidth: Util.pixel,
		borderBottomWidth: Util.pixel,
		marginTop: 5,
		marginBottom: 5,
		borderColor: '#ddd'
	},
	book_img: {
		width: 80,
		height: 100,
		resizeMode: Image.resizeMode.contain
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		marginTop: 10,
		marginLeft: 10
	},
	publisher: {
		color: '#a3a3a3',
		fontSize: 13
	},
	price: {
		color: '#2bb2a3',
		fontSize: 16
	},
	pages: {
		marginLeft: 10,
		color: '#a7a0a0'
	}
});