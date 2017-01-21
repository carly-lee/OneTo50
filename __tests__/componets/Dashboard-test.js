import 'react-native';
import React from 'react';
import { Dashboard } from 'components/dashboard';
import renderer from 'react-test-renderer';

describe( 'Dashboard', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <Dashboard /> );
    expect( tree ).toMatchSnapshot();
  });
});