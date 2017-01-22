import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { NumberButton } from 'components/gameboard';

//@flow
export default class PlayBoard extends PureComponent{
  _getNumbers = ()=>{
    let buttons:Array<NumberButton> = [];
    for( let i = 0; i<25; i++ ){
      buttons.push( <NumberButton key={ i } number={ i+1 } /> );
    }
    return buttons;
  }

  render(){
    return(
      <View style={ styles.container }>
        { this._getNumbers() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 350,
    height: 350,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'grey',
  },
});