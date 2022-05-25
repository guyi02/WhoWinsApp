import React from 'react';

import {CardProps} from './types';
import {Container} from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';

const Card = ({index}: CardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});

  const moveOnObjective = false;

  const handleGesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onFinalize(event => {
      if (!moveOnObjective) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const rotate = ((index - 1) * Math.PI) / 1.5;

  return (
    <GestureDetector gesture={handleGesture}>
      <Animated.View style={[animStyle]}>
        <Container
          onPress={() => alert(index)}
          style={{
            transform: [
              {rotate: rotate + 'deg'},
              {translateY: index === 1 ? -4 : 0},
            ],
          }}
        />
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;
