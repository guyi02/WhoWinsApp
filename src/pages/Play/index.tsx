import React from 'react';
import {View} from 'react-native';
import Arena from '../../components/Arena';
import ButtonStart from '../../components/ButtonStart';

import CardsOnHand from '../../components/CardsOnHand';
import {Container} from './styles';

const Play = () => {
  return (
    <Container>
      <View
        style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
          zIndex: 100,
        }}>
        <ButtonStart />
      </View>
      <Arena>
        <View
          style={{
            transform: [{rotate: '180deg'}],
          }}>
          <CardsOnHand />
        </View>
        <CardsOnHand />
      </Arena>
    </Container>
  );
};

export default Play;
