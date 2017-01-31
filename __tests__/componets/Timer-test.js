import 'react-native';
import React from 'react';
import { Timer } from 'components/dashboard';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { AppRegistry } from 'react-native-mock';

describe( 'Timer', ()=>{

  const reportFinalTime = jest.fn();

  it( 'renders correctly',()=>{
    const tree = renderer.create( <Timer reportFinalTime={reportFinalTime} nextNumber={1} /> );
    expect( tree ).toMatchSnapshot();
  });

  it('calls reportFinalTime() when nextNumber prop is over 50', ()=>{
    const wrapper = shallow(<Timer reportFinalTime={reportFinalTime} nextNumber={50} />);
    expect(reportFinalTime).not.toBeCalled();
    wrapper.setProps({ nextNumber: 51 });
    expect(reportFinalTime).toBeCalled();
  });

  it('timer should not be null after the component is mounted', ()=>{
    const instance = renderer.create( <Timer reportFinalTime={reportFinalTime} nextNumber={50} /> ).getInstance();
    expect( instance.timer ).not.toEqual( null );
  });

  it('timer calls componentWillUnmount when the component is unmounted', ()=>{
    const componentWillUnmount = jest.fn();
    const wrapper = renderer.create( <Timer reportFinalTime={reportFinalTime} nextNumber={50} /> );
    expect( wrapper.getInstance().timer ).not.toEqual( null );
    wrapper.getInstance().componentWillUnmount = componentWillUnmount;
    expect(() => wrapper.unmount()).not.toThrow();
    expect( componentWillUnmount ).toBeCalled();
  });

  it('displays the right elapsed time after setState', ()=>{
    const wrapper = shallow(<Timer reportFinalTime={reportFinalTime} nextNumber={50} />);
    expect(wrapper.state().currentTime).toEqual(0);
    wrapper.setState({ currentTime: 0.01 });
    expect(wrapper.state().currentTime).toEqual(0.01);
    expect(wrapper.find('Text').children().node).toEqual(0.01)
  });
});

// ReactTestMount.js ReactTestRendererStack.js
// https://github.com/facebook/react/blob/2da35fcae888752948454dd04e9573cc7bdba8f5/src/renderers/testing/__tests__/ReactTestRenderer-test.js