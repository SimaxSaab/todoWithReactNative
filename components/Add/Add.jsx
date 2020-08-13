import React, { Component } from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

export default class Add extends Component {

  state = {
    label: ''
  };

  onLabelChange = (text) => {
    this.setState({
      label: text
    })
  };

  onSubmit = (e) => {
    const { label } = this.state;
    this.setState({ label: '' });
    const cb = this.props.onItemAdded || (() => {});
    cb(label);
  };

  render() {
    return (
      <View
        style={a.addPanel}>

        <TextInput style={a.textInputControl}
               value={this.state.label}
               onChangeText={(text) => this.onLabelChange(text)}
               placeholder="Put on the list" />

        <Button style={a.addButton} 
                title='Add'
                onPress={this.onSubmit} />
      </View>
    );
  }
}

const a = StyleSheet.create({
  addPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInputControl: {
    // width: '70%',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 2,
    paddingLeft: 20
  },
  addButton: {
    textTransform: 'capitalize',
    color: '#f00',
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5
  },
});