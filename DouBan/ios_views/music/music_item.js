/***/

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

const Util = require('./../common/util');

export default class MusicItem extends Component {
	render() {
		let item = this.props.music;
		let names = [];
		for (var i in item.author) {
			names.push(item.author[i].name);
		}
		names = names.join('，');
		return (
			<View style={styles.item}>
				<View style={styles.center}>
					<Image style={styles.img} source={{uri: item.image}} />
				</View>
				<View style={[styles.row]}>
					<Text style={[styles.flex, {marginLeft: 20}]} numberOfLines={1}>曲目：{item.title}</Text>
					<Text style={[styles.textWidth]} numberOfLines={1}>演唱：{names}</Text>
				</View>
				<View style={[styles.row]}>
					<Text style={[styles.flex, {marginLeft: 20}]} numberOfLines={1}>时间：{item.attrs['pubdate']}</Text>
					<Text style={[styles.textWidth]} numberOfLines={1}>评分：{item['rating']['average']}</Text>
				</View>
				<View style={styles.center}>
					<TouchableOpacity style={[styles.detail, styles.center]} onPress={this.props.onPress}>
						<Text>详情</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	item: {
		marginTop: 10,
		borderBottomWidth: Util.pixel,
		borderTopWidth: Util.pixel,
		borderColor: '#ddd',
		paddingTop: 10,
		paddingBottom: 10
	},
	textWidth: {
		width: 120
	},
	detail: {
		height: 35,
		width: 60,
		borderWidth: Util.pixel,
		borderColor: '#3082ff',
		borderRadius: 3
	},
	img: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	row: {
		flexDirection: 'row'
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});