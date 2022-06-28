export enum Turn {
  Player = 'player',
  IA = 'IA',
}

export type CardData = {
  id: number;
  name: string;
  value: number;
  dy: number;
};

export type PlayerTurn = {
  id: string;
  type: Turn;
  ready: boolean;
};

export type TurnStore = {
  turn: PlayerTurn;
  battleCards: CardData[];
  setTurn: (playerTurn: PlayerTurn) => void;
  setBattleCards: (cardData: CardData[]) => void;
};
