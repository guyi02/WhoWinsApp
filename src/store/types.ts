export enum Turn {
  Player = 'player',
  IA = 'IA',
}

export type PlayerTurn = {
  id: string;
  type: Turn;
  ready: boolean;
};

export type TurnStore = {
  turn: PlayerTurn;
  setTurn: (playerTurn: PlayerTurn) => void;
};
