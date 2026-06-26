export interface WorldLore {
  title: string;
  description: string;
  details: string[];
}

export interface District {
  id: number;
  name: string;
  description: string;
  tags: string[];
}

export interface Faction {
  name: string;
  description: string;
  features: string[];
}

export interface School {
  symbol: string;
  name: string;
  description: string;
  features: string[];
}

export interface Character {
  id: number;
  name: string;
  age: number | string;
  status: string;
  faction: string;
  ability: string;
  rank: string;
  description: string;
  ageGroup: '미성년' | '성인';
}
