/***/

'use strict';

import React, {
	Component
} from 'react';
import {
	WebView,
	View
} from 'react-native';

const Util = require('./util');
import Header from './header'


export default class WebViewYH extends Component {
	render() {
		return (
			<View>
				<Header navigator={this.props.navigator} initObj={{backName: this.props.backName, title: this.props.title}} />
				<WebView contentInset={{top: -40}} startInLoadingState={true} 
				style={{width: Util.size.width, height: Util.size.height-50}} source={{uri: this.props.url}}>
				</WebView>
			</View>
		);
	}
}