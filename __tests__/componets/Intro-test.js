import 'react-native';
import React from 'react';
import Intro from 'components/intro';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'Intro', ()=>{
	const navigation = { navigate: jest.fn() };

  it( 'renders correctly',()=>{
    const tree = renderer.create( <Intro navigation={ navigation } /> );
    expect( tree ).toMatchSnapshot();
  });

  it( 'calls onPress() when a user presses the button', ()=>{
    const wrapper = shallow( <Intro navigation={ navigation } /> );
    wrapper.find( 'Button' ).simulate( 'press' );
    expect( navigation.navigate ).toBeCalled();
  });
});
