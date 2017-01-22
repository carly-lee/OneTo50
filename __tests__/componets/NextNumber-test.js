import 'react-native';
import React from 'react';
import { NextNumber } from 'components/dashboard';
import renderer from 'react-test-renderer';

describe( 'NextNumber', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <NextNumber /> );
    expect( tree ).toMatchSnapshot();
  });
});