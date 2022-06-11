import React from 'react';
import {CircleTarget, TargetBox} from './styles';
import {TargetProp} from './type';

const Target = ({onTarget}: TargetProp) => {
  return (
    <CircleTarget
      colors={['#D7EEB3', '#7ADF75', '#D7EEB3']}
      end={{x: 0.5, y: 1}}
      start={{x: 0, y: 0.4}}
      hasCard={!!onTarget}>
      <TargetBox hasCard={!!onTarget} />
    </CircleTarget>
  );
};

export default Target;
