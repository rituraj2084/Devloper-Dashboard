import React from 'react';
import { Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  ChartOptions,
} from 'chart.js';

import { transformStackedBarChartData } from '../../utils/chartUtils';
import { ActivityMeta, RowData } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

interface StackedBarChartProps {
  activityMeta: ActivityMeta[];
  rows: RowData[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ activityMeta, rows }) => {

  const data = transformStackedBarChartData(activityMeta, rows);

  if (!data || !data.labels.length || !data.datasets.length) {
    return <p>No chart data available</p>;
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Total Activity by Contributor',
      },
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Contributors',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Activities',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;