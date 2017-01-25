import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//@flow
type Props = {
  finalTime:number,
};
export default class GameResult extends PureComponent{
  props:Props;

  render(){
    return(
      <View style={ styles.container }>
        <Text style={ styles.result }>{ this.props.finalTime }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});