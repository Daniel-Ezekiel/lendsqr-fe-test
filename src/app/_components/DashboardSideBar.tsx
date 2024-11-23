"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/sass/dashboardSidebar.module.scss";
import Organization from "@/assets/icons/organization.svg";
import Dashboard from "@/assets/icons/dashboard.svg";
import Logout from "@/assets/icons/logout.svg";
import { sideBarLinks } from "../utils/dashboardSidebarLinks";
import Button from "./Button";

function DashboardSideBar({
  sidebarOpenStatus,
}: {
  sidebarOpenStatus: boolean;
}) {
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
                className={styles.sidebarLink}
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
        <Button className={styles.logoutButton}>
          <Image src={Logout} alt='icon' /> Logout
        </Button>
        <span>v1.2.0</span>
      </div>
    </aside>
  );
}

export default DashboardSideBar;
