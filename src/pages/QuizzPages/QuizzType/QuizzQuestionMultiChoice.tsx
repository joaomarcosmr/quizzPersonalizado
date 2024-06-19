import { useState } from "react";
import { questionKeto } from "../../../services/questionsOptions";
import { Option, Question } from "../../../interface/questions";

type Props = {
  currentQuestion: Question;
  handleNextQuestion: () => void;
};

const QuizzQuestionMultiChoice = ({
  currentQuestion,
  handleNextQuestion,
}: Props) => {
  const [questions, setQuestions] = useState<Question[]>(questionKeto);

  const handleCircle = (option: Option): void => {
    const updatedQuestions = questions.map((question) => ({
      ...question,
      options: question?.options?.map((opt) =>
        opt === option ? { ...opt, isChoosed: !opt.isChoosed } : opt
      ),
    }));
    setQuestions(updatedQuestions);
  };

  return (
    <section className="flex flex-col items-center justify-center mt-7 gap-6 w-full h-full">
      <div id="title">
        <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>
      </div>

      <div
        id="questionsClassic"
        className="flex flex-col items-center w-full flex-1"
      >
        {currentQuestion?.options?.map((option, index) => (
          <button
            key={index}
            id={`optionClassic${index + 1}`}
            className={`flex items-center w-80 p-2 m-2 h-20 gap-2
            text-md font-medium text-left 
            bg-gray-100 rounded-lg hover:bg-gray-100 shadow-lg 
            border-b-4 border-r-4 ${
              !option.isChoosed ? "border-gray-300" : "border-red-400"
            }
            hover:border-b-4 hover:border-r-4 hover:border-red-400`}
            onClick={() => handleCircle(option)}
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
          height: "150px",
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
