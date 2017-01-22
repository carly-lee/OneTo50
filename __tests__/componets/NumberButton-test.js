import 'react-native';
import React from 'react';
import { NumberButton } from 'components/gameboard';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'NumberButton', ()=>{
  it( 'renders correctly',()=>{
    const tree = renderer.create( <NumberButton /> );
    expect( tree ).toMatchSnapshot();
  });
});