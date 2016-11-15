'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Platform,
	Animated,
	Easing,
	Image,
	RefreshControl,
	ScrollView,
	StatusBar,
	TabBarIOS,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';

import Util from './../common/util';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

// 启动动画
class Entrance extends Component {
	static propTypes = {
		hideThis: React.PropTypes.func.isRequired,
	}

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		transformAnim: new Animated.Value(1),
	  		opacityAnim: new Animated.Value(1),
	  	};
	}

	componentDidMount() {
		Animated.timing(this.state.transformAnim, {
			toValue: 50,
			duration: 1200,
			delay: 2000,
			easing: Easing.elastic(2),
		}).start();

		Animated.timing(this.state.opacityAnim, {
			toValue: 0,
			duration: 800,
			delay: 2200,
			easing: Easing.elastic(1),
		}).start();

		setTimeout(() => {
			this.props.hideThis();
		}, 3300);
	}

	render() {
		return (
			<Animated.View style={[styles.entrance, {opacity: this.state.opacityAnim}]}>
				<AnimatedIcon 
					size={60} 
					style={[styles.twitter, {transform:[{scale:this.state.transformAnim}]}]}
					name='logo-twitter'></AnimatedIcon>
			</Animated.View>
		);
	}
}

// 主题内容
class TwitterPost extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isRefreshing: false,
	  	};
	}

	_onRefresh() {
		this.setState({
			isRefreshing: true
		});
		setTimeout(() => {
			this.setState({
				isRefreshing: false,
			});
		}, 1000);
	}

	render() {
		return (
			<ScrollView 
			automaticallyAdjustContentInsets={false}
			refreshControl={
				<RefreshControl 
					refreshing={this.state.isRefreshing}
					onRefresh={() => this._onRefresh()}
					tintColor='#ddd' />
			}>
				<Image source={require('./img/day3.png')} style={{width: Util.size.width, height: Util.size.height-113}} />
			</ScrollView>
		);
	}
}

// 导航条 + 内容
class TwitterFlow extends Component {
	render() {
		return (
			<View>
				<View style={styles.nav}>
					<View style={styles.navLeft}>
						<Icon name='ios-person-add' size={23} style={{color: '#1b95e0', width: 30, paddingLeft: 10}} />
					</View>
					<View syle={styles.navMid}>
						<Icon name='logo-twitter' size={27} style={{color: '#1b95e0'}} />
					</View>
					<View style={styles.navRight}>
						<Icon name='ios-search' size={23} style={{color: '#1b95e0', width: 30}} />
						<Icon name='ios-create-outline' size={23} style={{color: '#1b95e0', width: 30, paddingRight: 10}} />
					</View>
				</View>
				<TwitterPost />
			</View>
		);
	}
}

