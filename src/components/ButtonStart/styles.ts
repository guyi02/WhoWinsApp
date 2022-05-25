import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width: deviceWidth} = Dimensions.get('screen');

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${deviceWidth / 2.2};
  padding: 16px;
  background-color: aliceblue;
`;

export const ButtonLabel = styled.Text`
  font-size: 24px;
  color: #000;
`;
