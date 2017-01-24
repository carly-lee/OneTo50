import 'react-native';
import React from 'react';
import GameScreen from 'containers/gamescreen';
import renderer from 'react-test-renderer';

describe( 'GameScreen', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <GameScreen /> );
  });
});