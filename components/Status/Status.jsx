import React, {Component} from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

// const Status = ({filter, onFilterChange = () => {}}) => {

  export default class Status extends Component {

    backC= (name) => {
      const {filter} = this.props;
      const isActive = name === filter;
      if (isActive) return '#888';
    }

render() {
  const {filter, onFilterChange} = this.props;
  const buttons = filterButtons.map(({name, label}) => {
    
    // const isActive = name === filter;
    // const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <View style={status.butItem} key={name}>
        <Button  style={{backgroundColor: this.backC()}}
                // key={name}
                color={this.backC(name)}
                onPress={() => onFilterChange(name)}
                
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
}

const status = StyleSheet.create({
  butContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  butItem: {
    marginRight: 10

  }
});

// export default Status;
