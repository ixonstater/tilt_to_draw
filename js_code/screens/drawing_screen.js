import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class DrawingScreen extends Component <Props>{
  constructor(props){
    super(props)
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
