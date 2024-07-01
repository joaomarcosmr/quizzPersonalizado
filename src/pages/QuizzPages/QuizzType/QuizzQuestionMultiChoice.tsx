import { useEffect, useState } from "react";
import { Option, Question } from "../../../interface/questions";
import ReactPixel from 'react-facebook-pixel';

type Props = {
	currentQuestion: Question;
	handleNextQuestion: (option?: Option[]) => void;
};

const QuizzQuestionMultiChoice = ({
	currentQuestion,
	handleNextQuestion,
}: Props) => {

	useEffect(() => {
		ReactPixel.trackSingle('487587577015592', `pagina-${currentQuestion.order}`);
	}, [currentQuestion]);

	const [selectedOptions, setSelectedOptions] = useState<Array<Option>>([]);

	const handleCircle = (option: Option): void => {
		const isAlreadySelected = selectedOptions.includes(option);
		const updatedOptions = isAlreadySelected
			? selectedOptions.filter((opt) => opt !== option)
			: [...selectedOptions, option];

		setSelectedOptions(updatedOptions);
	};

	return (
		<section className="flex flex-col items-center justify-center mt-7 gap-6 w-full h-full">
			<div id="title">
				<h2 className="text-xl font-bold text-center w-80">{currentQuestion.question}</h2>
			</div>

			<div
				id="questionsClassic"
				className="flex flex-col items-center w-full flex-1"
			>
				{currentQuestion?.options?.map((option, index) => (
					<button
						key={index}
						id={`optionClassic${index + 1}`}
						className={`flex items-center w-80 p-2 m-2 h-24 gap-2
            text-md font-medium text-left 
            bg-gray-100 rounded-lg hover:bg-gray-100 shadow-lg 
            border-b-4 border-r-4 ${!selectedOptions.includes(option)
								? "border-gray-300"
								: "border-red-400"
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
          rounded-lg shadow-lg 
          border-b-4 border-r-4 text-white font-bold
          ${selectedOptions.length === 0
							? "bg-gray-400 cursor-not-allowed border-gray-500 hover:bg-gray-600 "
							: "hover:bg-red-400 bg-red-400 border-red-500 hover:border-red-700"
						}`}
					onClick={() => handleNextQuestion(selectedOptions)}
					disabled={selectedOptions.length === 0}
				>
					{selectedOptions.length === 0 ? "Selecione uma opção" : "Continuar"}
				</button>
			</div>
		</section>
	);
};

export default QuizzQuestionMultiChoice;
