import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeImage} from '../extras/native_drawing'



export default class DrawingScreen extends Component{
  constructor(props){
    super(props)
    
  }
  render(){
    return(
      <View style = {styles.wrapper}>
        <NativeImage
          width = {'100%'}
          height = {'100%'}
          bgcolor = {[100,100,100]}
          triggerDrawTest = {[29,30]}>
        </NativeImage>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  }
})
