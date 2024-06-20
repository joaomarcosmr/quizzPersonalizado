import { useEffect, useRef } from 'react';
import CustomChart from "../../../components/CustomChart";
import { Option, Question } from "../../../interface/questions";

type Props = {
  currentQuestion: Question;
  handleNextQuestion: (option?: Option[]) => void;
};

const QuizzChartPlan = ({ currentQuestion, handleNextQuestion }: Props) => {
  const data = [12, 19, 3, 5, 2, 3];
  const labels = ["January", "February", "March", "April", "May", "June"];
  const title = "Monthly Sales";

  const chartRef = useRef<any>(null); // Ref para o componente de gráfico

  useEffect(() => {
    // Limpar o gráfico anterior quando os dados mudarem
    if (chartRef.current) {
      chartRef.current.chartInstance.destroy();
    }
  }, [data]); // Executa sempre que os dados mudarem

  return (
    <section className="flex flex-col items-center justify-center mt-7 w-full h-full">
      <div id="title" className="w-86 text-center">
        <h2 className="text-2xl font-bold mb-2">
          O último plano que você vai precisar para queimar todas as gorduras!
        </h2>
        <span className="text-sm">
          Nós estimamos que seus resultados serão em:
        </span>
        <p className="mt-2 text-lg text-red-700 font-bold">
          76 Kg em Outubro de 2024
        </p>
      </div>

      {/* <CustomChart ref={chartRef} data={data} labels={labels} title={title} /> */}

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
