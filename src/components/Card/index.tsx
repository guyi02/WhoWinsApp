import React from 'react';

import {CardProps} from './types';
import {Container} from './styles';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {CARD_WIDTH} from '../utils';

const Card = ({
  index,
  handleRealeaseAnim,
  handleDetail,
  getPosition,
}: CardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});
  const cardInitialRotate = useSharedValue(((index - 1) * Math.PI) / 1.5);

  const targetY = (y: number) => y < -200;

  const handleOnTarget = (y: number) => {
    'Worklet';
    getPosition(y);
  };

  const handleCardOnTarget = (x: number, y: number) => {
    'Worklet';
    if (!targetY(y)) {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      cardInitialRotate.value = withSpring(((index - 1) * Math.PI) / 1.5);
      return;
    }

    translateY.value = withSpring(index === 1 ? -320 : -325, {
      stiffness: 50,
    });
    translateX.value = withSpring(
      (CARD_WIDTH * 2) / 2 - index * CARD_WIDTH + 5,
      {
        stiffness: 50,
      },
    );
    cardInitialRotate.value = 0;
    handleRealeaseAnim(index);
  };

  const handleGesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
      runOnJS(handleOnTarget)(translateY.value);
    })
    .onFinalize(() => {
      runOnJS(handleCardOnTarget)(translateX.value, translateY.value);
    });

  const animStyleOnMove = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
        {
          rotate: cardInitialRotate.value + 'deg',
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={handleGesture}>
      <Animated.View style={[animStyleOnMove]}>
        <Container
          onPress={() => handleDetail(index)}
          style={{
            backgroundColor:
              index === 0 ? 'red' : index === 1 ? 'gray' : 'yellow',
            transform: [{translateY: index === 1 ? -4 : 0}],
          }}
        />
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;
