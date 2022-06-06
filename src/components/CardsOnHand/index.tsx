import React, {useCallback, useState} from 'react';

import Card from '../Card';
import ModalCardDetail from '../Modal/ModalCardDetail';
import {CardData} from '../utils/types';

import {Container} from './styles';
import {CardsOnHandProps} from './types';

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

const CardsOnHand = ({
  handleCardOnTarget,
  getPositionCard,
}: CardsOnHandProps) => {
  const [state, setSTate] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleTarget = useCallback(
    (cardInfo: CardData | null) => {
      if (handleCardOnTarget) {
        handleCardOnTarget(cardInfo);
      }
      console.log(cardInfo);
    },
    [handleCardOnTarget],
  );

  const handleDetail = useCallback(index => {
    setIsOpenModal(true);
  }, []);

  const handlePosition = useCallback(
    (pos: number) => {
      if (getPositionCard) {
        getPositionCard(pos);
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
              cardData={cardData}
              getPosition={pos => handlePosition(pos)}
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

export default CardsOnHand;
