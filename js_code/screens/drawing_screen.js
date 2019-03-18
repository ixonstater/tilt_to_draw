import React, {Component} from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import {NativeTablet, NativeDrawing} from '../extras/native_drawing'
import MotionTracker from '../extras/position_calculation'
import { accelerometer, setUpdateIntervalForType, stop, start} from 'react-native-sensors'

const REFRESHRATE = 70
const ACCELDATAREFRESHRATE = 100

export default class DrawingScreen extends Component{
  constructor(props){
    super(props)
    this.accelerometerData = {
      x:0,
      y:0,
      z:0
    }
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
    setUpdateIntervalForType('accelerometer', ACCELDATAREFRESHRATE)
    start('accelerometer')
    accelerometer.subscribe(({x,y,z}) => (this.setAccelerometerData({x,y,z})))
    this.startDraw()
  }
  componentWillUnmount(){
    stop('accelerometer')
    clearInterval(this.drawInterval)
  }
  setAccelerometerData(data){
    this.accelerometerData.x = data.x
    this.accelerometerData.y = data.y
  }
  startDraw(){
    let {height,width} = Dimensions.get('window')
    let midX = width
    let midY = height
    let motionTracker = new MotionTracker(midX,midY)
    NativeDrawing.sendStartingCoords([midX, midY])
    this.drawInterval = setInterval(function(){
      let[x,y] = motionTracker.update(this.accelerometerData)
      NativeDrawing.triggerDraw([x,y])
    }.bind(this), REFRESHRATE)
  }
  // testDrawing(){
  //   let {height,width} = Dimensions.get('window')
  //   let midX = width
  //   let midY = height
  //   let x = midX
  //   let y = midY
  //   NativeDrawing.sendStartingCoords([midX, midY])
  //   this.drawInterval = setInterval(function(){
  //     x += x * 0.1
  //     y += y * -0.1
  //     NativeDrawing.triggerDraw([x,y])
  //   }.bind(this), REFRESHRATE)
  // }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  }
})
