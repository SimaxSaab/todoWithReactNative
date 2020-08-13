import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({toDo, done}) => {
  return (
    <View style={h.header}>
      <Text style={h.h1}>Todo List <Text style={h.h2}>{toDo} more to do, {done} done</Text></Text>
    </View>
  );
};

const h = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
  },
  h1: {
    fontSize: 24,
    flexGrow: 1,
  },
  h2: {
    fontSize: 19,
    color: 'grey',
  }
});

export default Header;
