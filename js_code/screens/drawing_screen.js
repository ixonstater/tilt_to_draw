import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {NativeTablet} from '../extras/native_drawing'



export default class DrawingScreen extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {styles.wrapper}>
        <NativeTablet
          width = {'100%'}
          height = {'100%'}
          triggerdraw = {[0, 0, 17]}>
        </NativeTablet>
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
