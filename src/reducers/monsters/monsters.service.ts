import { API_URL } from '../../constants/env';
import {
  BattleResult,
  Fight,
  Monster,
} from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const battle = async (monstersFighting: Fight): Promise<BattleResult> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(monstersFighting),
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  battle,
};
