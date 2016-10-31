/***/

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	ListView,
	TouchableOpacity,
	ScrollView
} from 'react-native';

import BookItem from './book_item';
import Search from './../common/search';
import BookDetail from './book_detail';

const Util = require('./../common/util');
const Server = require('./../common/server');

export default class BookList extends Component {
	constructor(props) {
		super(props);
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.state = {
			dataSource: ds.cloneWithRows([]),
			keywords: 'c语言',
			show: false
		};
	}

	render() {
		return (
			<ScrollView style={[styles.flex]}>
				<View style={[styles.search, styles.row]}>
					<View style={styles.flex}>
						<Search placeholder="请输入图书的名称" onChangeText={(val) => this._changeText(val)} onPress={() => this._search()} />
					</View>
				</View>
				{
					this.state.show ?
					<ListView dataSource={this.state.dataSource} renderRow={(row) => this._renderRow(row)} />
					: Util.loading
				}
			</ScrollView>
		);
	}

	componentDidMount() {
		this.getData();
	}

	_changeText(val) {
		this.setState({
			keywords: val
		});
	}

	_search() {
		this.getData();
	}

	_renderRow(row) {
		return (
			<BookItem row={row} onPress={() => this._loadPage(row.id)} />
		);
	}

	getData() {
		let ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		let that = this;
		let baseURL = Server.book_search + '?count=10&q=' + this.state.keywords;
		// 开启 loading
		this.setState({
			show: false
		});
		Util.get(baseURL, function(data) {
			if (!data.books || !data.books.length) {
				return alert('图书服务出错');
			}
			let books = data.books;
			that.setState({
				dataSource: ds.cloneWithRows(books),
				show: true
			});
		}, function(err) {
			alert(err);
		});
	}

	_loadPage(id) {
		this.props.navigator.push({
			component: BookDetail,
			passProps: {
				id: id
			}
		});
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	search: {
		paddingLeft: 5,
		paddingRight: 5,
		height: 45
	},
	fontFFF: {
		color: '#fff'
	},
	row: {
		flexDirection: 'row'
	}
});