import { useState } from "react";
import Header from "./components/Header";
import QuizzQuestionsClassic from "./pages/QuizzPages/QuizzQuestionClassic";
import QuizzQuestionMultiChoice from './pages/QuizzPages/QuizzQuestionMultiChoice';

function App() {
  const [progressPercentage, setProgressPercentage] = useState<number>(5);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [personalizedAnswers, setPersonalizedAnswers] = useState([]);

  const handleNextQuestion = () => {
    setProgressPercentage((prev) => prev + 5)
    setCurrentQuestionNumber((prev) => prev + 1)
  };

  return (
    <>
      <Header progressPercentage={progressPercentage} />
      <QuizzQuestionsClassic
        currentQuestionNumber={currentQuestionNumber}
        handleNextQuestion={handleNextQuestion}
      />
      <QuizzQuestionMultiChoice
        currentQuestionNumber={currentQuestionNumber}
        handleNextQuestion={handleNextQuestion}
      />
    </>
  );
}

export default App;
