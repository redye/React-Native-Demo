'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Util from './../common/util';

export default class Day extends Component {
	render() {
		return (
			<View style={styles.constainer}>
				<View style={styles.linearContainer}>
					<LinearGradient
						start={[0.0, 0.0]} 
						end={[1.0, 1.0]}
  						locations={[0.0,0.5,1.0]} 
						colors={['#f00', '#0f0', '#00f']} 
						style={styles.linearGradient}>
				  		<Text style={styles.buttonText}>Sign in with Facebook</Text>
					</LinearGradient>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	constainer: {
		flex: 1,
		marginTop: 64,
		alignItems: 'center',
	},
	linearContainer: {
		marginTop: 50,
		width: Util.size.width - 40,
		height: 40,
	},
	linearGradient: {
		flex: 1,
	    paddingLeft: 15,
	    paddingRight: 15,
	    borderRadius: 5
	},
	buttonText: {
	    fontSize: 18,
	    fontFamily: 'Gill Sans',
	    textAlign: 'center',
	    margin: 10,
	    color: '#ffffff',
	    backgroundColor: 'transparent',
	},
});