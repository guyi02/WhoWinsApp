import React, {useCallback, useEffect, useState} from 'react';

import {Container, ButtonLabel} from './styles';

const ButtonStart = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2000);
  }, [state]);

  const handleClick = useCallback(() => {
    const teste = useState;

    setState(oldState => !oldState);
  }, []);

  return (
    <Container onPress={handleClick}>
      <ButtonLabel>Start</ButtonLabel>
    </Container>
  );
};

export default ButtonStart;
