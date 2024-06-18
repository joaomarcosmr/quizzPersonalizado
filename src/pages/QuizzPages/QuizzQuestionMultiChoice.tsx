import React from "react";
import { questionKeto } from "../../services/questionsOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";

type Props = {
  currentQuestionNumber: number;
  handleNextQuestion: () => void; // Ajustado para função com retorno void
};

const QuizzQuestionMultiChoice = ({
  currentQuestionNumber,
  handleNextQuestion,
}: Props) => {
  const currentQuestion = questionKeto.find(
    (question) => question.order === currentQuestionNumber
  );

  if (!currentQuestion) {
    return (
      <section className="flex mt-24 justify-center items-center h-96 text-6xl">
        <FontAwesomeIcon icon={faSpinnerThird} spin className="text-red-400" />
      </section>
    );
  }

  const handleCircle = (): void => {};

  return (
    <section className="flex flex-col items-center justify-center mt-7 gap-6 w-full h-full">
      <div id="title">
        <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>
      </div>

      <div
        id="questionsClassic"
        className="flex flex-col items-center w-full flex-1" // Ajuste para ocupar toda a altura disponível
      >
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            id={`optionClassic${index + 1}`}
            className={`flex items-center w-80 p-2 m-2 h-20 gap-2
            text-md font-medium text-left 
            bg-gray-100 rounded-lg hover:bg-gray-100 shadow-lg 
            border-b-4 border-r-4 ${
              option ? "border-gray-300" : "border-red-400"
            }
            hover:border-b-4 hover:border-r-4 hover:border-red-400`}
            onClick={() => handleCircle()}
          >
            {option.image && (
              <img src={option.image} alt={option.text} className="w-16 h-16" />
            )}
            {option.text}
          </button>
        ))}
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            id={`optionClassic${index + 1}`}
            className={`flex items-center w-80 p-2 m-2 h-20 gap-2
            text-md font-medium text-left 
            bg-gray-100 rounded-lg hover:bg-gray-100 shadow-lg 
            border-b-4 border-r-4 ${
              option ? "border-gray-300" : "border-red-400"
            }
            hover:border-b-4 hover:border-r-4 hover:border-red-400`}
            onClick={() => handleCircle()}
          >
            {option.image && (
              <img src={option.image} alt={option.text} className="w-16 h-16" />
            )}
            {option.text}
          </button>
        ))}
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, white)",
          position: "sticky",
          bottom: "0px",
          height: '150px',
        }}
      >
        <button
          className={`flex items-center justify-center 
          text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7
          bg-red-400 rounded-lg hover:bg-red-400 shadow-lg 
          border-b-4 border-r-4 border-red-500 text-white font-bold
          hover:border-b-4 hover:border-r-4 hover:border-red-700`}
          onClick={() => handleNextQuestion()}
        >
          Continuar
        </button>
      </div>
    </section>
  );
};

export default QuizzQuestionMultiChoice;
