'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Animated,
	Image,
	ScrollView,
	StatusBar,
	TouchableHighlight
} from 'react-native';

import Video from 'react-native-video';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Util from './../common/util';

class Intro extends Component {

	_dot() {
		return (
			<View style={{
				backgroundColor: 'rgba(255, 255, 255, 0.2)',
				width: 6,
				height: 6,
				borderRadius: 3,
				marginLeft: 3,
				marginBottom: 3,
				marginRight: 3,
				marginTop: 3
			}}/>
		);
	}

	_activeDot() {
		return (
			<View style={{
				backgroundColor: 'rgba(255, 255, 255, 1)',
				width: 6,
				height: 6,
				borderRadius: 3,
				marginLeft: 3,
				marginBottom: 3,
				marginRight: 3,
				marginTop: 3
			}}/>
		);
	}

	render() {
		return (
			<View style={styles.backgroundFixed}>
				<View style={styles.logo}>
					<View style={styles.logoIconContainer}>
						<Icon name='spotify' size={60} color='#fff' />
					</View>
					<View style={styles.logoTextContainer}>
						<Text style={styles.logoText}>Spotify</Text>
					</View>
				</View>
				<View style={styles.slides}>
					<Swiper height={Util.size.height-200} showsButton={false} autoPlay={false} dot={this._dot()} activeDot={this._activeDot()}>
						<View style={styles.slide}>
							<Video style={styles.slideVideo} source={require('./img/moments.mp4')} resizeMode='cover' repeat={true} />
							<Text style={styles.slideTextTitle}>Welcome</Text>
							<Text style={styles.slideText}>Sign up for free music on your phone, tablet</Text>
							<Text style={styles.slideText}>and computer.</Text>
						</View>
						<View style={styles.slide}>
							<Video style={styles.slideVideo} source={require('./img/moments.mp4')} resizeMode='cover' repeat={true} />
							<Text style={styles.slideTextTitle}>Browse</Text>
							<Text style={styles.slideText}>Explore top tracks, new releases and the right</Text>
							<Text style={styles.slideText}>playlist for every moment.</Text>
						</View>
						<View style={styles.slide}>
							<Video style={styles.slideVideo} source={require('./img/moments.mp4')} resizeMode='cover' repeat={true} />
							<Text style={styles.slideTextTitle}>Search</Text>
							<Text style={styles.slideText}>Looking for that special album or aitist? Just</Text>
							<Text style={styles.slideText}>search and hit play!</Text>
						</View>
						<View style={styles.slide}>
							<Video style={styles.slideVideo} source={require('./img/moments.mp4')} resizeMode='cover' repeat={true} />
							<Text style={styles.slideTextTitle}>Running</Text>
							<Text style={styles.slideText}>Music that perfectly matched</Text>
							<Text style={styles.slideText}>music tempo.</Text>
						</View>
						<View style={styles.slide}>
							<Video style={styles.slideVideo} source={require('./img/moments.mp4')} resizeMode='cover' repeat={true} />
							<Text style={styles.slideTextTitle}>Your Library</Text>
							<Text style={styles.slideText}>Save any song, album ir artist to your own</Text>
							<Text style={styles.slideText}>music collection.</Text>
						</View>
					</Swiper>
				</View>
				<View style={styles.btnContainer}>
					<TouchableHighlight style={[styles.btn, {backgroundColor: '#201437'}]}>
						<Text style={styles.btnText}>LOG IN</Text>
					</TouchableHighlight>
					<TouchableHighlight style={[styles.btn, {backgroundColor: '#29b859'}]}>
						<Text style={styles.btnText}>SIGN UP</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

export default class Day extends Component {
	componentDidMount() {
		StatusBar.setBarStyle(1);
	}

	render() {
		return (
			<View style={styles.container}>
				<Intro />	
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		height: Util.size.height,
		width: Util.size.width,
		backgroundColor: 'rgb(158, 204, 212)'
	},
	backgroundFixed: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	slides: {
		position: 'absolute',
		width: Util.size.width,
		bottom: 70,
		left: 0,
	},
	slide: {
		flex: 1,
		height: Util.size.height - 200,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 50,
	},
	slideVideo: {
		flex: 1,
		position: 'relative',
		left: 0,
		top: 0,
		width: Util.size.width,
		marginTop: 10,
		marginBottom: 10,
	},
	slideTextTitle: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700',
	},
	slideText: {
		color: '#fff',
		textAlign: 'center',
	},
	logo: {
		alignItems: 'center',
		position: 'absolute',
		width: Util.size.width,
		top: 64,
		left: 0,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	logoText: {
		color: '#fff',
		textAlign: 'left',
		fontSize: 35,
		fontWeight: '700',
		backgroundColor: 'transparent',
	},
	logoIconContainer: {
		backgroundColor: 'transparent',
		paddingRight: 5,
		marginTop: 5,
	},
	logoTextContainer: {
		backgroundColor: 'transparent',
	},
	btnContainer: {
		position: 'absolute',
		width: Util.size.width,
		bottom: 0,
		left: 0,
		height: 40,
		flexDirection: 'row',
	},
	btn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnText: {
		color: '#fff',
		fontWeight: '500',
		fontSize: 14,
	}
});

