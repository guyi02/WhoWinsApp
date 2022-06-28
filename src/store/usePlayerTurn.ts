import create, {SetState} from 'zustand';
import {PlayerTurn, Turn, TurnStore, CardData} from './types';

const usePlayerTurn = create<TurnStore>((set: SetState<TurnStore>) => ({
  turn: {
    type: Turn.Player,
    id: '',
    ready: false,
    battleCards: [],
  },
  battleCards: [],
  setTurn: (playerTurn: PlayerTurn) => {
    set(() => ({
      turn: playerTurn,
    }));
  },
  setBattleCards: (battleCards: CardData[]) => {
    const existsCards = battleCards.length > 0;
    set(state => ({
      battleCards: existsCards ? [...state.battleCards, ...battleCards] : [],
    }));
  },
}));

export default usePlayerTurn;
