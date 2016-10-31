/**
 * 封装 Navigation
 * 所有的切换过长动画都是从底部往上， 回退是从上往下
 * 这里需要注意的是使用 {...route.passProps} 模仿 NavigatorIOS 的 passProps
 */

'use strict';

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Navigator
} from 'react-native';

export default class Navigation extends Component {
	render() {
		return ( < Navigator initialRoute = {
				{
					name: '',
					component: this.props.component,
					index: 0
				}
			}
			configureScene = {
				() => {
					return Navigator.SceneConfigs.FloatFromRight;
				}
			}
			renderScene = {
				(route, navigator) => {
					const RComponent = route.component;
					return (
						<View style={{flex: 1}}>
						<RComponent navigator={navigator} route={route} {...route.passProps} />
					</View>
					);
				}
			}
			/>
		);
	}

	// renderScene(route, navigator) {
	// 	const RComponent = route.component;
	// 	return (
	// 		<View style={{flex: 1}}>
	// 			<RComponent navigator={navigator} route={route} {...route.passProps} />
	// 		</View>
	// 	);
	// }
}

const styles = StyleSheet.create({

});