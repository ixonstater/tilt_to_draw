
import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import BasicButton from '../components/basic_button'
import appConsts from '../extras/consts'
import checkOrientation from '../extras/orientation'

export default class WelcomeScreen extends Component <Props> {
  constructor (props){
    super(props)
    this.currentOrientation = checkOrientation()
  }
  onLayout(e){
    this.currentOrientation = checkOrientation()
    this.forceUpdate()
  }
  render(){
    let propsToUse = {}
    if(this.currentOrientation == appConsts.PORTRAIT){
      propsToUse = orientationSpecificProps.portrait
    }else {
      propsToUse = orientationSpecificProps.landscape
    }
    return(
      <View style = {styles.bg} onLayout = {this.onLayout.bind(this)}>
        <Text style = {styles.title}>Tilt-ta-Draw</Text>
        <BasicButton
          position = {propsToUse.drawButton.position}
          textColor = 'black'
          color = 'white'
          height = {propsToUse.drawButton.height}
          width = {propsToUse.drawButton.width}
          text = 'Draw!'
          fontSize = {17}
          onPress = {this.startDrawing.bind(this)}
        ></BasicButton>
        <BasicButton
          position = {propsToUse.optionsButton.position}
          textColor = 'black'
          color = 'white'
          height = {propsToUse.optionsButton.height}
          width = {propsToUse.optionsButton.width}
          text = 'Options'
          fontSize = {17}
          onPress = {this.openOptions.bind(this)}
        ></BasicButton>
        <BasicButton
          position = {propsToUse.aboutButton.position}
          textColor = 'black'
          color = 'white'
          height = {propsToUse.aboutButton.height}
          width = {propsToUse.aboutButton.width}
          text = 'About'
          fontSize = {17}
          onPress = {this.openAbout.bind(this)}
        ></BasicButton>
      </View>
    )
  }

  startDrawing(){
    this.props.navigation.navigate('Drawing')
  }

  openOptions(){
    this.props.navigation.navigate('Options')
  }

  openAbout(){
    this.props.navigation.navigate('About')
  }
}

const orientationSpecificProps = {
  portrait: {
    drawButton: {
      position: {top: '46%', left: '30%'},
      height: '8%',
      width: '40%',
    },
    optionsButton: {
      position: {top: '56%', left: '30%'},
      height: '8%',
      width: '40%',
    },
    aboutButton: {
      position: {top: '66%', left: '30%'},
      height: '8%',
      width: '40%',
    },
  },
  landscape: {
    drawButton: {
      position: {top: '42.5%', left: '11%'},
      height: '15%',
      width: '25%',
    },
    optionsButton: {
      position: {top: '42.5%', left: '37.5%'},
      height: '15%',
      width: '25%',
    },
    aboutButton: {
      position: {top: '42.5%', left: '64%'},
      height: '15%',
      width: '25%',
    },
  },
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'sp',
    top: 5,
  }
})
