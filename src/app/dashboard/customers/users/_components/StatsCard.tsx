import Image from "next/image";
import styles from "@/app/sass/statsCard.module.scss";

type statsCardTypes = {
  imgSrc: string;
  title: string;
  count: number;
};

type imgColorTypes = {
  users: string;
  "active users": string;
  "loan users": string;
  "savings users": string;
};

function StatsCard({ imgSrc, title, count }: statsCardTypes) {
  const imgColor = {
    users: styles.bgUsers,
    "active users": styles.bgActiveUsers,
    "loan users": styles.bgLoanUsers,
    "savings users": styles.bgSavingUsers,
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
      <span className={styles.statsCardCount}>{count}</span>
    </div>
  );
}

export default StatsCard;
