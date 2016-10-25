/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	NavigatorIOS,
	ActionSheetIOS
} from 'react-native';

import Cart from './component/cart';
import List from './component/list';


export default class Demo extends Component {

	render() {
		return (
			<NavigatorIOS style={{flex: 1}} ref='nav' initialRoute={{component: List, title: '水果列表', rightButtonTitle:'购物车', onRightButtonPress: () => this.rightButtonClick()}} />
		);
	}

	rightButtonClick() {
		this.refs.nav.push({
			component: Cart,
			title: '购物车'
		});
	}
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Demo', () => Demo);