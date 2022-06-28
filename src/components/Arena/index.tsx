import React, {useCallback, useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import usePlayerTurn from '@store/usePlayerTurn';
import {Turn} from '@store/types';
import {getRandomPlayerTurn, playerFake} from '@components/utils';
import {ImageArena, ImageArenaOverlay} from './styles';
import {ArenaProps} from './types';
import {Text, View} from 'react-native';
import shallow from 'zustand/shallow';
const imagePlay = require('../../assets/play-image.jpg');

const Arena = ({children}: ArenaProps) => {
  const setTurn = usePlayerTurn(state => state.setTurn);
  const turn = usePlayerTurn(state => state.turn);
  const battleCards = usePlayerTurn(state => state.battleCards);
  const setBattleCards = usePlayerTurn(state => state.setBattleCards);
  const rotateArena = useSharedValue(0);

  const nextTurn = useCallback(() => {
    const newPlayerTurn = playerFake.find(player => player.id !== turn.id);
    if (newPlayerTurn) {
      newPlayerTurn.ready = false;
      setTimeout(() => {
        rotateArena.value = withSpring(rotateArena.value === 180 ? 0 : 180);
        setTurn(newPlayerTurn);
        if (battleCards.length === 2) {
          setBattleCards([]);
        }
      }, 5000);
    }
  }, [battleCards.length, rotateArena, setBattleCards, setTurn, turn.id]);

  useEffect(() => {
    if (turn.id === '') {
      const turnCreated = playerFake[getRandomPlayerTurn];
      setTurn(turnCreated);
      if (turnCreated.type === Turn.IA) {
        setTimeout(() => {
          rotateArena.value = withSpring(rotateArena.value === 180 ? 0 : 180);
        }, 5000);
      }
    }
  }, [rotateArena, setTurn, turn.id]);

  useEffect(() => {
    if (turn.ready) {
      if (battleCards.length === 2) {
        // TODO add battle here
        setTimeout(() => {
          nextTurn();
        }, 1000);
      } else {
        nextTurn();
      }
    }
  }, [battleCards.length, nextTurn, turn.ready]);

  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotateArena.value + 'deg',
        },
      ],
    };
  });

  return (
    <ImageArena source={imagePlay} resizeMode="cover">
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        }}>
        <Text style={{color: '#fff'}}>vez do {turn.type}</Text>
      </View>
      <ImageArenaOverlay style={[rotateStyle]}>{children}</ImageArenaOverlay>
    </ImageArena>
  );
};

export default Arena;
