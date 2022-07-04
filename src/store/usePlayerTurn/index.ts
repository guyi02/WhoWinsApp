import create, {SetState} from 'zustand';
import {PlayerTurn, Turn, TurnStore, CardData} from './types';

const usePlayerTurn = create<TurnStore>((set: SetState<TurnStore>) => ({
  turn: {
    id: '',
    type: Turn.Player,
    ready: false,
  },
  cardsOnBoard: [],
  setTurn: (playerTurn: PlayerTurn) => {
    set(() => ({
      turn: playerTurn,
    }));
  },
  setCardsOnBoard: (cards: CardData[]) => {
    const existsCards = cards.length > 0;
    set(state => ({
      cardsOnBoard: existsCards ? [...state.cardsOnBoard, ...cards] : [],
    }));
  },
}));

export default usePlayerTurn;
