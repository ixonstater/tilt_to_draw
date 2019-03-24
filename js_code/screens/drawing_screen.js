import React, {Component} from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import {NativeTablet, NativeDrawing} from '../extras/native_drawing'
import MotionTracker from '../extras/position_calculation'
import { accelerometer, setUpdateIntervalForType, stop, start} from 'react-native-sensors'

const REFRESHRATE = 17
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
          height = {'100%'}
          CircleColor = {'#AAFF22'}
          LineColor = {'#FFAA22'}
          BackgroundColor = {'#99112D'}
          CircleRadius = {20}>
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
    this.accelerometerData.z = data.z
  }
  startDraw(){
    let {height,width} = Dimensions.get('window')
    let midX = 0
    let midY = 0
    if(width > height){
      midY = width
      midX = height
    } else {
      midY = height
      midX = width
    }
    
    let motionTracker = new MotionTracker(midX,midY)
    NativeDrawing.prepareTablet()
    this.drawInterval = setInterval(function(){
      let[x,y] = motionTracker.update(this.accelerometerData)
      NativeDrawing.triggerDraw([x,y])
    }.bind(this), REFRESHRATE)
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  }
})
