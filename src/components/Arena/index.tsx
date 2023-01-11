import React, {useCallback, useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import usePlayerTurn from '@store/usePlayerTurn';
import {Turn} from '@store/usePlayerTurn/types';
import {getRandomPlayerTurn, playerFake} from '@components/utils';
import {ImageArena, ImageArenaOverlay} from './styles';
import {ArenaProps} from './types';
import {Text, View} from 'react-native';
import useBattlePhase from '@store/useBattlePhase';
const imagePlay = require('../../assets/play-image.jpg');

const Arena = ({children}: ArenaProps) => {
  const setTurn = usePlayerTurn(state => state.setTurn);
  const turn = usePlayerTurn(state => state.turn);
  const cardsOnBoard = usePlayerTurn(state => state.cardsOnBoard);
  const setCardsOnBoard = usePlayerTurn(state => state.setCardsOnBoard);
  const phase = useBattlePhase(state => state.phase);
  const setBattlePhase = useBattlePhase(state => state.setBattlePhase);
  const rotateArena = useSharedValue(0);

  const nextTurn = useCallback(() => {
    const newPlayerTurn = playerFake.find(player => player.id !== turn.id);
    if (newPlayerTurn) {
      newPlayerTurn.ready = false;
      setTimeout(() => {
        rotateArena.value = withSpring(rotateArena.value === 180 ? 0 : 180);
        setTurn(newPlayerTurn);
        setBattlePhase({...phase, isShuffle: true});
        if (cardsOnBoard.length === 2) {
          setBattlePhase({...phase, isShuffle: false, isStandBy: true});
          setCardsOnBoard([]);
        }
      }, 5000);
    }
  }, [
    cardsOnBoard.length,
    phase,
    rotateArena,
    setCardsOnBoard,
    setBattlePhase,
    setTurn,
    turn.id,
  ]);

  useEffect(() => {
    if (turn.id === '') {
      const turnCreated = playerFake[getRandomPlayerTurn];
      setTurn(turnCreated);
      setBattlePhase({...phase, isShuffle: true});
      if (turnCreated.type === Turn.IA) {
        setTimeout(() => {
          rotateArena.value = withSpring(rotateArena.value === 180 ? 0 : 180);
        }, 5000);
      }
    }
  }, [phase, rotateArena, setBattlePhase, setTurn, turn.id]);

  useEffect(() => {
    if (turn.ready) {
      if (cardsOnBoard.length === 2) {
        // TODO add battle here
        setTimeout(() => {
          nextTurn();
        }, 1000);
      } else {
        nextTurn();
      }
    }
  }, [cardsOnBoard.length, nextTurn, turn.ready]);

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
