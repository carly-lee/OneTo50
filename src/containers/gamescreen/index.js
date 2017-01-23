import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { Dashboard } from 'components/dashboard';
import { PlayBoard } from 'components/gameboard';

//@flow
export default class GameScreen extends PureComponent{

  state: {
    nextNumber:number,
  };

  constructor( props ){
    super( props );
    this.state = {
      nextNumber: 1,
    };
  }

  _onNumberClick = ( next:number )=>{
    this.setState({ nextNumber: next });
  }

  render(){
    const { nextNumber } = this.state;

    return(
      <View style={ styles.container }>
        <Dashboard nextNumber={ nextNumber } />
        <PlayBoard nextNumber={ nextNumber } onNumberClick={ this._onNumberClick } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});