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
    View
} from 'react-native';

// const Search = require('./search');
import Search from './search';

export default class Demo extends Component {
    render() {
        return (
            <View style={[styles.flex, styles.topStatus]}>
                <Search></Search>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    topStatus: {
        marginTop: 25
    }
});

AppRegistry.registerComponent('Demo', () => Demo);