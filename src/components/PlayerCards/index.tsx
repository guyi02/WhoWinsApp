import React, {useCallback, useEffect, useState} from 'react';
import usePlayerTurn from '@store/usePlayerTurn';
import useBattlePhase from '@store/useBattlePhase';

import Card from '@components/Card';
import ModalCardDetail from '@components/Modal/ModalCardDetail';
import {CardData} from '@store/usePlayerTurn/types';

import {Container} from './styles';
import {PlayerCardsProps} from './types';
import {getRandomInt} from '@components/utils';

const PlayerCards = ({
  handCards,
  isPlayer,
  handleCardOnTarget,
  getPositionCard,
}: PlayerCardsProps) => {
  const turn = usePlayerTurn(state => state.turn);
  const cardsOnBoard = usePlayerTurn(state => state.cardsOnBoard);
  const phase = useBattlePhase(state => state.phase);
  const setBattlePhase = useBattlePhase(state => state.setBattlePhase);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [cardsToPut, setCardsToPut] = useState<CardData[]>([]);

  useEffect(() => {
    if (
      turn.id !== '' &&
      turn.type === 'IA' &&
      !turn.ready &&
      !isPlayer &&
      cardsOnBoard.length < 2 &&
      handCards.length > 0
    ) {
      setTimeout(() => {
        setCardsToPut([handCards[getRandomInt(0, handCards.length)]]);
      }, 7000);
    }
  }, [
    cardsOnBoard.length,
    handCards,
    isPlayer,
    turn.id,
    turn.ready,
    turn.type,
  ]);

  const handleTarget = useCallback(
    (cardInfo: CardData | null) => {
      if (handleCardOnTarget) {
        handleCardOnTarget(cardInfo);
        setCardsToPut([]);
        setBattlePhase({
          ...phase,
          isShuffle: false,
        });
      }
    },
    [handleCardOnTarget, phase, setBattlePhase],
  );

  const handleDetail = useCallback(index => {
    setIsOpenModal(true);
  }, []);

  const handlePosition = useCallback(
    (position: number) => {
      if (getPositionCard) {
        getPositionCard(position);
      }
    },
    [getPositionCard],
  );

  return (
    <>
      <ModalCardDetail
        isVisible={isOpenModal}
        hideModal={() => setIsOpenModal(false)}
      />
      <Container>
        {handCards.map((cardData, index) => {
          return (
            <Card
              key={cardData.id}
              index={index}
              cardData={cardData}
              cardsToPut={cardsToPut}
              getPosition={position => handlePosition(position)}
              isPlayer={isPlayer}
              handleRealeaseAnim={cardInfo => handleTarget(cardInfo)}
              handleDetail={cardIndex => handleDetail(cardIndex)}
            />
          );
        })}
      </Container>
    </>
  );
};

export default PlayerCards;
