'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	StatusBar,
	TouchableHighlight,
	PanResponder
} from 'react-native';

import Util from './../common/util';
import Icon from 'react-native-vector-icons/Ionicons';

class MoveableCicle extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		color: 'rgba(255, 255, 255, 0.7)',
	  	};
	}

	_previousLeft = Util.size.width / 2 - 40;
	_previousTop = Util.size.height / 2 - 50;
	_maxTop = Util.size.height - 110;
	_maxLeft = Util.size.width - 98;
	_circleStyles = {};
	circle = null;

	_updatePosition() {
		this.circle && this.circle.setNativeProps(this._circleStyles);
	}

	_endMove(evt, gestureState) {
		this._previousLeft += gestureState.dx;
		this._previousTop += gestureState.dy;
		this.setState({
			color: 'rgba(255, 255, 255, 0.7)',
		});
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
			onPanResponderGrant: (evt, gestureState) => {
				this.setState({
					color: 'white',
				});
			},
			onPanResponderMove: (evt, gestureState) => {
				this._circleStyles.style.left = this._previousLeft + gestureState.dx;
				this._circleStyles.style.top = this._previousTop + gestureState.dy;
				if (this._circleStyles.style.left < 0) {
					this._circleStyles.style.left = 0;
				}
				if (this._circleStyles.style.top < 5) {
					this._circleStyles.style.top = 5;
				}
				if (this._circleStyles.style.left > this._maxLeft) {
					this._circleStyles.style.left = this._maxLeft;
				}
				if (this._circleStyles.style.top > this._maxTop) {
					this._circleStyles.style.top = this._maxTop;
				}
				this._updatePosition();
			},
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
			onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
		});

		this._circleStyles = {
			style: {
				left: this._previousLeft,
				top: this._previousTop,
			}
		}
	}

	componentDidMount() {
		this._updatePosition();
	}

	render() {
		return (
			<View ref={(circle) => {this.circle = circle;}} style={styles.moveableCicle} {...this._panResponder.panHandlers}>
				<Icon ref='baseball' name='ios-baseball' color={this.state.color} size={120} />
			</View>
		);
	}
}

export default class Day extends Component {
	componentWillMount() {
		StatusBar.setBarStyle(1);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./img/agrass.png')} style={styles.bg} />
				<View style={styles.circleContainer}>
					<MoveableCicle />
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bg: {
		width: Util.size.width,
		resizeMode: 'stretch',
		position: 'absolute',
	},
	circleContainer: {
		height: Util.size.height,
		width: Util.size.width,
	},
	moveableCicle: {
		backgroundColor: 'transparent',
		position: 'absolute',
		left: 0,
		right: 0,
		width: 100,
	},
});
