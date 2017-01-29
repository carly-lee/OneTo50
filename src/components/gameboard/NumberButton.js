import React, { PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ClickableButton, UnClickableButton } from 'components/gameboard';

export const NumberButton = ( props )=>{
  const _onPress = ()=>{
    props.onClickNumber( props.number, props.index );
  }

  const child = <Text style={ styles.number }>{ props.number }</Text>;

  if( props.number === props.nextNumber ){
    return <ClickableButton style={styles.container} child={child} onPress={_onPress} />;
  }else{
    return <UnClickableButton style={styles.container} child={child} />;
  }
}

NumberButton.propTypes = {
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onClickNumber: PropTypes.func.isRequired,
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