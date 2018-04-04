import 'react-native';
import React from 'react';
import GameResult from 'containers/gameresult';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'GameResult', ()=>{
	const navigation = { navigate: jest.fn() };

  it( 'renders correctly',()=>{
    const tree = renderer.create( <GameResult finalTime={'34.50'} navigation={navigation} /> );
    expect( tree ).toMatchSnapshot();
  });

  it.skip( 'displays the result from props', ()=>{
    const wrapper = shallow( <GameResult finalTime={'37.48'} navigation={navigation} /> );
    expect( wrapper.find('Text').length ).toEqual( 1 );
    expect( wrapper.find('Text').children().instance() ).toEqual( '37.48' );
  });

  it( 'calls onRestart() when a user presses the button', ()=>{
    const wrapper = shallow( <GameResult finalTime={1.50} navigation={navigation} /> );
    wrapper.find( 'Button' ).simulate( 'press' );
    expect( navigation.navigate ).toBeCalled();
  });
});
