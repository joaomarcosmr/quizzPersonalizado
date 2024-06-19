import { IMCType, Question } from "../../../interface/questions";
import { FormEvent, useState } from "react";
import IMCCalculation from './AlertsIMCFields/IMCCalculation';
import IMCGoal from './AlertsIMCFields/IMCGoal';
import IMCInfo from './AlertsIMCFields/IMCInfo';

type Props = {
  currentQuestion: Question;
  handleNextQuestion: () => void;
};

const QuizzCalculation = ({ currentQuestion, handleNextQuestion }: Props) => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [targetWeight, setTargetWeight] = useState<number>(0);

  const heightIsValid = height >= 90 && height <= 243;
  const weightIsValid = weight >= 25 && weight <= 300;

  const handlerForm = (e: FormEvent): void => {
    e.preventDefault();
  };

  const handleUserMeasures = (e: FormEvent) => {
    let { name, value } = e.target as HTMLInputElement;

    if(name === 'Info'){
      setHeight(parseInt(value))
    } else if (name === 'IMCCalculation'){
      setWeight(parseInt(value))
    } else {
      setTargetWeight(parseInt(value))
    }
  }

  return (
    <section className="flex flex-col items-center justify-center mt-7 gap-6 w-full h-full">
      <div id="title">
        <h2 className="text-2xl font-bold">
          {currentQuestion?.calculation?.title}
        </h2>
      </div>

      <div
        className="flex flex-col items-center w-full flex-1"
      >
        <form className="flex flex-col items-center" onSubmit={handlerForm}>
          <div className="relative w-52">
            <input
              type="text"
              className="w-full p-3 pr-16 border-b-2 border-gray-300 focus:outline-none font-bold text-4xl text-center"
              name={currentQuestion?.calculation?.imc}
              onChange={(e) => handleUserMeasures(e)}
            />
            <span className="absolute right-4 top-10 transform -translate-y-1/2 font-bold text-2xl text-center">
              {currentQuestion?.calculation?.measure}
            </span>
          </div>
          <span className="font-medium text-sm mt-3">
            {currentQuestion?.calculation?.measureDescription}
          </span>

          {currentQuestion?.calculation?.imc === IMCType.Info &&
            heightIsValid && (
              <IMCInfo />
            )}

          {currentQuestion?.calculation?.imc === IMCType.CalculoImc && // descricao generica de resultados de acordo com o status
            weightIsValid && (
              <IMCCalculation />
            )}

          {currentQuestion?.calculation?.imc === IMCType.CalculoMeta &&
            targetWeight && (
              <IMCGoal />
            )}

          <div
            style={{
              backgroundImage: "linear-gradient(to bottom, transparent, white)",
              position: "sticky",
              bottom: "0px",
              height: "150px",
            }}
          >
            <button
              onClick={handleNextQuestion}
              className="flex items-center justify-center text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7 bg-red-400 rounded-lg hover:bg-red-400 shadow-lg border-b-4 border-r-4 border-red-500 text-white font-bold hover:border-b-4 hover:border-r-4 hover:border-red-700"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuizzCalculation;
