//@flow
import React, { PureComponent, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Dashboard } from 'components/dashboard';
import { GameBoard } from 'components/gameboard';

export default class GameScreen extends PureComponent{
  render(){
    return(
      <View style={ styles.container }>
        <Text>Game Screen</Text>
        <Dashboard />
        <GameBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});