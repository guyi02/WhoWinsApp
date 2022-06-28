import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const ImageArena = styled.ImageBackground<{children?: React.ReactNode}>`
  flex: 1;
`;

export const ImageArenaOverlay = styled(Animated.View)`
  flex: 1;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.18);
  padding: 16px 0;
`;
