"use client";
import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/sass/dashboard.module.scss";
import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );

      return await res.json();
    },
  });

  console.log(!isPending && !isFetching && data);

  return (
    <DashboardLayout>
      <section className={styles.sectionMain}>
        <h1>Users</h1>

        <div></div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
