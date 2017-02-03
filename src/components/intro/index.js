// @flow
// $FlowIgnore
import { Text, View, StyleSheet, Button } from 'react-native';
import React, { PureComponent } from 'react';

type Props = {
  onPress: () => void,
};

export default class Intro extends PureComponent{
  props: Props;

  _onPressStart = ():void =>{
    this.props.onPress();
  }

  render(){
    return(
      <View style={ styles.container }>
        <Text style={ styles.title }>
          1 to 50
        </Text>
        <Button
          onPress={ this._onPressStart }
          title="Let's Start!"
          color="#841584"
          accessibilityLabel="Let's Start!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});