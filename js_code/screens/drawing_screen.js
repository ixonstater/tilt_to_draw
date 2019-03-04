import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeImage} from '../extras/native_drawing'



export default class DrawingScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      colorIndex: 0,
    }
    setInterval(() => (
      this.setState(function(previousState){
        let newState = previousState
        if(previousState.colorIndex == 2){
          newState.colorIndex = 0
        } else {
          newState.colorIndex += 1
        }
        console.log(newState)
        return newState
      })
    ), 1000)
  }
  render(){
    return(
      <View style = {styles.wrapper}>
        <NativeImage
          width = {'100%'}
          height = {'100%'}
          bgcolor = {colors[this.state.newColor]}>
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
