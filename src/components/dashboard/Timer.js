import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//@flow
export default class Timer extends PureComponent{
  timer: ?number = null;
  state: {
    currentTime: number,
  };

  state = {
    currentTime: 0,
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
    clearInterval( this.timer );
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