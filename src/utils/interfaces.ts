export interface Ant {
  name: string;
  length: number;
  weight: number;
  color: string;
  likelihoodOfWinning?: number;
}

export interface Ants extends Array<Ant>{}

export interface AntState {
  data: Ants;
}
