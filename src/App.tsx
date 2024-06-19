import { useState } from "react";
import Header from "./components/Header";
import QuizzQuestionMultiChoice from "./pages/QuizzPages/QuizzType/QuizzQuestionMultiChoice";
import QuizzQuestionClassic from "./pages/QuizzPages/QuizzType/QuizzQuestionClassic";
import QuizzInfo from "./pages/QuizzPages/QuizzInfo/QuizzInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import { questionKeto } from "./services/questionsOptions";
import QuizzCalculation from './pages/QuizzPages/QuizzIMC/QuizzCalculations';

function App() {
  const [progressPercentage, setProgressPercentage] = useState<number>(5);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [personalizedAnswers, setPersonalizedAnswers] = useState([]);

  const currentQuestion = questionKeto.find(
    (question) => question.order === currentQuestionNumber
  );

  const handleNextQuestion = () => {
    setProgressPercentage((prev) => prev + 5);
    setCurrentQuestionNumber((prev) => prev + 1);
  };

  if (!currentQuestion) {
    return (
      <section className="flex mt-24 justify-center items-center h-96 text-6xl">
        <FontAwesomeIcon icon={faSpinnerThird} spin className="text-red-400" />
      </section>
    );
  }

  return (
    <>
      {currentQuestion.type !== "info" &&
        currentQuestion.type !== "landingPage" && (
          <Header progressPercentage={progressPercentage} />
        )}

      {currentQuestion.type === "classic" && (
        <QuizzQuestionClassic
          currentQuestion={currentQuestion}
          currentQuestionNumber={currentQuestionNumber}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "multiChoice" && (
        <QuizzQuestionMultiChoice
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "info" && (
        <QuizzInfo
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "calculation" && (
        <QuizzCalculation
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "results-analysis" && (
        <QuizzQuestionMultiChoice
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "results-promises" && (
        <QuizzQuestionMultiChoice
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "awaiting" && (
        <QuizzQuestionMultiChoice
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "landingPage" && (
        <QuizzQuestionMultiChoice
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
      )}
    </>
  );
}

export default App;
