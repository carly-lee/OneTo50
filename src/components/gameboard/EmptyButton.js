import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

//@flow
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