import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamation, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Text, Button, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// const Item = ({ important, done,
//       label, onToggleImportant, onToggleDone, onDelete }) => {

export default class Item extends Component {



  //   constructor(props) {
  //     super(props);
  // };          
  // let classNames = t.item;
  // if (important) {
  //   classNames += ' ' + t.important;
  // }

  // if (done) {
  //   classNames += ' ' + t.done;
  // }

  // colorStyles = {
  //   сolor: impColor()
  // };



  impColor = () => {
    const { important, done, label, onToggleImportant, onToggleDone, onDelete } = this.props;

    if (important) return 'steelblue';
    return '#888';
  };

  doneDecor = () => {
    const {done} = this.props;

    if (done) return 'line-through';
    return 'none';
  }

  render() {
    const { important, done, label, onToggleImportant, onToggleDone, onDelete } = this.props;
    return (
      <View style={item.item}>
        <Text
          style={[item.itemLabel, {color: this.impColor(), textDecorationLine: this.doneDecor()}]}
          onPress={onToggleDone}>{label}</Text>

        {/* <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        {/* <i className="fa fa-exclamation"></i> 
        <FontAwesomeIcon icon={ faExclamation } color={'red'} />
      </button> */}

        <Icon.Button style={[item.exc, item.gen]} name="exclamation" color="red" onPress={onToggleImportant}>
        </Icon.Button>

        <Icon.Button style={[item.trash, item.gen]} name="trash" color="green" onPress={onDelete}>
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
    width: '70%',
    flexWrap: 'wrap'
  },
  gen: {
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 2,
  },
  exc: {   
    marginRight: -8
  },
  trash: {
    marginRight: -8
  }
});

// export default Item;
