// @flow
// $FlowIgnore
import { View, Text } from 'react-native';
import React, { PropTypes } from 'react';

type Props = {
  child: React$Element<*>,
  style: Object,
};

export const UnClickableButton = ({...props}:Props)=>{
  return (
    <View style={ props.style }>
      { props.child }
    </View>
  );
}
