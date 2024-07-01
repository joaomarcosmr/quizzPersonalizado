import {
  Biotype,
  FitnessLevel,
  Lifestyle,
  Metabolism,
} from "../interface/personalizedAnswers";
import { IMCType, Question } from "../interface/questions";

import mulher1829 from "../assets/images/woman/1829.webp";
import mulher3039 from "../assets/images/woman/3039.webp";
import mulher4049 from "../assets/images/woman/4049.webp";
import mulher50plus from "../assets/images/woman/50+.webp";
import inicialImage from "../assets/images/inicial.png";
import cansadoEmoji from "../assets/images/cansadoEmoji.webp";
import tedioEmoji from "../assets/images/tedioEmoji.webp";
import sorrisoEmoji from "../assets/images/sorrisoEmoji.webp";
import sorrisoOculosEmoji from "../assets/images/sorrisoOculosEmoji.webp";
import fireEmoji from "../assets/images/fireEmoji.webp";
import hangLoseEmoji from "../assets/images/hangLoseEmoji.webp";
import strongEmoji from "../assets/images/strongEmoji.webp";
import appleEmoji from "../assets/images/appleEmoji.webp";
import cansado2Emoji from "../assets/images/cansado2Emoji.webp";
import envergonhadoEmoji from "../assets/images/envergonhadoEmoji.webp";
import saladaEmoji from "../assets/images/saladaEmoji.webp";
import fogueteEmoji from "../assets/images/fogueteEmoji.webp";
import terraNoticiaImage from "../assets/images/terra-noticia.png";
import sorrisoPreocupadoEmoji from "../assets/images/sorrisoPreocupadoEmoji.webp";

