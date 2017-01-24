import React, { PureComponent } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

//@flow
type Props = {
  number: number,
  index: number,
  nextNumber: number,
  onClickNumber: ( num: number ) => void,
};

export default class NumberButton extends PureComponent{
  props: Props;

  _onPress = ():void =>{
    this.props.onClickNumber( this.props.number , this.props.index );
  }

  _getClickableElement= ()=>{
    return(
      <TouchableOpacity style={ styles.container } onPress={ this._onPress }>
        <Text style={ styles.number }>{ this.props.number }</Text>
      </TouchableOpacity>
    );
  }

  _getUnclickableElement= ()=>{
    return(
      <View style={ styles.container }>
        <Text style={ styles.number }>{ this.props.number }</Text>
      </View>
    );
  }

  render(){
    const{ number, nextNumber } = this.props;

    if( number === nextNumber ){
      return this._getClickableElement();
    }else{
      return this._getUnclickableElement();
    }
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