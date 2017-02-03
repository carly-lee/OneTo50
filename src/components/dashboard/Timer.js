// @flow
// $FlowIgnore
import { Text, View, StyleSheet } from 'react-native';
import React, { PureComponent } from 'react';

type Props = {
  reportFinalTime: ( time:string )=> void,
  nextNumber: number,
}

export default class Timer extends PureComponent{
  props:Props;
  timer: number = 0;
  state: {
    currentTime: number,
  };

  state = {
    currentTime: 0,
  }

  componentWillReceiveProps( nextProps:Props ){
    if( nextProps.nextNumber > 50 ){
      clearInterval( this.timer );
      this.timer = 0;
      this.props.reportFinalTime( String( this.state.currentTime ));
    }
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState(( prevState )=>{
        const currentTime:number = Number( prevState.currentTime ) + 0.01;
        return { currentTime: currentTime.toFixed( 2 ) };
      });
    }, 10 );
  }

  componentWillUnmount(){
    if( this.timer ){
      clearInterval( this.timer );
      this.timer = 0;
    }
  }

  render(){
    return(
      <View style={ styles.container }>
        <Text>{this.state.currentTime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});