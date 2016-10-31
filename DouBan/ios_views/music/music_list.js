/***/

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	ListView
} from 'react-native';

const Util = require('./../common/util');
const Server = require('./../common/server');

import MusicItem from './music_item';
import WebView from './../common/webview';
import Search from './../common/search';

export default class MusicList extends Component {
	constructor(props) {
		super(props);

		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.state = {
			dataSource: ds.cloneWithRows([]),
			show: false,
			keywords: '偏偏喜欢你'
		};
	}
	render() {
		return (
			<ScrollView style={styles.flex}>
				<View style={styles.search}>
					<Search placeholder='请输入歌曲/歌手名称' onChangeText={(val) => this._changeText(val)} onPress={() => this._search()} />
				</View>
				{
					this.state.show ?
					<ListView dataSource={this.state.dataSource} renderRow={(row) => this._renderRow(row)} />
					: Util.loading
				}
			</ScrollView>
		);
	}

	_renderRow(row) {
		return (
			<MusicItem music={row} onPress={() => this._detail(row.title, row.mobile_link)} />
		);
	}

	componentDidMount() {
		this._getData();
	}

	_changeText(val) {
		this.setState({
			keywords: val
		});
	}

	_search() {
		this._getData();
	}

	_getData() {
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		let that = this;
		let url = Server.music_search + '?count=10&q=' + this.state.keywords;
		this.setState({
			show: false
		});
		Util.get(url, function(data) {
			if (!data.musics || !data.musics.length) {
				return alert('音乐服务出错');
			}
			let musics = data.musics;
			that.setState({
				dataSource: ds.cloneWithRows(musics),
				show: true
			});
		}, function(err) {
			alert(err);
		});
	}

	_detail(title, url) {
		this.props.navigator.push({
			component: WebView,
			passProps: {
				backName: '音乐',
				title: title,
				url: url
			}
		});
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		marginTop: 5
	},
	search: {
		height: 45,
		paddingLeft: 5,
		paddingRight: 5
	}
});