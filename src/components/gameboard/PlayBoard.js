import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';

import { NumberButton } from 'components/gameboard';
import { shuffleArray } from 'utils';

//@flow
type Props = {
  nextNumber: number,
  onNumberClick: ( num: number ) => void,
};

export default class PlayBoard extends PureComponent{
  props:Props;
  allNumbers:Array<number> = [];

  state: {
    buttons:?Array<NumberButton>
  };

  constructor( props ){
    super( props );
    for( let i=1; i<25; i++ ){
      this.allNumbers.push( i+25 );
    }
    this.state = {
      buttons: null,
    };
  }

  componentWillMount(){
    let initNumbers:Array<NumberButton> = [];
    for( let i=1; i<=25; i++ ){
      initNumbers.push( i );
    }
    initNumbers = shuffleArray( initNumbers );

    let buttons:Array<NumberButton> = [];
    let n:number;
    for( let i = 0; i<25; i++ ){
      n = initNumbers[i];
      buttons.push( <NumberButton key={ i } number={ n } index={ i } nextNumber={ this.props.nextNumber } onClickNumber={ this._onClickNumber }  /> );
    }
    this.setState({ buttons });
  }

  _onClickNumber = ( num:number, index:number ):void =>{
    const nextClick = num + 1;
    if( this.allNumbers.length > 0 ){
      const newButtons = this._assignNextNumber( index, nextClick );
      this.setState({ buttons: newButtons });
    }else{
      console.debug( 'disappear numbers' );
    }
    this.props.onNumberClick( nextClick );
  }

  _assignNextNumber = ( index:number, nextClick:number ):Array<NumberButton>=>{
    const next:number = this.allNumbers.splice( 0,1 )[0];
    const { buttons } = this.state;
    const len:number = buttons.length;
    let newButtons:Array<NumberButton> = [];
    for( let i = 0; i<len; i++ ){
      if( i === index ){
        newButtons.push( React.cloneElement( buttons[i], { number: next, nextNumber: nextClick }));
      }else{
        newButtons.push( React.cloneElement( buttons[i], { nextNumber: nextClick }));
      }
    }
    return newButtons;
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