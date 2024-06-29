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
    question: "Como você se sente em relação ao seu peso atual?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/cansadoEmoji.webp",
        text: "Triste e desmotivado(a)",
      },
      {
        image: "../src/assets/images/tedioEmoji.webp",
        text: "Indiferente",
      },
      {
        image: "../src/assets/images/sorrisoEmoji.webp",
        text: "Motivado(a) a melhorar",
      },
      {
        image: "../src/assets/images/sorrisoOculosEmoji.webp",
        text: "Feliz e confiante",
      },
    ],
  },
  {
    order: 2,
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
    order: 3,
    question:
      "O que você acha que precisaria mudar para alcançar seu peso ideal?",
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
    order: 4,
    question:
      "Você já tentou alguma dieta que não deu certo e acabou se frustrando?",
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
    order: 5,
    question:
      "Quais são os maiores obstáculos que você enfrenta para atingir seu peso desejado?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp", // aqui
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
        image: "../src/assets/images/appleEmoji.webp", // aqui
        text: "Falta de conhecimento",
      },
    ],
  },
  {
    order: 6,
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
      {
        image: "../src/assets/images/okEmoji.webp",
        text: "De jeito nenhum",
      },
    ],
  },
  {
    order: 7,
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
    order: 8,
    question:
      "Qual foi o maior desafio que você encontrou ao tentar perder peso?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Falta de resultados",
      },
      {
        image: "../src/assets/images/pizzaEmoji.webp",
        text: "Dificuldade em manter a dieta",
      },
      {
        image: "../src/assets/images/strongEmoji.webp", // tempo aqui
        text: "Falta de tempo para exercícios",
      },
      {
        image: "../src/assets/images/cansadoEmoji.webp",
        text: "Falta de motivação",
      },
    ],
  },
  {
    order: 9,
    question: "Você acredita que há uma solução para o seu problema de peso?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Sim, com certeza",
      },
      { image: "../src/assets/images/hangLoseEmoji.webp", text: "Talvez" },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Acho difícil",
      },
      { image: "../src/assets/images/appleEmoji.webp", text: "Não acredito" },
    ],
  },
  {
    order: 10,
    question:
      "Se houvesse uma maneira eficaz de perder peso, você estaria disposto(a) a tentar?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Sim, estou pronto(a)",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Talvez, dependendo da solução",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Estou um pouco cético(a)",
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Não estou interessado(a)",
      },
    ],
  },
  {
    order: 11,
    question: "Qual é a sua altura e peso atual?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Anote sua altura e peso",
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
    question: "Você se alimenta de maneira saúdavel?",
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
      measureDescription: "Insira um valor de 90 a 243kg",
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
    question: "Como você se sentiria ao atingir seu peso ideal?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Extremamente feliz e confiante",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Mais saudável e ativo(a)",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Satisfeito(a) e motivado(a)",
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Um pouco melhor do que agora",
      },
    ],
  },
  {
    order: 21,
    question:
      "Quais atividades você gostaria de fazer mais facilmente com seu peso ideal?",
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
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Viajar e explorar",
      },
    ],
  },
  {
    order: 22,
    question:
      "Como você imagina que seu estilo de vida mudaria com seu novo peso?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Muito mais ativo e saudável",
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
    order: 23,
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
    order: 24,
    question: "Como você se motivaria a manter o peso ideal após alcançá-lo?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Acompanhamento constante",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Participação em grupos de apoio",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Definindo novas metas",
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Mantendo hábitos saudáveis",
      },
    ],
  },
  {
    order: 25,
    question:
      "Quais mudanças você está disposto(a) a fazer para alcançar seu peso ideal?",
    type: "classic",
    options: [
      {
        image: "../src/assets/images/fireEmoji.webp",
        text: "Mudanças radicais na dieta",
      },
      {
        image: "../src/assets/images/hangLoseEmoji.webp",
        text: "Iniciar uma rotina de exercícios",
      },
      {
        image: "../src/assets/images/strongEmoji.webp",
        text: "Reduzir o estresse",
      },
      {
        image: "../src/assets/images/appleEmoji.webp",
        text: "Dormir melhor",
      },
    ],
  },
  {
    order: 26,
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
    order: 27,
    type: "results-analysis",
  },
  {
    order: 28,
    type: "results-chart-promises",
  },
	{
    order: 29,
    question: "Seu plano personalizado em 1 minuto",
    type: "landingPage",
  },
];
