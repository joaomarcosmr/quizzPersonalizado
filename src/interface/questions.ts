export enum IMCType {
  Info = 'Info',
  IMCCalculation = 'CalculoImc',
  IMCGoal = 'CalculoMeta'
}

export interface Option {
  image?: string;
  text: string;
  isChoosed?: boolean;
}

export interface Info {
  image?: string;
  title: string;
  description1: string;
  description2?: string;
}

export interface Calculation {
  title: string;
  measure?: string;
  measureDescription?: string;
  imc?: IMCType;
}

export interface Question {
  order: number;
  type: string;
  name?: string;
  save?: boolean;
  question?: string;
  options?: Option[];
  calculation?: Calculation;
  info?: Info[];
}
