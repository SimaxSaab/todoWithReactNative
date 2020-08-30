import React from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

import Item from './Item/Item';

import t from './List.module.css';

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete }) => {

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      // <li key={id} className="list-group-item">
        <Item key={id}
          { ...itemProps }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onDelete={ () => onDelete(id) } />
      // </li>
    );
  });

  return (<View>
    { elements }
  </View>);
};

export default TodoList;