export const questionOptions: Question[] = [
  {
    order: 1,
    question: "Seu plano personalizado em 1 minuto",
    type: "start",
    options: [
      { image: mulher1829, text: "18 a 24" },
      { image: mulher3039, text: "25 a 34" },
      { image: mulher4049, text: "35 a 44" },
      { image: mulher50plus, text: "45+" },
    ],
  },
  {
    order: 2,
    type: "info",
    info: [
      {
        image: inicialImage,
        title: "Pilates na Parede",
        description1:
          "Mais de 3435 mulheres estão queimando gorduras com esses exercícios.",
      },
    ],
  },
  {
    order: 3,
    question: "Como você se sente em relação ao seu peso atual?",
    type: "classic",
    options: [
      { image: cansadoEmoji, text: "Triste e desmotivada" },
      { image: tedioEmoji, text: "Indiferente" },
      { image: sorrisoEmoji, text: "Motivada a melhorar" },
      { image: sorrisoOculosEmoji, text: "Feliz e confiante" },
    ],
  },
  {
    order: 4,
    question: "Você sente que seu peso atual limita suas atividades diárias?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Sim, bastante" },
      { image: hangLoseEmoji, text: "Um pouco" },
      { image: strongEmoji, text: "Não muito" },
      { image: appleEmoji, text: "De jeito nenhum" },
    ],
  },
  {
    order: 5,
    question: "O que você acha que precisaria mudar para alcançar seu peso ideal?",
    type: "classic",
    options: [
      { image: appleEmoji, text: "Dieta" },
      { image: strongEmoji, text: "Exercícios" },
      { image: saladaEmoji, text: "Hábitos diários" },
      { image: envergonhadoEmoji, text: "Tudo isso junto" },
    ],
  },
  {
    order: 6,
    question: "Você já tentou alguma dieta que não deu certo e acabou se frustrando?",
    type: "classic",
    options: [
      { image: cansado2Emoji, text: "Sim, várias vezes" },
      { image: cansadoEmoji, text: "Sim, uma vez" },
      { image: sorrisoEmoji, text: "Não, nunca tentei dieta" },
      { image: sorrisoOculosEmoji, text: "Nunca me frustrei com dietas" },
    ],
  },
  {
    order: 7,
    question: "Quais são os maiores obstáculos que você enfrenta para atingir seu peso desejado?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Falta de tempo" },
      { image: tedioEmoji, text: "Falta de motivação" },
      { image: saladaEmoji, text: "Hábitos alimentares" },
      { image: appleEmoji, text: "Falta de conhecimento" },
    ],
  },
  {
    order: 8,
    question: "Você acha que o seu peso atual pode estar afetando sua saúde?",
    type: "classic",
    options: [
      { image: cansado2Emoji, text: "Sim, definitivamente" },
      { image: cansadoEmoji, text: "Talvez um pouco" },
      { image: sorrisoEmoji, text: "Acho que não" },
    ],
  },
  {
    order: 9,
    question: "Se houvesse uma maneira eficaz de perder peso, você estaria disposta a tentar?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Sim, estou pronta" },
      { image: hangLoseEmoji, text: "Talvez, dependendo da solução" },
      { image: strongEmoji, text: "Estou um pouco cética" },
    ],
  },
  {
    order: 10,
    type: "info",
    info: [
      {
        image: terraNoticiaImage,
        title: "Você não precisa fazer dietas difíceis, comer pizza também pode emagrecer!",
        description1:
          "De acordo com o portal Terra, o pilates na parede com pouco tempo de treinos, você já consegue grandes resultados.",
        description2:
          "Com apenas 10 minutos ao dia, você mantém uma dieta livre para comer o que quiser e ainda consegue emagrecer.",
      },
    ],
  },
  {
    order: 11,
    question: "Como você descreveria sua realidade?",
    type: "classic",
    options: [
      { image: sorrisoPreocupadoEmoji, text: Biotype.Ectomorph },
      { image: tedioEmoji, text: Biotype.Mesomorph },
      { image: envergonhadoEmoji, text: Biotype.Endomorph },
    ],
  },
  {
    order: 12,
    question: "Como você descreveria seu nível de metabolismo?",
    name: "metabolism",
    save: true,
    type: "classic",
    options: [
      { image: fogueteEmoji, text: Metabolism.Fast },
      { image: sorrisoPreocupadoEmoji, text: Metabolism.Average },
      { image: cansado2Emoji, text: Metabolism.Slow },
    ],
  },
  {
    order: 13,
    question: "Você se movimenta bastante durante seu dia?",
    name: "lifestyle",
    save: true,
    type: "classic",
    options: [
      { image: fireEmoji, text: Lifestyle.Active },
      { image: hangLoseEmoji, text: Lifestyle.Normal },
      { image: strongEmoji, text: Lifestyle.Sedentary },
    ],
  },
  {
    order: 14,
    question: "Você se alimenta de maneira saudável?",
    name: "fitnessLevel",
    save: true,
    type: "classic",
    options: [
      { image: fireEmoji, text: FitnessLevel.Bad },
      { image: hangLoseEmoji, text: FitnessLevel.Normal },
      { image: strongEmoji, text: FitnessLevel.Good },
    ],
  },
  {
    order: 15,
    question: "Você tem algum problema de saúde que possa afetar seu peso?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Sim" },
      { image: hangLoseEmoji, text: "Não" },
    ],
  },
  {
    order: 16,
    type: "calculation",
    calculation: {
      title: "Qual sua altura?",
      measure: "cm",
      measureDescription: "Insira um valor de 90 a 243cm",
      imc: IMCType.Info,
    },
  },
  {
    order: 17,
    type: "calculation",
    calculation: {
      title: "Qual seu peso?",
      measure: "kg",
      measureDescription: "Insira um valor de 25 a 300kg",
      imc: IMCType.IMCCalculation,
    },
  },
  {
    order: 18,
    type: "calculation",
    calculation: {
      title: "Qual sua meta de peso?",
      measure: "kg",
      measureDescription: "Insira um valor de 25 a 300kg",
      imc: IMCType.IMCGoal,
    },
  },
  {
    order: 19,
    type: "calculation",
    calculation: { title: "Qual seu nome?" },
  },
  {
    order: 20,
    type: "results-analysis",
  },
  {
    order: 21,
    question: "Como você se sentiria ao atingir seu peso ideal?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Extremamente feliz e confiante" },
      { image: hangLoseEmoji, text: "Mais saudável e ativa" },
      { image: strongEmoji, text: "Satisfeita e motivada" },
      { image: appleEmoji, text: "Um pouco melhor do que agora" },
    ],
  },
  {
    order: 22,
    question: "Quais atividades você gostaria de fazer mais facilmente com seu peso ideal?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Esportes" },
      { image: hangLoseEmoji, text: "Caminhadas longas" },
      { image: strongEmoji, text: "Brincar com os filhos" },
    ],
  },
  {
    order: 23,
    question: "Como você imagina que seu estilo de vida mudaria com seu novo peso?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Muito mais ativa e saudável" },
      { image: hangLoseEmoji, text: "Mais equilibrado e consciente" },
      { image: strongEmoji, text: "Mais confiante e social" },
    ],
  },
  {
    order: 24,
    question: "Quais benefícios você espera obter ao alcançar seu peso ideal?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Melhorar a autoestima" },
      { image: hangLoseEmoji, text: "Reduzir riscos de saúde" },
      { image: strongEmoji, text: "Aumentar a energia" },
      { image: appleEmoji, text: "Melhorar a qualidade de vida" },
    ],
  },
  {
    order: 25,
    type: "results-chart-promises",
  },
  {
    order: 26,
    type: "awaiting",
  },
  {
    order: 27,
    question: "Seu plano personalizado em 1 minuto",
    type: "landingPage",
  },
];

export default questionOptions;
