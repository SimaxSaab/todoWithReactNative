import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamation, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Text, Button, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import t from './Item.module.css';

const Item = ({ important, done,
      label, onToggleImportant, onToggleDone, onDelete }) => {

  let classNames = t.item;
  if (important) {
    classNames += ' ' + t.important;
  }

  if (done) {
    classNames += ' ' + t.done;
  }


  return (
    <View style={item.item}>
      <Text
        style={item.itemLabel}
        onClick={onToggleDone}>{label}</Text>

      {/* <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        {/* <i className="fa fa-exclamation"></i> 
        <FontAwesomeIcon icon={ faExclamation } color={'red'} />
      </button> */}

      <Icon.Button style={item.exc} name="exclamation" color="red" onClick={onToggleImportant}>
      </Icon.Button>

      <Icon.Button style={item.trash} name="trash" color="green" onClick={onDelete}>
      </Icon.Button>

      {/* <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        {/* <i className="fa fa-trash-o"></i> 
        <FontAwesomeIcon icon={ faTrash } color={'green'} />
      </button> */}
    </View>
  );
};

const item = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:10,
    borderWidth: 1,
    borderColor: '#eee',
    marginTop: 8
  },
  itemLabel: {
    color: '#ccc',
    width: '70%',
    wordWrap: 'anywhere'
  },
  exc: {
    marginRight: -8
  },
  trash: {
    marginRight: -8
  }
});

export default Item;
