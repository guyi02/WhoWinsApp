export type BattlePhase = {
  isBattle: boolean;
  isShuffle: boolean;
  isStandBy: boolean;
};

export type BattlePhaseStore = {
  phase: BattlePhase;
  setBattlePhase: (phase: BattlePhase) => void;
};
