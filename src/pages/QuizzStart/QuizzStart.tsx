import { useEffect } from "react";
import { Option, Question } from "../../interface/questions";
import ReactPixel from 'react-facebook-pixel';

type Props = {
	currentQuestion: Question;
	handleNextQuestion: (option?: Option) => void;
};

const QuizzStart = ({ handleNextQuestion, currentQuestion }: Props) => {

	useEffect(() => {
		ReactPixel.trackSingle('487587577015592', `pagina-${currentQuestion}`);
	}, [currentQuestion]);

	return (
		<section className="flex flex-col items-center justify-center mt-7 gap-6 w-full">
			<section id="logoSection" className="mt-2">
				<img src="/quizzPersonalizado/src/assets/images/logo.png" alt="Logo" />
			</section>

			<div id="title">
				<h2 className="text-4xl font-bold text-center w-72">
					{currentQuestion.question}
				</h2>
				<p className="text-md font-medium mt-2 text-center">
					Selecione sua idade
				</p>
			</div>

			<div
				id="questionsClassic"
				className="flex flex-row justify-center flex-wrap w-50 items-center"
			>
				{currentQuestion?.options?.map((option, index) => (
					<button
						key={index}
						id={`optionClassic${index + 1}`}
						className="flex flex-col items-center h-44 w-44 justify-around m-2
            text-md font-medium text-left 
            bg-gray-100 rounded-lg hover:bg-gray-100 shadow-lg 
            border-b-4 border-r-4 border-gray-300
            hover:border-b-4 hover:border-r-4 hover:border-red-400"
						onClick={() => handleNextQuestion(option)}
					>
						{option.image && (
							<img src={option.image} alt={option.text} className="w-42 h-42" />
						)}
						{option.text}
					</button>
				))}
			</div>
		</section>
	);
};

export default QuizzStart;
