import { IMCType, Question } from "../interface/questions";

export const questionKeto: Question[] = [
  {
    order: 1,
    type: "calculation",
    calculation: { title: "Qual sua altura?", measure: "cm", measureDescription: "Insira um valor de 90 a 243cm", imc: IMCType.Info},
  },
  {
    order: 2,
    type: "calculation",
    calculation: { title: "Qual seu peso?", measure: "kg", measureDescription: "Insira um valor de 25 a 300kg", imc: IMCType.CalculoImc},
  },
  {
    order: 3,
    type: "calculation",
    calculation: { title: "Qual sua meta de peso?", measure: "kg", measureDescription: "Insira um valor de 25 a 300kg", imc: IMCType.CalculoMeta},
  },
  {
    order: 4,
    question: "Question 3",
    type: "classic",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Option 1" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 2" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 3" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 4" },
    ],
  },
  {
    order: 5,
    question: "Question 4",
    type: "multiChoice",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Option 1" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 2" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 3" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 4" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 5" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 6" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 7" },
    ],
  },
  {
    order: 5,
    question: "Question 5",
    type: "classic",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Option 1" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 2" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 3" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 4" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 5" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 6" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 7" },
    ],
  },
  {
    order: 6,
    question: "Question 6",
    type: "multiChoice",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Option 1" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 2" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 3" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 4" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 5" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 6" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 7" },
    ],
  },
  {
    order: 7,
    type: "info",
    info: [
      {
        image: "../src/assets/images/woman/results/eqedwf4ar9ec26prkdfa.webp",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt",
        description1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt quae omnis placeat ut quisquam provident ame.",
      },
    ],
  },
  {
    order: 8,
    question: "Question 8",
    type: "classic",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Option 1" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 2" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 3" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 4" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 5" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 6" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 7" },
    ],
  },
  {
    order: 9,
    question: "Question 9",
    type: "classic",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Option 1" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 2" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 3" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 4" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Option 5" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Option 6" },
      { image: "../src/assets/images/appleEmoji.webp", text: "Option 7" },
    ],
  },
  {
    order: 10,
    type: "info",
    info: [
      {
        image: "../src/assets/images/woman/results/eqedwf4ar9ec26prkdfa.webp",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt",
        description1:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt quae omnis placeat ut quisquam provident ame.",
      },
    ],
  },
];
