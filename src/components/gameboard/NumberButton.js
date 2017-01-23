import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

//@flow
type Props = {
  number: number,
  index: number,
  clickable: boolean,
  onClickNumber: ( num: number ) => void,
};

export default class NumberButton extends PureComponent{
  props: Props;

  _onPress = ():void =>{
    if( this.props.clickable ){
      this.props.onClickNumber( this.props.number , this.props.index );
    }
  }

  render(){
    return(
      <TouchableOpacity style={ styles.container } onPress={ this._onPress }>
        <Text style={ styles.number }>{ this.props.number }</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: 70,
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});