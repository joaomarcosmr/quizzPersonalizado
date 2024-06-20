import React from 'react';
import { Line } from 'react-chartjs-2';

interface CustomChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const CustomChart: React.FC<CustomChartProps> = ({ data, labels, title }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category', // Configuração da escala X como categoria
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default CustomChart;
