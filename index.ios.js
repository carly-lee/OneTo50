//@flow
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
} from 'react-native';
import { PATH } from './src/constants';
import Intro from './src/components/intro';
import GameScreen from './src/containers/gamescreen';
import GameResult from './src/containers/gameresult';

export default class OneTo50 extends Component{

  constructor(){
    super();
    this.route = null;
    this.navigator = null;
  }

  _pushScene = ( path )=>{
    this.navigator.push({ path });
  }

  _popScene = ()=>{
    this.navigator.pop();
  }

  _onPressStart = ()=>{
    this._pushScene( PATH.GAME_SCREEN );
  }

  _renderScene = ( route, navigator )=>{
    this.route = route;
    this.navigator = navigator;

    switch( route.path ){
      case PATH.INTRO :
        return <Intro onPress={ this._onPressStart } />;
      case PATH.GAME_SCREEN :
        return <GameScreen />;
      case PATH.GAME_RESULT :
        return <GameResult />;
      default :
        return <Text>Not Found</Text>;
    }
  }

  render(){
    return (
      <Navigator
        initialRoute={{ path: PATH.INTRO }}
        renderScene={ this._renderScene }
      />
    );
  }
}

AppRegistry.registerComponent( 'OneTo50', () => OneTo50 );
