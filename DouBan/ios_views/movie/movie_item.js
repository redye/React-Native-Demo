/***/

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';

const Util = require('./../common/util');

export default class MovieItem extends Component {
	render() {
		let movie = this.props.movie;
		let casts = movie.casts;
		let names = [];
		for (var i in casts) {
			names.push(casts[i].name);
		}
		names = names.join('，');
		return (
			<View style={[styles.row, styles.item]}>
				<View>
					<Image style={styles.img} source={{uri: movie.images.medium}} />
				</View>
				<View>
					<Text style={styles.textWidth} numberOfLines={1}>名称：{movie.title}</Text>
					<Text style={styles.textWidth} numberOfLines={1}>演员：{names}</Text>
					<Text style={styles.textWidth} numberOfLines={1}>评分：{movie.rating.average}</Text>
					<Text style={styles.textWidth} numberOfLines={1}>时间：{movie.year}</Text>
					<Text style={styles.textWidth} numberOfLines={1}>标签：{movie.genres}</Text>
					<TouchableOpacity style={styles.detail} onPress={this.props.onPress}>
						<Text>详情</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	},
	img: {
		width: 80,
		height: 100,
		resizeMode: Image.resizeMode.contain
	},
	textWidth: {
		width: 200,
		marginLeft: 10
	},
	item: {
		marginTop: 10,
		height: 140,
		paddingTop: 10,
		borderBottomWidth: Util.pixel,
		borderTopWidth: Util.pixel,
		borderColor: '#ddd'
	},
	detail: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 32,
		width: 60,
		borderWidth: Util.pixel,
		borderColor: '#3c98f0',
		marginLeft: 30,
		marginTop: 10,
		borderRadius: 3
	}
});