import {Dimensions} from 'react-native'
import appConsts from './consts'

function checkOrientation(){
  const {width, height} = Dimensions.get('window')
  if (width > height){
    return appConsts.LANDSCAPE
  } else {
    return appConsts.PORTRAIT
  }
}

export default checkOrientation
