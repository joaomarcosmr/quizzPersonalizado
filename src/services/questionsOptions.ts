import {
  Biotype,
  FitnessLevel,
  Lifestyle,
  Metabolism,
} from "../interface/personalizedAnswers";
import { IMCType, Question } from "../interface/questions";

export const questionKeto: Question[] =
  //   {
  //     order: 1,
  //     type: "awaiting"
  //   },
  // ];

  [
    {
      order: 1,
      question: "Como você se sente em relação ao seu peso atual?",
      type: "classic",
      options: [
        {
          image: "../src/assets/images/sadEmoji.webp",
          text: "Triste e desmotivado(a)",
        },
        {
          image: "../src/assets/images/neutralEmoji.webp",
          text: "Indiferente",
        },
        {
          image: "../src/assets/images/smileEmoji.webp",
          text: "Motivado(a) a melhorar",
        },
        {
          image: "../src/assets/images/happyEmoji.webp",
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
        { image: "../src/assets/images/fireEmoji.webp", text: "Dieta" },
        {
          image: "../src/assets/images/hangLoseEmoji.webp",
          text: "Exercícios",
        },
        {
          image: "../src/assets/images/strongEmoji.webp",
          text: "Hábitos diários",
        },
        {
          image: "../src/assets/images/appleEmoji.webp",
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
          image: "../src/assets/images/fireEmoji.webp",
          text: "Sim, várias vezes",
        },
        {
          image: "../src/assets/images/hangLoseEmoji.webp",
          text: "Sim, uma vez",
        },
        {
          image: "../src/assets/images/strongEmoji.webp",
          text: "Não, nunca tentei dieta",
        },
        {
          image: "../src/assets/images/appleEmoji.webp",
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
          image: "../src/assets/images/fireEmoji.webp",
          text: "Falta de tempo",
        },
        {
          image: "../src/assets/images/hangLoseEmoji.webp",
          text: "Falta de motivação",
        },
        {
          image: "../src/assets/images/strongEmoji.webp",
          text: "Hábitos alimentares",
        },
        {
          image: "../src/assets/images/appleEmoji.webp",
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
          image: "../src/assets/images/fireEmoji.webp",
          text: "Sim, definitivamente",
        },
        {
          image: "../src/assets/images/hangLoseEmoji.webp",
          text: "Talvez um pouco",
        },
        {
          image: "../src/assets/images/strongEmoji.webp",
          text: "Acho que não",
        },
        {
          image: "../src/assets/images/appleEmoji.webp",
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
          image: "../src/assets/images/fireEmoji.webp",
          text: Biotype.Ectomorph,
        },
        {
          image: "../src/assets/images/strongEmoji.webp",
          text: Biotype.Mesomorph
        },
        {
          image: "../src/assets/images/hangLoseEmoji.webp",
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
          image: "../src/assets/images/fireEmoji.webp",
          text: "Falta de resultados",
        },
        {
          image: "../src/assets/images/hangLoseEmoji.webp",
          text: "Dificuldade em manter a dieta",
        },
        {
          image: "../src/assets/images/strongEmoji.webp",
          text: "Falta de tempo para exercícios",
        },
        {
          image: "../src/assets/images/appleEmoji.webp",
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
      calculation: { title: "Qual sua idade?", measure: "anos" },
    },
    {
      order: 20,
      type: "calculation",
      calculation: { title: "Qual seu nome?" },
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
      order: 22,
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
      order: 23,
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
      order: 24,
      question:
        "Quais benefícios você espera obter ao alcançar seu peso ideal?",
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
      order: 26,
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
      order: 27,
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
      order: 28,
      type: "results-analysis",
    },
    {
      order: 29,
      type: "results-chart-promises",
    },
  ];

//   {
//     order: 7,
//     question: "Qual é a sua refeição favorita?",
//     name: 'favoriteFood',
//     save: true,
//     type: "classic",
//     options: [
//       { image: "../src/assets/images/fireEmoji.webp", text: "Pizza" },
//       { image: "../src/assets/images/hangLoseEmoji.webp", text: "Hambúrguer" },
//       { image: "../src/assets/images/strongEmoji.webp", text: "Salada" },
//       { image: "../src/assets/images/appleEmoji.webp", text: "Sushi" },
//     ],
//   },
//   {
//     order: 9,
//     question: "Qual é o seu maior sonho?",
//     type: "classic",
//     options: [
//       {
//         image: "../src/assets/images/heartEmoji.webp",
//         text: "Ser bem-sucedido profissionalmente",
//       },
//       {
//         image: "../src/assets/images/laughEmoji.webp",
//         text: "Viajar pelo mundo",
//       },
//       {
//         image: "../src/assets/images/cryEmoji.webp",
//         text: "Ajudar outras pessoas",
//       },
//       {
//         image: "../src/assets/images/coolEmoji.webp",
//         text: "Viver em harmonia com a natureza",
//       },
//     ],
//   },
//   {
//     order: 10,
//     question: "Se você pudesse ter um superpoder, qual seria?",
//     type: "multiChoice",
//     options: [
//       { image: "../src/assets/images/fireEmoji.webp", text: "Voar" },
//       {
//         image: "../src/assets/images/hangLoseEmoji.webp",
//         text: "Invisibilidade",
//       },
//       { image: "../src/assets/images/strongEmoji.webp", text: "Telepatia" },
//       { image: "../src/assets/images/appleEmoji.webp", text: "Super força" },
//       {
//         image: "../src/assets/images/hangLoseEmoji.webp",
//         text: "Curar qualquer doença",
//       },
//       {
//         image: "../src/assets/images/strongEmoji.webp",
//         text: "Manipular o tempo",
//       },
//       {
//         image: "../src/assets/images/appleEmoji.webp",
//         text: "Controlar elementos naturais",
//       },
//     ],
//   },
//   {
//     order: 11,
//     type: "info",
//     info: [
//       {
//         image: "../src/assets/images/woman/results/eqedwf4ar9ec26prkdfa.webp",
//         title:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt",
//         description1:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt quae omnis placeat ut quisquam provident ame.",
//       },
//     ],
//   },
//   {
//     order: 15,
//     type: "results-analysis",
//     info: [
//       {
//         image: "../src/assets/images/woman/results/eqedwf4ar9ec26prkdfa.webp",
//         title:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt",
//         description1:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt quae omnis placeat ut quisquam provident ame.",
//       },
//     ],
//   },
// ];
