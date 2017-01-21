import 'react-native';
import React from 'react';
import { GameBoard } from 'components/gameboard';
import renderer from 'react-test-renderer';

describe( 'GameBoard', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <GameBoard /> );
    expect( tree ).toMatchSnapshot();
  });
});