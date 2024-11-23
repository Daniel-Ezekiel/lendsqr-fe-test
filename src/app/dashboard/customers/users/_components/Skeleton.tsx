import styles from "@/app/sass/skeletonCard.module.scss";

function Skeleton({ heightClass }: { heightClass?: string }) {
  return (
    <div
      style={{ height: heightClass }}
      className={`${styles.skeleton} ${styles.pulse}`}
    ></div>
  );
}

export default Skeleton;