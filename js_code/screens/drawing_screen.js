import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeModules} from 'react-native'

export default class DrawingScreen extends Component <Props>{
  constructor(props){
    super(props)
    nativeDrawing.test(4, 2, this.adder)
  }
  adder(num1, num2){
    console.log(num1 + num2)
  }
  render(){
    return(
      <View style = {styles.bg}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  }
})

const nativeDrawing = NativeModules.RNNativeDrawing
