import {
  faBadgeCheck,
  faClock,
  faFire,
  faGreaterThan,
  faWeightScale,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IAnswers } from '../../../interface/personalizedAnswers';

type Props = {
  personalizedAnswers: IAnswers;
};

const QuizzLandingPage = ({personalizedAnswers}: Props) => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <section className="flex flex-col justify-center items-center">
      <div
        id="timer"
        className="bg-red-500 w-full h-16 fixed top-0 z-10 flex justify-center items-end pb-2"
      >
        <p className="text-white font-bold text-4xl flex items-center">
          {`${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
          <FontAwesomeIcon icon={faClock} className="rounded-lg p-3 text-2xl" />
        </p>
        <span className="text-white font-medium text-sm mb-2">
          Oferta por tempo limitado!
        </span>
      </div>

      <h1 className="text-2xl font-bold mb-2 mt-20 text-center">
        Personalizado pro <br /> seu biotipo!
      </h1>
      <p className="text-lg mb-8">Resultados já na primeira semana</p>

      <div className="bg-red-100 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex flex md:flex-row justify-around items-center mt-6">
          <div className="text-center  md:mb-0">
            <span className="block text-gray-500 mb-2">Agora</span>
            <img
              src={personalizedAnswers?.bodyImage?.image}
              alt="Current Body"
              className="w-48 mx-auto"
            />
          </div>

          <div className="m-2">
            <img src="../src/assets/images/seta.png" alt="goal" className='w-12 h-24' />
          </div>

          <div className="text-center md:mb-0">
            <span className="block text-gray-500 mb-2">Sua meta</span>
            <img
              src={personalizedAnswers?.bodyImage?.alt !== 'obeso' ? "../src/assets/images/woman/results/forte.webp" : "../src/assets/images/woman/results/normal.webp"}
              alt="Goal Body"
              className="w-48 mx-auto"
            />
          </div>
        </div>

        <div className="flex bg-gray-200 p-2 md:flex-row justify-around items-center">
          <div className="text-center mb-6 md:mb-0">
            <p className="text-gray-700">Gordura Corporal</p>
            <p className="text-xl font-bold mb-2">{personalizedAnswers.bodyImage.alt === "obesa" || personalizedAnswers.bodyImage.alt === "sobrepeso" ? "Alta" : "Normal"}</p>
            <p className="text-gray-700">Vida saudável</p>
            <p className="text-xl font-bold mb-4">Baixa</p>
            <div className="flex justify-center space-x-2">
              <div className="h-2 w-10 bg-green-500 rounded"></div>
              <div className="h-2 w-10 bg-green-300 rounded"></div>
              <div className="h-2 w-10 bg-green-300 rounded"></div>
            </div>
          </div>

          <div className="text-center mb-6 md:mb-0">
            <p className="text-gray-700">Gordura Corporal</p>
            <p className="text-xl font-bold mb-2">Baixa</p>
            <p className="text-gray-700">Vida saudável</p>
            <p className="text-xl font-bold mb-4">Avançada</p>
            <div className="flex justify-center space-x-2">
              <div className="h-2 w-10 bg-green-500 rounded"></div>
              <div className="h-2 w-10 bg-green-500 rounded"></div>
              <div className="h-2 w-10 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
        <h1 className="text-3xl font-bold mb-10 mt-4">
          Seu plano está pronto!
        </h1>
        <div className="flex justify-center gap-2 text-center mb-8">
          <div>
            <FontAwesomeIcon
              icon={faFire}
              className="rounded-lg p-3 text-2xl bg-red-300"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-start">
              <p>Meta:</p>
              <p>
                <strong>{personalizedAnswers?.goalWeight}</strong>
              </p>
            </div>
          </div>
          <div className="m-1"></div>
          <div>
            <FontAwesomeIcon
              icon={faWeightScale}
              className="rounded-lg p-3 text-2xl bg-red-300"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-start">
              <p>Peso Desejado:</p>
              <p>
                <strong>{personalizedAnswers?.targetWeight} Kg</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <label className="flex justify-between items-center">
              <span>1 Semana de Teste</span>
              <span className="font-bold">R$9,99</span>
            </label>
            <p className="text-gray-500 text-sm">R$49,90</p>
          </div>
          <div className="border p-4 rounded-lg bg-red-100">
            <label className="flex justify-between items-center">
              <span className="font-bold text-red-600">Plano de 4 semanas</span>
              <span className="font-bold text-red-600">R$8,56</span>
            </label>
            <p className="text-gray-500 text-sm">R$139,70</p>
          </div>
          <div className="border p-4 rounded-lg">
            <label className="flex justify-between items-center">
              <span>Plano de 12 semanas</span>
              <span className="font-bold">R$4,27</span>
            </label>
            <p className="text-gray-500 text-sm">R$259,10</p>
          </div>
        </div>
        <div className="text-center mt-6 mb-10">
          <button className="bg-red-500 text-white py-4 px-20 mt-5 rounded-full animate-pulse">
            OBTER MEU PLANO
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mt-8 p-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          O que você vai receber?
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-2">🏋️</span>
            <div>
              <p className="font-bold">
                Análise profissional da sua aptidão física e hábitos alimentares
              </p>
              <p className="text-gray-500 text-sm">
                pour mincir et se tonifier facilement à la maison
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">⏱️</span>
            <div>
              <p className="font-bold">Exercícios de 10 a 15 minutos</p>
              <p className="text-gray-500 text-sm">
                pour obtenir une taille fine, des fesses plus rondes et des
                cuisses plus fines.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🏠</span>
            <div>
              <p className="font-bold">
                Treinamento personalizado para perder peso e tonificar o corpo
              </p>
              <p className="text-gray-500 text-sm">
                que vous pouvez faire facilement à la maison
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🍽️</span>
            <div>
              <p className="font-bold">
                Exercícios para uma cintura fina e uma postura perfeita
              </p>
              <p className="text-gray-500 text-sm">
                avec plus de 1000 délicieuses recettes pour perdre du poids
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">💡</span>
            <div>
              <p className="font-bold">
                Plano de fortalecimento e tonificação muscular para os seus
                abdominais, lombar, quadris e glúteos
              </p>
              <p className="text-gray-500 text-sm">
                pour améliorer votre mode de vie et ne pas reprendre de poids
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-l m-4 p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Des résultats qui nous rendent fiers
        </h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
        >
          <div>
            <img
              src="../src/assets/images/testimonial1.jpg"
              alt="Testimonial 1"
            />
            <p className="legend">Eun, -5 kg</p>
            <p className="text-gray-500 text-sm px-4">
              Le programme vous aide à suivre tout ce dont vous avez besoin pour
              vous aider à perdre du poids ou à le conserver, de l'eau à la
              nourriture en passant par les...
            </p>
          </div>
          <div>
            <img
              src="../src/assets/images/testimonial2.jpg"
              alt="Testimonial 2"
            />
            <p className="legend">Nom, -X kg</p>
            <p className="text-gray-500 text-sm px-4">
              Le programme vous aide à suivre tout ce dont vous avez besoin pour
              vous aider à perdre du poids ou à le conserver, de l'eau à la
              nourriture en passant par les...
            </p>
          </div>
        </Carousel>
        <div className="text-center mt-6">
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">
            En savoir plus
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg mt-4 p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Les utilisateurs aiment nos plans
        </h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <p className="font-bold">JD</p>
            <p className="text-yellow-500 text-sm">★★★★★</p>
            <p className="text-gray-500 text-sm">
              Eu nunca gostei tanto do meu bumbum! Nunca recebi tantos elogios e
              tanta atenção! É simplesmente inacreditável! Não consigo parar de
              me olhar no espelho!
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="font-bold">Joelle</p>
            <p className="text-yellow-500 text-sm">★★★★★</p>
            <p className="text-gray-500 text-sm">
              Ok, quem quer que tenha criado isso, eu agradeço muito! Isso está
              me deixando em forma e acho que se eu fizer isso por todo o mês ou
              talvez apenas por essa semana inteira, com certeza vou perder
              alguns quilos e queimar gordura abdominal. Quero dizer, é um pouco
              cansativo, mas em qualquer lugar onde tenham bons exercícios, eles
              vão te cansar e você ficará cansado depois. Mas eu recebo apoio da
              minha mãe porque fazemos juntos, então é divertido para nós.
              Obrigado e para você que está lendo isso, tenha um ótimo dia.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="font-bold">Firdevs1945</p>
            <p className="text-yellow-500 text-sm">★★★★★</p>
            <p className="text-gray-500 text-sm">
              Great app especially for beginners! Keeps me motivated and
              accountable! I also don't have to think about what exercise I need
              to do! Just gotta stay ready. Wish it had stretching routines tho!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-red-500 border-solid m-4 flex flex-col items-center justify-center rounded- shadow-lg p-4">
        <FontAwesomeIcon
          icon={faBadgeCheck}
          className="rounded-lg p-3 text-2xl w-8 mb-3 bg-red-300"
        />
        <h2 className="text-xl font-bold text-center mb-4">
          Garantia de devolução do dinheiro em 7 dias
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Nós acreditamos que nosso plano pode funcionar para você e você verá
          resultados visíveis em 4 semanas! Estamos tão confiantes que até
          estamos dispostos a devolver seu dinheiro se você não ver resultados
          visíveis e puder demonstrar que seguiu nosso plano.
        </p>
        <p className="text-gray-500 text-sm">
          Pour en savoir plus sur les limitations applicables, consultez notre{" "}
          <a href="#" className="text-blue-500">
            politique de remboursement
          </a>
          .
        </p>
        <p className="text-gray-500 text-xs mt-4">
          BetterMe International Limited | Themistokli Dervi 39, 1st floor,
          Office 104, 1066, Nicosia, Cyprus
        </p>
      </div>
    </section>
  );
};

export default QuizzLandingPage;
