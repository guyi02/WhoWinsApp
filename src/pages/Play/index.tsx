import React, {useState} from 'react';
import {View} from 'react-native';
import Arena from '../../components/Arena';

import PlayerCards from '../../components/PlayerCards';
import Target from '../../components/Target';
import {Container} from './styles';
import {CardData} from '../../components/utils/types';

const Play = () => {
  const [cardOnTarget, setCardOnTarget] = useState<CardData | null>(null);

  const handleGetPosition = (pos: number) => {
    // console.log(pos);
  };

  const handleCardOnTarget = (cardInfo: CardData | null) => {
    setCardOnTarget(cardInfo);
  };

  return (
    <Container>
      <Arena>
        <View
          style={{
            transform: [{rotate: '180deg'}],
          }}>
          <PlayerCards
            isPlayer={false}
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
          isPlayer={true}
          getPositionCard={pos => handleGetPosition(pos)}
          handleCardOnTarget={cardInfo => handleCardOnTarget(cardInfo)}
        />
      </Arena>
    </Container>
  );
};

export default Play;
