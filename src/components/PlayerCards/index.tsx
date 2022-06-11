import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import usePlayerTurn from '../../store/usePlayerTurn';

import Card from '../Card';
import ModalCardDetail from '../Modal/ModalCardDetail';
import {playerFake} from '../utils';
import {CardData} from '../utils/types';

import {Container} from './styles';
import {PlayerCardsProps} from './types';

const data: CardData[] = [
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
];

const PlayerCards = ({
  isPlayer,
  handleCardOnTarget,
  getPositionCard,
}: PlayerCardsProps) => {
  const setTurn = usePlayerTurn(state => state.setTurn);
  const turn = usePlayerTurn(state => state.turn);
  const [state, setSTate] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleTarget = useCallback(
    (cardInfo: CardData | null) => {
      if (handleCardOnTarget) {
        handleCardOnTarget(cardInfo);
        turn.ready = true;
        setTurn(turn);
      }
    },
    [handleCardOnTarget, setTurn, turn],
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
        {data.map((cardData, index) => {
          return (
            <Card
              key={cardData.id}
              cardData={cardData}
              getPosition={position => handlePosition(position)}
              index={index}
              isEnemy={state}
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
