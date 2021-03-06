// @flow
// $FlowIgnore
import { View, StyleSheet } from 'react-native';
import React, { PureComponent } from 'react';

import { NumberButton, EmptyButton } from 'components/gameboard';
import { shuffleArray } from 'utils';

type Props = {
  nextNumber: number,
  onNumberClick: ( num: number ) => void,
};

export default class PlayBoard extends PureComponent{
  props:Props;
  allNumbers:Array<number> = [];
  index:number;

  state: {
    buttons:Array<NumberButton>,
  };

  constructor( props:Props ){
    super( props );
    const initNumbers:Array<number> = this._getShuffledNumbers();
    let buttons:Array<NumberButton> = [];
    for( let i=0; i<25; i++ ){
      this.allNumbers.push( i+26 );
      buttons.push( <NumberButton key={ i } number={ initNumbers[i] } index={ i } nextNumber={ this.props.nextNumber } onClickNumber={ this._onClickNumber }  /> );
    }
    this.state = { buttons };
  }

  componentWillReceiveProps(nextProps:Props){
    const { nextNumber } = nextProps;
    let newButtons:Array<NumberButton>;
    if( nextNumber <= 26 ){
      newButtons = this._getButtons( this.index, nextNumber );
    }else{
      newButtons = this._disappearButtons( this.index, nextNumber );
    }
    this.setState({ buttons: newButtons });
  }

  _getShuffledNumbers = ():Array<number>=>{
    let array:Array<NumberButton> = [];
    for( let i=1; i<=25; i++ ){
      array.push( i );
    }
    return shuffleArray( array );
  }

  _onClickNumber = ( num:number, index:number ):void =>{
    const nextClick = num + 1;
    this.index = index;
    this.props.onNumberClick( nextClick );
  }

  _getButtons = ( index:number, nextClick:number ):Array<NumberButton>=>{
    const next:number = Number(this.allNumbers.splice( 0,1 )[0]);
    return this.state.buttons.map(( btn, idx )=>{
      if( idx === index ){
        return React.cloneElement( btn, { number: next, nextNumber: nextClick });
      }else{
        return React.cloneElement( btn, { nextNumber: nextClick });
      }
    });
  }

  _disappearButtons = ( index:number, nextClick:number )=>{
    return this.state.buttons.map(( btn, idx )=>{
      if( idx === index ){
        return <EmptyButton key={ idx } />;
      }else{
        return React.cloneElement( btn, { nextNumber: nextClick });
      }
    });
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