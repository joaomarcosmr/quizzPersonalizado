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

export interface Question {
  order: number;
  type: string;
  question?: string;
  options?: Option[];
  info?: Info[];
}
