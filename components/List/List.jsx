import React from 'react';
import { TextInput, Button, View, FlatList } from 'react-native';

import Item from './Item/Item';

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete, onViewModal }) => {

  // const elements = items.map((item) => {
  //   const { id, ...itemProps } = item;
  //   return (
  //     // <li key={id} className="list-group-item">
  //       <Item key={id}
  //         { ...itemProps }
  //         onToggleImportant={ () => onToggleImportant(id) }
  //         onToggleDone={ () => onToggleDone(id) }
  //         onDelete={ () => onDelete(id) } />
  //     // </li>
  //   );
  // });

  // return (<View>
  //   { elements }
  // </View>);
  // const elements = items.map((item) => {
  //   const { id, ...itemProps } = item;
  //   return (
  //     // <li key={id} className="list-group-item">
  //     <Item key={id}
  //       {...itemProps}
  //       onToggleImportant={() => onToggleImportant(id)}
  //       onToggleDone={() => onToggleDone(id)}
  //       onDelete={() => onDelete(id)} />
  //     // </li>
  //   );
  // });

  return (<FlatList
      keyExtractor={(item) => item.id.toString()}
      data={items}
      renderItem={({item}) => {
        const { id, ...itemProps } = item;
        return (
          <Item key={id}
            {...itemProps}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleDone={() => onToggleDone(id)}
            onDelete={() => onDelete(id)} 
            onViewModal={() => onViewModal(id)}
            />
        );
      }}
    />);


};

export default TodoList;
