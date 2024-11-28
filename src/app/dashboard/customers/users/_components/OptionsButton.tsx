import Button from "@/app/_components/Button";
import styles from "@/app/_sass/table.module.scss";
import {
  EllipsisVerticalIcon,
  EyeIcon,
  UserRoundCheckIcon,
  UserRoundXIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function OptionsButton({ userDetailsURL }: { userDetailsURL: string }) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  return (
    <div className={`${styles.optionsContainer}`}>
      <Button
        type='button'
        className={`${styles.optionsButton}`}
        onClick={() => setShowOptions(!showOptions)}
      >
        <EllipsisVerticalIcon color='#545f7d' />
      </Button>

      <div
        className={`${styles.optionMenuContainer} ${
          showOptions && styles.active
        }`}
      >
        <Link
          href={userDetailsURL}
          className={`${styles.optionMenuButton} ${styles.optionMenuLink}`}
        >
          <EyeIcon size={20} />
          View Details
        </Link>
        <Button type='button' className={`${styles.optionMenuButton}`}>
          <UserRoundXIcon size={20} />
          Blacklist User
        </Button>
        <Button type='button' className={`${styles.optionMenuButton}`}>
          <UserRoundCheckIcon size={20} />
          Activate User
        </Button>
      </div>
    </div>
  );
}

export default OptionsButton;
