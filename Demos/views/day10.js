'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	StatusBar,
	Animated,
	Easing,
} from 'react-native';


import {BlurView, VibrancyView} from 'react-native-blur';

import Util from './../common/util';

export default class Day extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		shift: new Animated.Value(-120),
	  		show: false,
	  	};
	}

	_pushMenu() {
		this.setState({
			show: true,
		});

		Animated.timing(this.state.shift, {
			toValue: Util.size.width === 375 ? 50 : 30,
			duration: 200,
			delay: 100,
			easing: Easing.elastic(1),
		}).start();
	}

	_popMenu() {
		Animated.timing(this.state.shift, {
			toValue: -120,
			duration: 200,
			delay: 100,
			easing: Easing.elastic(1),
		}).start();

		setTimeout(() => {
			this.setState({show: false});
		}, 500);
	}

	componentDidMount() {
		StatusBar.setBarStyle(1);
	}

	render() {
		return (
			<View style={{backgroundColor: '#37465c'}}>
				<TouchableWithoutFeedback style={styles.imgContainer} onPress={() => this._pushMenu()}>
					<Image style={styles.img} source={require('./../image/tumblr.png')} />	
				</TouchableWithoutFeedback>
				{ this.state.show ?
					<Image source={require('./../image/tumblr.png')} style={styles.menu}>
						<BlurView blurType='dark' style={styles.blur}>
							<Animated.View style={[styles.menuItem1, {left: this.state.shift}]}>
								<Image style={styles.menuImg} source={require('./../image/tumblr-text.png')} />
								<Text style={styles.menuText}>Text</Text>
							</Animated.View>
							<Animated.View style={[styles.menuItem2, {right: this.state.shift}]}>
								<Image style={styles.menuImg} source={require('./../image/tumblr-photo.png')} />
								<Text style={styles.menuText}>Photo</Text>
							</Animated.View>
							<Animated.View style={[styles.menuItem3, {left: this.state.shift}]}>
								<Image style={styles.menuImg} source={require('./../image/tumblr-quote.png')} />
								<Text style={styles.menuText}>Quote</Text>
							</Animated.View>
							<Animated.View style={[styles.menuItem4, {right: this.state.shift}]}>
								<Image style={styles.menuImg} source={require('./../image/tumblr-link.png')} />
								<Text style={styles.menuText}>Link</Text>
							</Animated.View>
							<Animated.View style={[styles.menuItem5, {left: this.state.shift}]}>
								<Image style={styles.menuImg} source={require('./../image/tumblr-chat.png')} />
								<Text style={styles.menuText}>Chat</Text>
							</Animated.View>
							<Animated.View style={[styles.menuItem6, {right: this.state.shift}]}>
								<Image style={styles.menuImg} source={require('./../image/tumblr-audio.png')} />
								<Text style={styles.menuText}>Audio</Text>
							</Animated.View>
							<View style={styles.dismiss}>
								<TouchableWithoutFeedback onPress={() => this._popMenu()}>
									<View>
										<Text style={styles.dismissText}>MeverMind</Text>
									</View>
								</TouchableWithoutFeedback>
							</View>
						</BlurView>
					</Image>
					: <View></View>
				}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	imgContainer: {
		height: Util.size.height,
		width: Util.size.width,
		position: 'absolute',
		top: 0,
		left: 0,
	},
	img: {
		resizeMode: 'contain',
		height: Util.size.height - 20,
		width: Util.size.width,
		marginTop: 20,
	},
	menu: {
		height: Util.size.height,
		width: Util.size.width,
		resizeMode: 'contain',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	blur: {
		height: Util.size.height,
		width: Util.size.width,
	},
	menuImg: {
		width: 120,
		height: 100,
		resizeMode: 'contain',
	},
	menuText: {
		width: 120,
		textAlign: 'center',
		color: '#fff',
	},
	menuItem1: {
		position: 'absolute',
		left: 50,
		top: 80,
	},
	menuItem3: {
		position: 'absolute',
		left: 50,
		top: 250,
	},
	menuItem5: {
		position: 'absolute',
		left: 50,
		top: 420,
	},
	menuItem2: {
		position: 'absolute',
		right: 50,
		top: 80,
	},
	menuItem4: {
		position: 'absolute',
		right: 50,
		top: 250,
	},
	menuItem6: {
		position: 'absolute',
		right: 50,
		top: 420,
	},
	dismiss: {
		position: 'absolute',
		width: Util.size.width,
		left: 0,
		bottom: 50,
	},
	dismissText: {
		textAlign: 'center',
		color: 'rgba(255, 255, 255, 0.2)',
		fontWeight: '700',
	}
});





































