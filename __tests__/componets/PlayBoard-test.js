import 'react-native';
import React from 'react';
import { PlayBoard } from 'components/gameboard';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'PlayBoard', ()=>{
  
  const props = {
    nextNumber: 1,
    onNumberClick: jest.fn()
  }

  it( 'renders all 25 NumberButton correctly',()=>{
    const wrapper = shallow(<PlayBoard {...props} />);
    expect(wrapper.find('NumberButton').length).toEqual(25);
    expect(wrapper.find('EmptyButton').length).toEqual(0);
  });

  it( 'renders 24 NumberButton and 1 EmptyButton when nextNumber is greater than 26',()=>{
    const wrapper = shallow(<PlayBoard {...props} />);
    wrapper.instance().index = 17;
    wrapper.setProps({nextNumber: 27});
    expect(wrapper.find('NumberButton').length).toEqual(24);
    expect(wrapper.find('EmptyButton').length).toEqual(1);
  });

  it( 'calls onNumberClick() when _onClickNumber is called()',()=>{
    const wrapper = shallow(<PlayBoard {...props} />);
    expect(props.onNumberClick).not.toBeCalled();
    wrapper.instance()._onClickNumber( 2, 7 );
    expect(props.onNumberClick).toBeCalledWith(3);
  });

});