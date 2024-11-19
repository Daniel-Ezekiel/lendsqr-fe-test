import Image from "next/image";
import Link from "next/link";
import styles from "@/app/sass/dashboardHeader.module.scss";
import Logo from "@/assets/images/logo.svg";
// import Search from "@/assets/icons/search.svg";
// import Docs from "@/assets/icons/docs.svg";
import Avatar from "@/assets/images/profile.png";
import Dropdown from "@/assets/icons/dropdown-arrow.svg";
import Notification from "@/assets/icons/notification.svg";
import { BookOpenTextIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";
import Button from "./Button";

function DashboardHeader({
  sidebarOpenStatus,
  toggleSidebarStatus,
}: {
  sidebarOpenStatus: boolean;
  toggleSidebarStatus: () => void;
}) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={"/dashboard"}>
          <Image className={styles.logo} src={Logo} alt='Lendsqr logo' />
        </Link>

        <div className={styles.searchContainer}>
          <input
            id='search'
            name='search'
            placeholder='Search for anything'
            type='text'
            className={styles.navSearch}
          />
          <Button className={styles.searchButton}>
            <SearchIcon size={24} />
          </Button>
        </div>

        <div>
          <div className={styles.navbarLinks}>
            <Link href='' className={styles.navLink}>
              <BookOpenTextIcon className={styles.docsIcon} size={24} />
              <span className={styles.docsText}>Docs</span>
            </Link>

            <Button>
              <Image
                className={styles.icons}
                src={Notification}
                alt='notification icon'
              />
            </Button>

            <Button className={styles.avatarButton}>
              <Image
                className={styles.avatar}
                src={Avatar}
                alt='auth user avatar'
              />
              <span className={styles.avatarName}>Adedeji</span>
              <Image
                className={styles.dropdown}
                src={Dropdown}
                alt='dropdown icon'
              />
            </Button>

            <Button className={styles.navButton} onClick={toggleSidebarStatus}>
              {sidebarOpenStatus ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DashboardHeader;
