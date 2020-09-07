import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamation, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Text, Button, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ViewModal } from './Modal/ViewModal';

// const Item = ({ important, done,
//       label, onToggleImportant, onToggleDone, onDelete }) => {

export default class Item extends Component {

  state = {
    modal: false
  };

  onViewModal = () => {
    // const {onSearchChange = () => {}} = this.props;
    this.setState({
      modal: true
    });

    // onSearchChange(e.target.value);
  };

  onCancel = () => {
    this.setState({
      modal: false
    })
  }

  impColor = () => {
    const { important } = this.props;

    if (important) return 'steelblue';
    return '#888';
  };

  doneDecor = () => {
    const {done} = this.props;

    if (done) return 'line-through';
    return 'none';
  }

  render() {
    const { label, onToggleImportant, onToggleDone, onDelete } = this.props;
    return (
      <View style={item.item}>
        
        <ViewModal visible={this.state.modal} onCancel={this.onCancel} />
        {/* <TouchableOpacity style={item.itemBut} > */}
        <Text
          style={[item.itemLabel, {color: this.impColor(), textDecorationLine: this.doneDecor()}]}
          onPress={onToggleDone} onLongPress={this.onViewModal}>{label}</Text>
{/* </TouchableOpacity> */}
        <Icon.Button style={[item.exc, item.gen]} name="exclamation" color="red" onPress={onToggleImportant}>
        </Icon.Button>

        <Icon.Button style={[item.trash, item.gen]} name="trash" color="green" onPress={onDelete}>
        </Icon.Button>
        
      </View>
    );
  };
};

const item = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 8
  },
  itemLabel: {
    color: '#ccc',
    flexWrap: 'wrap',
    width: '65%'
  },
  gen: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 2,
    width: 45
  },
  exc: {   
    paddingLeft: 16
  },
  trash: {
    paddingLeft: 12,
    marginRight: 0
  }
});

// export default Item;
