import React from 'react';

import {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

class ImportantNews extends Component {
	render() {
		var news = [];
		for (var i in this.props.news) {
			var text = (
				<Text 
						key = {i}
						onPress = {this.show.bind(this, this.props.news[i])}
						numberOfLines = {2}
						style = {styles.news_item}>
						{this.props.news[i]}
					</Text>
			);
			news.push(text);
		}
		return (
			<View style = {styles.container}>
					<Text style = {styles.news_title}>今日要闻</Text>
					{news}
				</View>
		);
	}
	show(title) {
		alert(title);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	news_title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#cd1d1c',
		marginLeft: 10,
		marginTop: 15
	},
	news_item: {
		marginLeft: 10,
		marginRight: 10,
		fontSize: 15,
		lineHeight: 25
	}
});

module.exports = ImportantNews;