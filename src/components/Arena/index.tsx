import React from 'react';
import {ImageArena, ImageArenaOverlay} from './styles';
import {ArenaProps} from './types';

const imagePlay = require('../../../assets/play-image.jpg');

const Arena = ({children}: ArenaProps) => {
  return (
    <ImageArena source={imagePlay} resizeMode="cover">
      <ImageArenaOverlay>{children}</ImageArenaOverlay>
    </ImageArena>
  );
};

export default Arena;
