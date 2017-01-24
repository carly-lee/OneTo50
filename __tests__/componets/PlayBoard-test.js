import 'react-native';
import React from 'react';
import { PlayBoard } from 'components/gameboard';
import renderer from 'react-test-renderer';

describe( 'PlayBoard', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <PlayBoard /> );
  });
});