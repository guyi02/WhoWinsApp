import {CardData} from '../utils/types';
export type PlayerCardsProps = {
  handleCardOnTarget?: (cardData: CardData | null) => void;
  getPositionCard?: (position: number) => void;
  isPlayer: boolean;
};
