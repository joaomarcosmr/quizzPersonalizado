import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Chart, ScriptableContext } from "chart.js";
import { IAnswers } from "../interface/personalizedAnswers";

interface ChartProps {
  personalizedAnswers: IAnswers;
}

const ChartComponent: React.FC<ChartProps> = ({ personalizedAnswers }) => {

  const progress =
    personalizedAnswers.goalWeight === "Perder peso"
      ? [
          personalizedAnswers.weight -
            (personalizedAnswers.weight / 100) * 0.25,
          personalizedAnswers.weight - (personalizedAnswers.weight / 100) * 7,
          personalizedAnswers.weight - (personalizedAnswers.weight / 100) * 10,
          personalizedAnswers.targetWeight,
        ]
      : [
          personalizedAnswers.weight +
            (personalizedAnswers.weight / 100) * 0.25,
          personalizedAnswers.weight + (personalizedAnswers.weight / 100) * 7,
          personalizedAnswers.weight + (personalizedAnswers.weight / 100) * 10,
          personalizedAnswers.targetWeight,
        ];

  const data = {
    labels: ["Junho", "Julho", "Agosto", "Setembro"],
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
        min: personalizedAnswers.targetWeight,
        max: personalizedAnswers.weight,
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
      const text2 = `com ${personalizedAnswers.targetWeight} Kg`;
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
