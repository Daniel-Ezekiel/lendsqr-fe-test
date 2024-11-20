"use client";
import Button from "@/app/_components/Button";
import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/sass/userId.module.scss";
import { useQuery } from "@tanstack/react-query";
// import { useRouter } from "next/router";
import { useParams, useRouter } from "next/navigation";
import UserTypes from "@/app/_types/user.types";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Avatar from "@/assets/images/profile.png";

const tabs: string[] = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

function User() {
  const { userId } = useParams();
  const router = useRouter();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const res = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
      );
      return await res.json();
    },
  });

  const user = !isPending && !isFetching && !error && (data as UserTypes);

  console.log(user);

  return (
    <DashboardLayout>
      <section className={styles.sectionMain}>
        <Button
          className={styles.backButton}
          type='button'
          onClick={() => router.push("/dashboard/customers/users")}
        >
          <ArrowLeftIcon size={24} />
          Back to Users
        </Button>
        <div className={styles.pageTitleAndActionButtonsContainer}>
          <h1 className={styles.pageTitle}>User Details</h1>

          <Button className={styles.userActions} type='button'>
            Blacklist User
          </Button>
          <Button className={styles.userActions} type='button'>
            Activate User
          </Button>
        </div>

        <div className={styles.userAccountSummaryContainer}>
          <div className={styles.userAccountSummary}>
            <div className={styles.userAvatarContainer}>
              <Image
                className={styles.userAvatar}
                src={Avatar}
                alt='user avatar'
                width={64}
                height={64}
              />
              <h2 className={styles.userName}>Grace Effiom</h2>
              <span className={styles.userAccountId}>LSQFf587g90</span>
            </div>

            <div className={styles.userAccountTierContainer}>
              <span>User's Tier</span>
              <span>***</span>
            </div>

            <div className={styles.userBankDetailsContainer}>
              <span className={styles.userBankBalance}>#200,000</span>
              <span className={styles.userBankName}>
                9912345678/Providus Bank
              </span>
            </div>
          </div>

          <div className={styles.userTabsNav}>
            <ul className={styles.userTabs}>
              {tabs.map((tab, i) => (
                <li key={i} className={styles.userTab}>
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default User;
