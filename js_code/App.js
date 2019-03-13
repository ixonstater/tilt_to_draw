import React, {Component} from 'react'
import WelcomeScreen from './screens/welcome_screen'
import OptionsScreen from './screens/options_screen'
import AboutScreen from './screens/about_screen'
import DrawingScreen from './screens/drawing_screen'
import {createStackNavigator, createAppContainer} from 'react-navigation'

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    )
  }
}

const AppNavigator = createAppContainer(
  createStackNavigator({
    Home: WelcomeScreen,
    Options: OptionsScreen,
    About: AboutScreen,
    Drawing: DrawingScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerVisible: false,
    },
  })
)
