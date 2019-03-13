import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeTablet, NativeDrawing} from '../extras/native_drawing'
import { accelerometer, setUpdateIntervalForType, stop, start} from 'react-native-sensors'


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
    setUpdateIntervalForType('accelerometer', 100)
    start('accelerometer')
    // accelerometer.subscribe(({x,y,z}) => console.log({x,y,z}))
    NativeDrawing.startDraw()
    let x = 0
    let y = 0
    this.drawThread = setInterval(function(){
      NativeDrawing.sendCoords([x,y])
      x += 10
      y += 10
    }, 22)
  }
  componentWillUnmount(){
    stop('accelerometer')
    clearInterval(this.drawThread)
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  }
})
