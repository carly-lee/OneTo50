import 'react-native';
import React from 'react';
import GameResult from 'containers/gameresult';
import renderer from 'react-test-renderer';

describe( 'GameResult', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <GameResult /> );
    expect( tree ).toMatchSnapshot();
  });
});