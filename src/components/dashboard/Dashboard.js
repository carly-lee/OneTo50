//@flow
import React, { PureComponent, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Dashboard extends PureComponent{
  render(){
    return(
      <View style={ styles.container }>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: 'skyblue',
  },
});