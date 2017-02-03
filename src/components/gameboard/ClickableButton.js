// @flow
// $FlowIgnore
import { TouchableOpacity, Text } from 'react-native';
import React, { PropTypes } from 'react';

type Props = {
  child: React$Element<*>,
  onPress: ()=>{},
  style: Object,
}

export const ClickableButton = ( props:Props )=>{
  const _onPress = ()=>{
    props.onPress();
  };

  return (
    <TouchableOpacity style={ props.style } onPress={ _onPress }>
      { props.child }
    </TouchableOpacity>
  )
};