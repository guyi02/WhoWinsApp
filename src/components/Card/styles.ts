import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width: deviceWidth, height: deviceHeight} = Dimensions.get('screen');

export const Container = styled.Pressable`
  width: ${(deviceWidth / deviceHeight) * 180};
  height: ${(deviceWidth / deviceHeight) * 180};
  background-color: aliceblue;
`;
