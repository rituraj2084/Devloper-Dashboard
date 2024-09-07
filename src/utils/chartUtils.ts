import { ActivityMeta, RowData, DayWiseActivity } from "../types";

export const transformStackedBarChartData = (
  activityMeta: ActivityMeta[],
  rows: RowData[]
) => {
  const labels = rows?.map((row) => row?.name);
  const datasets = activityMeta?.map((activity) => ({
    label: activity?.label,
    data: rows?.map((row) => {
      const activityData = row?.totalActivity?.find(
        (a) => a?.name === activity?.label
      );
      return activityData ? parseInt(activityData.value, 10) : 0;
    }),
    backgroundColor: activity?.fillColor,
  }));
  return { labels, datasets };
};

export const transformLineChartData = (
  activityMeta: ActivityMeta[],
  dayWiseActivity: DayWiseActivity[]
) => {
  const labels = dayWiseActivity?.map((day) => day?.date);

  const datasets = activityMeta?.map((activity) => ({
    label: activity?.label,
    data: dayWiseActivity?.map((day) => {
      const activityData = day?.items?.children?.find(
        (a) => a?.label === activity?.label
      );
      return activityData ? parseInt(activityData?.count, 10) : 0;
    }),
    borderColor: activity?.fillColor,
    backgroundColor: activity?.fillColor,
    fill: false,
    tension: 0.1,
  }));

  return { labels, datasets };
};
