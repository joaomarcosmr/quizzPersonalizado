import { useState } from "react";
import Header from "./components/Header";
import QuizzQuestionMultiChoice from "./pages/QuizzPages/QuizzType/QuizzQuestionMultiChoice";
import QuizzQuestionClassic from "./pages/QuizzPages/QuizzType/QuizzQuestionClassic";
import QuizzInfo from "./pages/QuizzPages/QuizzInfo/QuizzInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinnerThird } from "@fortawesome/pro-solid-svg-icons";
import { questionOptions } from "./services/questionsOptions";
import QuizzCalculation from "./pages/QuizzPages/QuizzIMC/QuizzCalculations";
import { IAnswers } from "./interface/personalizedAnswers";
import { Option, Question } from "./interface/questions";
import QuizzResultsAnalysis from "./pages/QuizzPages/QuizzAnalysis/QuizzResultsAnalysis";
import QuizzChartPlan from "./pages/QuizzPages/QuizzAnalysis/QuizzChartPlan";
import QuizzGenerating from "./pages/QuizzPages/QuizzGenerating/QuizzGenerating";
import QuizzStart from "./pages/QuizzStart/QuizzStart";
import QuizzLandingPage from "./pages/QuizzPages/QuizzLandingPage/QuizzLandingPage";

function App() {
  const [progressPercentage, setProgressPercentage] = useState<number>(5);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [personalizedAnswers, setPersonalizedAnswers] = useState<IAnswers[]>(
    []
  );

  const currentQuestion: Question | undefined = questionOptions.find(
    (question) => question.order === currentQuestionNumber
  );

  const handleNextQuestion = (option?: Option | Option[]) => {
    setProgressPercentage((prev) => prev + 5);
    setCurrentQuestionNumber((prev) => prev + 1);

    if (currentQuestion?.save && currentQuestion.name && option) {
      const name = currentQuestion.name as string;
      setPersonalizedAnswers((prevInfo) => ({
        ...prevInfo,
        [name]: Array.isArray(option) ? option : option.text,
      }));
    }
  };

  if (!currentQuestion) {
    return (
      <section className="flex mt-24 justify-center items-center h-96 text-6xl">
        <FontAwesomeIcon icon={faSpinnerThird} spin className="text-red-400" />
      </section>
    );
  }
	
	console.log(personalizedAnswers)

  return (
    <>
      {(currentQuestion.type === "classic" ||
        currentQuestion.type === "multiChoice" ||
        currentQuestion.type === "calculation") && (      
				<Header progressPercentage={progressPercentage} />
      )}

      {currentQuestion.type === "start" && (
        <QuizzStart
          currentQuestion={currentQuestion}
          handleNextQuestion={handleNextQuestion}
        />
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
          setPersonalizedAnswers={setPersonalizedAnswers}
        />
      )}

      {currentQuestion.type === "results-analysis" && (
        <QuizzResultsAnalysis
          personalizedAnswers={personalizedAnswers}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "results-chart-promises" && (
        <QuizzChartPlan
          personalizedAnswers={personalizedAnswers}
          handleNextQuestion={handleNextQuestion}
        />
      )}

      {currentQuestion.type === "awaiting" && (
        <QuizzGenerating handleNextQuestion={handleNextQuestion} />
      )}

      {currentQuestion.type === "landingPage" && (
        <QuizzLandingPage personalizedAnswers={personalizedAnswers} />
      )}
    </>
  );
}

export default App;