import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';

import Arena from '@components/Arena';
import PlayerCards from '@components/PlayerCards';
import Target from '@components/Target';
import {CardData} from '@store/usePlayerTurn/types';
import {Container} from './styles';
import usePlayerTurn from '@store/usePlayerTurn';
import useBattlePhase from '@store/useBattlePhase';

const Play = () => {
  const setTurn = usePlayerTurn(state => state.setTurn);
  const turn = usePlayerTurn(state => state.turn);
  const setCardsOnBoard = usePlayerTurn(state => state.setCardsOnBoard);
  const phase = useBattlePhase(state => state.phase);
  const [cardOnTarget, setCardOnTarget] = useState<boolean>(false);
  const [playerCards, setPlayerCards] = useState<CardData[] | []>([
    {
      id: 1,
      name: 'snfc11',
      value: 109.9,
      dy: 1.05,
    },
    {
      id: 2,
      name: 'mxrf11',
      value: 10.4,
      dy: 1.01,
    },
    {
      id: 3,
      name: 'deva11',
      value: 100.35,
      dy: 1.43,
    },
  ]);
  const [enemyCards, setEnemyCards] = useState<CardData[] | []>([
    {
      id: 10,
      name: 'snfc11',
      value: 109.9,
      dy: 1.05,
    },
    {
      id: 20,
      name: 'mxrf11',
      value: 10.4,
      dy: 1.01,
    },
    {
      id: 30,
      name: 'deva11',
      value: 100.35,
      dy: 1.43,
    },
  ]);

  const shuffleCard = useCallback(() => {
    if (turn.type === 'IA') {
      console.log('compra carta enemy');
    } else {
      console.log('compra carta player');
    }
  }, [turn.type]);

  useEffect(() => {
    if (phase.isShuffle) {
      shuffleCard();
    }
  }, [phase.isShuffle, shuffleCard]);

  const handleGetPosition = (pos: number) => {
    if (pos < -140) {
      setCardOnTarget(true);
    } else {
      setCardOnTarget(false);
    }
  };

  const handleCardOnTarget = useCallback(
    (cardInfo: CardData | null) => {
      if (cardInfo) {
        if (turn.type === 'IA') {
          setEnemyCards(oldCards => oldCards.filter(c => c.id !== cardInfo.id));
        } else {
          setPlayerCards(oldCards =>
            oldCards.filter(c => c.id !== cardInfo.id),
          );
        }
        turn.ready = true;

        // setCardOnTarget(cardInfo);
        setTurn(turn);
        setCardsOnBoard([cardInfo]);
      }
    },
    [setCardsOnBoard, setTurn, turn],
  );

  return (
    <Container>
      <Arena>
        <View
          style={{
            transform: [{rotate: '180deg'}],
          }}>
          <PlayerCards
            isPlayer={false}
            handCards={enemyCards}
            getPositionCard={pos => handleGetPosition(pos)}
            handleCardOnTarget={cardInfo => handleCardOnTarget(cardInfo)}
          />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Target onTarget={cardOnTarget} />
        </View>

        <PlayerCards
          isPlayer
          handCards={playerCards}
          getPositionCard={pos => handleGetPosition(pos)}
          handleCardOnTarget={cardInfo => handleCardOnTarget(cardInfo)}
        />
      </Arena>
    </Container>
  );
};

export default Play;
