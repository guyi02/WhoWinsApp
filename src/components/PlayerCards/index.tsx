import React, {useCallback, useEffect, useState} from 'react';
import usePlayerTurn from '@store/usePlayerTurn';

import Card from '@components/Card';
import ModalCardDetail from '@components/Modal/ModalCardDetail';
import {CardData} from '@store/types';

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
  const battleCards = usePlayerTurn(state => state.battleCards);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [cardsToPut, setCardsToPut] = useState<CardData[]>([]);

  useEffect(() => {
    if (
      turn.id !== '' &&
      turn.type === 'IA' &&
      !turn.ready &&
      !isPlayer &&
      battleCards.length < 2 &&
      handCards.length > 0
    ) {
      setTimeout(() => {
        setCardsToPut([handCards[getRandomInt(0, handCards.length)]]);
      }, 7000);
    }
  }, [battleCards.length, handCards, isPlayer, turn.id, turn.ready, turn.type]);

  const handleTarget = useCallback(
    (cardInfo: CardData | null) => {
      if (handleCardOnTarget) {
        handleCardOnTarget(cardInfo);
        setCardsToPut([]);
      }
    },
    [handleCardOnTarget],
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
