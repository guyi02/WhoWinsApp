import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';

import Card from '../Card';
import ModalCardDetail from '../Modal/ModalCardDetail';

import {Container} from './styles';

const CardsOnHand = () => {
  const [state, setSTate] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleNext = useCallback(index => {
    console.log(`o card ${index} colidiu`);
  }, []);

  const handleDetail = useCallback(index => {
    setIsOpenModal(true);
  }, []);

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
              index={index}
              isEnemy={state}
              handleRealeaseAnim={cardIndex => handleNext(cardIndex)}
              handleDetail={cardIndex => handleDetail(cardIndex)}
            />
          );
        })}
      </Container>
    </>
  );
};

export default CardsOnHand;
