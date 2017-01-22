import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { Timer, NextNumber } from 'components/dashboard';

//@flow
export default class Dashboard extends PureComponent{
  render(){
    return(
      <View style={ styles.container }>
        <Timer />
        <NextNumber />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
  },
});