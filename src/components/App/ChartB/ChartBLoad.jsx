import React from 'react';
import { Pie } from 'react-chartjs-2';

const DATA = {
  datasets: [
    {
      backgroundColor: ['red', 'yellow', 'blue'],
      data: [3, 2, 1],
    },
  ],
  labels: ['Red', 'Yellow', 'Blue'],
};

const ChartBLoad = () => <Pie data={DATA} />;

export default ChartBLoad;
