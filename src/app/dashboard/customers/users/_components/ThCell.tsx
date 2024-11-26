import Button from "@/app/_components/Button";
import { ListFilterIcon } from "lucide-react";
import styles from "@/app/_sass/thCell.module.scss";

function ThCell({ cellTitle }: { cellTitle: string }) {
  return (
    <div className={styles.thCell}>
      <span className={styles.thCellTitle}>{cellTitle}</span>{" "}
      <Button type='button' className={styles.thCellButton}>
        <ListFilterIcon />
      </Button>
    </div>
  );
}

export default ThCell;
