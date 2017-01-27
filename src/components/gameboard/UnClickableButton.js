import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

//@flow
export const UnClickableButton = ({...props})=>{
  return (
    <View style={ props.style }>
      { props.child }
    </View>
  );
}

UnClickableButton.propTypes = {
  child: PropTypes.element.isRequired,
}
