import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { NumberButton } from 'components/gameboard';

//@flow
export default class PlayBoard extends PureComponent{
  allNumbers:Array<number> = [];

  state: {
    buttons:?Array<NumberButton>
  };

  constructor( props ){
    super( props );
    for( let i=0; i<50; i++ ){
      this.allNumbers.push( i+1 );
    }
    this.state = {
      buttons: null,
    };
  }

  componentWillMount(){
    let buttons:Array<NumberButton> = [];
    let n:number;
    for( let i = 0; i<25; i++ ){
      n = this.allNumbers.splice( 0,1 )[0];
      buttons.push( <NumberButton key={ i } number={ n } index={ i } onClickNumber={ this._onClickNumber } clickable={ false } /> );
    }
    this.setState({ buttons });
  }

  _onClickNumber = ( num:number, index:number ):void =>{
    if( this.allNumbers.length > 0 ){
      this._assignNextNumber( index );
    }else{
      console.debug( 'disappear numbers' );
    }
  }

  _assignNextNumber = ( index:number )=>{
    const next:number = this.allNumbers.splice( 0,1 )[0];
    let buttons = [...this.state.buttons];
    const newButton:NumberButton = React.cloneElement( buttons[index], { number: next });
    buttons.splice( index, 1, newButton );
    this.setState({ buttons });
  }

  render(){
    return(
      <View style={ styles.container }>
      { this.state.buttons }
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