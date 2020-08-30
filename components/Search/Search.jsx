import React, { Component } from 'react';
// import Status from '../Status/Status';
import {TextInput, Button, View, StyleSheet} from 'react-native';

export default class SearchPanel extends Component {

  state = {
    word: ''
  };

  onWordChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      word: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      // <View style={search.ss}>
        <TextInput style={search.searchInputControl}
              placeholder="Search"
              value={this.state.word}
              onChange={ this.onWordChange } />
        /* <Status
              filter={filter}
              onFilterChange={this.onFilterChange} /> */
      // </View>
    );
  };

  
}

const search = StyleSheet.create({
  
  searchInputControl: {
    width: '30%',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 2,
    paddingLeft: 20
  },
});
