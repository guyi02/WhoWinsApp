import {Dimensions} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('screen');
export const CARD_WIDTH = Number((deviceWidth / deviceHeight) * 180);
export const CARD_HEIGHT = CARD_WIDTH;
