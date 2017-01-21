//@flow
import React, { PureComponent, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class GameBoard extends PureComponent{
  render(){
    return(
      <View style={ styles.container }>
        <Text>GameBoard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});