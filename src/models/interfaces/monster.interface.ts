export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface BattleResult {
  winner: Monster;
  tie: boolean;
}

export interface Fight {
  monster1Id: string | null;
  monster2Id: string | null;
}
