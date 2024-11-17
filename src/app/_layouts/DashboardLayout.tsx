import styles from "@/app/sass/dashboard.module.scss";
function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.page}>{children}</div>;
}

export default DashboardLayout;
