import styled from 'styled-components/native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {CARD_SIZE} from '../utils';
export const targeWidth = Number(CARD_SIZE + 10);
export const translateYTarget = responsiveHeight(25) + responsiveWidth(25);

export const Container = styled.Pressable`
  width: ${CARD_SIZE}px;
  height: ${CARD_SIZE}px;
  background-color: aliceblue;
`;

export const ActionButton = styled.TouchableOpacity`
  position: absolute;
  height: ${CARD_SIZE}px;
  width: ${CARD_SIZE}px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: purple;
`;

export const ActionButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
