import React, {useCallback, useState} from 'react';

import Card from '../Card';
import ModalCardDetail from '../Modal/ModalCardDetail';

import {Container} from './styles';
import {CardsOnHandProps} from './types';

const CardsOnHand = ({
  handleCardOnTarget,
  getPositionCard,
}: CardsOnHandProps) => {
  const [state, setSTate] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleDetail = useCallback(index => {
    setIsOpenModal(true);
  }, []);

  const handleTarget = useCallback(
    cardIndex => {
      if (handleCardOnTarget) {
        handleCardOnTarget(cardIndex);
      }
    },
    [handleCardOnTarget],
  );

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
        {[1, 2, 3].map((_, index) => {
          return (
            <Card
              getPosition={pos => handlePosition(pos)}
              index={index}
              isEnemy={state}
              handleRealeaseAnim={cardIndex => handleTarget(cardIndex)}
              handleDetail={cardIndex => handleDetail(cardIndex)}
            />
          );
        })}
      </Container>
    </>
  );
};

export default CardsOnHand;
