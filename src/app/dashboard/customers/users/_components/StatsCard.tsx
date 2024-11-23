import Image from "next/image";
import styles from "@/app/_sass/statsCard.module.scss";

type statsCardTypes = {
  imgSrc: string;
  title: string;
  count: number;
};

type imgColorTypes = {
  users: string;
  "active users": string;
  "users with loans": string;
  "users with savings": string;
};

function StatsCard({ imgSrc, title, count }: statsCardTypes) {
  const imgColor = {
    users: styles.bgUsers,
    "active users": styles.bgActiveUsers,
    "users with loans": styles.bgLoanUsers,
    "users with savings": styles.bgSavingUsers,
  };

  return (
    <div className={styles.statsCard}>
      <div
        className={`${styles.iconContainer} ${
          imgColor[title.toLowerCase() as keyof imgColorTypes]
        }`}
      >
        <Image src={imgSrc} alt='icon' />
      </div>
      <span className={styles.statsCardTitle}>{title}</span>
      <span className={styles.statsCardCount}>{count.toLocaleString()}</span>
    </div>
  );
}

export default StatsCard;
