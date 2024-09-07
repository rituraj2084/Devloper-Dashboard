import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { fetchData } from "../../services/dataService";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import StackedBarChart from "../../components/charts/StackedBarCharts";
import LineChart from "../../components/charts/LineCharts";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);
  if (!data) {
    return <LoadingSpinner />;
  }
  const { rows, activityMeta } = data?.data?.AuthorWorklog;
  return (
    <DashboardLayout>
      <h1>Devlopers Activity Dashboard</h1>
      <StackedBarChart activityMeta={activityMeta} rows={rows} />
      {rows?.map((row) => {
        return (
          <div key={row?.name}>
            <h4 className="username">Username: {row?.name.split("@")[0]}</h4>
            <LineChart
              activityMeta={activityMeta}
              dayWiseActivity={row?.dayWiseActivity}
            />
          </div>
        );
      })}
    </DashboardLayout>
  );
};

export default Dashboard;
