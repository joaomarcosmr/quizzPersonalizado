import { useState, useEffect } from "react";
import ReactPixel from 'react-facebook-pixel';

type Props = {
	handleNextQuestion: () => void;
}

const QuizzGenerating = ({ handleNextQuestion }: Props) => {
	useEffect(() => {
		ReactPixel.trackSingle('487587577015592', `pagina-loading`);
	}, []);

	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPercentage((prevPercentage) => {
				if (prevPercentage < 100) {
					return prevPercentage + 1;
				} else {
					clearInterval(interval);
					return prevPercentage;
				}
			});
		}, 100);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (percentage > 99) handleNextQuestion()
	}, [percentage])

	const radius = 80;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset = circumference - (percentage / 100) * circumference;

	return (
		<section className="container flex flex-col items-center justify-center gap-5 bg-red-500 text-white h-screen w-screen">
			<div className="flex flex-col items-center text-center w-72">
				<div className="relative flex items-center justify-center">
					<svg width="200" height="200">
						<circle
							cx="100"
							cy="100"
							r={radius}
							stroke="#cbd5e1"
							strokeWidth="10"
							fill="transparent"
						/>
						<circle
							cx="100"
							cy="100"
							r={radius}
							stroke="white"
							strokeWidth="10"
							fill="transparent"
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashoffset}
							transform="rotate(-90 100 100)"
						/>
					</svg>
					<span className="absolute text-white font-bold text-xl">
						{percentage}%
					</span>
				</div>
			</div>

			<p className="font-medium text-sm">
				Estamos montando seu plano personalizado...
			</p>

			<div
				id="alert"
				className="bg-gray-100 w-80 flex flex-col p-4 gap-3 rounded-lg shadow-md"
			>
				<div className="flex items-center gap-2">
					<img
						src="src/assets/images/woman/provasocial.jpg"
						alt="Eliana Suzane da Costa"
						className="rounded-full w-10 h-10 border border-red-700"
					/>
					<h2 className="font-bold text-gray-600 text-lg">
						Eliana Suzane da Costa
					</h2>
				</div>
				<span className="font-medium text-gray-500">
					<i>
						"Esse plano fez com que eu perdesse 5kg já nas primeiras semanas!
						Acredito que o fato de ser feito personalizado pro meu corpo fez a
						diferença! Eu amei, nunca tinha conseguido resultados e hoje eu sou
						imensamente grata."
					</i>
				</span>
			</div>
		</section>
	);
};

export default QuizzGenerating;
