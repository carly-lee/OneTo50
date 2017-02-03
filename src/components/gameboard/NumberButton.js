// @flow
// $FlowIgnore
import { Text, StyleSheet } from 'react-native';
import React, { PropTypes } from 'react';

import { ClickableButton, UnClickableButton } from 'components/gameboard';

type Props = {
  number: number,
  index: number,
  nextNumber: number,
  onClickNumber: ( number:number, index:number )=>{},
}

export const NumberButton = ( props:Props )=>{
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