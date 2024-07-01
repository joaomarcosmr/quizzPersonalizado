import "chart.js/auto";
import { Option } from "../../../interface/questions";
import { IAnswers } from "../../../interface/personalizedAnswers";
import ChartComponent from "../../../components/ChartResults";
import { useEffect, useState } from "react";
import { months } from "../../../utils/months";

type Props = {
	personalizedAnswers: IAnswers;
	handleNextQuestion: (option?: Option[]) => void;
};

const QuizzChartPlan = ({ personalizedAnswers, handleNextQuestion }: Props) => {
	const [goalMonthAchieved, setGoalMonthAchieved] = useState("");
	const [howManyMonthsNeedToAchieve, setHowManyMonthsNeedToAchieve] =
		useState(0);

	const currentDate = new Date();

	let calcWeightDifference =
		personalizedAnswers.weight! - personalizedAnswers.targetWeight!;

	let weightDifferenceToLose = false;
	let weightDifferenceToGain = false;

	calcWeightDifference > 0
		? (weightDifferenceToLose = true)
		: (weightDifferenceToGain = true);

	useEffect(() => {
		let monthsToAchieve = 0;

		if (calcWeightDifference < 5 && weightDifferenceToLose) {
			monthsToAchieve = 1;
		} else if (calcWeightDifference >= 5 && calcWeightDifference < 10) {
			monthsToAchieve = 2;
		} else if (calcWeightDifference >= 10 && calcWeightDifference < 15) {
			monthsToAchieve = 3;
		} else if (calcWeightDifference >= 15 && calcWeightDifference < 20) {
			monthsToAchieve = 4;
		} else if (calcWeightDifference >= 20 && calcWeightDifference < 25) {
			monthsToAchieve = 5;
		} else if (calcWeightDifference >= 25) {
			monthsToAchieve = 6;
		} else {
			calcWeightDifference *= -1
		}

		if (calcWeightDifference < 5 && weightDifferenceToGain) {
			monthsToAchieve = 1;
		} else if (calcWeightDifference >= 5 && calcWeightDifference < 10) {
			monthsToAchieve = 2;
		} else if (calcWeightDifference >= 10 && calcWeightDifference < 15) {
			monthsToAchieve = 3;
		} else if (calcWeightDifference >= 15 && calcWeightDifference < 20) {
			monthsToAchieve = 4;
		} else if (calcWeightDifference >= 20 && calcWeightDifference < 25) {
			monthsToAchieve = 5;
		} else if (calcWeightDifference >= 25) {
			monthsToAchieve = 6;
		} else {
			calcWeightDifference *= -1
		}

		setHowManyMonthsNeedToAchieve(monthsToAchieve);
		setGoalMonthAchieved(
			months[(currentDate.getMonth() + monthsToAchieve) % 12]
		);
	}, [calcWeightDifference, currentDate]);

	return (
		<section className="flex flex-col items-center justify-center mt-7 w-96 h-full relative">
			<div
				id="title"
				className="w-86 flex flex-col justify-center items-center gap-4"
			>
				<h2 className="text-2xl w-80 font-bold text-center">
					<span className="text-red-700">{personalizedAnswers.name}</span>, aqui
					está nossa previsão {personalizedAnswers.goalWeight === 'Ganhar peso' ? "pra você ganhar músculos!" : "pra você queimar gorduras!"}
				</h2>
				<span className="text-sm text-center">
					Nós estimamos que seu objetivo com <br />  esse plano personalizado será alcançado em:
				</span>
				<p className="text-lg text-red-700 font-bold">
					{`${personalizedAnswers.targetWeight} Kg em ${goalMonthAchieved} de 2024`}
				</p>
			</div>

			<ChartComponent
				personalizedAnswers={personalizedAnswers}
				howManyMonthsNeedToAchieve={howManyMonthsNeedToAchieve}
				weightDifferenceToGain={weightDifferenceToGain}
			/>

			<span className="text-xs mt-4 font-medium text-gray-400 w-80 text-center">
				*Com base nos dados dos usuários que registram seu progresso no
				aplicativo. Consulte primeiro seu médico. O gráfico é uma ilustração não
				personalizada e os resultados podem variar.
			</span>

			<div
				style={{
					backgroundImage: "linear-gradient(to bottom, transparent, white)",
					position: "sticky",
					bottom: "0px",
					height: "50px",
				}}
			>
				<button
					className="flex items-center justify-center text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7 rounded-lg shadow-lg border-b-4 border-r-4 text-white font-bold hover:bg-red-400 bg-red-400 border-red-500 hover:border-red-700"
					onClick={() => handleNextQuestion()}
				>
					Continuar
				</button>
			</div>
		</section>
	);
};

export default QuizzChartPlan;
