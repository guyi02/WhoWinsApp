import React from 'react';
import {
  WrapperTarget,
  Container,
  ActionButton,
  ActionButtonText,
  targeWidth,
} from './styles';
import {TargetProp} from './type';

const Target = ({onTarget}: TargetProp) => {
  return (
    <WrapperTarget
      colors={['#D7EEB3', '#7ADF75', '#D7EEB3']}
      end={{x: 0.5, y: 1}}
      start={{x: 0, y: 0.4}}
      hasCard={!!onTarget}>
      <Container hasCard={!!onTarget} />
    </WrapperTarget>
  );
};

export default Target;
