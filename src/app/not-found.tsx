"use client";
import styles from "@/app/_sass/notFound.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.svg";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "./_components/Button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image className={styles.logo} src={Logo} alt='lendsqr logo' />
        <h2 className={styles.title}>This page has not been built!</h2>
        <p className={styles.description}>
          This is just a demo web app built as a solution to an assessment for
          Lendsqr. Not all pages are functional.
        </p>
        <p className={styles.description}>
          You can start here at the login page or return to the previous page.
        </p>
        <div className={styles.linksContainer}>
          <Button onClick={() => router.back()} className={styles.link}>
            <ArrowLeftIcon className={styles.icon} />
            Back
          </Button>
          <Link href='/' className={styles.link}>
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
