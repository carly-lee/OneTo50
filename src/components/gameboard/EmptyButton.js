// @flow
// $FlowIgnore
import { StyleSheet, View } from 'react-native';
import React from 'react';

export const EmptyButton = ()=>(
  <View style={styles.container}></View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 70,
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});