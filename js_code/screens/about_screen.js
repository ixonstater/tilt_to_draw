import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default class AboutScreen extends Component <Props>{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style = {styles.bg}>
      <Text style = {styles.title}>Tilt-Ta-Draw</Text>
        <View style = {styles.textContainer}>
          <Text style = {[styles.blurb, styles.blurb1]}>Created by: Josh Jarvis</Text>
          <Text style = {[styles.blurb, styles.blurb2]}>Version: 1.00</Text>
          <Text style = {[styles.blurb, styles.blurb3]}>Github: https://github.com/ixonstater/tilt_to_draw</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'sp',
    top: 5,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'space-evenly',
    height: '40%',
    width: '100%',
    top: '30%',
  },
  blurb: {
    color: 'white',
    fontFamily: 'sp',
  },
})
