import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ClickableButton, UnClickableButton } from 'components/gameboard';

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

  render(){
    const{ number, nextNumber } = this.props;
    const child:React.Element = <Text style={ styles.number }>{ this.props.number }</Text>;

    if( number === nextNumber ){
      return <ClickableButton style={styles.container} child={child} onPress={this._onPress} />;
    }else{
      return <UnClickableButton style={styles.container} child={child} />;
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