import Image from "next/image";
import styles from "@/app/sass/statsCard.module.scss";

type statsCardTypes = {
  imgSrc: string;
  title: string;
  count: number;
};

type imgColorTypes = {
  users: string;
  activeUsers: string;
  loanUsers: string;
  savingUsers: string;
};

function StatsCard({ imgSrc, title, count }: statsCardTypes) {
  const imgColor = {
    users: styles.bgUsers,
    activeUsers: styles.bgActiveUsers,
    loanUsers: styles.bgLoanUsers,
    savingUsers: styles.bgSavingUsers,
  };

  return (
    <div>
      <Image
        className={imgColor[title.toLowerCase() as keyof imgColorTypes]}
        src={imgSrc}
        alt='icon'
      />
      <span className={styles.statsCardTitle}>{title}</span>
      <span className={styles.statsCardCount}>{count}</span>
    </div>
  );
}

export default StatsCard;
