import React from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const Status = ({filter, onFilterChange = () => {}}) => {

  const buttons = filterButtons.map(({name, label}) => {
    // const isActive = name === filter;
    // const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <View style={status.butItem}>
        <Button  
                key={name}
                
                onClick={() => onFilterChange(name)}
                
                title={label} />
      </View>
    );
  });

  return (
    <View style={status.butContainer}>
      { buttons }
    </View>
  );
};

const status = StyleSheet.create({
  butContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  butItem: {
    marginRight: 3
  }
});

export default Status;
