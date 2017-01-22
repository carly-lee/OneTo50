import 'react-native';
import React from 'react';
import { Timer } from 'components/dashboard';
import renderer from 'react-test-renderer';

describe( 'Timer', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <Timer /> );
    expect( tree ).toMatchSnapshot();
  });
});