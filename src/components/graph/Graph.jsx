import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './graph.scss';

const chartOptions = {
  scales: {
    y: {
      type: 'linear',
      ticks: {
        beginAtZero: true,
        stepSize: 2000,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
};

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: `${data.years[0]}`,
        data: data.values[0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: `${data.years[1]}`,
        data: data.values[1],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: `${data.years[2]}`,
        data: data.values[2],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;