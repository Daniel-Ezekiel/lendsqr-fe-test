"use client";
import styles from "@/app/sass/dashboardLayout.module.scss";
import DashboardHeader from "../_components/DashboardHeader";
import DashboardSideBar from "../_components/DashboardSideBar";
import { useState } from "react";
import PrivateRoute from "../_components/PrivateRoute";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpenStatus, setSidebarOpenStatus] = useState<boolean>(false);

  const handleSidebarStatusToggle = function () {
    setSidebarOpenStatus(!sidebarOpenStatus);
  };

  return (
    <PrivateRoute>
      <div className={styles.page}>
        <DashboardHeader
          sidebarOpenStatus={sidebarOpenStatus}
          toggleSidebarStatus={handleSidebarStatusToggle}
        />
        <div className={styles.sidebarAndMainContainer}>
          <DashboardSideBar sidebarOpenStatus={sidebarOpenStatus} />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default DashboardLayout;
