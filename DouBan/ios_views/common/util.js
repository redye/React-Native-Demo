/* 
 * Util 模块工具类
 * 
 */

'use strict';

import React, {
	Component
} from 'react';

import {
	Dimensions,
	PixelRatio,
	ActivityIndicator
} from 'react-native';


module.exports = {
	/* 最小线宽 */
	pixel: 1 / PixelRatio.get(),

	/* 屏幕尺寸 */
	size: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},

	get: function(url, successCallBack, failCallBack) {
		fetch(url).then((response) => response.text()).then((responseText) => {
			successCallBack(JSON.parse(responseText));
		}).catch((err) => {
			failCallBack(err);
		});
	},

	loading: <ActivityIndicator color='#3e00ff' style={{marginTop: 40}} />
};