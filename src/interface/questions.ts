export interface Option {
  image?: string;
  text: string;
  isChoosed?: boolean;
}

export interface Question {
  order: number;
  type: string;
  question: string;
  options: Option[];
}
