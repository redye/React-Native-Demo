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
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';

const Util = require('./../common/util');
const Server = require('./../common/server');

import Header from './../common/header';
import BookItem from './book_item';

export default class BookDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null,
			loading: true
		};
	}

	render() {
		return (
			<ScrollView style={styles.m10}> 
			{
				!this.state.loading ?
				<View style={{backgroundColor: '#fff'}}>
					<Header navigator={this.props.navigator} initObj={{backName: '图书', title: this.state.data.title}} />
					<BookItem row={this.state.data} />
					<View>
						<Text style={styles.title}>图书简介</Text>
						<Text style={styles.text}>{this.state.data.summary}</Text>
					</View>

					<View>
						<Text style={styles.title}>作者简介</Text>
						<Text style={styles.text}>{this.state.data.author_intro}</Text>
					</View>
					<View style={{height: 60}}></View>
				</View>
				: Util.loading
			}
			</ScrollView>
		);
	}

	componentDidMount() {
		let id = this.props.id;
		let that = this;
		let url = Server.book_search_id + '/' + id;
		Util.get(url, function(data) {
			that.setState({
				data: data,
				loading: false
			});
		}, function(err) {
			alert(err);
			that.setState({
				loading: false
			});
		});
	}
}

const styles = StyleSheet.create({
	m10: {
		flex: 1
	},
	title: {
		fontSize: 16,
		marginLeft: 10,
		marginTop: 10,
		marginBottom: 10
	},
	text: {
		marginLeft: 10,
		marginRight: 10,
		color: '#000d22'
	}
});