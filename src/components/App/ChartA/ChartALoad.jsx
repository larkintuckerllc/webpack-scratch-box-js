import React from 'react';
import { Pie } from 'react-chartjs-2';

const DATA = {
  datasets: [
    {
      backgroundColor: ['red', 'yellow', 'blue'],
      data: [1, 2, 3],
    },
  ],
  labels: ['Red', 'Yellow', 'Blue'],
};

const ChartALoad = () => <Pie data={DATA} />;

export default ChartALoad;
