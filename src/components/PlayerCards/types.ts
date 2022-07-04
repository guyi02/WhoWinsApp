import {CardData} from '@store/usePlayerTurn/types';

export type PlayerCardsProps = {
  handCards: CardData[];
  isPlayer: boolean;
  handleCardOnTarget?: (cardData: CardData | null) => void;
  getPositionCard?: (position: number) => void;
};
