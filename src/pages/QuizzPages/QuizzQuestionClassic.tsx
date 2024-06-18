import React from "react";
import { questionKeto } from "../../services/questionsOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";

type Props = {
  currentQuestionNumber: number;
  handleNextQuestion: React.Dispatch<React.SetStateAction<void>>;
};

const QuizzQuestionClassic = ({ currentQuestionNumber, handleNextQuestion }: Props) => {
  const currentQuestion = questionKeto.find(question => question.order === currentQuestionNumber);

  if (!currentQuestion) {
    return (
      <section className="flex mt-24 justify-center items-center h-96 text-6xl">
        <FontAwesomeIcon icon={faSpinnerThird} spin className="text-red-400" />
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center mt-7 gap-6 w-full">
      <div id="title">
        <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>
      </div>

      <div id="questionsClassic" className="flex flex-col items-center w-full">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            id={`optionClassic${index + 1}`}
            className="flex items-center w-80 p-2 m-2 h-24
            text-md font-medium text-left 
            bg-gray-100 rounded-lg hover:bg-gray-100 shadow-lg 
            border-b-4 border-r-4 border-gray-300
            hover:border-b-4 hover:border-r-4 hover:border-red-400"
            onClick={() => handleNextQuestion()}
          >
            {option.image && (
              <img src={option.image} alt={option.text} className="w-20 h-20" />
            )}
            {option.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuizzQuestionClassic;
