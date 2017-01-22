import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { PlayBoard } from 'components/gameboard';

//@flow
export default class GameBoard extends PureComponent{
  render(){
    return(
      <View style={ styles.container }>
        <PlayBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});