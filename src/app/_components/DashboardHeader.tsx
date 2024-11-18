import Image from "next/image";
import Link from "next/link";
import styles from "@/app/sass/dashboardHeader.module.scss";
import Logo from "@/assets/images/logo.svg";
// import Search from "@/assets/icons/search.svg";
// import Docs from "@/assets/icons/docs.svg";
import Avatar from "@/assets/images/profile.png";
import Notification from "@/assets/icons/notification.svg";
import { BookOpenTextIcon, MenuIcon, SearchIcon } from "lucide-react";
import Button from "./Button";

function DashboardHeader() {
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
            placeholder='search for anything'
            type='text'
            className={styles.navSearch}
          />
          <Button className={styles.searchButton}>
            <SearchIcon size={24} />
          </Button>
        </div>

        <div>
          <div className={styles.navbarLinks}>
            <Button>
              <BookOpenTextIcon size={24} />
            </Button>

            <Button>
              <Image
                className={styles.icons}
                src={Notification}
                alt='notification icon'
              />
            </Button>

            <Button>
              <Image
                className={styles.avatar}
                src={Avatar}
                alt='auth user avatar'
              />
            </Button>

            <Button className={styles.navButton}>
              <MenuIcon size={24} />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DashboardHeader;
