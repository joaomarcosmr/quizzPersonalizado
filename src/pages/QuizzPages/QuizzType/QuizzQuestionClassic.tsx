import { useEffect } from 'react';
import { Option, Question } from '../../../interface/questions';
import ReactPixel from 'react-facebook-pixel';

type Props = {
	currentQuestion: Question
	currentQuestionNumber: number;
	handleNextQuestion: (option?: Option) => void;
};

const QuizzQuestionClassic = ({ handleNextQuestion, currentQuestion }: Props) => {

	useEffect(() => {
		ReactPixel.trackSingle('487587577015592', `pagina-${currentQuestion.order}`);
	}, [currentQuestion]);

	return (
		<section className="flex flex-col items-center justify-center mt-7 gap-6 w-full">
			<div id="title">
				<h2 className="text-xl font-bold text-center w-80">{currentQuestion.question}</h2>
			</div>

			<div id="questionsClassic" className="flex flex-col items-center w-full">
				{currentQuestion?.options?.map((option, index) => (
					<button
						key={index}
						id={`optionClassic${index + 1}`}
						className="flex items-center w-80 p-2 m-2 h-24
            text-md font-medium text-left 
            bg-gray-100 rounded-lg hover:bg-gray-100 shadow-lg 
            border-b-4 border-r-4 border-gray-300
            hover:border-b-4 hover:border-r-4 hover:border-red-400"
						onClick={() => handleNextQuestion(option)}
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
