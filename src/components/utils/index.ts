import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Turn, PlayerTurn} from '@store/usePlayerTurn/types';
export const CARD_SIZE = responsiveHeight(8) + responsiveWidth(8);
export const TARGET_SIZE = responsiveHeight(20) + responsiveWidth(20);
export const CARD_WIDTH = responsiveWidth(20);
export const CARD_HEIGHT = CARD_WIDTH;

export const getRandomPlayerTurn = Math.floor(Math.random() * 2);

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const playerFake: PlayerTurn[] = [
  {
    id: 'epfjeogor',
    type: Turn.Player,
    ready: false,
  },
  {id: 'jfgeufgreff', type: Turn.IA, ready: false},
];
