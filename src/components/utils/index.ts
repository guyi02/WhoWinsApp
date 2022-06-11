import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Turn} from '../../store/types';
export const CARD_SIZE = responsiveHeight(8) + responsiveWidth(8);
export const TARGET_SIZE = responsiveHeight(20) + responsiveWidth(20);
export const CARD_WIDTH = responsiveWidth(20);
export const CARD_HEIGHT = CARD_WIDTH;

export const getRandomPlayerTurn = Math.floor(Math.random() * 2);

export const playerFake = [
  {
    id: 'epfjeogor',
    type: Turn.Player,
    ready: false,
  },
  {id: 'jfgeufgreff', type: Turn.IA, ready: false},
];
