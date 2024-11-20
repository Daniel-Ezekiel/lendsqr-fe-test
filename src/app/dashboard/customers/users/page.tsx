"use client";
import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/sass/dashboard.module.scss";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "./_components/StatsCard";
import UsersIcon from "@/assets/icons/users.svg";
import ActiveUsersIcon from "@/assets/icons/active-users.svg";
import LoanUsersIcon from "@/assets/icons/loan-users.svg";
import SavingUsersIcon from "@/assets/icons/savings-users.svg";

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

  console.log(!isPending && !isFetching && !error && data);

  return (
    <DashboardLayout>
      <section className={styles.sectionMain}>
        <h1 className={styles.sectionMainTitle}>Users</h1>

        <div className={styles.statsCardsContainer}>
          <StatsCard imgSrc={UsersIcon} title='Users' count={2453} />
          <StatsCard
            imgSrc={ActiveUsersIcon}
            title='Active Users'
            count={2453}
          />
          <StatsCard imgSrc={LoanUsersIcon} title='Loan Users' count={2453} />
          <StatsCard
            imgSrc={SavingUsersIcon}
            title='Savings Users'
            count={2453}
          />
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
