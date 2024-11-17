import DashboardHeader from "../_components/DashboardHeader";
import DashboardSideBar from "../_components/DashboardSideBar";
import DashboardLayout from "../_layouts/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <DashboardSideBar />
      <section>
        <h1>LendSqr Dashboard</h1>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
