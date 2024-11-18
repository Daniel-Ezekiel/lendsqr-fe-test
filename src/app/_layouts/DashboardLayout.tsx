import styles from "@/app/sass/dashboardLayout.module.scss";
import DashboardHeader from "../_components/DashboardHeader";
import DashboardSideBar from "../_components/DashboardSideBar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <DashboardHeader />
      <div className={styles.sidebarAndMainContainer}>
        <DashboardSideBar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
