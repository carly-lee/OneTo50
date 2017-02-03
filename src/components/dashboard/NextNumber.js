// @flow
// $FlowIgnore
import { Text, View, StyleSheet } from 'react-native';
import React, { PureComponent } from 'react';

type Props = {
  number: number,
};

export default class NextNumber extends PureComponent{
  props: Props;

  render(){
    return(
      <View style={ styles.container }>
        <Text>{this.props.number}</Text>
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