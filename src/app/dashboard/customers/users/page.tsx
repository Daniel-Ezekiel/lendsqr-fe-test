"use client";
import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/_sass/dashboard.module.scss";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "./_components/StatsCard";
import UsersIcon from "@/assets/icons/users.svg";
import ActiveUsersIcon from "@/assets/icons/active-users.svg";
import LoanUsersIcon from "@/assets/icons/loan-users.svg";
import SavingUsersIcon from "@/assets/icons/savings-users.svg";
import UsersTable from "./_components/UsersTable";
import Skeleton from "./_components/Skeleton";

function Dashboard() {
  const { isPending, isLoading, error, data, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );

      return await res.json();
    },
  });

  return (
    <DashboardLayout>
      <section className={styles.sectionMain}>
        <h1 className={styles.sectionMainTitle}>Users</h1>

        <div className={styles.statsCardsContainer}>
          {(isPending || isLoading) && !error && <Skeleton />}
          {!isPending && !isLoading && !error && (
            <StatsCard imgSrc={UsersIcon} title='Users' count={2453} />
          )}

          {(isPending || isLoading) && !error && <Skeleton />}
          {!isPending && !isLoading && !error && (
            <StatsCard
              imgSrc={ActiveUsersIcon}
              title='Active Users'
              count={2053}
            />
          )}

          {(isPending || isLoading) && !error && <Skeleton />}
          {!isPending && !isLoading && !error && (
            <StatsCard
              imgSrc={LoanUsersIcon}
              title='Users with Loans'
              count={1453}
            />
          )}

          {(isPending || isLoading) && !error && <Skeleton />}
          {!isPending && !isLoading && !error && (
            <StatsCard
              imgSrc={SavingUsersIcon}
              title='Users with Savings'
              count={453}
            />
          )}
        </div>
      </section>

      <section className={styles.sectionTable}>
        {(isPending || isLoading) && !error && <Skeleton heightClass='60rem' />}

        {!isPending && !isLoading && !error && (
          <UsersTable
            data={(!isPending && !isFetching && !error && data) || []}
          />
        )}

        {!isPending && !isLoading && error && (
          <>
            <h1>There was an issue fetching...</h1>
            <p>Check your internet connection and try again</p>
          </>
        )}
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
