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
import pizzaEmoji from "../assets/images/pizzaEmoji.webp";
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
import escaladaEmoji from "../assets/images/escaladaEmoji.webp";
import dedoPraCimaEmoji from "../assets/images/dedoPraCimaEmoji.webp";
import pensativoEmoji from "../assets/images/pensativoEmoji.webp";

export const questionOptions: Question[] = [
  {
    order: 1,
    question: "Jejum intermitente para mulheres na menopausa",
    type: "start",
    options: [
      { image: mulher1829, text: "45 a 50" }, // imagens do site
      { image: mulher3039, text: "51 a 55" },
      { image: mulher4049, text: "56 a 60" },
      { image: mulher50plus, text: "61+" },
    ],
  },
  {
    order: 2,
    type: "info",
    info: [
      {
        image: inicialImage,
        title: "Mais de 34 mil mulheres",
        description1:
          "Conheceram esse método de jejum com esse aplicativo!",
      },
    ],
  },
  {
    order: 3,
    question: "Qual é o seu objetivo?",
    type: "multiChoice",
    options: [
      { image: cansadoEmoji, text: "Perder peso" },
      { image: tedioEmoji, text: "Previnir problemas cardíacos" },
      { image: sorrisoEmoji, text: "Definir e modelar o corpo" },
      { image: sorrisoOculosEmoji, text: "Alíviar o estresse" },
    ],
  },
  {
    order: 4,
    question: "Escolha o seu tipo de corpo",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Médio" },
      { image: hangLoseEmoji, text: "Flácido" },
      { image: strongEmoji, text: "Quilinhos extras" },
    ],
  },
  {
    order: 5,
    question:
      "Escolha o tipo de corpo que você deseja ter",
    type: "classic",
    options: [
      { image: appleEmoji, text: "Em forma" },
      { image: strongEmoji, text: "Atlético" },
      { image: saladaEmoji, text: "Definido" },
    ],
  },
  {
    order: 6,
    question:
      "Escolha as áreas que você quer focar",
    type: "classic",
    options: [
      { image: cansado2Emoji, text: "Diminuir abdômen" },
      { image: cansadoEmoji, text: "Glúteos" },
      { image: sorrisoEmoji, text: "Seios" },
      { image: sorrisoOculosEmoji, text: "Pernas" },
    ],
  },
  {
    order: 7,
    question:
      "Qual foi a última vez que você ficou feliz com o seu peso?",
    type: "classic",
    options: [
      { image: fireEmoji, text: "Menos de um ano atrás" },
      { image: tedioEmoji, text: "1 ou 2 anos atrás" },
      { image: saladaEmoji, text: "Mais de 3 anos atrás" },
      { image: appleEmoji, text: "Nunca" },
    ],
  },
  {
    order: 8,
    question: "Como a menopausa afetou o seu peso?",
    type: "multiChoice",
    options: [
      { image: strongEmoji, text: "Reducao do metabolismo" },
      { image: pensativoEmoji, text: "Aumento do apetite e desejos por comida gordurosa" },
      { image: tedioEmoji, text: "Ganho de peso apesar dos hábitos saudáveis" },
      { image: tedioEmoji, text: "Sem alteracoes significativas" },
      { image: tedioEmoji, text: "Não sei" },
    ],
  },
  {
    order: 9,
    type: "info",
    info: [
      {
        image: terraNoticiaImage, // pesquisa menopausa
        title:
          "A menopausa geralmente leva ao ganho de peso",
        description1:
          "Estudos revelam que 90% das mulheres na menopausa ganham peso ou têm mais dificuldade para perder peso em comparação com os anos da pré-menopausa*",
      },
    ],
  },
  {
    order: 10,
    type: "info",
    info: [
      {
        image: terraNoticiaImage, // pesquisa menopausa
        title:
          "Mas a boa noticia é que existe uma solucao",
        description1:
        "Estudos mostram que o jejum intermitente adaptado para sua rotina pode te fazer perder peso",
        description2:
        "E diferente dos demais, voce nao precisa passar fome, nem parar de comer sua pizza preferida. Pois é totalmente flexivel e possível!"
      },
    ],
  },
  {
    order: 11,
    question: "Voce sentiu algum sintoma da menopausa?",
    type: "multiChoice",
    options: [
      { image: sorrisoPreocupadoEmoji, text: "Ondas de calor" },
      { image: sorrisoPreocupadoEmoji, text: "Suor noturno" },
      { image: sorrisoPreocupadoEmoji, text: "Alteracoes de humor" },
      { image: sorrisoPreocupadoEmoji, text: "Ganho de peso" },
      { image: sorrisoPreocupadoEmoji, text: "Insonia" },
      { image: sorrisoPreocupadoEmoji, text: "Cansaco" },
      { image: sorrisoPreocupadoEmoji, text: "Dores articulares" },
    ],
  },
  {
    order: 12,
    type: "info",
    info: [
      {
        image: terraNoticiaImage, // pesquisa menopausa
        title:
          "Está tudo bem, é normal!",
        description1:
        "85% das mulheres experimentam algum tipo de sintoma da menopausa...",
        description2:
        "O jejum intermitente consegue atuar na solucao desses problemas! Pois além de benefícios de peso, também vai realizar com que seu corpo renove suas células velhas e traga novas células cheias de energia."
      },
    ],
  },
  {
    order: 13,
    question: "Como voce descreveria as suas emocoes durante a menopausa?",
    type: "multiChoice",
    options: [
      { image: fireEmoji, text: "Flutuacao de humor e desafios emocionais" },
      { image: fireEmoji, text: "Ansiedade e estresse" },
      { image: fireEmoji, text: "Irritabilidade e raiva" },
      { image: fireEmoji, text: "Sentimentos de tristeza ou depressao" },
      { image: fireEmoji, text: "Bem-estar emocional razoavel" },
    ],
  },
  {
    order: 14,
    type: "info",
    info: [
      {
        image: terraNoticiaImage, // pesquisa menopausa
        title:
          "Mudanças nos seus hormônios afetam a sua saúde mental",
        description1:
        "O Penn Ovarian Aging Study observou um aumento de quatro vezes na depressão entre mulheres durante a transição para a menopausa. O jejum intermitente pode ajudar nas alterações de humor durante a menopausa, promovendo o equilíbrio hormonal e reduzindo os níveis de inflamação no corpo.",
      },
    ],
  },
  {
    order: 15,
    type: "info",
    info: [
      {
        image: terraNoticiaImage, // pesquisa menopausa
        title:
          "O seu perfil é perfeito para o nosso programa de emagrecimento!",
        description1:
        "FastEasy foi criado pensando em você. Então, vamos começar e aprender mais sobre você, para que possamos fazer o seu plano.",
      },
    ],
  },
  {
    order: 16,
    question: "A que horas você costuma tomar café da manhã?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Antes das 7h da manhã" },
      { image: pizzaEmoji, text: "Após as 7h da manhã" },
      { image: pizzaEmoji, text: "Entre as 9h e as 11h" },
      { image: pizzaEmoji, text: "Geralmente, eu pulo o café" },
    ],
  },
  {
    order: 17,
    question: "E você almoça?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Antes das 13h" },
      { image: pizzaEmoji, text: "Entre as 13h e as 14h" },
      { image: pizzaEmoji, text: "Entre as 14h e as 16h" },
      { image: pizzaEmoji, text: "Geralmente, eu não almoco" },
    ],
  },
  {
    order: 18,
    question: "E a que horas você janta?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Antes das 16h" },
      { image: pizzaEmoji, text: "Entre as 16h e as 19h" },
      { image: pizzaEmoji, text: "Após as 19h" },
      { image: pizzaEmoji, text: "Geralmente, eu não janto" },
    ],
  },
  {
    order: 19,
    question: "Você prefere cozinhar em casa ou comer fora?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Geralmente eu cozinho em casa" },
      { image: pizzaEmoji, text: "Geralmente, eu como fora" },
      { image: pizzaEmoji, text: "Gosto das duas coisas" },
    ],
  },
  {
    order: 20,
    question: "O que você acha de fazer jejum durante todo o fim de semana?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Sem problemas" },
      { image: pizzaEmoji, text: "Eu consigo, certo!" },
      { image: pizzaEmoji, text: "Sem chances!" },
    ],
  },
  {
    order: 21,
    question: "Qual a sua programacao de treinos?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "3 a 5 vezes por semana" },
      { image: pizzaEmoji, text: "1 a 2 treinos por semana" },
      { image: pizzaEmoji, text: "Nao tenho o habito de treinar" },
    ],
  },
  {
    order: 22,
    question: "Qual é sua carga de trabalho?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Das 8 as 18h" },
      { image: pizzaEmoji, text: "Turno da noite" },
      { image: pizzaEmoji, text: "É bastante flexivel" },
      { image: pizzaEmoji, text: "Nao trabalho mais" },
    ],
  },
  {
    order: 23,
    question: "Qual é o seu nível de atividade no trabalho?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Bastante inativa" },
      { image: pizzaEmoji, text: "Trabalho Físico / muito ativo" },
      { image: pizzaEmoji, text: "Um pouco dos dois" },
    ],
  },
  {
    order: 24,
    question: "Você fica sem fôlego após subir um lance de escadas?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Fico sem folego e nao consigo falar" },
      { image: pizzaEmoji, text: "Fico um pouco sem ar, mas consigo falar" },
      { image: pizzaEmoji, text: "Me sinto ok após uma subida" },
      { image: pizzaEmoji, text: "Eu poderia subir varios lances tranquilamente" },
    ],
  },
  {
    order: 25,
    question: "Por quanto tempo voce costuma caminhar um dia comum?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Menos de 20 minutos" },
      { image: pizzaEmoji, text: "De 20 a 60 minutos" },
      { image: pizzaEmoji, text: "Mais de 60 minutos" },
    ],
  },
  {
    order: 26,
    question: "Quanta água voce bebe diariamente?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Nada. Eu bebo café e chá" },
      { image: pizzaEmoji, text: "Cerca de 2 copos (500ml)" },
      { image: pizzaEmoji, text: "De 2 a 6 copos (0,5 - 1,5l)" },
      { image: pizzaEmoji, text: "Muita. Provavelmente mais do que 6 copos." },
    ],
  },
  {
    order: 27,
    question: "Quanta água voce bebe diariamente?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Pouco descanso (menos de 5 horas)" },
      { image: pizzaEmoji, text: "Durmo um pouco (5-6 horas)" },
      { image: pizzaEmoji, text: "Um bom descanso (7-8 horas)" },
      { image: pizzaEmoji, text: "Sou especialista em dormir (mais de 8 horas)" },
    ],
  },
  {
    order: 28,
    question: "Voce faz uso de algum remédio?",
    type: "multiChoice",
    options: [
      { image: pizzaEmoji, text: "Vitaminas" },
      { image: pizzaEmoji, text: "Hormonios" },
      { image: pizzaEmoji, text: "Antibioticos" },
      { image: pizzaEmoji, text: "Nenhum dos mencionados" },
    ],
  },
  {
    order: 29,
    question: "Voce tem algum problema sério nas costas?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Sim" },
      { image: pizzaEmoji, text: "Nao" },
    ],
  },
  {
    order: 30,
    question: "Maus hábitos",
    type: "multiChoice",
    options: [
      { image: pizzaEmoji, text: "Nao descanso o suficiente" },
      { image: pizzaEmoji, text: "Gosto de chocolates e doces" },
      { image: pizzaEmoji, text: "Refri é o meu melhor amigo" },
      { image: pizzaEmoji, text: "Eu como muita comida salgada" },
      { image: pizzaEmoji, text: "Gosto de beliscar a noite" },
      { image: pizzaEmoji, text: "Nenhum dos mencionados" },
    ],
  },
  {
    order: 31,
    question: "Escolha acontecimentos da vida que levaram ao ganho de peso",
    type: "multiChoice",
    options: [
      { image: pizzaEmoji, text: "Casamento ou relacionamento" },
      { image: pizzaEmoji, text: "Gravidez" },
      { image: pizzaEmoji, text: "Trabalho ou vida familiar" },
      { image: pizzaEmoji, text: "Estresse ou saúde mental" },
      { image: pizzaEmoji, text: "Remédio ou distúrbio mental" },
      { image: pizzaEmoji, text: "Nenhum dos mencionados" },
    ],
  },
	{
    order: 32,
    question: "O que você sabe sobre o jejum intermitente?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Só de nome" },
      { image: pizzaEmoji, text: "Algumas coisas" },
      { image: pizzaEmoji, text: "Tenho experiencia em jejum" },
    ],
  },
	{
    order: 33,
    question: "Qual é a sua animação para perder uns quilinhos a mais?",
    type: "classic",
    options: [
      { image: pizzaEmoji, text: "Eu só quero saber mais sobre jejum" },
      { image: pizzaEmoji, text: "Quero tentar perder um pouco de peso" },
      { image: pizzaEmoji, text: "Quero de verdade perder o máximo de peso possível" },
    ],
  },

  {
    order: 34,
    type: "calculation",
    calculation: {
      title: "Qual sua altura?",
      measure: "cm",
      measureDescription: "Insira um valor de 90 a 243cm",
      imc: IMCType.Info,
    },
  },
  {
    order: 35,
    type: "calculation",
    calculation: {
      title: "Qual seu peso?",
      measure: "kg",
      measureDescription: "Insira um valor de 25 a 300kg",
      imc: IMCType.IMCCalculation,
    },
  },
  {
    order: 36,
    type: "calculation",
    calculation: {
      title: "Qual sua meta de peso?",
      measure: "kg",
      measureDescription: "Insira um valor de 25 a 300kg",
      imc: IMCType.IMCGoal,
    },
  },
  {
		order: 37,
    type: "results-analysis",
  },
	{
		order: 38,
		type: "calculation",
		calculation: { title: "Qual seu nome?" },
	},
  {
    order: 39,
    question: "Há alguma ocasiao especial que voce deseja perder peso?",
    type: "classic",
    options: [
      { image: sorrisoEmoji, text: "Férias" },
      { image: escaladaEmoji, text: "Casamento" },
      { image: strongEmoji, text: "Evento esportivo" },
      { image: appleEmoji, text: "Ida a praia" },
      { image: appleEmoji, text: "Encontro" },
      { image: appleEmoji, text: "Reuniao da familia" },
      { image: appleEmoji, text: "Outro" },
    ],
  },
  {
		order: 40,
    type: "results-chart-promises",
  },
  {
		order: 41,
    type: "awaiting",
  },
  {
		order: 42,
    question: "Seu plano personalizado em 1 minuto",
    type: "landingPage",
  }
];

export default questionOptions;

