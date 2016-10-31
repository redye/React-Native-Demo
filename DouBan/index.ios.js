/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TabBarIOS
} from 'react-native';

import Navigation from './ios_views/common/navigation';
import Book from './ios_views/book/book_list';
import Music from './ios_views/music/music_list';
import Movie from './ios_views/movie/movie_list';

export default class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: '图书'
        };
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item 
                title='图书' 
                selected={this.state.selectedTab === '图书'} 
                icon={require('./image/book.png')} 
                onPress={this._tabPress.bind(this, '图书')}>
                <Navigation component={Book} />
                </TabBarIOS.Item>

                <TabBarIOS.Item 
                title='音乐' 
                selected={this.state.selectedTab === '音乐'} 
                icon={require('./image/music.png')} 
                onPress={this._tabPress.bind(this, '音乐')}>
                <Navigation component={Music} />
                </TabBarIOS.Item>

                <TabBarIOS.Item 
                title='电影' 
                selected={this.state.selectedTab === '电影'} 
                icon={require('./image/movie.png')} 
                onPress={this._tabPress.bind(this, '电影')}>
                <Navigation component={Movie} />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }

    _tabPress(tab) {
        this.setState({
            selectedTab: tab
        });
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('Demo', () => Demo);