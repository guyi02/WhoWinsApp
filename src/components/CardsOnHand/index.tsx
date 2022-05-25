import React from 'react';

import Card from '../Card';

import {Container} from './styles';

const CardsOnHand = () => {
  return (
    <Container>
      {[1, 2, 3].map((_, index) => {
        return <Card index={index} />;
      })}
    </Container>
  );
};

export default CardsOnHand;
