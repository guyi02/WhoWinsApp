export type CardProps = {
  isEnemy: boolean;
  index: number;
  handleRealeaseAnim: (index: number) => void;
  handleDetail: (index: number) => void;
  getPosition: (pos: number) => void;
};
