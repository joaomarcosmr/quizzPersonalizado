import React from "react";
import { questionKeto } from "../../services/questionsOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import QuizzQuestionMultiChoice from './QuizzQuestionMultiChoice';

type Props = {
  currentQuestionNumber: number;
  handleNextQuestion: React.Dispatch<React.SetStateAction<void>>;
};

const QuizzQuestionClassic = ({
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

  return (
    <>
      <QuizzQuestionClassic
        currentQuestionNumber={currentQuestionNumber}
        handleNextQuestion={handleNextQuestion}
      />
      <QuizzQuestionMultiChoice
        currentQuestionNumber={currentQuestionNumber}
        handleNextQuestion={handleNextQuestion}
      />
    </>
  );
};

export default QuizzQuestionClassic;
