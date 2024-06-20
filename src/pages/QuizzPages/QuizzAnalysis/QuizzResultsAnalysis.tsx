import { useEffect, useState } from "react";
import { Option, Question } from "../../../interface/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattery2,
  faBattery4,
  faChartCandlestick,
  faFire,
  faMobileIphone,
  faUser,
} from "@fortawesome/pro-solid-svg-icons";

type Props = {
  currentQuestion: Question;
  handleNextQuestion: (option?: Option[]) => void;
};

const QuizzResultsAnalysis = ({
  currentQuestion,
  handleNextQuestion,
}: Props) => {
  const bmi = 40;
  const [currentBmiPosition, setCurrentBmiPosition] = useState(0);
  const bmiPosition = ((bmi - 15) / (45 - 15)) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentBmiPosition(bmiPosition);
    }, 100);
    return () => clearTimeout(timer);
  }, [bmiPosition]);

  return (
    <section className="flex flex-col items-center justify-center mt-7 w-full h-full">
      <div id="title" className="w-82">
        <h2 className="text-2xl font-bold text-center">
          O seu relatório inicial está pronto, veja só!
        </h2>
      </div>

      <div
        id="mainCard"
        className="bg-white p-6 m-5 rounded-lg shadow-md w-86 max-w-md"
      >
        <div id="titles" className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold w-42">
            Índice de Massa Corporal (IMC)
          </h2>
          <div className="p-2 bg-transparent border-2 border-gray-400	 rounded-xl">
            <p className="text-sm text-center">Ficha de: <br /> Wellingtom</p>
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
            style={{ left: `${currentBmiPosition}%` }}
          >
            <div className={`bg-gray-700 text-white text-xs rounded py-1 px-2`}>
              {bmi.toFixed(2)}%
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
        <div className="flex flex-col justify-around">
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faUser}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p>
              Body type: <br /> <span className='font-bold text-gray-600'>Mesomorph</span>
            </p>
          </div>
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faMobileIphone}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p>
              Lifestyle: <br /> <span className='font-bold text-gray-600'>Sedentary</span>
            </p>
          </div>
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faChartCandlestick}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p>
              Fitness level: <br /> <span className='font-bold text-gray-600'>Intermediate</span>
            </p>
          </div>
          <div className="flex items-start mb-3">
            <FontAwesomeIcon
              icon={faBattery4}
              className="w-6 h-6 mr-2 p-3 bg-red-100 rounded text-red-600"
            />
            <p className=''>
              Metabolism: <br /> <span className='font-bold text-gray-600'>Moderate, challenging to stay trim</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src="../../../src/assets/images/woman/results/l5gitrxzui9bjsgeixl5.webp"
            alt="Body Type Image"
            className="w-24 h-64 object-cover"
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
