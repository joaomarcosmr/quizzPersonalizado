import { useEffect, useState } from "react";
import { Option } from "../../../interface/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattery4,
  faChartCandlestick,
  faMobileIphone,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";
import {
  Biotype,
  FitnessLevel,
  IAnswers,
  Lifestyle,
  Metabolism,
} from "../../../interface/personalizedAnswers";

type Props = {
  personalizedAnswers: IAnswers;
  handleNextQuestion: (option?: Option[]) => void;
};

const QuizzResultsAnalysis = ({
  personalizedAnswers,
  handleNextQuestion,
}: Props) => {
  const Imc = parseFloat(personalizedAnswers?.IMC);
  const [currentImcPosition, setCurrentImcPosition] = useState(0);
  const ImcPosition = ((Imc - 12) / (45 - 12)) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImcPosition(ImcPosition);
    }, 100);
    return () => clearTimeout(timer);
  }, [ImcPosition]);

  return (
    <section className="flex flex-col items-center justify-center mt-7 w-full h-full">
      <div id="title" className="w-82">
        <h2 className="text-2xl font-bold text-center">
          O seu relatório inicial está pronto, veja só!
        </h2>
        <h4 className="text-center">
          Com base nele podemos montar seu plano personalizado
        </h4>
      </div>

      <div
        id="mainCard"
        className="bg-white p-6 m-5 rounded-lg shadow-md w-96 max-w-md"
      >
        <div id="titles" className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold w-42">
            Índice de Massa Corporal (IMC)
          </h2>
          <div className="p-2 bg-transparent border-2 border-gray-400	 rounded-xl">
            <p className="text-sm text-center">
              Ficha de: <br /> {personalizedAnswers?.name}
            </p>
          </div>
        </div>

        <div
          id="imcBar"
          className="relative flex flex-col justify-center items-center"
        >
          <div className="w-full bg-gray-300 mt-8 rounded-full h-3 overflow-hidden flex">
            <div
              className="h-full text-center text-white"
              style={{
                width: "25%",
                backgroundImage:
                  "linear-gradient(to right, #97DAFE 0%, #B6F4AC 100%)",
                transition: "0.5s ease-in-out",
              }}
            ></div>
            <div
              className="h-full text-center text-white"
              style={{
                width: "25%",
                backgroundImage:
                  "linear-gradient(to right, #B6F4AC 0%, #E7EE89 100%)",
                transition: "0.5s ease-in-out",
              }}
            ></div>
            <div
              className="h-full text-center text-white"
              style={{
                width: "25%",
                backgroundImage:
                  "linear-gradient(to right, #E7EE89 0%, #FAB775 100%)",
              }}
            ></div>
            <div
              className="h-full text-center text-white"
              style={{
                width: "25%",
                backgroundImage:
                  "linear-gradient(to right, #FAB775 0%, #FC826F 100%)",
                transition: "0.5s ease-in-out",
              }}
            ></div>
          </div>
          <div className="w-full flex justify-between mt-2 px-2">
            <span className="font-medium text-gray-400 text-sm">Magreza</span>
            <span className="font-medium text-gray-400 text-sm">Normal</span>
            <span className="font-medium text-gray-400 text-sm">Sobrepeso</span>
            <span className="font-medium text-gray-400 text-sm">Obesidade</span>
          </div>
          <div
            className={`absolute top-[0.1rem] left-0 transform flex flex-col items-center transition-all duration-1000`}
            style={{ left: `${currentImcPosition}%` }}
          >
            <div className={`bg-gray-700 text-white text-xs rounded py-1 px-2`}>
              {Imc.toFixed(2)}%
            </div>
            <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full mt-1"></div>
          </div>
        </div>

        <div
          className="mt-4 p-4 
          bg-yellow-100 
          rounded-md text-sm"
        >
          <p>
            <strong>Riscos de IMC não saudável:</strong> Pressão alta, aumento
            do risco de ataque cardíaco, derrame, diabetes tipo 2, dor crônica
            nas costas e nas articulações.
          </p>
        </div>
      </div>

      <div
        id="additionalInfoCard"
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex"
      >
        <div className="flex w-72 flex-col justify-around">
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faUser}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p>
              Biotipo: <br />{" "}
              <span className="font-bold text-gray-600">
                {personalizedAnswers.biotype === Biotype.Ectomorph
                  ? "Ectomorfo"
                  : Biotype.Endomorph
                  ? "Endomorfo"
                  : "Mesomorfo"}
              </span>
            </p>
          </div>
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faMobileIphone}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p>
              Estilo de vida: <br />{" "}
              <span className="font-bold text-gray-600">
                {personalizedAnswers.lifestyle === Lifestyle.Active
                  ? "Ativa"
                  : Lifestyle.Normal
                  ? "Um pouco ativa"
                  : "Sedentária"}
              </span>
            </p>
          </div>
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faChartCandlestick}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p>
              Nível Fitness: <br />{" "}
              <span className="font-bold text-gray-600">
                {personalizedAnswers.fitnessLevel === FitnessLevel.Good
                  ? "Saudável"
                  : FitnessLevel.Normal
                  ? "Normal"
                  : "Baixo"}
              </span>
            </p>
          </div>
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faBattery4}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p className="">
              Metabolismo: <br />{" "}
              <span className="font-bold text-gray-600">
                {personalizedAnswers.metabolism === Metabolism.Fast
                  ? "Rápido"
                  : Metabolism.Average
                  ? "Médio"
                  : "Lento"}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src={personalizedAnswers?.bodyImage?.image}
            alt={personalizedAnswers?.bodyImage?.alt}
            className="w-72 h-64 object-cover"
          />
        </div>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, white)",
          position: "sticky",
          bottom: "0px",
          height: "50px",
        }}
      >
        <button
          className={`flex items-center justify-center text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7 rounded-lg shadow-lg border-b-4 border-r-4 text-white font-bold hover:bg-red-400 bg-red-400 border-red-500 hover:border-red-700`}
          onClick={() => handleNextQuestion()}
        >
          Continuar
        </button>
      </div>
    </section>
  );
};

export default QuizzResultsAnalysis;
