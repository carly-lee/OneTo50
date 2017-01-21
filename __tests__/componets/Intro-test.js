import 'react-native';
import React from 'react';
import Intro from 'components/intro';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'Intro', ()=>{
  const onPress = jest.fn();

  it( 'renders correctly',()=>{
    const tree = renderer.create( <Intro onPress={ onPress } /> );
  });

  it( 'calls onPress() when a user presses the button', ()=>{
    const wrapper = shallow( <Intro onPress={ onPress } /> );
    wrapper.find( 'Button' ).simulate( 'press' );
    expect( onPress ).toBeCalled();
  });
});