//@flow
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
} from 'react-native';
import Intro from './src/components/intro';
import { PATH } from './src/constants';

export default class OneTo50 extends Component{

  constructor(){
    super();
    this.route = null;
    this.navigator = null;
  }

  _pushScene = ( path, index )=>{
    this.navigator.push({ path, index });
  }

  _popScene = ()=>{
    this.navigator.pop();
  }

  _onPressStart = ()=>{
  }

  _renderScene = ( route, navigator )=>{
    this.route = route;
    this.navigator = navigator;

    switch( route.path ){
      case PATH.INTRO :
        return <Intro onPress={ this._onPressStart } />;
      default :
        return <Text>Not Found</Text>;
    }
  }

  render(){
    return (
      <Navigator
        initialRoute={{ path: PATH.INTRO, index: 0 }}
        renderScene={ this._renderScene }
      />
    );
  }
}

AppRegistry.registerComponent( 'OneTo50', () => OneTo50 );
