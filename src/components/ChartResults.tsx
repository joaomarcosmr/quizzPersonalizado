import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Chart, ScriptableContext } from "chart.js";
import { IAnswers } from "../interface/personalizedAnswers";
import { months } from "../utils/months";

interface ChartProps {
	personalizedAnswers: IAnswers;
	howManyMonthsNeedToAchieve: number | undefined;
	weightDifferenceToGain: boolean;
}

const ChartComponent: React.FC<ChartProps> = ({
	personalizedAnswers,
	howManyMonthsNeedToAchieve,
	weightDifferenceToGain,
}) => {
	const currentDate = new Date();
	const currentMonthIndex = currentDate.getMonth();

	const monthsToGoal = [];
	for (let i = 0; i <= (howManyMonthsNeedToAchieve ?? 0); i++) {
		monthsToGoal.push(months[(currentMonthIndex + i) % 12]);
	}

	const initialWeight = personalizedAnswers.weight ?? 0; // Definindo um valor padrão caso seja undefined
	const targetWeight = personalizedAnswers.targetWeight ?? 0; // Definindo um valor padrão caso seja undefined
	const totalMonths = howManyMonthsNeedToAchieve ?? 0; // Definindo um valor padrão caso seja undefined

	const progress = [];
	for (let i = 0; i < totalMonths; i++) {
		const weightAtMonth =
			personalizedAnswers?.goalWeight === "Perder peso"
				? initialWeight - (initialWeight / 100) * (i === 1 ? i * 5 : i * 4)
				: initialWeight + (initialWeight / 100) * (i === 1 ? i * 5 : i * 4);

		progress.push(weightAtMonth);
	}
	progress.push(targetWeight);

	const data = {
		labels: monthsToGoal,
		datasets: [
			{
				data: progress,
				borderWidth: 8,
				pointBackgroundColor: "rgba(211, 211, 211, 1.0)",
				pointBorderColor: "rgba(211, 211, 211, 1.0)",
				fill: true,
				tension: 0.2,
				backgroundColor: (context: ScriptableContext<"line">) => {
					const chart = context.chart as Chart<"line">;
					const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
					gradient.addColorStop(0, "rgba(255,0,0,0.5)");
					gradient.addColorStop(0.5, "rgba(255,165,0,0.5)");
					gradient.addColorStop(1, "rgba(0,128,0,0.5)");
					return gradient;
				},
				borderColor: (context: ScriptableContext<"line">) => {
					const chart = context.chart as Chart<"line">;
					const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
					gradient.addColorStop(0, "rgba(255,0,0,1)");
					gradient.addColorStop(0.5, "rgba(255,165,0,1)");
					gradient.addColorStop(1, "rgba(0,128,0,1)");
					return gradient;
				},
			},
		],
	};

	// Definir as opções do gráfico
	const options = {
		scales: {
			x: {
				beginAtZero: true,
			},
			y: {
				display: true,
				title: {
					display: true,
				},
				min: weightDifferenceToGain
					? (personalizedAnswers.targetWeight ?? 0) + 4
					: personalizedAnswers.targetWeight ?? 0,
				max: personalizedAnswers.weight ?? 0,
				ticks: {
					stepSize: 5,
					color: "black",
					font: {
						size: 12,
					},
				},
				grid: {
					color: "rgba(0, 0, 0, 0.1)",
					lineWidth: 1,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
		},
	};

	// Plugin para renderizar o texto acima do último ponto com um fundo
	const renderTextPlugin = {
		id: "renderTextPlugin",
		afterDraw: (chart: Chart<"line">) => {
			const ctx = chart.ctx;
			const meta = chart.getDatasetMeta(0);
			const lastPoint = meta.data[meta.data.length - 1];
			const { x, y } = lastPoint.getProps(["x", "y"], true);

			const text1 = "Você aqui";
			const text2 = `com ${personalizedAnswers.targetWeight ?? 0} Kg`;
			const fontSize = 12;
			const padding = 6;
			const borderRadius = 10;

			ctx.save();
			ctx.textAlign = "center";
			ctx.font = `${fontSize}px Arial`;
			ctx.fillStyle = "black";

			// Calculate text width and height
			const textWidth = Math.max(
				ctx.measureText(text1).width,
				ctx.measureText(text2).width
			);
			const textHeight = fontSize * 2.6;

			// Draw background rectangle with rounded corners
			ctx.fillStyle = "black";
			ctx.beginPath();
			ctx.moveTo(
				x - textWidth / 2 - padding + borderRadius,
				y - textHeight - padding - 10
			);
			ctx.lineTo(
				x + textWidth / 2 + padding - borderRadius,
				y - textHeight - padding - 10
			);
			ctx.quadraticCurveTo(
				x + textWidth / 2 + padding,
				y - textHeight - padding - 10,
				x + textWidth / 2 + padding,
				y - textHeight - padding - 10 + borderRadius
			);
			ctx.lineTo(x + textWidth / 2 + padding, y - padding - 10 - borderRadius);
			ctx.quadraticCurveTo(
				x + textWidth / 2 + padding,
				y - padding - 10,
				x + textWidth / 2 + padding - borderRadius,
				y - padding - 10
			);
			ctx.lineTo(x - textWidth / 2 - padding + borderRadius, y - padding - 10);
			ctx.quadraticCurveTo(
				x - textWidth / 2 - padding,
				y - padding - 10,
				x - textWidth / 2 - padding,
				y - textHeight - padding - 10 + borderRadius
			);
			ctx.lineTo(
				x - textWidth / 2 - padding,
				y - textHeight - padding - 10 + borderRadius
			);
			ctx.quadraticCurveTo(
				x - textWidth / 2 - padding,
				y - textHeight - padding - 10,
				x - textWidth / 2 - padding + borderRadius,
				y - textHeight - padding - 10
			);
			ctx.closePath();
			ctx.fill();

			// Draw text
			ctx.fillStyle = "white";
			ctx.fillText(text1, x, y - textHeight / 2 - padding - 10);
			ctx.fillText(text2, x, y - textHeight / 2 - padding + 2);
			ctx.restore();
		},
	};

	return (
		<div className="w-96 relative">
			<Line
				data={data}
				options={options}
				plugins={[renderTextPlugin]}
				className="left mt-4 relative"
			/>
		</div>
	);
};

export default ChartComponent;