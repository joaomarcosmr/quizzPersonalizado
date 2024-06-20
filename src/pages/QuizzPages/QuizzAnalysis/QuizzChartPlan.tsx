import "chart.js/auto";
import { Option } from "../../../interface/questions";
import { IAnswers } from "../../../interface/personalizedAnswers";
import ChartComponent from "../../../components/ChartResults";
import { useEffect } from "react";

type Props = {
  personalizedAnswers: IAnswers;
  handleNextQuestion: (option?: Option[]) => void;
};

const QuizzChartPlan = ({ personalizedAnswers, handleNextQuestion }: Props) => {
  const currentDate = new Date();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const currentMonthName = months[currentDate.getMonth()];

  const calcWeightDifference = personalizedAnswers.weight - personalizedAnswers.targetWeight
  
  let weightDifferenceToLose = false;
  let weightDifferenceToGain = false;

  calcWeightDifference > 0 ? weightDifferenceToLose = true : weightDifferenceToGain = true
  
  let howManyMonthsNeedToAchieve;

  useEffect(() => {
    if(calcWeightDifference < 10){
      howManyMonthsNeedToAchieve = 3
    } else if (calcWeightDifference >= 10 && calcWeightDifference < 20){
      howManyMonthsNeedToAchieve = 4
    } else {
      howManyMonthsNeedToAchieve = 6
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center mt-7 w-96 h-full relative">
      <div
        id="title"
        className="w-86 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="text-2xl w-80 font-bold text-center">
          <span className="text-red-700">{personalizedAnswers.name}</span>, aqui
          está nossa previsão pra você queimar gorduras!
        </h2>
        <span className="text-sm">
          Nós estimamos que seu objetivo será alcançado em:
        </span>
        <p className="text-lg text-red-700 font-bold">
          {`${personalizedAnswers.targetWeight} Kg em Setembro de 2024`}
        </p>
      </div>

      <ChartComponent personalizedAnswers={personalizedAnswers} />

      <span className="text-xs mt-4 font-medium text-gray-400 w-80 text-center">
        *Com base nos dados dos usuários que registram seu progresso no
        aplicativo. Consulte primeiro seu médico. O gráfico é uma ilustração não
        personalizada e os resultados podem variar.
      </span>

      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, white)",
          position: "sticky",
          bottom: "0px",
          height: "50px",
        }}
      >
        <button
          className="flex items-center justify-center text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7 rounded-lg shadow-lg border-b-4 border-r-4 text-white font-bold hover:bg-red-400 bg-red-400 border-red-500 hover:border-red-700"
          onClick={() => handleNextQuestion()}
        >
          Continuar
        </button>
      </div>
    </section>
  );
};

export default QuizzChartPlan;
