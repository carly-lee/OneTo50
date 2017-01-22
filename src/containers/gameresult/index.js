import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//@flow
export default class GameResult extends PureComponent{
  render(){
    return(
      <View style={ styles.container }>
        <Text>Game Result</Text>
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