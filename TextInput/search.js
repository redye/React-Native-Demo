import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	PixelRatio,
	AlertIOS
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
			value: null
		};
	}

	getValue(text) {
		let value = text;
		this.setState({
			show: true,
			value: value
		});
	}
	hide(value) {
		let textInput = this.refs.textInput;
		this.setState({
			show: false,
			value: value,
		});
	}

	fetchData(value) {
		/* 开始请求数据 */
		AlertIOS.alert('请求数据', '功能待完善');
	}

	search(value) {
		this.hide(value);
		this.fetchData(value);
	}

	render() {
		return (
			<View style={styles.flex}>
				<View style={[styles.flexDirection, styles.inputHeight]}>
	                <View style={styles.flex}>
	                    <TextInput
		                    style={styles.input} 
		                    autoFocus={true}
		                    returnKeyType='search' 
		                    placeholder='请输入关键字'
		                    onEndEditing={this.hide.bind(this, this.state.value)}
		                    value={this.state.value}
		                    onChangeText={this.getValue.bind(this)}
		                    clearButtonMode='while-editing'
		                    ref='textInput'
		                    onSubmitEditing={this.search.bind(this, this.state.value)}
	                    />
	                </View>
	                <View style={styles.btn}>
	                    <Text style={styles.search} onPress={this.search.bind(this, this.state.value)}>搜索</Text>
	                </View>
	            </View>

	            {this.state.show ? 
	            	<View style={styles.result}>
	            		<Text onPress={this.hide.bind(this, this.state.value + '庄')} style={styles.item} numberOfLines={1}>{this.state.value}庄</Text>
	            		<Text onPress={this.hide.bind(this, this.state.value + '园街')} style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
	            		<Text onPress={this.hide.bind(this, this.state.value + '综合商店')} style={styles.item} numberOfLines={1}>{this.state.value}综合商店</Text>
	            		<Text onPress={this.hide.bind(this, this.state.value + '桃')} style={styles.item} numberOfLines={1}>{this.state.value}桃</Text>
	            		<Text onPress={this.hide.bind(this, '杨桃' + this.state.value)} style={styles.item} numberOfLines={1}>杨桃{this.state.value}</Text>
	            	</View>
	            	: null
	        	}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	flexDirection: {
		flexDirection: 'row'
	},
	topStatus: {
		marginTop: 25
	},
	inputHeight: {
		height: 45,
	},
	input: {
		height: 45,
		borderWidth: 1,
		marginLeft: 5,
		paddingLeft: 5,
		borderColor: '#ccc',
		borderRadius: 4
	},
	btn: {
		width: 55,
		marginLeft: -5,
		marginRight: 5,
		backgroundColor: '#23beff',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center'
	},
	search: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	},
	result: {
		marginTop: onePT,
		marginLeft: 5,
		marginRight: 5,
		height: 200,
		borderColor: '#ccc',
		borderTopWidth: onePT
	},
	item: {
		fontSize: 16,
		padding: 5,
		paddingTop: 10,
		paddingBottom: 10,
		borderWidth: onePT,
		borderColor: '#ddd',
		borderTopWidth: 0
	}
});