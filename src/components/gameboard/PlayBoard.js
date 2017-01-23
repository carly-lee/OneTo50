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
      buttons.push( <NumberButton key={ i } number={ n } index={ i } onClickNumber={ this._onClickNumber } clickable={ n === this.props.nextNumber } /> );
    }
    this.setState({ buttons });
  }

  _onClickNumber = ( num:number, index:number ):void =>{
    const next = num + 1;
    let newButtons;
    if( this.allNumbers.length > 0 ){
      newButtons = this._assignNextNumber( index );
    }else{
      console.debug( 'disappear numbers' );
    }
    this.props.onNumberClick( next );
    this._makeButtonClickable( next, newButtons );
  }

  _assignNextNumber = ( index:number ):Array<NumberButton>=>{
    const next:number = this.allNumbers.splice( 0,1 )[0];
    let buttons = [...this.state.buttons];
    const newButton:NumberButton = React.cloneElement( buttons[index], { number: next });
    buttons.splice( index, 1, newButton );
    return buttons;
  }

  _makeButtonClickable = ( next:number, buttons:Array<NumberButton> )=>{
    const newButtons = buttons.map(( btn )=>{
        if( btn.props.number === next ){
          return React.cloneElement( btn, { clickable: true });
        }else{
          return btn;
        }
      });
    this.setState({ buttons: newButtons });
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