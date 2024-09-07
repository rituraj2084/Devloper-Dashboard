import React from 'react';
import { Line  } from 'react-chartjs-2';
import { Chart as ChartJS, ChartOptions, LineElement, PointElement } from 'chart.js';
import { ActivityMeta, DayWiseActivity } from '../../types';
import { transformLineChartData } from '../../utils/chartUtils';

ChartJS.register(LineElement, PointElement)
interface LineChartProps {
  activityMeta: ActivityMeta[];
  dayWiseActivity: DayWiseActivity[];
}

const LineChart: React.FC<LineChartProps> = ({ activityMeta, dayWiseActivity }) => {
  const data = transformLineChartData(activityMeta, dayWiseActivity);

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Daily Activity Trends',
      },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label}: ${context.parsed.y}`,
        },
      },
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Activities',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
