"use client";
import Button from "@/app/_components/Button";
import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/_sass/userId.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import UserTypes from "@/app/_types/user.types";
import { ArrowLeftIcon, UserRoundIcon } from "lucide-react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import UserInfoSection from "./_components/UserInfoSection";
import { useState } from "react";
import Skeleton from "../_components/Skeleton";
import { GuarantorDetailsArr } from "@/app/_types/guarantorDetailsArr.types";

function User() {
  const { userId } = useParams();
  const router = useRouter();

  const tabs = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const { isPending, isLoading, error, data, isFetching } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const res = await fetch(
        `https://api.npoint.io/f665a31c4b7bcf6c36cf/users/${userId}`
      );
      return await res.json();
    },
  });

  const user = !isPending && !isFetching && !error && (data as UserTypes);

  const personalInfoSectionData = [
    {
      name: "Full Name",
      value: `${(user as UserTypes)?.personal_information?.full_name}`,
    },
    {
      name: "Phone No.",
      value: (user as UserTypes)?.personal_information?.phone_number,
    },
    {
      name: "Email Address",
      value: (user as UserTypes)?.personal_information?.email_address,
    },
    {
      name: "BVN",
      value: (user as UserTypes)?.personal_information?.bvn,
    },
    {
      name: "Gender",
      value: (user as UserTypes)?.personal_information?.gender,
    },
    {
      name: "Marital Status",
      value: (user as UserTypes)?.personal_information?.marital_status,
    },
    {
      name: "Children",
      value: (user as UserTypes)?.personal_information?.children,
    },
    {
      name: "Type of Residence",
      value: (user as UserTypes)?.personal_information?.type_of_residence,
    },
  ];

  const educationAndEmploymentSectionData = [
    {
      name: "Level of Education",
      value: (user as UserTypes)?.education_and_employment?.level_of_education,
    },
    {
      name: "Employment Status",
      value: (user as UserTypes)?.education_and_employment?.employment_status,
    },
    {
      name: "Sector of Employment",
      value: (user as UserTypes)?.education_and_employment
        ?.sector_of_employment,
    },
    {
      name: "Duration of Employment",
      value: (user as UserTypes)?.education_and_employment
        ?.duration_of_employment,
    },
    {
      name: "Office Email",
      value: (user as UserTypes)?.education_and_employment?.office_email,
    },
    {
      name: "Monthly Income",
      value: `₦${(
        user as UserTypes
      )?.education_and_employment?.monthly_income.min.toLocaleString(
        "en-GB"
      )} - ₦${(
        user as UserTypes
      )?.education_and_employment?.monthly_income.max.toLocaleString("en-GB")}`,
    },
    {
      name: "Loan Repayment",
      value: `₦${(
        user as UserTypes
      )?.education_and_employment?.loan_repayment.toLocaleString("en-GB")}`,
    },
  ];

  const socialsSectionData = [
    {
      name: "Twitter",
      value: (user as UserTypes)?.socials?.twitter,
    },
    {
      name: "Facebook",
      value: (user as UserTypes)?.socials?.facebook,
    },
    {
      name: "Instagram",
      value: (user as UserTypes)?.socials?.instagram,
    },
  ];

  const guarantorSectionData = !isPending &&
    !isFetching &&
    !error && [
      [
        {
          name: "Full Name",
          value: (user as UserTypes)?.guarantors[0]?.full_name,
        },
        {
          name: "Phone number",
          value: (user as UserTypes)?.guarantors[0]?.phone_number,
        },
        {
          name: "Email Address",
          value: (user as UserTypes)?.guarantors[0]?.email_address,
        },
        {
          name: "Relationship",
          value: (user as UserTypes)?.guarantors[0]?.relationship,
        },
      ],

      [
        {
          name: "Full Name",
          value: (user as UserTypes)?.guarantors[1]?.full_name,
        },
        {
          name: "Phone number",
          value: (user as UserTypes)?.guarantors[1]?.phone_number,
        },
        {
          name: "Email Address",
          value: (user as UserTypes)?.guarantors[1]?.email_address,
        },
        {
          name: "Relationship",
          value: (user as UserTypes)?.guarantors[1]?.relationship,
        },
      ],
    ];

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
              <div className={styles.userAvatar}>
                <UserRoundIcon size={48} />
              </div>

              <h2 className={styles.userName}>
                {(isPending || isLoading) && !error && (
                  <Skeleton heightClass='2.5rem' />
                )}
                {!isPending && !isLoading && !error && (
                  <>{`${
                    (user as UserTypes).personal_information?.full_name
                  }`}</>
                )}
              </h2>

              <span className={styles.userAccountId}>
                {(user as UserTypes)?.customerId}
              </span>
            </div>

            <div className={styles.userAccountTierContainer}>
              {(isPending || isLoading) && !error && (
                <Skeleton heightClass='2.5rem' />
              )}
              {!isPending && !isLoading && !error && (
                <>
                  <span>User&#39;s Tier</span>
                  <span>
                    <IoStarSharp className={styles.starIcon} size={18} />
                    <IoStarOutline className={styles.starIcon} size={18} />
                    <IoStarOutline className={styles.starIcon} size={18} />
                  </span>
                </>
              )}
            </div>

            <div className={styles.userBankDetailsContainer}>
              {(isPending || isLoading) && !error && (
                <Skeleton heightClass='2.5rem' />
              )}
              {!isPending && !isLoading && !error && (
                <>
                  <span className={styles.userBankBalance}>
                    ₦
                    {(+(user as UserTypes)?.account_details
                      ?.account_balance).toLocaleString("en-GB")}
                  </span>
                  <span className={styles.userBankName}>
                    {(user as UserTypes)?.account_details?.account_number}/
                    {(user as UserTypes)?.account_details?.bank_name}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className={styles.userTabsNav}>
            <ul className={styles.userTabs}>
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  className={`${tab === activeTab && styles.activeTab} ${
                    styles.userTab
                  }`}
                  onClick={() => setActiveTab(tabs[i])}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sectionSubsections}>
        {activeTab === "General Details" && (
          <>
            {(isPending || isLoading) && !error && (
              <Skeleton heightClass='50rem' />
            )}

            {!isPending && !isLoading && error && (
              <>
                <h1>There was an issue fetching...</h1>
                <p>Check your internet connection and try again</p>
              </>
            )}

            {!isPending && !isLoading && !error && (
              <>
                <UserInfoSection
                  title='Personal Information'
                  sectionDetails={personalInfoSectionData}
                />

                <UserInfoSection
                  title='Education and Employment'
                  sectionDetails={educationAndEmploymentSectionData}
                />

                <UserInfoSection
                  title='Socials'
                  sectionDetails={socialsSectionData}
                />

                <UserInfoSection
                  title='Guarantor'
                  guarantorDetailsArr={
                    guarantorSectionData as GuarantorDetailsArr
                  }
                />
              </>
            )}
          </>
        )}

        {activeTab !== "General Details" && (
          <p>Nothing to display at this moment.</p>
        )}
      </section>
    </DashboardLayout>
  );
}

export default User;
