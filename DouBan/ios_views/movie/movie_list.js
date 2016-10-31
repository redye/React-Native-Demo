/***/

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	ListView,
	ActivityIndicator,
} from 'react-native';

import Search from './../common/search';
import WebView from './../common/webview';
import MovieItem from './movie_item';

const Util = require('./../common/util');
const Server = require('./../common/server');

export default class MovieList extends Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			show: false,
			keywords: '幸福',
			dataSource: ds.cloneWithRows([])
		};
	}
	render() {
		return (
			<ScrollView style={styles.flex_1}>
				<View style={[styles.search]}>
					<Search placeholder='请输入电影名称' onChangeText={(val) => this._changeText(val)} onPress={() => this._search()} />
				</View>
				{
					this.state.show ? 
					<ListView dataSource={this.state.dataSource} renderRow={(row) => this._renderRow(row)}>
					</ListView>
					: Util.loading
				}
			</ScrollView>
		);
	}

	_renderRow(row) {
		return (
			<MovieItem movie={row} onPress={() => this._goDouBan(row.title, row.alt)} />
		);
	}

	_changeText(val) {
		this.setState({
			keywords: val
		});
	}

	_search() {
		this._getData();
	}

	componentDidMount() {
		this._getData();
	}

	_getData() {
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		let that = this;
		let url = Server.movie_search + '?count=10&q=' + this.state.keywords;
		this.setState({
			show: false
		});
		Util.get(url, function(data) {
			if (!data.subjects || !data.subjects.length) {
				return alert('电影服务出错');
			}
			let subjects = data.subjects;
			that.setState({
				dataSource: ds.cloneWithRows(subjects),
				show: true
			});
		}, function(err) {
			alert(err);
		});
	}

	_goDouBan(title, url) {
		this.props.navigator.push({
			component: WebView,
			passProps: {
				backName: '电影',
				title: title,
				url: url
			}
		});
	}
}


const styles = StyleSheet.create({
	flex_1: {
		flex: 1,
		marginTop: 5
	},
	search: {
		paddingLeft: 5,
		paddingRight: 5,
		height: 45
	}
});