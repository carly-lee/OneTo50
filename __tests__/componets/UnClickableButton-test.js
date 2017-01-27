import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { UnClickableButton } from 'components/gameboard';
import renderer from 'react-test-renderer';

describe( 'UnClickableButton', ()=>{
  const child = <Text>test</Text>;

  it( 'renders correctly',()=>{
    const tree = renderer.create( <UnClickableButton child={child} /> );
    expect( tree ).toMatchSnapshot();
  });
});