import styled from 'styled-components/native';
import {CARD_WIDTH, CARD_HEIGHT} from '../utils';
export const targeWidth = Number(CARD_WIDTH + 10);

export const Container = styled.Pressable`
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  background-color: aliceblue;
`;

export const ActionButton = styled.TouchableOpacity`
  position: absolute;
  height: ${targeWidth}px;
  width: ${targeWidth}px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: purple;
`;

export const ActionButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
