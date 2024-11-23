"use client";
import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/sass/dashboard.module.scss";
import { useQuery } from "@tanstack/react-query";
import StatsCard from "./_components/StatsCard";
import UsersIcon from "@/assets/icons/users.svg";
import ActiveUsersIcon from "@/assets/icons/active-users.svg";
import LoanUsersIcon from "@/assets/icons/loan-users.svg";
import SavingUsersIcon from "@/assets/icons/savings-users.svg";
import UsersTable from "./_components/UsersTable";
import { ClipLoader } from "react-spinners";
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

  // console.log(!isPending && !isFetching && !error && data);

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
              count={2453}
            />
          )}

          {(isPending || isLoading) && !error && <Skeleton />}
          {!isPending && !isLoading && !error && (
            <StatsCard
              imgSrc={LoanUsersIcon}
              title='Users with Loans'
              count={12453}
            />
          )}

          {(isPending || isLoading) && !error && <Skeleton />}
          {!isPending && !isLoading && !error && (
            <StatsCard
              imgSrc={SavingUsersIcon}
              title='Users with Savings'
              count={102453}
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
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
