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

import Button from './component/button';

/*
    @"http://a.hiphotos.baidu.com/zhidao/pic/item/72f082025aafa40fa38bfc55a964034f79f019ec.jpg",
    @"http://photo.enterdesk.com/2011-2-16/enterdesk.com-1AA0C93EFFA51E6D7EFE1AE7B671951F.jpg",
    @"http://dl.bizhi.sogou.com/images/2012/09/30/44928.jpg",
    @"http://dl.bizhi.sogou.com/images/2012/03/08/96703.jpg",
    @"http://image.tianjimedia.com/uploadImages/2012/010/XC4Y39BYZT9A.jpg",
    @"http://pic51.nipic.com/file/20141030/2531170_080422201000_2.jpg"

*/

const imgs = [
    "http://a.hiphotos.baidu.com/zhidao/pic/item/72f082025aafa40fa38bfc55a964034f79f019ec.jpg",
    "http://photo.enterdesk.com/2011-2-16/enterdesk.com-1AA0C93EFFA51E6D7EFE1AE7B671951F.jpg",
    "http://dl.bizhi.sogou.com/images/2012/09/30/44928.jpg",
    "http://dl.bizhi.sogou.com/images/2012/03/08/96703.jpg",
    "http://image.tianjimedia.com/uploadImages/2012/010/XC4Y39BYZT9A.jpg",
    "http://pic51.nipic.com/file/20141030/2531170_080422201000_2.jpg"
];

export default class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            images: imgs,
            loading: true
        };
    }

    render() {
        return (
            <View style={[styles.container, styles.flex]}>
                {
                this.state.loading ?
                <View style={styles.loading}>
                    <Text>正努力加载中，请稍后...</Text>
                </View> : null
                }
                <View style={styles.images}>
                    <Image style={styles.img} 
                    resizeMode='contain' 
                    source={{uri: this.state.images[this.state.currentIndex]}} 
                    onLoadStart={() => this.startLoading()} 
                    onLoadEnd={() => this.endLoading()} />
                </View>

                <View style={[styles.buttons]}>
                    <View style={styles.button}>
                        <Button title='上一张' ref='preButton' buttonClick={() => this.previous()}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='下一张' ref='nextButton' buttonClick={() => this.next()}></Button>
                    </View>
                </View>
            </View>
        );
    }

    startLoading() {
        this.setState({
            loading: true
        });
    }

    endLoading() {
        this.setState({
            loading: false
        });
    }

    buttonClick(index) {
        if (index < 0) {
            alert('已经是第一张了');
        } else if (index + 1 >= imgs.length) {
            alert('已经是最后一张了');
        } else {
            this.setState({
                currentIndex: index
            });
        }
    }

    previous() {
        this.buttonClick(this.state.currentIndex - 1);
        // alert('上一张');
    }

    next() {
        this.buttonClick(this.state.currentIndex + 1);
        // alert('下一张');
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
        padding: 10,
    },
    flex: {
        flex: 1
    },
    images: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    img: {
        height: 150,
        width: 200,
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        height: 40,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'

    },
    button: {
        margin: 20
    },
    loading: {
        position: 'absolute',
        marginTop: 0,
        marginLeft: 0
    }
});

AppRegistry.registerComponent('Demo', () => Demo);