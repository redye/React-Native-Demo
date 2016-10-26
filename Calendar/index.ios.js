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
    Image,
    Text
} from 'react-native';

import Calendar from './component/calendar';

export default class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let holiday = {
            '2016-10-1': '国庆节',
            '2016-9-10': '教师节',
            '2017-1-1': '元旦',
            '2016-11-11': '双十一'
        };
        let check = {
            '2016-10-1': 'checked',
            '2016-9-1': 'checked',
            '2017-7-10': 'checked',
            '2016-9-10': 'checked'
        };
        let holidayStyle = {
            backgroundColor: '#3c98f0',
            color: '#fff',
            fontSize: 15,
            fontWeight: 500
        }
        return (
            <View style={styles.container}>
                <Calendar 
                touchEvent={() => this.press()} 
                headerStyle={headerStyle} 
                holiday={holiday}
                startTime={new Date(2016, 6, 8)} 
                check={check} 
                num={5} />
            </View>
        );

        press() {

        }
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        padding: 10,
    },
    headerStyle: {

    }
});

AppRegistry.registerComponent('Demo', () => Demo);