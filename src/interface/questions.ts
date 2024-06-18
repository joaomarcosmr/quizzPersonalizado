interface Option {
  image?: string,
  text: string
}

export interface Question {
  order: number;
  question: string;
  options: Option[];
}