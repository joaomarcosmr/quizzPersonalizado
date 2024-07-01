import {
  Biotype,
  FitnessLevel,
  Lifestyle,
  Metabolism,
} from "../interface/personalizedAnswers";
import { IMCType, Question } from "../interface/questions";

export const questionOptions: Question[] = [
  {
    order: 1,
    question: "Seu plano personalizado em 1 minuto",
    type: "start",
    options: [
      {
        image: "../src/assets/images/woman/1829.webp",
        text: "18 a 24",
      },
      {
        image: "../src/assets/images/woman/3039.webp",
        text: "25 a 34",
      },
      {
        image: "../src/assets/images/woman/4049.webp",
        text: "35 a 44",
      },
      {
        image: "../src/assets/images/woman/50+.webp",
        text: "45+",
      },
    ],
  },
  {
    order: 2,
    type: "info",
    info: [
      {
        image: "../src/assets/images/inicial.png",
        title: "Pilates na Parede",
        description1: "Mais de 3435 mulheres estão queimando gorduras com esses exercícios.",
      },
    ],
  },
  {
    order: 3,
    question: "Como você se sente em relação ao seu peso atual?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/cansadoEmoji.webp",
        text: "Triste e desmotivada",
      },
      {
        image: "../src/assets/images/tedioEmoji.webp",
        text: "Indiferente",
      },
      {
        image: "../src/assets/images/sorrisoEmoji.webp",
        text: "Motivada a melhorar",
      },
      {
        image: "../src/assets/images/sorrisoOculosEmoji.webp",
        text: "Feliz e confiante",
      },
    ],
  },
  {
    order: 4,
    question: "Você sente que seu peso atual limita suas atividades diárias?",
    type: "classic",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Sim, bastante" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Um pouco" },
      { image: "../src/assets/images/strongEmoji.webp", text: "Não muito" },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "De jeito nenhum",
      },
    ],
  },
  {
    order: 5,
    question: "O que você acha que precisaria mudar para alcançar seu peso ideal?",
    type: "classic",
    options: [
      { image: "../src/assets/images/appleEmoji.webp", text: "Dieta" },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Exercícios",
      },
      {
        image: "../src/assets/images/familiaEmoji.webp",
        text: "Hábitos diários",
      },
      {
        image: "../src/assets/images/envergonhadoEmoji.webp",
        text: "Tudo isso junto",
      },
    ],
  },
  {
    order: 6,
    question: "Você já tentou alguma dieta que não deu certo e acabou se frustrando?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/cansado2Emoji.webp",
        text: "Sim, várias vezes",
      },
      {
        image: "../src/assets/images/cansadoEmoji.webp",
        text: "Sim, uma vez",
      },
      {
        image: "../src/assets/images/sorrisoEmoji.webp",
        text: "Não, nunca tentei dieta",
      },
      {
        image: "../src/assets/images/sorrisoOculosEmoji.webp",
        text: "Nunca me frustrei com dietas",
      },
    ],
  },
  {
    order: 7,
    question: "Quais são os maiores obstáculos que você enfrenta para atingir seu peso desejado?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Falta de tempo",
      },
      {
        image: "../src/assets/images/tedioEmoji.webp",
        text: "Falta de motivação",
      },
      {
        image: "../src/assets/images/saladaEmoji.webp",
        text: "Hábitos alimentares",
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Falta de conhecimento",
      },
    ],
  },
  {
    order: 8,
    question: "Você acha que o seu peso atual pode estar afetando sua saúde?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/cansado2Emoji.webp",
        text: "Sim, definitivamente",
      },
      {
        image: "../src/assets/images/cansadoEmoji.webp",
        text: "Talvez um pouco",
      },
      {
        image: "../src/assets/images/sorrisoEmoji.webp",
        text: "Acho que não",
      },
    ],
  },
  {
    order: 9,
    question: "Se houvesse uma maneira eficaz de perder peso, você estaria disposta a tentar?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Sim, estou pronta",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Talvez, dependendo da solução",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Estou um pouco cética",
      },
    ],
  },
  {
    order: 10,
    type: "info",
    info: [
      {
        image: "../src/assets/images/terra-noticia.png",
        title: "Você não precisa fazer dietas difíceis, comer pizza também pode emagrecer!",
        description1: "De acordo com o portal Terra, o pilates na parede com pouco tempo de treinos, você já consegue grandes resultados.",
				description2: "Com apenas 10 minutos ao dia, você mantém uma dieta livre para comer o que quiser e ainda consegue emagrecer."
      },
    ],
  },
  {
    order: 11,
    question: "Como você descreveria sua realidade?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/sorrisoPreocupadoEmoji.webp",
        text: Biotype.Ectomorph,
      },
      {
        image: "../src/assets/images/tedioEmoji.webp",
        text: Biotype.Mesomorph,
      },
      {
        image: "../src/assets/images/envergonhadoEmoji.webp",
        text: Biotype.Endomorph,
      },
    ],
  },
  {
    order: 12,
    question: "Como você descreveria seu nível de metabolismo?",
    name: "metabolism",
    save: true,
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fogueteEmoji.webp",
        text: Metabolism.Fast,
      },
      {
        image: "../src/assets/images/sorrisoPreocupadoEmoji.webp",
        text: Metabolism.Average,
      },
      {
        image: "../src/assets/images/cansado2Emoji.webp",
        text: Metabolism.Slow,
      },
    ],
  },
  {
    order: 13,
    question: "Você se movimenta bastante durante seu dia?",
    name: "lifestyle",
    save: true,
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: Lifestyle.Active,
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: Lifestyle.Normal,
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: Lifestyle.Sedentary,
      },
    ],
  },
  {
    order: 14,
    question: "Você se alimenta de maneira saudável?",
    name: "fitnessLevel",
    save: true,
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: FitnessLevel.Bad,
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: FitnessLevel.Normal,
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: FitnessLevel.Good,
      },
    ],
  },
  {
    order: 15,
    question: "Você tem algum problema de saúde que possa afetar seu peso?",
    type: "classic",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Sim" },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Não" },
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
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Extremamente feliz e confiante",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Mais saudável e ativa",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Satisfeita e motivada",
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Um pouco melhor do que agora",
      },
    ],
  },
  {
    order: 22,
    question: "Quais atividades você gostaria de fazer mais facilmente com seu peso ideal?",
    type: "classic",
    options: [
      { image: "../src/assets/images/fireEmoji.webp", text: "Esportes" },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Caminhadas longas",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Brincar com os filhos",
      }
    ],
  },
  {
    order: 23,
    question: "Como você imagina que seu estilo de vida mudaria com seu novo peso?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Muito mais ativa e saudável",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Mais equilibrado e consciente",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Mais confiante e social",
      },
    ],
  },
  {
    order: 24,
    question: "Quais benefícios você espera obter ao alcançar seu peso ideal?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Melhorar a autoestima",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Reduzir riscos de saúde",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Aumentar a energia",
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Melhorar a qualidade de vida",
      },
    ],
  },
  {
    order: 25,
    type: "results-chart-promises",
  },
  {
    order: 26,
    question: "Seu plano personalizado em 1 minuto",
    type: "landingPage",
  },
];
