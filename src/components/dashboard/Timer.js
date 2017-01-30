import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

//@flow
type Props = {
  reportFinalTime: ( time:number )=> void,
  nextNumber: number,
}

export default class Timer extends PureComponent{
  props:Props;
  timer: ?number = null;
  state: {
    currentTime: number,
  };

  state = {
    currentTime: 0,
  }

  componentWillReceiveProps( nextProps ){
    if( nextProps.nextNumber > 2 ){
      clearInterval( this.timer );
      this.timer = null;
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
      this.timer = null;
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