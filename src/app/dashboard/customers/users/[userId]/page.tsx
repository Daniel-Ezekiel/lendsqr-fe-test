"use client";
import Button from "@/app/_components/Button";
import DashboardLayout from "@/app/_layouts/DashboardLayout";
import styles from "@/app/sass/userId.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import UserTypes from "@/app/_types/user.types";
import { ArrowLeftIcon, UserRoundIcon } from "lucide-react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import UserInfoSection from "./_components/UserInfoSection";
import { useState } from "react";
import Skeleton from "../_components/Skeleton";

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
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
      );
      return await res.json();
    },
  });

  const user = !isPending && !isFetching && !error && (data as UserTypes);

  const personalInfoSectionData = [
    {
      name: "Full Name",
      value: `${(user as UserTypes)?.profile?.firstName} ${
        (user as UserTypes)?.profile?.lastName
      }`,
    },
    {
      name: "Phone No.",
      value: (user as UserTypes)?.profile?.phoneNumber,
    },
    {
      name: "Email Address",
      value: (user as UserTypes)?.email,
    },
    {
      name: "BVN",
      value: (user as UserTypes)?.profile?.bvn,
    },
    {
      name: "Gender",
      value: (user as UserTypes)?.profile?.gender,
    },
    {
      name: "Marital Status",
      value: "Single",
    },
    {
      name: "Children",
      value: "None",
    },
    {
      name: "Type of Residence",
      value: "Parent Apartment",
    },
  ];

  const educationAndEmploymentSectionData = [
    {
      name: "Level of Education",
      value: (user as UserTypes)?.education?.level,
    },
    {
      name: "Employment Status",
      value: (user as UserTypes)?.education?.employmentStatus,
    },
    {
      name: "Sector of Employment",
      value: (user as UserTypes)?.education?.sector,
    },
    {
      name: "Duration of Employment",
      value: (user as UserTypes)?.education?.duration,
    },
    {
      name: "Office Email",
      value: (user as UserTypes)?.education?.officeEmail,
    },
    {
      name: "Monthly Income",
      value: (user as UserTypes)?.education?.monthlyIncome
        .sort((a, z) => +a - +z)
        .map((income) => "₦" + (+income * 1000).toLocaleString("en-GB"))
        .join(" - "),
    },
    {
      name: "Loan Repayment",
      value:
        "₦" +
        (+(user as UserTypes)?.education?.loanRepayment * 1000).toLocaleString(
          "en-GB"
        ),
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

  const guarantorSectionData = [
    {
      name: "Full Name",
      value:
        (user as UserTypes)?.guarantor?.firstName +
        " " +
        (user as UserTypes)?.guarantor?.lastName,
    },
    {
      name: "Phone number",
      value: (user as UserTypes)?.guarantor?.phoneNumber,
    },
    {
      name: "Email Address",
      value: (user as UserTypes)?.guarantor?.firstName + "@gmail.com",
    },
    {
      name: "Relationship",
      value: "Sister",
    },
  ];

  // console.log(user);

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
                  <>
                    {`${(user as UserTypes)?.profile?.firstName} ${
                      (user as UserTypes)?.profile?.lastName
                    }`}
                  </>
                )}
              </h2>

              <span className={styles.userAccountId}>
                {(user as UserTypes)?.accountNumber}
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
                    {(
                      +(user as UserTypes)?.accountBalance * 1000
                    ).toLocaleString("en-GB")}
                  </span>
                  <span className={styles.userBankName}>
                    {(user as UserTypes)?.accountNumber}/Providus Bank
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
                  sectionDetails={guarantorSectionData}
                />
              </>
            )}
            {/* <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Personal Information</h3>

          <div className={styles.subsectionContent}>
            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>
                Full Name
              </span>
              <span className={styles.subsectionContentItemValue}>
                {(user as UserTypes)?.profile?.firstName}{" "}
                {(user as UserTypes)?.profile?.lastName}
              </span>
            </div>

            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>
                Phone No.
              </span>
              <span className={styles.subsectionContentItemValue}>
                {(user as UserTypes)?.profile?.phoneNumber}
              </span>
            </div>

            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>
                Email Address
              </span>
              <span className={styles.subsectionContentItemValue}>
                {(user as UserTypes)?.email}
              </span>
            </div>

            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>Bvn</span>
              <span className={styles.subsectionContentItemValue}>
                {(user as UserTypes)?.profile?.bvn}
              </span>
            </div>

            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>Gender</span>
              <span className={styles.subsectionContentItemValue}>
                {(user as UserTypes)?.profile?.gender}
              </span>
            </div>

            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>
                Marital Status
              </span>
              <span className={styles.subsectionContentItemValue}>
                {["single", "married"][Math.floor(Math.random() * 1.99)]}
              </span>
            </div>

            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>
                Children
              </span>
              <span className={styles.subsectionContentItemValue}>
                {["none", "1", "2", "2+"][Math.floor(Math.random() * 3.99)]}
              </span>
            </div>

            <div className={styles.subsectionContentItem}>
              <span className={styles.subsectionContentItemLabel}>
                Type of Residence
              </span>
              <span className={styles.subsectionContentItemValue}>
                {
                  ["Parent's Apartment", "Personal Apartment"][
                    Math.floor(Math.random() * 1.99)
                  ]
                }
              </span>
            </div>
          </div>
        </div> */}
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
