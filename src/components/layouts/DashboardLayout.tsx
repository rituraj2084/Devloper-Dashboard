import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      {/* Header and Navigation can be added here */}
      {children}
    </div>
  );
};

export default DashboardLayout;
