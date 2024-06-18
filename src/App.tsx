import { useState } from "react";
import Header from "./components/Header";
import Stater from "./pages/Home/Starter";
import QuizzQuestionsClassic from "./pages/QuizzPages/QuizzQuestionClassic";

function App() {
  const [progressPercentage, setProgressPercentage] = useState<number>(5);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [personalizedQuestions, setPersonalizedQuestions] = useState([]);

  const handleNextQuestion = () => {
    setProgressPercentage((prev) => prev + 5)
    setCurrentQuestionNumber((prev) => prev + 1)
  };

  return (
    <>
      {/* <Stater /> */}
      <Header progressPercentage={progressPercentage} />
      <QuizzQuestionsClassic
        currentQuestionNumber={currentQuestionNumber}
        handleNextQuestion={handleNextQuestion}
      />
    </>
  );
}

export default App;
