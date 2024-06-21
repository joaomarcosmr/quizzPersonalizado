import { IBodyImage } from './bodyImage';
import { IMCType } from './questions';

export enum Metabolism {
  Fast = "Muito rápido, não consigo ganhar peso",
  Average = "Normal, ganho e perco peso facilmente",
  Slow = "Lento, ganho peso facilmente"
}

export enum Biotype {
  Endomorph = "Ganho peso muito rápido e é difícil perder",
  Mesomorph = "Não engordo e não emagreço",
  Ectomorph = "Muito difícil ganhar peso"
}

export enum Lifestyle {
  Active = "Passo o tempo todo levantada se mexendo",
  Normal = "As vezes levanto e faço coisas em pé",
  Sedentary = "Fico a maior parte do dia sentada"
}

export enum FitnessLevel {
  Good = "Muito saudável",
  Normal = "Equilibrada entre saudável e não saudável",
  Bad = "Como muitas besteiras"
}

export interface IAnswers {
  IMC: IMCType;
  age: number;
  goalWeight: string;
  height: number;
  name: string;
  targetWeight: number;
  weight: number;
  bodyImage: IBodyImage;
  metabolism: Metabolism;
  lifestyle: Lifestyle;
  biotype: Biotype;
  fitnessLevel: FitnessLevel;
}
