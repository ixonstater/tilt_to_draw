import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeImage} from '../extras/native_drawing'


export default class DrawingScreen extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {styles.bg}>
        <NativeImage width = {'100%'} height = {'100%'} bgcolor = {20}></NativeImage>
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
