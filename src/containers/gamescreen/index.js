// @flow
import React, { PureComponent } from 'react';
// $FlowIgnore
import { View, StyleSheet, Button } from 'react-native';

import { Dashboard } from 'components/dashboard';
import { PlayBoard } from 'components/gameboard';

type Props = {
  showResult: ( time:string ) => void,
  onRestart:()=>void,
};

export default class GameScreen extends PureComponent{
  props:Props;

  state: {
    nextNumber:number,
  };

  constructor( props:Props ){
    super( props );
    this.state = {
      nextNumber: 1,
    };
  }

  _onNumberClick = ( next:number )=>{
    this.setState({ nextNumber: next });
  }

  _reportFinalTime = ( time:string )=>{
    this.props.showResult( time );
  }

  _onPressReStart = ()=>{
    this.props.onRestart();
  }

  render(){
    const { nextNumber } = this.state;

    return(
      <View style={ styles.container }>
        <Dashboard nextNumber={ nextNumber } reportFinalTime={ this._reportFinalTime } />
        <PlayBoard nextNumber={ nextNumber } onNumberClick={ this._onNumberClick } />
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
  },
});