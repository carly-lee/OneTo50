import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
} from 'react-native';
import { PATH } from 'constants';
import Intro from 'components/intro';
import GameScreen from 'containers/gamescreen';
import GameResult from 'containers/gameresult';

//@flow
type Route = { path: string };

export default class OneTo50 extends Component{
  route: ?Route = null;
  navigator: ?Object = null;

  _pushScene = ( path: string, obj: ?Object ):void =>{
    if( this.navigator ){ this.navigator.push({ path, ...obj });}
  }

  _popScene = ():void =>{
    if( this.navigator ){ this.navigator.pop(); }
  }

  _onPressStart = ():void =>{
    this._pushScene( PATH.GAME_SCREEN );
  }

  _showResult = ( finalTime: number ):void =>{
    this._pushScene( PATH.GAME_RESULT, { finalTime });
  }

  _renderScene = ( route: Route, navigator: Object ):React.Element =>{
    this.route = route;
    this.navigator = navigator;

    switch( route.path ){
      case PATH.INTRO :
        return <Intro onPress={ this._onPressStart } />;
      case PATH.GAME_SCREEN :
        return <GameScreen showResult={ this._showResult } />;
      case PATH.GAME_RESULT :
        return <GameResult finalTime={ route.finalTime } />;
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
