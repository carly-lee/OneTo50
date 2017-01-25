import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { Timer, NextNumber } from 'components/dashboard';

//@flow
type Props = {
  nextNumber: number,
  reportFinalTime: ( time:number )=> void,
};

export default class Dashboard extends PureComponent{
  props:Props;

  render(){
    return(
      <View style={ styles.container }>
        <Timer { ...this.props } />
        <NextNumber number={ this.props.nextNumber } />
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