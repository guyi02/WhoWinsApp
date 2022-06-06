import {CardData} from '../utils/types';
export type CardsOnHandProps = {
  handleCardOnTarget?: (cardData: CardData | null) => void;
  getPositionCard?: (position: number) => void;
};
