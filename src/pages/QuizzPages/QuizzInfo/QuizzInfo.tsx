import React, { useEffect } from "react";
import { Question } from "../../../interface/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/pro-solid-svg-icons";
import ReactPixel from 'react-facebook-pixel';

type Props = {
	currentQuestion: Question;
	handleNextQuestion: () => void;
};

const QuizzInfo = ({ currentQuestion, handleNextQuestion }: Props) => {

	useEffect(() => {
		ReactPixel.trackSingle('487587577015592', `pagina-${currentQuestion}`);
	}, [currentQuestion]);

	return (
		<section className="container flex flex-col items-center gap-5">
			{currentQuestion?.info?.map((info, index) => (
				<React.Fragment key={index}>
					<div className="flex flex-col text-center gap-5 mt-3">
						<h2 className="font-extrabold text-xl">{info?.title}</h2>
						<p className="font-bold text-gray-500 text-md">
							{info?.description1}
						</p>
					</div>

					<div className="flex justify-center">
						<img className="h-72 w-72" src={info?.image} alt={info?.title} />
					</div>

					{info?.description2 && (
						<p className="font-medium text-gray-500 text-center text-md">
							{info?.description2}
						</p>
					)}

					<div
						id="alert"
						className="bg-green-100 w-80 flex flex-col p-4 gap-3 rounded-lg shadow-md"
					>
						<div className="flex items-center gap-2">
							<FontAwesomeIcon icon={faCircleInfo} />
							<h2 className="font-bold text-gray-600 text-lg">
								Continue respondendo!
							</h2>
						</div>
						<span className="font-medium text-gray-500">
							Vamos continuar montando seu plano personalizado ligeiramente.
						</span>
					</div>

					<div
						style={{
							backgroundImage: "linear-gradient(to bottom, transparent, white)",
							position: "sticky",
							bottom: "0px",
							height: "120px",
						}}
					>
						<button
							className={`flex items-center justify-center 
          text-md text-left w-80 p-2 m-2 h-20 gap-2 mt-7
          bg-red-400 rounded-lg hover:bg-red-400 shadow-lg 
          border-b-4 border-r-4 border-red-500 text-white font-bold
          hover:border-b-4 hover:border-r-4 hover:border-red-700`}
							onClick={() => handleNextQuestion()}
						>
							Continuar
						</button>
					</div>
				</React.Fragment>
			))}
		</section>
	);
};

export default QuizzInfo;
