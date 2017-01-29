import 'react-native';
import React from 'react';
import { NumberButton } from 'components/gameboard';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'NumberButton', ()=>{
  const onClickNumber = jest.fn();

  it( 'renders correctly',()=>{
    const tree = renderer.create( <NumberButton index={0} number={1} nextNumber={2} onClickNumber={onClickNumber} /> );
    expect( tree ).toMatchSnapshot();
  });

  it( 'renders correctly when number and nextNumbers are the same',()=>{
    const tree = renderer.create( <NumberButton index={1} number={2} nextNumber={2} onClickNumber={onClickNumber} /> );
    expect( tree ).toMatchSnapshot();
  });

  it('has UnClickableButton as a child when number and nextNumber are diffrent', ()=>{
    const wrapper = shallow( <NumberButton index={0} number={1} nextNumber={2} onClickNumber={onClickNumber} /> );
    expect(wrapper.find('UnClickableButton').length).toEqual(1);
  });

  it('has ClickableButton as a child when number and nextNumber are diffrent', ()=>{
    const wrapper = shallow( <NumberButton index={1} number={2} nextNumber={2} onClickNumber={onClickNumber} /> );
    expect(wrapper.find('ClickableButton').length).toEqual(1);
  });

  it('calls onClickNumber() when has ClickableButton as a child', ()=>{
    const wrapper = shallow( <NumberButton index={1} number={2} nextNumber={2} onClickNumber={onClickNumber} /> );
    wrapper.find('ClickableButton').simulate('press');
    expect( onClickNumber ).toBeCalledWith( 2, 1 ); // number and index
  });
});