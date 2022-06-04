import React from 'react';
import {Container} from './styles';
import {TargetProp} from './type';

const Target = ({onTarget}: TargetProp) => {
  return <Container hasCard={onTarget} />;
};

export default Target;
