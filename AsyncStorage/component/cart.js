'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	AsyncStorage,
	ScrollView,
	Text,
	View
} from 'react-native';

import Button from './button';

export default class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			price: 0
		};
	}

	render() {
		let data = this.state.data;
		let price = this.state.price;
		let list = [];
		for (var i in data) {
			price += parseFloat(data[i].price);
			let item = (
				<View style={[styles.row, styles.list_item]} key={'view' + i}>
					<Text style={[styles.list_item_desc]} key={'desc' + i}>
					{data[i].title}
					{data[i].desc}
					</Text>
					<Text style={styles.list_item_price} key={'price' + i}>￥{data[i].price}</Text>
				</View>
			);
			list.push(item);
		}
		let str = null;
		if (price) {
			str = '支付，共' + price.toFixed(1) + '元';
		}
		return (
			<ScrollView style={{marginTop: 10}}>
				{list}
				{
					price > 0 ? 
					<View>
						<Button title={str} buttonClick={() => this.pay()}></Button>
						<Button title={'清空购物车'} buttonClick={() => this.clearCart()} style={styles.clear}></Button> 
					</View>
					: 
					<View>
						<Button title={'去购物'} buttonClick={() => this.shopping()} style={styles.clear}></Button>
					</View> 
				}
				
			</ScrollView>
		);
	}

	shopping() {
		this.props.navigator.pop();
	}

	pay() {
		alert('去付款');
	}


	clearCart() {
		var that = this;
		AsyncStorage.clear(function(err) {
			if (!err) {
				that.setState({
					data: [],
					price: 0
				});
				alert('购物车已经清空了');
			}
		});
	}

	componentDidMount() {
		var that = this;
		AsyncStorage.getAllKeys(function(err, keys) {
			if (err) {
				alert('取键错误');
				return;
			}
			AsyncStorage.multiGet(keys, function(err, result) {
				if (err) {
					alert('取值错误');
					return;
				}
				let arr = [];
				for (let i in result) {
					arr.push(JSON.parse(result[i][1]));
				}
				that.setState({
					data: arr
				});
			});
		});
	}
}

const styles = StyleSheet.create({
	row: {
		flex: 1,
		marginBottom: 10
	},
	list_item: {
		marginLeft: 5,
		marginRight: 5,
		padding: 5,
		borderWidth: 1,
		height: 30,
		borderRadius: 3,
		borderColor: '#ddd',
		flexDirection: 'row'
	},
	list_item_desc: {
		flex: 2,
		fontSize: 15
	},
	list_item_price: {
		flex: 1,
		textAlign: 'right',
		fontSize: 15
	},
	clear: {
		marginTop: 20,
		backgroundColor: '#fff',
		color: '#000',
		borderColor: '#eee',
		borderWidth: 1,
		fontSize: 16
	}
});