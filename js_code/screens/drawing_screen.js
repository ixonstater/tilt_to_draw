import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeTablet, NativeDrawing} from '../extras/native_drawing'



export default class DrawingScreen extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {styles.wrapper}>
        <NativeTablet
          width = {'100%'}
          height = {'100%'}>
        </NativeTablet>
      </View>
    )
  }
  componentDidMount(){
    let x = 0
    let y = 0
    this.interval = setInterval(function(){
      x += 10
      y += 10
      NativeDrawing.triggerDraw([x,y])
    }, 17)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  }
})
