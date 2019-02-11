import React, {Component} from 'react'
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native'

export default class BasicButton extends Component {
  constructor(props){
    super(props)
    this.styles = null
  }
  render(){
    this.makeStyles()
    return (
      <TouchableHighlight style = {this.styles.touchableStyles} onPress = {() => {this.props.onPress()}}>
        <View style = {this.styles.buttonStyles}>
          <Text style = {this.styles.textStyles}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  makeStyles(){
    this.styles = StyleSheet.create({
      touchableStyles: {
        width: this.props.width,
        height: this.props.height,
        top: this.props.position.top,
        left: this.props.position.left,
        position: 'absolute',
      },
      buttonStyles: {
        borderRadius: 50,
        backgroundColor: this.props.color,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textStyles: {
        fontSize: this.props.fontSize,
        textDecorationLine: 'underline',
        fontFamily: 'sp',
        color: this.props.textColor,
      }
    })
  }
}
