import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { Dashboard } from 'components/dashboard';
import { PlayBoard } from 'components/gameboard';

//@flow
type Props = {
  showResult: ( time:number ) => void,
};

export default class GameScreen extends PureComponent{
  props:Props;

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

  _reportFinalTime = ( time:number )=>{
    this.props.showResult( time );
  }

  render(){
    const { nextNumber } = this.state;

    return(
      <View style={ styles.container }>
        <Dashboard nextNumber={ nextNumber } reportFinalTime={ this._reportFinalTime } />
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