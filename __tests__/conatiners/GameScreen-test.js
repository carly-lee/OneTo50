import 'react-native';
import React from 'react';
import GameScreen from 'containers/gamescreen';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'GameScreen', ()=>{

  const props = {
    onRestart: jest.fn(),
    showResult: jest.fn()
  }

  it( 'renders correctly',()=>{
    const wrapper = shallow(<GameScreen {...props} />);
    expect(wrapper.find('Dashboard').length).toEqual(1);
    expect(wrapper.find('PlayBoard').length).toEqual(1);
    expect(wrapper.find('Button').length).toEqual(1);
  });

  it('calls onRestart() when a user presses the button', ()=>{
    const wrapper = shallow(<GameScreen {...props} />);
    expect(props.onRestart).not.toBeCalled();
    wrapper.find('Button').simulate('press');
    expect(props.onRestart).toBeCalled();
  });

  it('calls showResult() when _reportFinalTime is called', ()=>{
    const instance = renderer.create(<GameScreen {...props} />).getInstance();
    expect(props.showResult).not.toBeCalled();
    instance._reportFinalTime(12.33);
    expect(props.showResult).toBeCalledWith(12.33);
  });

  it('updates the state when _onNumberClick is called', ()=>{
    const instance = renderer.create(<GameScreen {...props} />).getInstance();
    expect(instance.state).toEqual({nextNumber:1});
    instance._onNumberClick(3);
    expect(instance.state).toEqual({nextNumber:3});
  });

});