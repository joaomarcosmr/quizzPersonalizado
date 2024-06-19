export enum IMCType {
  Info = 'Info',
  CalculoImc = 'CalculoImc',
  CalculoMeta = 'CalculoMeta'
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
  measure: string;
  measureDescription?: string;
  imc: IMCType;
}

export interface Question {
  order: number;
  type: string;
  question?: string;
  options?: Option[];
  calculation?: Calculation;
  info?: Info[];
}
