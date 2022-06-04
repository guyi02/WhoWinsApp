import React, {useState} from 'react';
import {View} from 'react-native';
import Arena from '../../components/Arena';

import CardsOnHand from '../../components/CardsOnHand';
import Target from '../../components/Target';
import {Container} from './styles';

const Play = () => {
  const [cardOnTarget, setCardOnTarget] = useState(false);

  const handleGetPosition = (pos: number) => {
    setCardOnTarget(Number(pos.toFixed(0)) < -200);
  };

  const handleCardOnTarget = (index: number) => {
    console.log(index);
  };

  return (
    <Container>
      <Arena>
        <View
          style={{
            position: 'absolute',
            top: '40%',
            left: '40%',
          }}>
          <Target onTarget={cardOnTarget} />
        </View>
        <View
          style={{
            transform: [{rotate: '180deg'}],
          }}>
          <CardsOnHand />
        </View>
        <CardsOnHand
          getPositionCard={pos => handleGetPosition(pos)}
          handleCardOnTarget={index => handleCardOnTarget(index)}
        />
      </Arena>
    </Container>
  );
};

export default Play;
