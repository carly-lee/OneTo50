import 'react-native';
import React from 'react';
import { Text } from 'react-native';
import { ClickableButton } from 'components/gameboard';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe( 'ClickableButton', ()=>{
  const child = <Text>test</Text>;
  const onPress = jest.fn();

  it( 'renders correctly',()=>{
    const tree = renderer.create( <ClickableButton child={child} onPress={onPress} /> );
    expect( tree ).toMatchSnapshot();
  });
  
  it( 'calls onPress() when a user presses the button', ()=>{
    const wrapper = shallow( <ClickableButton child={child} onPress={onPress} /> );
    wrapper.find( 'TouchableOpacity' ).simulate( 'press' );
    expect( onPress ).toBeCalled();
  });
});