// tabBar
class FacebookTabBar extends Component {
	tabIcons = [];
	static propTypes = {
		goToPage: React.PropTypes.func,
	    activeTab: React.PropTypes.number,
	    tabs: React.PropTypes.array,
	};

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		tabIcons: [],
	  	};
	}

	componentDidMount() {
		this.props.goToPage(0);
		this._listener = this.props.scrollValue.addListener((value) => this.setAnimationValue(value));
	}

	setAnimationValue(value) {
		this.tabIcons.forEach((icon, i) => {
			const progress = value !== 1 ? value - i : 1;
			icon.setNativeProps({
				style: {
					color: this.iconColor(progress),
				}
			});
		});
	}

	iconColor(progress) {
		const red = 49 + (159 - 49) * progress;
		const green = 149 + (159 -149) * progress;
		const blue = 215 + (159 -215) * progress;
		return `rgb(${red}, ${green}, ${blue})`;
	}
	render() {
		let that = this;
		return (
			<View style={[styles.tabs, this.props.style]}>
				{this.props.tabs.map((tab, i) => {
					return (
						<TouchableOpacity key={tab.icon} onPress={() => this.props.goToPage(i)} style={styles.tab}>
							<Icon 
								name={tab.icon}
								size={25}
								color={this.props.activeTab === i ? 'rgb(49, 149, 215)' : 'rgb(159, 159, 159)'}
								ref={(icon) => { this.tabIcons[i] = icon; }} />
							<Text style={this.props.activeTab === i ? styles.tabTextActive: styles.tabText}>{tab.title}</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	}
}

class TwitterTab extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		selectedTab: '主页',
	  		title: '主页',
	  	};
	}

	_updateTitle(obj) {
		const {i} = obj;
		let title = '';
		switch(i) {
			case 0: 
				title = '主页';
				break;
			case 1: 
				title = '通知';
				break;
			case 2: 
				title = '私信';
				break;
			case 3: 
				title = '我';
				break;
		}
		this.setState({
			title: title,
		});
	}

	render() {
		const iosTabView = (
			<TabBarIOS 
				barTintColor='#fff'
				tintColor='#1b95e0'
			>
				<Icon.TabBarItem
					title='主页'
					iconName='ios-home-outline'
					selectedIconName='ios-home'
					onPress={() => this.changeTab('主页')}
					selected={this.state.selectedTab === '主页'}
				>
					<TwitterFlow />
				</Icon.TabBarItem>

				<Icon.TabBarItem
					title='通知'
					iconName='ios-notifications-outline'
					selectedIconName='ios-notifications'
					onPress={() => this.changeTab('通知')}
					selected={this.state.selectedTab === '通知'}
				>
					<TwitterFlow />
				</Icon.TabBarItem>

				<Icon.TabBarItem
					title='主页'
					iconName='ios-mail-outline'
					selectedIconName='ios-mail'
					onPress={() => this.changeTab('私信')}
					selected={this.state.selectedTab === '私信'}
				>
					<TwitterFlow />
				</Icon.TabBarItem>

				<Icon.TabBarItem
					title='主页'
					iconName='ios-person-outline'
					selectedIconName='ios-person'
					onPress={() => this.changeTab('我')}
					selected={this.state.selectedTab === '我'}
				>
					<TwitterFlow />
				</Icon.TabBarItem>
			</TabBarIOS>
		);
		const androidTabView = (
			<View>
				<View style={styles.navBg}></View>
				<View style={styles.navAndroid}>
					<View style={[styles.logoContainer, {paddingTop: -5}]}>
						<Icon name='logo-twitter' color='#fff' size={27} />
					</View>
					<View style={styles.logoContainer}>
						<Text style={styles.title}>{this.state.title}</Text>
					</View>
					<View style={styles.logoContainer}>
						<Icon name='ios-search' color='#fff' size={25} />
						<Icon name='ios-create-outline' color='#fff' size={25} style={{paddingLeft: 10}} />
					</View>
				</View>
				<ScrollableTabView 
					tabBarPosition='bottom'
					onChangeTab={(obj) => this._updateTitle(obj)}
					renderTabBar={() => <FacebookTabBar />}
				>
					<TwitterPost tabLabel={{title: '主页', icon: 'ios-home'}} />
					<TwitterPost tabLabel={{title: '通知', icon: 'ios-notifications'}} />
					<TwitterPost tabLabel={{title: '私信', icon: 'ios-mail'}} />
					<TwitterPost tabLabel={{title: '我', icon: 'ios-person'}} />
				</ScrollableTabView>
			</View>
		);
		// return Platform.OS === 'ios' ? iosTabView : androidTabView;
		return androidTabView;
	}
}

export default class Day extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		show: true,
	  	};
	}

	componentDidMount() {
		if (Platform.OS === 'ios') {
			StatusBar.setBarStyle(0);
		}
	}

	_hideEntrance() {
		this.setState({
			show: false,
		});
	}

	render() {
		let entrance = this.state.show ? <Entrance hideThis={() => this._hideEntrance()} /> : <View />
		return (
			<View style={styles.twitterContainer}>
				<TwitterTab />
				{entrance}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemWrapper:{
    	backgroundColor: '#fff'
  	},
  	twitterContainer:{
    	width: Util.size.width,
    	height: Util.size.height
  	},
  	entrance:{
	    position: "absolute",
	    top:0, left:0,
	    height: Util.size.height,
	    width: Util.size.width,
	    backgroundColor:"#1b95e0",
	    alignItems:"center",
	    justifyContent:"center"
  	},
  	twitter:{
	    color:"#fff",
	    position:"relative",
	    top: -20,
	    textAlign: "center"
  	},
  	nav:{
	    flexDirection: "row",
	    borderBottomWidth: Util.pixel,
	    borderBottomColor: "#ddd",
	    paddingBottom:5,
	    backgroundColor:"#fff",
	    paddingTop: 30,
	    alignItems: 'center',
  	},
  	navLeft:{
	 	flex: 1,
	 	justifyContent: 'flex-start',
  	},
  	navMid:{
	  	flex: 1,
	  	justifyContent: 'center',
  	},
  	navRight:{
  		flex: 1,
	    flexDirection:"row",	    
	    justifyContent: 'flex-end',
  	},
  	twitterPostContainer:{
	    width: Util.size.width,
	    height:Util.size.height-90,
	    position:"relative",
	    top:-20
  	},
  	navAndroid:{
	    backgroundColor:"#3195d7",
	    width:Util.size.width,
	    height:64,
	    flexDirection:"row",
	    justifyContent:"space-between",
	    paddingTop:30,
	    paddingLeft:10,
	    paddingRight:10,
  	},
  	tab: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    paddingBottom: 10,
  	},
  	tabs: {
	    height: 49,
	    flexDirection: 'row',
	    paddingTop: 5,
	    borderWidth: 1,
	    borderTopWidth: 0,
	    borderLeftWidth: 0,
	    borderRightWidth: 0,
	    borderBottomColor: 'rgba(0,0,0,0.05)',
	    backgroundColor:"#111"
  	},
  	icon: {
	    position: 'absolute',
	    top: 0,
	    left: 35,
  	},
  	img: {
	    width:375,
	    height: 550,
  	},
  	title:{
	    color:"#fff",
	    fontSize:18,
	    paddingLeft: 10
  	},
  	iconContainer:{
	    flexDirection:"row",
	    justifyContent:"space-between",
	    width:60,
  	},
  	logoContainer:{
	    flexDirection:"row",
	    justifyContent:"space-between",
  	},
  	tabView: {
	    flex: 1,
	    height: 500,
	    padding: 10,
	    backgroundColor: 'rgba(0,0,0,0.01)',
  	},
  	tabText: {
  		fontSize: 14,
  		color: 'rgb(159, 159, 159)',
  	},
  	tabTextActive: {
  		fontSize: 14,
  		fontWeight: 'bold',
  		color: 'rgb(49, 149, 215)'
  	}
});






























