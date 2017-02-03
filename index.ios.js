//@flow
// $FlowIgnore
import { AppRegistry, Navigator, Text } from 'react-native';
import React, { Component } from 'react';

import { PATH } from 'constants';
import Intro from 'components/intro';
import GameScreen from 'containers/gamescreen';
import GameResult from 'containers/gameresult';

type Route = { path: string, finalTime: string };

export default class OneTo50 extends Component{
  route: Route = { path: PATH.INTRO, finalTime: '0' };
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

  _showResult = ( finalTime: string ):void =>{
    this._pushScene( PATH.GAME_RESULT, { finalTime });
  }

  _onPressRestart = ():void =>{
    if( this.navigator ){ this.navigator.popToTop(); }
  }

  _configureScene = ( route, routeStack )=>{
    if( route.path === PATH.GAME_RESULT ){
      return Navigator.SceneConfigs.FloatFromBottom;
    }else{
      return Navigator.SceneConfigs.PushFromRight;
    }
  }

  _renderScene = ( route: Route, navigator: Object ):React$Element<any> =>{
    this.route = route;
    this.navigator = navigator;

    switch( route.path ){
      case PATH.INTRO :
        return <Intro onPress={ this._onPressStart } />;
      case PATH.GAME_SCREEN :
        return <GameScreen showResult={ this._showResult } onRestart={ this._onPressRestart } />;
      case PATH.GAME_RESULT :
        return <GameResult finalTime={ route.finalTime } onRestart={ this._onPressRestart } />;
      default :
        return <Text>Not Found</Text>;
    }
  }

  render(){
    return (
      <Navigator
        initialRoute={ this.route }
        renderScene={ this._renderScene }
        configureScene={ this._configureScene }
      />
    );
  }
}

AppRegistry.registerComponent( 'OneTo50', () => OneTo50 );
