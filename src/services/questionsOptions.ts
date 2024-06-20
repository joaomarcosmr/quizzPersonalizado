import { IMCType, Question } from "../interface/questions";

export const questionKeto: Question[] = [
  {
    order: 1,
    type: "calculation",
    calculation: {
      title: "Qual sua altura?",
      measure: "cm",
      measureDescription: "Insira um valor de 90 a 243cm",
      imc: IMCType.Info,
    },
  },
  {
    order: 2,
    type: "calculation",
    calculation: {
      title: "Qual seu peso?",
      measure: "kg",
      measureDescription: "Insira um valor de 25 a 300kg",
      imc: IMCType.IMCCalculation,
    },
  },
  {
    order: 3,
    type: "calculation",
    calculation: {
      title: "Qual sua meta de peso?",
      measure: "kg",
      measureDescription: "Insira um valor de 25 a 300kg",
      imc: IMCType.IMCGoal,
    },
  },
  {
    order: 4,
    type: "calculation",
    calculation: { title: "Qual sua idade?", measure: "anos" },
  },
  {
    order: 5,
    type: "calculation",
    calculation: { title: "Qual seu nome?" },
  },
    {
    order: 6,
    type: "results-chart-promises",
    calculation: {
      title: "Qual sua altura?",
      measure: "cm",
      measureDescription: "Insira um valor de 90 a 243cm",
      imc: IMCType.Info,
    },
  },
  // {
  //   order: 6,
  //   question: "Qual é a sua refeição favorita?",
  //   name: 'favoriteFood',
  //   save: true,
  //   type: "classic",
  //   options: [
  //     { image: "../src/assets/images/fireEmoji.webp", text: "Pizza" },
  //     { image: "../src/assets/images/hangLoseEmoji.webp", text: "Hambúrguer" },
  //     { image: "../src/assets/images/strongEmoji.webp", text: "Salada" },
  //     { image: "../src/assets/images/appleEmoji.webp", text: "Sushi" },
  //   ],
  // },
  // {
  //   order: 7,
  //   name: 'hobby',
  //   save: true,
  //   question: "Quais atividades você gosta de fazer no seu tempo livre?",
  //   type: "multiChoice",
  //   options: [
  //     { image: "../src/assets/images/fireEmoji.webp", text: "Ler um livro" },
  //     {
  //       image: "../src/assets/images/hangLoseEmoji.webp",
  //       text: "Assistir filmes",
  //     },
  //     {
  //       image: "../src/assets/images/strongEmoji.webp",
  //       text: "Praticar esportes",
  //     },
  //     { image: "../src/assets/images/appleEmoji.webp", text: "Cozinhar" },
  //     {
  //       image: "../src/assets/images/hangLoseEmoji.webp",
  //       text: "Ouvir música",
  //     },
  //     { image: "../src/assets/images/strongEmoji.webp", text: "Viajar" },
  //     { image: "../src/assets/images/appleEmoji.webp", text: "Desenhar" },
  //   ],
  // },
  // {
  //   order: 8,
  //   question: "Qual é o seu maior sonho?",
  //   type: "classic",
  //   options: [
  //     {
  //       image: "../src/assets/images/heartEmoji.webp",
  //       text: "Ser bem-sucedido profissionalmente",
  //     },
  //     {
  //       image: "../src/assets/images/laughEmoji.webp",
  //       text: "Viajar pelo mundo",
  //     },
  //     {
  //       image: "../src/assets/images/cryEmoji.webp",
  //       text: "Ajudar outras pessoas",
  //     },
  //     {
  //       image: "../src/assets/images/coolEmoji.webp",
  //       text: "Viver em harmonia com a natureza",
  //     },
  //   ],
  // },
  // {
  //   order: 9,
  //   question: "Se você pudesse ter um superpoder, qual seria?",
  //   type: "multiChoice",
  //   options: [
  //     { image: "../src/assets/images/fireEmoji.webp", text: "Voar" },
  //     {
  //       image: "../src/assets/images/hangLoseEmoji.webp",
  //       text: "Invisibilidade",
  //     },
  //     { image: "../src/assets/images/strongEmoji.webp", text: "Telepatia" },
  //     { image: "../src/assets/images/appleEmoji.webp", text: "Super força" },
  //     {
  //       image: "../src/assets/images/hangLoseEmoji.webp",
  //       text: "Curar qualquer doença",
  //     },
  //     {
  //       image: "../src/assets/images/strongEmoji.webp",
  //       text: "Manipular o tempo",
  //     },
  //     {
  //       image: "../src/assets/images/appleEmoji.webp",
  //       text: "Controlar elementos naturais",
  //     },
  //   ],
  // },
  // {
  //   order: 10,
  //   type: "info",
  //   info: [
  //     {
  //       image: "../src/assets/images/woman/results/eqedwf4ar9ec26prkdfa.webp",
  //       title:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt",
  //       description1:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt quae omnis placeat ut quisquam provident ame.",
  //     },
  //   ],
  // },
  // {
  //   order: 11,
  //   question: "Se você pudesse viver em qualquer lugar do mundo, onde seria?",
  //   type: "classic",
  //   options: [
  //     { image: "../src/assets/images/fireEmoji.webp", text: "Paris, França" },
  //     {
  //       image: "../src/assets/images/hangLoseEmoji.webp",
  //       text: "Tóquio, Japão",
  //     },
  //     {
  //       image: "../src/assets/images/strongEmoji.webp",
  //       text: "Sydney, Austrália",
  //     },
  //     { image: "../src/assets/images/appleEmoji.webp", text: "Nova York, EUA" },
  //     {
  //       image: "../src/assets/images/hangLoseEmoji.webp",
  //       text: "Rio de Janeiro, Brasil",
  //     },
  //     {
  //       image: "../src/assets/images/strongEmoji.webp",
  //       text: "Cidade do Cabo, África do Sul",
  //     },
  //     {
  //       image: "../src/assets/images/appleEmoji.webp",
  //       text: "Barcelona, Espanha",
  //     },
  //   ],
  // },
  // {
  //   order: 12,
  //   question: "Qual é a sua estação do ano favorita?",
  //   type: "classic",
  //   options: [
  //     { image: "../src/assets/images/fireEmoji.webp", text: "Verão" },
  //     { image: "../src/assets/images/hangLoseEmoji.webp", text: "Outono" },
  //     { image: "../src/assets/images/strongEmoji.webp", text: "Inverno" },
  //     { image: "../src/assets/images/appleEmoji.webp", text: "Primavera" },
  //   ],
  // },
  // {
  //   order: 13,
  //   type: "info",
  //   info: [
  //     {
  //       image: "../src/assets/images/woman/results/eqedwf4ar9ec26prkdfa.webp",
  //       title:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt",
  //       description1:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt quae omnis placeat ut quisquam provident ame.",
  //     },
  //   ],
  // },
];
