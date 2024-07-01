import { IMCType, Option, Question } from "../../../interface/questions";
import { FormEvent, useState } from "react";
import IMCCalculation from "./AlertsIMCFields/IMCCalculation";
import IMCGoal from "./AlertsIMCFields/IMCGoal";
import IMCInfo from "./AlertsIMCFields/IMCInfo";
import { IBodyImage } from '../../../interface/bodyImage';
import { IAnswers } from '../../../interface/personalizedAnswers';

type Props = {
	currentQuestion: Question;
	handleNextQuestion: (option?: Option) => void;
	setPersonalizedAnswers: React.Dispatch<React.SetStateAction<IAnswers[]>>;
};

const QuizzCalculation = ({
	currentQuestion,
	handleNextQuestion,
	setPersonalizedAnswers,
}: Props) => {
	const [name, setName] = useState<string>("");
	const [height, setHeight] = useState<number>(0);
	const [weight, setWeight] = useState<number>(0);
	const [targetWeight, setTargetWeight] = useState<number>(0);
	const [age, setAge] = useState<number>(0);
	const [goalStatus, setGoalStatus] = useState<string>("");
	const [targetWeightIsValidPercentage, setTargetWeightIsValidPercentage] =
		useState<boolean>(false);
	const [bodyImage, setBodyImage] = useState<IBodyImage | null>(null);

	const heightIsValid = height >= 0.9 && height <= 2.43;
	const weightIsValid = weight >= 25 && weight <= 300;
	const targetWeightIsValid = targetWeight >= 25 && targetWeight <= 300;
	const isAgeValid = age > 15 && age < 110;
	const nameIsValid = name.length > 0;

	const IMC: number = Number((weight / height ** 2).toFixed(2));

	const isValidButton = (): boolean => {
		if (
			!currentQuestion?.calculation?.imc &&
			currentQuestion?.calculation?.measure
		) {
			return isAgeValid ? true : false;
		}

		if (!currentQuestion?.calculation?.measure) {
			return nameIsValid ? true : false;
		}

		switch (currentQuestion?.calculation?.imc) {
			case IMCType.Info:
				return heightIsValid ? true : false;
			case IMCType.IMCCalculation:
				return weightIsValid ? true : false;
			case IMCType.IMCGoal:
				return targetWeightIsValid && targetWeightIsValidPercentage
					? true
					: false;
			default:
				return false;
		}
	};

	const handleUserMeasures = (e: FormEvent<HTMLInputElement>) => {
		let { name, value } = e.currentTarget;

		const parsedValue = parseInt(value, 10);

		switch (name) {
			case IMCType.Info:
				setHeight(parsedValue / 100);
				break;
			case IMCType.IMCCalculation:
				setWeight(parsedValue);
				break;
			case IMCType.IMCGoal:
				setTargetWeight(parsedValue);
				break;
			case "Age":
				setAge(parsedValue);
				break;
			default:
				setName(value);
				break;
		}
	};

	const handleContinue = (): void => {
		const inputField = document.getElementById(
			"inputForms"
		) as HTMLInputElement;
		if (inputField) {
			inputField.value = "";
		}

		setPersonalizedAnswers((prevInfos) => ({
			...prevInfos,
			name: name,
			height: height,
			weight: weight,
			age: age,
			targetWeight: targetWeight,
			goalWeight: goalStatus === "Ganhar" ? "Ganhar peso" : "Perder peso",
			IMC: IMC,
			bodyImage: bodyImage
		}));

		handleNextQuestion();
	};

	return (
		<section className="flex flex-col items-center justify-center mt-7 gap-6 w-full h-full">
			<div id="title">
				<h2 className="text-2xl font-bold">
					{currentQuestion?.calculation?.title}
				</h2>
			</div>

			<div className="flex flex-col items-center w-full flex-1">
				<div className="relative w-52">
					<input
						type="text"
						id="inputForms"
						className="w-full p-3 border-b-2 border-gray-300 focus:outline-none font-bold text-4xl text-center"
						name={
							currentQuestion?.calculation?.imc &&
								currentQuestion?.calculation?.measure !== "anos"
								? currentQuestion?.calculation?.imc
								: currentQuestion?.calculation?.measure === "anos"
									? "Age"
									: "Name"
						}
						onChange={(e) => handleUserMeasures(e)}
					/>
					<span className="absolute bg-white right-2 top-10 transform -translate-y-1/2 font-bold text-2xl text-center">
						{currentQuestion?.calculation?.measure}
					</span>
				</div>
				<span className="font-medium text-sm mt-3">
					{currentQuestion?.calculation?.measureDescription}
				</span>

				{currentQuestion?.calculation?.imc === IMCType.Info &&
					heightIsValid && <IMCInfo />}

				{currentQuestion?.calculation?.imc === IMCType.IMCCalculation &&
					weightIsValid && <IMCCalculation IMC={IMC} setBodyImage={setBodyImage} />}

				{currentQuestion?.calculation?.imc === IMCType.IMCGoal &&
					targetWeightIsValid && (
						<IMCGoal
							weight={weight}
							targetWeight={targetWeight}
							setTargetWeightIsValidPercentage={
								setTargetWeightIsValidPercentage
							}
							setGoalStatus={setGoalStatus}
							goalStatus={goalStatus}
						/>
					)}

				<div
					style={{
						backgroundImage: "linear-gradient(to bottom, transparent, white)",
						position: "sticky",
						bottom: "0px",
						height: "150px",
					}}
				>
					<button
						onClick={() => handleContinue()}
						disabled={!isValidButton()}
						className={`flex items-center justify-center 
              text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7
              rounded-lg shadow-lg 
              border-b-4 border-r-4 text-white font-bold
              ${isValidButton()
								? "hover:bg-red-400 bg-red-400 border-red-500 hover:border-red-700"
								: "bg-gray-400 cursor-not-allowed border-gray-500 hover:bg-gray-600"
							}`}
					>
						{isValidButton() ? "Continuar" : "Aguardando Resposta..."}
					</button>
				</div>
			</div>
		</section>
	);
};

export default QuizzCalculation;
