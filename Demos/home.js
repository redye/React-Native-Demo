'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  DeviceEventEmiiter
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import Util from './common/util';

import Day1 from './views/day1'; 
import Day2 from './views/day2';
import Day3 from './views/day3';
import Day4 from './views/day4'; 
import Day5 from './views/day5';
import Day6 from './views/day6'; 
import Day7 from './views/day7';
import Day8 from './views/day8'; 
import Day9 from './views/day9';
import Day10 from './views/day10';
import Day11 from './views/day11';
import Day12 from './views/day12';
import Day13 from './views/day13';
import Day14 from './views/day14';
import Day15 from './views/day15';
import Day16 from './views/day16';
import Day17 from './views/day17';
import Day18 from './views/day18';
import Day19 from './views/day19';
import Day20 from './views/day20';
import Day21 from './views/day21';
import Day22 from './views/day22';
import Day23 from './views/day23';
import Day24 from './views/day24';
import Day25 from './views/day25';
import Day26 from './views/day26';
import Day27 from './views/day27';
import Day28 from './views/day28';
import Day29 from './views/day29';
import Day30 from './views/day30';

class MainView extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	days:[{
	        key:0,
	        title:"A stopwatch",
	        component: Day1,
	        isFA: false,
	        icon: "ios-stopwatch",
	        size: 48,
	        color: "#ff856c",
	        hideNav: false,
      	},{
	        key:1,
	        title:"A weather app",
	        component: Day2,
	        isFA: false,
	        icon: "ios-partly-sunny",
	        size:60,
	        color:"#90bdc1",
	        hideNav: true,
      	},{
	        key:2,
	        title:"twitter",
	        component: Day3,
	        isFA: false,
	        icon: "logo-twitter",
	        size:50,
	        color:"#2aa2ef",
	        hideNav: true,
      	},{
	        key:3,
	        title:"cocoapods",
	        component: Day4,
	        isFA: true,
	        icon: "contao",
	        size:50,
	        color:"#FF9A05",
	        hideNav: false,
      	},{
	        key:4,
	        title:"find my location",
	        component: Day5,
	        isFA: false,
	        icon: "md-pin",
	        size:50,
	        color:"#00D204",
	        hideNav: false,
     	},{
	        key:5,
	        title:"Spotify",
	        component: Day6,
	        isFA: true,
	        icon: "spotify",
	        size:50,
	        color:"#777",
	        hideNav: true,
      	},{
	        key:6,
	        title:"Moveable Circle",
	        component: Day7,
	        isFA: false,
	        icon: "ios-baseball",
	        size:50,
	        color:"#5e2a06",
	        hideNav: true,
      	},{
	        key:7,
	        title:"Swipe Left Menu",
	        component: Day8,
	        isFA: true,
	        icon: "google",
	        size:50,
	        color:"#4285f4",
	        hideNav: true,
      	},{
	        key:8,
	        title:"Twitter Parallax View",
	        component: Day9,
	        isFA: true,
	        icon: "twitter-square",
	        size:50,
	        color:"#2aa2ef",
	        hideNav: true,
      	},{
	        key:9,
	        title:"Tumblr Menu",
	        component: Day10,
	        isFA: false,
	        icon: "logo-tumblr",
	        size:50,
	        color:"#37465c",
	        hideNav: true,
      	},{
	        key:10,
	        title:"OpenGL",
	        component: Day11,
	        isFA: false,
	        icon: "md-contrast",
	        size:50,
	        color:"#2F3600",
	        hideNav: false,
      	},{
	        key:11,
	        title:"charts",
	        component: Day12,
	        isFA: false,
	        icon: "ios-stats",
	        size:50,
	        color:"#fd8f9d",
	        hideNav: false,
      	},{
	        key:12,
	        title:"tweet",
	        component: Day13,
	        isFA: false,
	        icon: "md-chatboxes",
	        size:50,
	        color:"#83709d",
	        hideNav: true,
      	},{
	        key:13,
	        title:"tinder",
	        component: Day14,
	        isFA: true,
	        icon: "fire",
	        size:50,
	        color:"#ff6b6b",
	        hideNav: true,
      	},{
	        key:14,
	        title:"Time picker",
	        component: Day15,
	        isFA: false,
	        icon: "ios-calendar-outline",
	        size:50,
	        color:"#ec240e",
	        hideNav: false,
      	},{
	        key:15,
	        title:"Gesture unlock",
	        component: Day16,
	        isFA: false,
	        icon: "ios-unlock",
	        size:50,
	        color:"#32A69B",
	        hideNav: true,
      	},{
	        key:16,
	        title:"Fuzzy search",
	        component: Day17,
	        isFA: false,
	        icon: "md-search",
	        size:50,
	        color:"#69B32A",
	        hideNav: false,
      	},{
	        key:17,
	        title:"Sortable",
	        component: Day18,
	        isFA: false,
	        icon: "md-move",
	        size:50,
	        color:"#68231A",
	        hideNav: true,
      	},{
	        key:18,
	        title:"TouchID to unlock",
	        component: Day19,
	        isFA: false,
	        icon: "ios-log-in",
	        size:50,
	        color:"#fdbded",
	        hideNav: true,
      	},{
	        key:19,
	        title:"Single page Reminder",
	        component: Day20,
	        isFA: false,
	        icon: "ios-list-outline",
	        size:50,
	        color:"#68d746",
	        hideNav: true,
      	},{
	        key:20,
	        title:"Multi page Reminder",
	        component: Day21,
	        isFA: false,
	        icon: "ios-paper-outline",
	        size:50,
	        color:"#fe952b",
	        hideNav: true,
      	},{
	        key:21,
	        title:"Google Now",
	        component: Day22,
	        isFA: false,
	        icon: "ios-mic-outline",
	        size:50,
	        color:"#4285f4",
	        hideNav: true,
      	},{
	        key:22,
	        title:"Local WebView",
	        component: Day23,
	        isFA: true,
	        icon: "safari",
	        size:50,
	        color:"#23bfe7",
	        hideNav: false,
      	},{
	        key:23,
	        title:"Youtube scrollable tab",
	        component: Day24,
	        isFA: false,
	        icon: "logo-youtube",
	        size:50,
	        color:"#e32524",
	        hideNav: true,
      	},{
	        key:24,
	        title:"custome in-app browser",
	        component: Day25,
	        isFA: false,
	        icon: "ios-globe",
	        size:50,
	        color:"#00ab6b",
	        hideNav: true,
      	},{
	        key:25,
	        title:"swipe and switch",
	        component: Day26,
	        isFA: false,
	        icon: "md-shuffle",
	        size:50,
	        color:"#893D54",
	        hideNav: true,
      	},{
	        key:26,
	        title:"iMessage Gradient",
	        component: Day27,
	        isFA: false,
	        icon: "ios-chatbubbles",
	        size:50,
	        color:"#248ef5",
	        hideNav: false,
      	},{
	        key:27,
	        title:"iMessage image picker",
	        component: Day28,
	        isFA: false,
	        icon: "md-images",
	        size:50,
	        color:"#f5248e",
	        hideNav: true,
      	},{
	        key:28,
	        title:"3d touch",
	        component: Day29,
	        isFA: false,
	        icon: "ios-navigate",
	        size:50,
	        color:"#48f52e",
	        hideNav: false,
      	},{
	        key:29,
	        title:"Push Notifications",
	        component: Day30,
	        isFA: false,
	        icon: "md-notifications",
	        size:50,
	        color:"#f27405",
	        hideNav: false,
      	}]};
	}

	_jumpToDay(index) {
		this.props.navigator.push({
			title: this.state.days[index].title,
			index: index + 1,
			display: !this.state.days[index].hideNav,
			component: this.state.days[index].component
		});
	}

	render() {
		let that = this;
		let boxs = this.state.days.map((item, index) => {
			return (
				<TouchableHighlight key={item.key} 
				style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]}
				underlayColor='#eee' onPress={() => that._jumpToDay(index)}>
					<View style={styles.boxContainer}>
						<Text style={styles.boxText}>Day{index+1}</Text>
						{item.isFA ? 
							<IconFA size={item.size} name={item.icon} style={[styles.boxIcon, {color:item.color}]}></IconFA>
							:<Icon size={item.size} name={item.icon} style={[styles.boxIcon, {color: item.color}]}></Icon>}
					</View>
				</TouchableHighlight>
			);
		});
		return (
			<ScrollView style={styles.mainView} title={this.props.title}>
				<Swiper height={150} showsButtons={false} autoplay={true} 
				activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginTop: 3, marginLeft: 3, marginBottom: 3, marginRight: 3}}></View>}>
					<TouchableHighlight onPress={() => that._jumpToDay(0)}>
						<View style={styles.slide}>
							<Image style={styles.image} source={require('./image/day1.png')} />
							<Text style={styles.slideText}>Day1: Timer</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => that._jumpToDay(1)}>
						<View style={styles.slide}>
							<Image style={styles.image} source={{uri: 'day2'}} />
							<Text style={styles.slideText}>Day2: Weather</Text>
						</View>
					</TouchableHighlight>
				</Swiper>
				<View style={styles.touchBoxContainer}>
					{boxs}
				</View>
			</ScrollView>
		);
	}
}



