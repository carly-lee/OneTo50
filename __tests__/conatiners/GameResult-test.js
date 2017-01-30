import 'react-native';
import React from 'react';
import GameResult from 'containers/gameresult';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'GameResult', ()=>{
  const onRestart = jest.fn();

  it( 'renders correctly',()=>{
    const tree = renderer.create( <GameResult finalTime={'34.50'} onRestart={onRestart} /> );
    expect( tree ).toMatchSnapshot();
  });

  it( 'displays the result from props', ()=>{
    const wrapper = shallow( <GameResult finalTime={'37.48'} onRestart={onRestart} /> );
    expect( wrapper.find('Text').length ).toEqual( 1 );
    expect( wrapper.find('Text').children().node ).toEqual( '37.48' );
  });

  it( 'calls onRestart() when a user presses the button', ()=>{
    const wrapper = shallow( <GameResult finalTime={1.50} onRestart={onRestart} /> );
    wrapper.find( 'Button' ).simulate( 'press' );
    expect( onRestart ).toBeCalled();
  });
});