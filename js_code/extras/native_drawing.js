import {NativeModules} from 'react-native'
import {requireNativeComponent} from 'react-native'
export const NativeDrawing = NativeModules.RNNativeDrawing
export const NativeTablet = requireNativeComponent('NativeTablet')
