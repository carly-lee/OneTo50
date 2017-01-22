import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//@flow
export default class NumberButton extends PureComponent{
  render(){
    return(
      <View style={ styles.container }>
        <Text>1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
});