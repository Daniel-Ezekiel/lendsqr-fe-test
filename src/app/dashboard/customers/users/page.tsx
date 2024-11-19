import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/sass/dashboard.module.scss";

function Dashboard() {
  return (
    <DashboardLayout>
      <section className={styles.sectionMain}>
        <h1>Users</h1>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
