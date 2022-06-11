import create, {SetState} from 'zustand';
import {PlayerTurn, Turn, TurnStore} from './types';

const usePlayerTurn = create<TurnStore>((set: SetState<TurnStore>) => ({
  turn: {
    type: Turn.Player,
    id: '',
    ready: false,
  },
  setTurn: (playerTurn: PlayerTurn) => {
    set(() => ({
      turn: playerTurn,
    }));
  },
}));

export default usePlayerTurn;
