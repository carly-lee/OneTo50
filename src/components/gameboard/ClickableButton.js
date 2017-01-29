import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';

//@flow
export const ClickableButton = ( props )=>{
  const _onPress = ()=>{
    props.onPress();
  };

  return (
    <TouchableOpacity style={ props.style } onPress={ _onPress }>
      { props.child }
    </TouchableOpacity>
  )
};
 
ClickableButton.propTypes = {
  child: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
}

