import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { LeftTable } from './LeftTable';

var { width, height } = Dimensions.get('window');



class App extends Component {
    render() {
        let { dataArr,selectIndex } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <LeftTable dataArray={dataArr} indexCell={true} />
                </View>
                <View style={{ flex: 3 }}>
                    <LeftTable dataArray={dataArr[selectIndex].data} indexCell={false} />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return ({
        selectIndex: state.index,
    })
}

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        flex: 1
    },
});