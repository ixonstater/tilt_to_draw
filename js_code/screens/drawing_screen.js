import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeImage} from '../extras/native_drawing'



export default class DrawingScreen extends Component{
  constructor(props){
    super(props)
    this.state = {coords: [0,0]}
    setInterval(() => (
      this.setState(function(previousState){
        console.log("running in the loop")
        if(previousState.coords[0] == 0){
          return {coords: [500,500]}
        }else{
          return {coords: [0,0]}
        }
      })
    ), 1000)
  }
  render(){
    return(
      <View style = {styles.wrapper}>
        <NativeImage
          width = {'100%'}
          height = {'100%'}
          bgcolor = {[200,200,200]}
          triggerdraw = {this.state.coords}>
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
