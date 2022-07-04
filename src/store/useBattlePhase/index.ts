import create, {SetState} from 'zustand';
import {BattlePhase, BattlePhaseStore} from './types';

const useBattlePhase = create<BattlePhaseStore>(
  (set: SetState<BattlePhaseStore>) => ({
    phase: {
      isBattle: false,
      isShuffle: false,
      isStandBy: true,
    },
    setBattlePhase: (phase: BattlePhase) => {
      set(() => ({
        phase,
      }));
    },
  }),
);

export default useBattlePhase;