class NavigationBar extends Navigator.NavigationBar {
	render() {
		let routes = this.props.navState.routeStack;
		if (routes.length) {
			let route = routes[routes.length -1];
			if (route.display === false) {
				return null;
			}
		}
		return super.render();
	}
}

export default class Home extends Component {
	componentDidMount() {
		StatusBar.setBarStyle(0);
	}

	configureScene(route, routeStack) {
		if (route.type == 'Bottom') {
			return Navigator.SceneConfigs.FloatFromBottom;
		}
		return Navigator.SceneConfigs.PushFromRight;
	}

	routeMapper = {
		LeftButton: (route, navigator, index, navState) => {
			if (route.index > 0) {
				return (
					<TouchableOpacity 
					underlayColor='transparent'
					onPress={() => {if (index > 0) {navigator.pop()}}}>
						<Text style={styles.navBackBtn}><Icon size={15} name='ios-arrow-back'></Icon> Back</Text>
					</TouchableOpacity>
				);
			} else {
				return null
			}
		},
		RightButton: (route, navigator, index, navState) => {
			return null;
		},
		Title: (route, navigator, index, navState) => {
			return (<Text style={styles.navTitle}>{route.title}</Text>);
		}
	};

	render() {
		return (
			<Navigator initialRoute={{
				title: '30 days if RN',
				index: 0,
				display: true,
				component: MainView,
			}}
			configureScene={this.configureScene}
			renderScene={(route, navigator) => {
				return <route.component navigator={navigator} title={route.title} index={route.index} />
			}}
			navigationBar={
				<NavigationBar routeMapper={this.routeMapper} style={styles.navBar} />
			} />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	mainView: {
		marginTop: 63
	},
 	navBackBtn: {
 		paddingTop: 10,
 		paddingLeft: 10,
 		fontSize: 15,
 		color: '#555'
 	},
 	navTitle: {
 		paddingTop: 10,
 		fontSize: 15,
 		fontWeight: '500'
 	},
 	navBar: {
 		borderBottomWidth: 1,
 		borderBottomColor: '#ddd'
 	},
 	itemWrapper: {
 		backgroundColor: '#f3f3f3'
 	},
 	touchBoxContainer: {
 		flexDirection: 'row',
 		flexWrap: 'wrap',
 		width: Util.size.width,
 		borderTopWidth: Util.pixel,
 		borderLeftWidth: Util.pixel,
 		borderRightWidth: Util.pixel,
 		borderColor: '#ccc'
 	},
 	touchBox: {
 		width: Util.size.width / 3 - Util.pixel,
 		height: Util.size.width / 3,
 		backgroundColor: '#fff'
 	},
 	touchBox1: {
 		borderBottomWidth: Util.pixel,
 		borderRightWidth: Util.pixel,
 		borderColor: '#ccc'
 	},
 	touchBox2: {
 		borderBottomWidth: Util.pixel,
 		borderColor: '#ccc'
 	},
 	boxContainer: {
 		alignItems: 'center',
 		justifyContent: 'center',
 		width: Util.size.width / 3,
 		height: Util.size.width / 3
 	},
 	boxIcon: {
 		position: 'relative',
 		top: -10,
 	},
 	boxText: {
 		position: 'absolute',
 		bottom: 15,
 		width: Util.size.width / 3,
 		textAlign: 'center',
 		left: 0,
 		backgroundColor: 'transparent'
 	},
 	slide: {
 		flex: 1,
 		height: 150,
 		justifyContent: 'center',
 		alignItems: 'center'
 	},
 	slideText: {
 		position: 'absolute',
 		bottom: 0,
 		paddingTop: 5,
 		paddingBottom: 5,
 		backgroundColor: "rgba(255,255, 255, 0.5)",
 		width: Util.size.width,
 		textAlign: 'center',
 		fontSize: 12
 	},
 	image: {
 		width: Util.size.width,
 		flex: 1,
 		alignSelf: 'stretch',
 		resizeMode: Image.resizeMode.contain
 	}
});





























