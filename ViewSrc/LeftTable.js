import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ListView,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';

import { connect } from 'react-redux';
import { selectedRow } from '../Action/Action';


export class LeftTable extends Component {
    constructor(props) {
        super(props);
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <MyCell rowData={rowData} index={rowID} indexCell={this.props.indexCell}/>
        )
    }
    render() {
        let { dataArray, indexCell, flexNum} = this.props;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let leftDataSource = ds.cloneWithRows(dataArray);
        return (
            <ListView
                dataSource={leftDataSource}
                renderRow={this._renderRow}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedID: state.index
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectRowAtIndex: (index) => {
            dispatch(selectedRow(index));
        }
    }
}

class RowCell extends Component {

    pushToDetails = (name) => {
        console.log(name);
        Alert.alert(
            '点击了'+name
          )
    }

    render() {
        let { index, selectedID, selectRowAtIndex, rowData, indexCell } = this.props;
        let bgColor = indexCell ? ((index == selectedID) ? '#A5A5A5' : '#D9D9D9') : '#D9D9D9';
        let press = indexCell ? () => selectRowAtIndex(index) : () => this.pushToDetails(rowData);
        let line = indexCell ? 0.5 : null;
        let data = indexCell ? rowData.title :rowData;
        return (
            <TouchableOpacity onPress={press}>
                <View style={[styles.cellContainer, { backgroundColor: bgColor, borderRightWidth:line}]}>
                    <Text>{data}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const MyCell = connect(
    mapStateToProps,
    mapDispatchToProps
)(RowCell)



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9'
    },
    cellContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        flexDirection:'row',
        borderRightColor:'#A5A5A5'
    }
});