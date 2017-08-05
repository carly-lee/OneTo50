//@flow
// $FlowIgnore
import { AppRegistry, Text } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';

import { PATH } from 'constants';
import Intro from 'components/intro';
import GameScreen from 'containers/gamescreen';
import GameResult from 'containers/gameresult';

type Route = { path: string, finalTime: string };

const mapNavigationStateParamsToProps = (PassedComponent) => {
    return class extends Component {
        static navigationOptions = PassedComponent.navigationOptions;
        render() {
            const {navigation: {state: {params}}} = this.props
            return <PassedComponent {...params} {...this.props} />
        }
    }
}

const OneTo50 = StackNavigator({
  INTRO: { screen: Intro },
	GAME_SCREEN: { screen: GameScreen },
	GAME_RESULT: { screen: mapNavigationStateParamsToProps(GameResult) }
});

AppRegistry.registerComponent( 'OneTo50', () => OneTo50 );
