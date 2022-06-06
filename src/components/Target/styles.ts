import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import {CARD_WIDTH} from '../utils';
import {TargetContainerProp} from './type';

export const targeWidth = Number(CARD_WIDTH + 10);

export const WrapperTarget = styled(LinearGradient)<TargetContainerProp>`
  position: relative;
  align-self: center;
  width: ${250}px;
  height: ${250}px;
  border-radius: 125px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View<TargetContainerProp>`
  position: relative;
  width: ${targeWidth}px;
  height: ${targeWidth}px;
  justify-content: center;
  align-items: center;
  background-color: ${({hasCard}) => (hasCard ? 'green' : 'blue')};
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
