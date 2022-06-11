import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import {TARGET_SIZE, CARD_SIZE} from '../utils';
import {TargetContainerProp} from './type';

export const targeWidth = Number(CARD_SIZE + 10);

export const CircleTarget = styled(LinearGradient)<TargetContainerProp>`
  align-self: center;
  width: ${TARGET_SIZE}px;
  height: ${TARGET_SIZE}px;
  border-radius: 125px;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const TargetBox = styled.View<TargetContainerProp>`
  width: ${targeWidth}px;
  height: ${targeWidth}px;
  justify-content: center;
  align-items: center;
  background-color: ${({hasCard}) => (hasCard ? 'green' : 'blue')};
`;
