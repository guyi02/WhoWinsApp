import {CardData} from '../utils/types';

export type CardProps = {
  cardData: CardData;
  cardsToPut: CardData[];
  isPlayer: boolean;
  index: number;
  handleRealeaseAnim: (cardData: CardData | null) => void;
  handleDetail: (index: number) => void;
  getPosition: (pos: number) => void;
};
