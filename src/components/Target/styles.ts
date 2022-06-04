import styled from 'styled-components/native';
import {CARD_WIDTH} from '../utils';
import {TargetContainerProp} from './type';

export const Container = styled.View<TargetContainerProp>`
  width: ${Number(CARD_WIDTH + 10)}px;
  height: ${Number(CARD_WIDTH + 10)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({hasCard}) => (hasCard ? 'green' : 'blue')};
`;
