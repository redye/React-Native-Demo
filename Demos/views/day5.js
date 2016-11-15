'use strict';

import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	MapView,
	StatusBar,
	TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Util from './../common/util';

class Map extends Component {
	static defaultProps = {
	  	mapType: 'standard',
	  	showsUserLocation: false,
	  	followUserLocation: false,
	};

	static propTypes = {
		// mapType: React.PropTypes.style,
		showsUserLocation: React.PropTypes.bool.isRequired,
		followUserLocation: React.PropTypes.bool.isRequired,
	};

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isFirstLoad: true,
	  		mapRegion: undefined,
	  		annotations: [],
	  	};
	}

	_getAnnotations(region) {
		let annotation = {
			longitude: region.longitude,
			latitude: region.latitude,
			title: 'You are here',
		};
		return [annotation];
	}

	_onRegionChangeComplete(region) {
		if (this.state.isFirstLoad) {
			let annotations = this._getAnnotations(region);
			this.setState({
				isFirstLoad: false,
				annotations: annotations,
			});
		}
	}

	render() {
		return (
			<View>
				<MapView
					style={this.props.mapStyle}
					mapType={this.props.mapType}
					showsUserLocation={this.props.showsUserLocation}
					followUserLocation={this.props.followUserLocation}
					onRegionChangeComplete={(region) => this._onRegionChangeComplete(region)}
					region={this.state.mapRegion}
					annotations={this.state.annotations} />
			</View>
		);
	}
}


export default class extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		showGeo: false,
	  	};
	}

	componentDidMount() {
		StatusBar.setBarStyle(0);
	}

	_getLocation() {
		this.setState({
			showGeo: true,
		});
	}

	render() {
		return (
			<View style={styles.container}>
			<Map 
				mapType='standard'
				mapStyle={styles.map}
				showsUserLocation={this.state.showGeo}
				followUserLocation={this.state.showGeo}
			/>
			<TouchableHighlight underlayColor='#00bd03' style={styles.btn} onPress={() => this._getLocation()}>
				<Text style={styles.btnText}><Icon size={18} name='md-navigate' /> Find my location</Text>
			</TouchableHighlight>
		</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 64,
	},
	map: {
		width: Util.size.width,
		height: Util.size.height - 120,
	},
	btn: {
		backgroundColor: '#00a803',
		width: Util.size.width - 80,
		height: 40,
		borderWidth: Util.pixel,
		borderColor: '#009302',
		borderRadius: 4,
		justifyContent: 'center',
		marginTop: 10,
	},
	btnText: {
		textAlign: 'center',
		fontSize: 18,
		color: '#fff',
	}
});




































