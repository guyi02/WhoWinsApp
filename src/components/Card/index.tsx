import React, {useCallback, useState} from 'react';

import {CardProps} from './types';
import {
  Container,
  ActionButton,
  ActionButtonText,
  targeWidth,
  translateYTarget,
} from './styles';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import {CARD_SIZE} from '../utils';

const Card = ({
  cardData,
  index,
  handleRealeaseAnim,
  handleDetail,
  getPosition,
}: CardProps) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});
  const cardInitialRotate = useSharedValue(((index - 1) * Math.PI) / 1.5);
  const [isBlockedGestures, setIsBlockedGestures] = useState(false);
  const targetY = (y: number) => y < -165;

  const positionFromCardToTarget = useCallback(
    (Yposition: number) => {
      'Worklet';
      getPosition(Yposition);
    },
    [getPosition],
  );

  const handleCardOnTarget = useCallback(
    (Yposition: number) => {
      'Worklet';
      if (!targetY(Yposition)) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        cardInitialRotate.value = withSpring(((index - 1) * Math.PI) / 1.5);
        handleRealeaseAnim(null);
        setIsBlockedGestures(false);
        return;
      }
      translateY.value = withSpring(
        index === 1 ? -translateYTarget - 16 : -translateYTarget - 20,
      );
      translateX.value = withSpring((CARD_SIZE * 2) / 2 - index * CARD_SIZE);
      cardInitialRotate.value = 0;
      handleRealeaseAnim(cardData);
      setIsBlockedGestures(true);
    },
    [
      cardData,
      cardInitialRotate,
      handleRealeaseAnim,
      index,
      translateX,
      translateY,
    ],
  );

  const handleGesture = Gesture.Pan()
    .onStart(() => {
      if (!isBlockedGestures) {
        context.value = {x: translateX.value, y: translateY.value};
      }
    })
    .onUpdate(event => {
      if (!isBlockedGestures) {
        translateX.value = event.translationX + context.value.x;
        translateY.value = event.translationY + context.value.y;
        runOnJS(positionFromCardToTarget)(translateY.value);
      }
    })
    .onFinalize(() => {
      if (!isBlockedGestures) {
        runOnJS(handleCardOnTarget)(translateY.value);
      }
    });

  const clearCardPosition = useCallback(() => {
    'Worklet';
    if (isBlockedGestures) {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      context.value = {x: 0, y: 0};
      cardInitialRotate.value = withSpring(((index - 1) * Math.PI) / 1.5);
      setIsBlockedGestures(false);
      handleRealeaseAnim(null);
    }
  }, [
    cardInitialRotate,
    context,
    handleRealeaseAnim,
    index,
    isBlockedGestures,
    translateX,
    translateY,
  ]);

  const animStyleOnMove = useAnimatedStyle(() => {
    return {
      position: 'relative',
      zIndex: 1000,
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
        <>
          <Container
            onPress={() => handleDetail(index)}
            style={{
              backgroundColor:
                index === 0 ? 'red' : index === 1 ? 'gray' : 'yellow',
              transform: [{translateY: index === 1 ? -4 : 0}],
            }}
          />
          {isBlockedGestures && (
            <>
              <ActionButton
                style={{
                  left: targeWidth + 10,
                }}>
                <ActionButtonText>Ok</ActionButtonText>
              </ActionButton>

              <ActionButton
                onPress={runOnJS(clearCardPosition)}
                style={{top: targeWidth + 10}}>
                <ActionButtonText>Back</ActionButtonText>
              </ActionButton>
            </>
          )}
        </>
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;
