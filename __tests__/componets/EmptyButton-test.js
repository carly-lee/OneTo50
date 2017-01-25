import 'react-native';
import React from 'react';
import { EmptyButton } from 'components/gameboard';
import renderer from 'react-test-renderer';

describe( 'EmptyButton', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <EmptyButton /> );
    expect( tree ).toMatchSnapshot();
  });
});