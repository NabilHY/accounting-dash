import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Gasoil', 'Eaux/Electricite', 'Administration', 'Frais bnacaires', 'Salaires', 'Transport', 'Loyer', 'Reparation Vehicule', 'CNSS', 'La perception', 'Gasoil Cuelma', 'Parking', 'Gasoil exterieur', 'Reception', 'Infraction', 'Lavage', 'Frais Autoroute', 'Hotel Laarach Et Loyer', 'Gasoil Laarache', 'Reparation Laarach', 'Fourniture'],
  datasets: [
    {
      label: 'Expenses',
      data: [4483.59, 7718.65, 1040.05, 9866.04, 1728.66, 8656.40, 4871.42, 7746.97, 8009.56, 8895.21, 2109.39, 6488.37, 690.25, 8018.03, 2009.31, 6792.21, 8451.13, 7495.34, 1772.54, 6925.23, 9718.73],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#8BC34A',
        '#4CAF50',
        '#F44336',
        '#9C27B0',
        '#673AB7',
        '#3F51B5',
        '#2196F3',
        '#00BCD4',
        '#009688',
        '#8BC34A',
        '#FFC107',
        '#FF5722',
        '#795548',
        '#607D8B',
        '#FF9800',
        '#9E9E9E',
        '#CDDC39',
        '#E91E63',
      ],
    },
  ],
};

const options = {
  title: {
    display: true,
    text: 'Expenses',
    fontSize: 18,
  },
  legend: {
    display: true,
    position: 'right',
  },
};

const PieChart = () => {
  return (
    <div style={{ height: '370px', width: '370px', gap: '50px', display: 'flex' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;