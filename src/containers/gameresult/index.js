// @flow
// $FlowIgnore
import { Text, View, StyleSheet, Button } from 'react-native';
import React, { PureComponent } from 'react';

type Props = {
  finalTime:string,
  onRestart:()=>void,
};
export default class GameResult extends PureComponent{
  props:Props;

  _onPressReStart = ()=>{
    this.props.onRestart();
  }

  render(){
    return(
      <View style={ styles.container }>
        <Text style={ styles.result }>{ this.props.finalTime }</Text>
        <Button
          onPress={ this._onPressReStart }
          title="Restart"
          color="#841584"
          accessibilityLabel="Restart"
        />
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