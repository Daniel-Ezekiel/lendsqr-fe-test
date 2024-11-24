"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/_sass/dashboardSidebar.module.scss";
import Organization from "@/assets/icons/organization.svg";
import Dashboard from "@/assets/icons/dashboard.svg";
import Logout from "@/assets/icons/logout.svg";
import { sideBarLinks } from "../_utils/dashboardSidebarLinks";
import Button from "./Button";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../_services/firebase";
import { usePathname, useRouter } from "next/navigation";

function DashboardSideBar({
  sidebarOpenStatus,
}: {
  sidebarOpenStatus: boolean;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  // const [isAuthorising, setIsAuthorising] = useState<boolean>(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await signOut(auth);

      setIsError(false);
      setError("");

      router.push("/");

      setIsLoggingOut(false);
      return { isLoggingOut, isError, error };
    } catch (error) {
      setIsError(true);
      setError("There was an issue logging out...");
      return error;
    }
  };

  return (
    <aside
      className={`${styles.sidebar} ${sidebarOpenStatus && styles.openSidebar}`}
    >
      <div className={styles.switchOrganization}>
        <Image src={Organization} alt='icon' />
        Switch Organization
      </div>

      <Link className={styles.dashboardLink} href=''>
        <Image src={Dashboard} alt='icon' />
        Dashboard
      </Link>

      {sideBarLinks.map((sidebarLink) => (
        <ul className={styles.sidebarLinksGroup} key={sidebarLink.id}>
          <span className={styles.sidebarLinksTitle}>{sidebarLink.title}</span>
          {sidebarLink.links.map((link) => (
            <li key={link.id}>
              <Link
                className={`${styles.sidebarLink} ${
                  pathName.includes(link.href) && styles.activeLink
                }`}
                href={`/dashboard/${link.href}`}
              >
                <Image src={link.icon} alt='icon' />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}

      <div className={styles.logoutContainer}>
        <Button
          className={styles.logoutButton}
          onClick={handleLogout}
          type='button'
        >
          <Image src={Logout} alt='icon' /> Logout
        </Button>
        <span>v1.2.0</span>
      </div>
    </aside>
  );
}

export default DashboardSideBar;
