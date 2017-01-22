import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//@flow
export default class NextNumber extends PureComponent{
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
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});