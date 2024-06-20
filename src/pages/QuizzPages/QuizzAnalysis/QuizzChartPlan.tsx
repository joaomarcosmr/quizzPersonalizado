import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Option, Question } from "../../../interface/questions";

type Props = {
  currentQuestion: Question;
  handleNextQuestion: (option?: Option[]) => void;
};

const QuizzChartPlan = ({ currentQuestion, handleNextQuestion }: Props) => {
  const data = {
    labels: ["Junho", "Julho", "Agosto", "Setembro"],
    datasets: [
      {
        label: "Seu Progresso",
        data: [70, 28, 15, 1],
        borderWidth: 8,
        pointBackgroundColor: "rgba(211, 211, 211, 1.0)",
        pointBorderColor: "rgba(211, 211, 211, 1.0)",
        fill: true,
        tension: 0.2,
        backgroundColor: (context) => {
          const chart = context.chart;
          const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
          gradient.addColorStop(0, "rgba(255,0,0,0.5)");
          gradient.addColorStop(0.5, "rgba(255,165,0,0.5)");
          gradient.addColorStop(1, "rgba(0,128,0,0.5)");
          return gradient;
        },
        borderColor: (context) => {
          const chart = context.chart;
          const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
          gradient.addColorStop(0, "rgba(255,0,0,1)");
          gradient.addColorStop(0.5, "rgba(255,165,0,1)");
          gradient.addColorStop(1, "rgba(0,128,0,1)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center mt-7 w-96 h-full">
      <div
        id="title"
        className="w-86 flex flex-col justify-center items-center gap-4"
      >
        <h2 className="text-2xl font-bold text-center">
          O último plano que você vai precisar para queimar todas as gorduras!
        </h2>
        <span className="text-sm">
          Nós estimamos que seus resultados serão em:
        </span>
        <p className="text-lg text-red-700 font-bold">
          76 Kg em Setembro de 2024
        </p>
      </div>

      <div className="w-96">
        <Line data={data} options={options} className="left mt-4 relative" />
      </div>

      <div
        className={`absolute top-[20.6rem] right-[-0.3rem] transform flex flex-col items-center transition-all duration-1000`}
      >
        <div className={`bg-gray-700 text-white text-xs rounded py-1 px-2`}>
          Você aqui <br /> com 76 Kg
        </div>
        <div className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full mt-1"></div>
      </div>

      <span className="text-xs font-medium text-gray-400 w-80 text-center">
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
          className={`flex items-center justify-center text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7 rounded-lg shadow-lg border-b-4 border-r-4 text-white font-bold hover:bg-red-400 bg-red-400 border-red-500 hover:border-red-700`}
          onClick={() => handleNextQuestion()}
        >
          Continuar
        </button>
      </div>
    </section>
  );
};

export default QuizzChartPlan;
