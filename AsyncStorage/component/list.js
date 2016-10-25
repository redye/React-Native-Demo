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

import Item from './item';
import Button from './button';
import Cart from './cart';

const models = [{
	id: '1',
	title: '佳沛新西兰进口猕猴桃',
	desc: '12个装',
	price: 99,
	url: 'http://vczero.github.io/ctrip/guo_1.jpg'
}, {
	id: '2',
	title: '墨西哥进口牛油果',
	desc: '6个装',
	price: 59,
	url: 'http://vczero.github.io/ctrip/guo_2.jpg'
}, {
	id: '3',
	title: '美国加州进口车厘子',
	desc: '1000g',
	price: 91.5,
	url: 'http://vczero.github.io/ctrip/guo_3.jpg'
}, {
	id: '4',
	title: '新疆特产西梅',
	desc: '1000g',
	price: 69,
	url: 'http://vczero.github.io/ctrip/guo_4.jpg'
}, {
	id: '5',
	title: '陕西大荔冬枣',
	desc: '2000g',
	price: 59.9,
	url: 'http://vczero.github.io/ctrip/guo_5.jpg'
}, {
	id: '6',
	title: '南非红心西柚',
	desc: '2500g',
	price: 29.9,
	url: 'http://vczero.github.io/ctrip/guo_6.jpg'
}];

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			models: models
		};
	}

	componentDidMount() {
		var that = this;
		AsyncStorage.getAllKeys((error, keys) => {
			if (error) {
				// TODO: 存储取数据出错
				// 给用户提示错误信息
				alert('获取 keys 出错');
			}
			that.setState({
				count: keys.length
			});
		});
	}

	// 生成随机 ID： GUID
	genId() {
		return 'xxxxxxxx-xxxx-4xxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = Math.random() * 16 | 0,
				v;
			v = (c === 'x' ? r : (r & 0x3 | 0x8));
			return v.toString(16);
		}).toUpperCase();
	}


	press(data) {
		let count = this.state.count;
		count++;
		this.setState({
			count: count
		});
		// 存储
		AsyncStorage.setItem('SP-' + this.genId() + '-SP', JSON.stringify(data), function(error) {
			if (error) {
				alert('存储取数据出错');
			}
		});
	}

	renderItems() {
		let list = [];
		for (let i in this.state.models) {
			let model = this.state.models[i];
			let model2 = this.state.models[parseInt(i) + 1];
			if (i % 2 === 0) {
				let row = (
					<View style={styles.container} key={i}>
						<Item url={model.url} title={model.title} press={() => this.press(model)} />
						<Item url={model2.url} title={model2.title} press={() => this.press(model2)} />
					</View>
				);
				list.push(row);
			}
		}
		return list;
	}

	render() {
		let count = this.state.count;
		let str = null;
		if (count) {
			str = '，共' + count + '件商品';
		}
		return (
			<ScrollView style={{marginTop: 10}}>
				{this.renderItems()}
				{
					count ? 
					<View>
						<Button title={'去结算'} buttonClick={() => this.goCart()} />
					</View>
					: null
				}
			</ScrollView>
		);
	}

	goCart() {
		this.props.navigator.push({
			component: Cart,
			title: '购物车'
		});
	}

}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 10
	},
	btn: {
		backgroundColor: '#ff7200',
		height: 33,
		textAlign: 'center',
		color: '#fff',
		marginLeft: 10,
		marginRight: 10,
		lineHeight: 24,
		marginTop: 40,
		fontSize: 28
	}
});