import React from 'react';
import {View} from 'react-native';
import Arena from '../../components/Arena';

import CardsOnHand from '../../components/CardsOnHand';
import Target from '../../components/Target';
import {Container} from './styles';

const Play = () => {
  return (
    <Container>
      <Arena>
        <View
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
          }}>
          <Target />
        </View>
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
